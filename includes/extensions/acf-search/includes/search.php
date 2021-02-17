<?php

  class AM_Search_ACF_Search {

    function __construct() {

      $this->getDatabaseClass();
      $this->loadSettings();
      $this->initActions();

    }

    private function getDatabaseClass() {

      global $wpdb;
      $this->wpdb = $wpdb;

    }

    private function loadSettings() {

      $this->fieldsTypes  = get_option('am_acf_search_fields_types',  ['text', 'textarea', 'wysiwyg']);
      $this->wholePhrases = get_option('am_acf_search_whole_phrases', false) ? true : false;
      $this->liteMode     = get_option('am_acf_search_lite_mode',     false) ? true : false;

    }

    /* ---
      Hooks
    --- */

      private function initActions() {

        add_filter('posts_search',  [$this, 'sqlWhere'],    10, 2); 
        add_filter('posts_join',    [$this, 'sqlJoin'],     10, 2);
        add_filter('posts_request', [$this, 'sqlDistinct'], 10, 2); 

      }

    /* ---
      Where clause
    --- */

      public function sqlWhere($where, $query) {

        if (!isset($query->query_vars['s']) || empty($query->query_vars['s']))
          return $where;

        $acfConditions       = $this->getACFConditions($query->query_vars['s']);
        $wordpressConditions = $this->getDefaultWordPressConditions($query->query_vars['s']);
        
        $where = 'AND (' . $acfConditions . ' OR ' . $wordpressConditions . ')';

        return $where;

      }

      private function getACFConditions($words) {

        if (!$this->fieldsTypes && !$this->liteMode)
          return '(1 = 2)';

        $words           = !$this->wholePhrases ? explode(' ', $words) : [$words];
        $wordsConditions = [];

        foreach ($words as $word) {

          $word              = addslashes($word);
          $wordsConditions[] = 'a.meta_value LIKE \'%' . $word . '%\'';

        }

        $wordsConditions = '(' . implode(') AND (', $wordsConditions) . ')';

        if (!$this->liteMode)
          $conditions = '(' . $wordsConditions . ' AND (b.meta_id = a.meta_id + 1) AND (c.post_name = b.meta_value))';
        else
          $conditions = '(' . $wordsConditions . ' AND (b.meta_id = a.meta_id + 1) AND (b.meta_value LIKE \'field_%\'))';

        return $conditions;

      }

      private function getDefaultWordPressConditions($words) {

        $words           = !$this->wholePhrases ? explode(' ', $words) : [$words];
        $wordsConditions = [];

        foreach ($words as $word) {

          $word = addslashes($word);

          $wordConditions   = [];
          $wordConditions[] = '(' . $this->wpdb->posts . '.post_title LIKE \'%' . $word . '%\')';
          $wordConditions[] = '(' . $this->wpdb->posts . '.post_content LIKE \'%' . $word . '%\')';
          $wordConditions[] = '(' . $this->wpdb->posts . '.post_excerpt LIKE \'%' . $word . '%\')';

          $wordsConditions[] = '(' . implode(' OR ', $wordConditions) . ')';

        }

        if (count($wordsConditions) > 1)
          $conditions = '(' . implode(' AND ', $wordsConditions) . ')';
        else
          $conditions = $wordsConditions[0];

        return $conditions;

      }

    /* ---
      Join clause
    --- */

      public function sqlJoin($join, $query) {

        if (empty($query->query_vars['s']) || (!$this->fieldsTypes && !$this->liteMode))
          return $join;

        $parts   = [];
        $parts[] = 'LEFT JOIN ' . $this->wpdb->postmeta . ' AS a ON (a.post_id = ' . $this->wpdb->posts . '.ID)';
        $parts[] = 'LEFT JOIN ' . $this->wpdb->postmeta . ' AS b ON (b.post_id = ' . $this->wpdb->posts . '.ID)';

        if (!$this->liteMode)
          $parts[] = 'LEFT JOIN ' . $this->wpdb->posts . ' AS c ON ' . $this->getFieldsTypesConditions();

        $join .= implode(' ', $parts);

        return $join;

      }

      private function getFieldsTypesConditions() {

        $typesConditions  = [];
        $conditions       = [];

        foreach ($this->fieldsTypes as $type)
          $typesConditions[] = '(c.post_content LIKE \'%:"' . $type. '"%\')';

        $conditions[] = '(c.post_type = \'acf-field\')';

        if (count($typesConditions) > 1)
          $conditions[] = '(' . implode(' OR ', $typesConditions) . ')';
        else
          $conditions[] = $typesConditions[0];
        
        $conditions = '(' . implode(' AND ', $conditions) . ')';

        return $conditions;

      }

    /* ---
      Filter SQL query
    --- */

      public function sqlDistinct($sql, $query) {

        if (empty($query->query_vars['s']))
          return $sql;

        $sql = str_replace('SELECT', 'SELECT DISTINCT', $sql);

        return $sql;

      }

  }