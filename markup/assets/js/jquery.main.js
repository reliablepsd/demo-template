var $ = jQuery.noConflict();
jQuery(document).ready(function () {
	headerScrollUp();
	headerFixTop();
	isElementExist(".nav-drop", initSmartMenu);
	isElementExist(".jarallax", parallaxInit);
	isElementExist(".jarallax-slow", parallaxSlowInit);
	isElementExist("#google-map-block", initMap);
	isElementExist(".filter-container", filterizrInit);
	isElementExist(".filter-list", filterActiv);
	isElementExist("img[usemap]", ImageMapFix);
	isElementExist(".popup-show", funcPopupMagnific);
	// off animate on tablet and mobile device
	if (document.documentElement.clientWidth > 1024) {
		viewportCheckerAnimate();
	}
});
// function on
jQuery(document).ready(function () {
	myScrollLink();
});
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch (e) {
			console.log(e);
		}
	}
}

// smart menu init
function initSmartMenu() {
	jQuery(".header-menu").smartmenus({
		collapsibleBehavior: "accordion",
		mainMenuSubOffsetY: 20,
	});

	// changed date attribute to a class (need to reverse last item menu)
	jQuery(".header-menu").children().last().addClass("nav-sm-reverse");

	jQuery("body").mobileNav({
		menuActiveClass: "nav-active",
		menuOpener: ".nav-opener",
		hideOnClickOutside: true,
		menuDrop: ".nav-drop",
	}),
		"ontouchstart" in document.documentElement ||
			jQuery(window).on("resize orientationchange", function () {
				jQuery("body").removeClass("nav-active"), $.SmartMenus.hideAll();
			});
}

// More option https://github.com/nk-o/jarallax
function parallaxInit() {
	jQuery(".jarallax").jarallax({
		speed: 0.2,
		disableParallax: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
		},
		disableVideo: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
		},
	});
}

function parallaxSlowInit() {
	jQuery(".jarallax-slow").jarallax({
		speed: 0.6,
		disableParallax: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
		},
		disableVideo: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
		},
	});
}
// function init
function viewportCheckerAnimate() {
	jQuery(".a-up, .a-up-parent > *").addClass("a-hidden").viewportChecker({
		classToAdd: "a-visible animated fadeInUp",
	});
	jQuery(".a-down, .a-down-parent > *").addClass("a-hidden").viewportChecker({
		classToAdd: "a-visible animated fadeInDown",
	});
	jQuery(".a-rigth, .a-rigth-parent > *").addClass("a-hidden").viewportChecker({
		classToAdd: "a-visible animated fadeInRigth",
	});
	jQuery(".a-left, .a-left-parent > *").addClass("a-hidden").viewportChecker({
		classToAdd: "a-visible animated fadeInLeft",
	});
}

function headerScrollUp() {
	jQuery("body").scroolly([
		{
			from: "doc-top + 500px",
			direction: 1,
			addClass: "sticky-header-hide",
		},
		{
			from: "doc-top + 200px",
			direction: -1,
			removeClass: "sticky-header-hide",
		},
	]);
}

function headerFixTop() {
	setTimeout(function () {
		var headerHeight = jQuery(".header").innerHeight() + 1 + "px";
		jQuery(".wrapper").css({ "padding-top": headerHeight });
	}, 50);
}

//initMap
function initMap() {
	var mapEl = document.getElementById("google-map-block");
	var latVar = +mapEl.getAttribute("data-lat");
	var lngVar = +mapEl.getAttribute("data-lng");
	var mapStyles = [
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{
					color: "#e9e9e9",
				},
				{
					lightness: 17,
				},
			],
		},
		{
			featureType: "landscape",
			elementType: "geometry",
			stylers: [
				{
					color: "#f5f5f5",
				},
				{
					lightness: 20,
				},
			],
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{
					color: "#ffffff",
				},
				{
					lightness: 17,
				},
			],
		},
		{
			featureType: "road.highway",
			elementType: "geometry.stroke",
			stylers: [
				{
					color: "#ffffff",
				},
				{
					lightness: 29,
				},
				{
					weight: 0.2,
				},
			],
		},
		{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [
				{
					color: "#ffffff",
				},
				{
					lightness: 18,
				},
			],
		},
		{
			featureType: "road.local",
			elementType: "geometry",
			stylers: [
				{
					color: "#ffffff",
				},
				{
					lightness: 16,
				},
			],
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [
				{
					color: "#f5f5f5",
				},
				{
					lightness: 21,
				},
			],
		},
		{
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [
				{
					color: "#dedede",
				},
				{
					lightness: 21,
				},
			],
		},
		{
			elementType: "labels.text.stroke",
			stylers: [
				{
					visibility: "on",
				},
				{
					color: "#ffffff",
				},
				{
					lightness: 16,
				},
			],
		},
		{
			elementType: "labels.text.fill",
			stylers: [
				{
					saturation: 36,
				},
				{
					color: "#333333",
				},
				{
					lightness: 40,
				},
			],
		},
		{
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			featureType: "transit",
			elementType: "geometry",
			stylers: [
				{
					color: "#f2f2f2",
				},
				{
					lightness: 19,
				},
			],
		},
		{
			featureType: "administrative",
			elementType: "geometry.fill",
			stylers: [
				{
					color: "#fefefe",
				},
				{
					lightness: 20,
				},
			],
		},
		{
			featureType: "administrative",
			elementType: "geometry.stroke",
			stylers: [
				{
					color: "#fefefe",
				},
				{
					lightness: 17,
				},
				{
					weight: 1.2,
				},
			],
		},
	];

	var map = new google.maps.Map(mapEl, {
		center: { lat: latVar, lng: lngVar },
		zoom: 15,
		streetViewControl: false,
		mapTypeControl: false,
		fullscreenControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: mapStyles,
	});

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latVar, lngVar),
		icon: "../wp-content/themes/icosavax/markup/assets/img/marker.png",
		map: map,
	});

	var contentString =
		'<div id="map-content"><h6>Icosavax, Inc.</h6><div class="map-link"><a href="https://www.google.com/maps/dir/?api=1&destination=1616%20Eastlake%20Ave%20E,%20Seattle,%20WA%2098102,%20USA" target="_blank">Directions</a></div></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	infowindow.open(map, marker);
	google.maps.event.addListener(marker, "click", function () {
		infowindow.open(map, marker);
	});
}
function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// https://yiotis.net/filterizr/#/documentation/jquery/options
function filterizrInit() {
	let hash = "all";
	let searchTerm= '';
	let filter_query = getParameterByName('filter');
	if(filter_query!= null && filter_query !==''){
		hash=filter_query;
	}
	let search_query = getParameterByName('search');
	var addClassVar = "js-filter-open";
	if(search_query!= null && search_query !=='' && search_query ==='search-open'){
		jQuery(".filter-btn-open").parent().addClass(addClassVar);
		jQuery(".filter-search-input").focus();
	}
	var filterSingle = new Filterizr(".filter-container", {
		layout: "sameWidth",
		gutterPixels: 0,
		filter: hash,
		// searchTerm: searchTerm,
	});

	var addClassVar = "js-filter-open";
	jQuery(".filter-btn-open").on("click", function () {
		jQuery(this).parent().addClass(addClassVar);
		jQuery('.filter-search-input').focus();
	});
	jQuery(".filter-btn-close").on("click", function () {
		jQuery('.filter-search-input').val('');
		filterSingle.search('');
		jQuery(this).parent().removeClass(addClassVar);
	});

}
// function change active state for filter-list
function filterActiv() {
	jQuery(".filter-list").on("click", "li", function () {
		jQuery(this).parent().find("._active").removeClass("_active");
		jQuery(this).addClass("_active");
	});
	let filter_query = getParameterByName('filter');
	jQuery(document).ready(function () {
		if (filter_query) {
			setTimeout(function () {
				window.scrollTo(0, 0);
			}, 1);
			jQuery(".filter-list")
				.find("a[data-filter=" + filter_query + "]")
				.parents(".filter-list")
				.find("._active")
				.removeClass("_active");
			jQuery(".filter-list")
				.find("a[data-filter=" + filter_query + "]")
				.parent()
				.addClass("_active");
		}
	});
}



function ImageMapFix() {
	ImageMap("img[usemap]", 500);
}

// function init
/* Popup
* Website: http://dimsemenov.com/plugins/magnific-popup/
==========================================================================
*/
function funcPopupMagnific() {
	$(".popup-show").magnificPopup({
		type: "inline",
		modal: true,
	});
	$(document).on("click", ".mfp-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

// library smartmenus
/*
 * Simple Mobile Navigation
 */
(function($) {
	function MobileNav(options) {
		this.options = $.extend(
			{
				container: null,
				hideOnClickOutside: false,
				menuActiveClass: "nav-active",
				menuOpener: ".nav-opener",
				menuDrop: ".nav-drop",
				toggleEvent: "click",
				outsideClickEvent: "click touchstart pointerdown MSPointerDown"
			},
			options
		);
		this.initStructure();
		this.attachEvents();
	}
	MobileNav.prototype = {
		initStructure: function() {
			this.page = $("html");
			this.container = $(this.options.container);
			this.opener = this.container.find(this.options.menuOpener);
			this.drop = this.container.find(this.options.menuDrop);
		},
		attachEvents: function() {
			var self = this;
			if (activateResizeHandler) {
				activateResizeHandler();
				activateResizeHandler = null;
			}
			this.outsideClickHandler = function(e) {
				if (self.isOpened()) {
					var target = $(e.target);
					if (
						!target.closest(self.opener).length &&
						!target.closest(self.drop).length
					) {
						self.hide();
					}
				}
			};
			this.openerClickHandler = function(e) {
				e.preventDefault();
				self.toggle();
			};
			this.opener.on(this.options.toggleEvent, this.openerClickHandler);
		},
		isOpened: function() {
			return this.container.hasClass(this.options.menuActiveClass);
		},
		show: function() {
			this.container.addClass(this.options.menuActiveClass);
			if (this.options.hideOnClickOutside) {
				this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
			}
		},
		hide: function() {
			this.container.removeClass(this.options.menuActiveClass);
			if (this.options.hideOnClickOutside) {
				this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
			}
		},
		toggle: function() {
			if (this.isOpened()) {
				this.hide();
			} else {
				this.show();
			}
		},
		destroy: function() {
			this.container.removeClass(this.options.menuActiveClass);
			this.opener.off(this.options.toggleEvent, this.clickHandler);
			this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
		}
	};
	var activateResizeHandler = function() {
		var win = $(window),
			doc = $("html"),
			resizeClass = "resize-active",
			flag,
			timer;
		var removeClassHandler = function() {
			flag = false;
			doc.removeClass(resizeClass);
		};
		var resizeHandler = function() {
			if (!flag) {
				flag = true;
				doc.addClass(resizeClass);
			}
			clearTimeout(timer);
			timer = setTimeout(removeClassHandler, 500);
		};
		win.on("resize orientationchange", resizeHandler);
	};
	$.fn.mobileNav = function(opt) {
		var args = Array.prototype.slice.call(arguments);
		var method = args[0];
		return this.each(function() {
			var $container = jQuery(this);
			var instance = $container.data("MobileNav");
			if (typeof opt === "object" || typeof opt === "undefined") {
				$container.data(
					"MobileNav",
					new MobileNav(
						$.extend(
							{
								container: this
							},
							opt
						)
					)
				);
			} else if (typeof method === "string" && instance) {
				if (typeof instance[method] === "function") {
					args.shift();
					instance[method].apply(instance, args);
				}
			}
		});
	};
})(jQuery);
/*
 * SmartMenus jQuery v1.1.0+
 * http://www.smartmenus.org/
 *
 * Copyright Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com/
 *
 * Released under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof module === "object" && typeof module.exports === "object") {
		// CommonJS
		module.exports = factory(require("jquery"));
	} else {
		// Global jQuery
		factory(jQuery);
	}
})(function($) {
	var menuTrees = [],
		mouse = false, // optimize for touch by default - we will detect for mouse input
		touchEvents = "ontouchstart" in window, // we use this just to choose between toucn and pointer events, not for touch screen detection
		mouseDetectionEnabled = false,
		requestAnimationFrame =
			window.requestAnimationFrame ||
			function(callback) {
				return setTimeout(callback, 1000 / 60);
			},
		cancelAnimationFrame =
			window.cancelAnimationFrame ||
			function(id) {
				clearTimeout(id);
			},
		canAnimate = !!$.fn.animate;
	// Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)
	function initMouseDetection(disable) {
		var eNS = ".smartmenus_mouse";
		if (!mouseDetectionEnabled && !disable) {
			// if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present
			// in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)
			var firstTime = true,
				lastMove = null,
				events = {
					mousemove: function(e) {
						var thisMove = {
							x: e.pageX,
							y: e.pageY,
							timeStamp: new Date().getTime()
						};
						if (lastMove) {
							var deltaX = Math.abs(lastMove.x - thisMove.x),
								deltaY = Math.abs(lastMove.y - thisMove.y);
							if (
								(deltaX > 0 || deltaY > 0) &&
								deltaX <= 2 &&
								deltaY <= 2 &&
								thisMove.timeStamp - lastMove.timeStamp <= 300
							) {
								mouse = true;
								// if this is the first check after page load, check if we are not over some item by chance and call the mouseenter handler if yes
								if (firstTime) {
									var $a = $(e.target).closest("a");
									if ($a.is("a")) {
										$.each(menuTrees, function() {
											if ($.contains(this.$root[0], $a[0])) {
												this.itemEnter({ currentTarget: $a[0] });
												return false;
											}
										});
									}
									firstTime = false;
								}
							}
						}
						lastMove = thisMove;
					}
				};
			events[
				touchEvents
					? "touchstart"
					: "pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"
			] = function(e) {
				if (isTouchEvent(e.originalEvent)) {
					mouse = false;
				}
			};
			$(document).on(getEventsNS(events, eNS));
			mouseDetectionEnabled = true;
		} else if (mouseDetectionEnabled && disable) {
			$(document).off(eNS);
			mouseDetectionEnabled = false;
		}
	}

	function isTouchEvent(e) {
		return !/^(4|mouse)$/.test(e.pointerType);
	}
	// returns a jQuery on() ready object
	function getEventsNS(events, eNS) {
		if (!eNS) {
			eNS = "";
		}
		var eventsNS = {};
		for (var i in events) {
			eventsNS[i.split(" ").join(eNS + " ") + eNS] = events[i];
		}
		return eventsNS;
	}
	$.SmartMenus = function(elm, options) {
		this.$root = $(elm);
		this.opts = options;
		this.rootId = ""; // internal
		this.accessIdPrefix = "";
		this.$subArrow = null;
		this.activatedItems = []; // stores last activated A's for each level
		this.visibleSubMenus = []; // stores visible sub menus UL's (might be in no particular order)
		this.showTimeout = 0;
		this.hideTimeout = 0;
		this.scrollTimeout = 0;
		this.clickActivated = false;
		this.focusActivated = false;
		this.zIndexInc = 0;
		this.idInc = 0;
		this.$firstLink = null; // we'll use these for some tests
		this.$firstSub = null; // at runtime so we'll cache them
		this.disabled = false;
		this.$disableOverlay = null;
		this.$touchScrollingSub = null;
		this.cssTransforms3d =
			"perspective" in elm.style || "webkitPerspective" in elm.style;
		this.wasCollapsible = false;
		this.init();
	};
	$.extend($.SmartMenus, {
		hideAll: function() {
			$.each(menuTrees, function() {
				this.menuHideAll();
			});
		},
		destroy: function() {
			while (menuTrees.length) {
				menuTrees[0].destroy();
			}
			initMouseDetection(true);
		},
		prototype: {
			init: function(refresh) {
				var self = this;
				if (!refresh) {
					menuTrees.push(this);
					this.rootId = (new Date().getTime() + Math.random() + "").replace(
						/\D/g,
						""
					);
					this.accessIdPrefix = "sm-" + this.rootId + "-";
					if (this.$root.hasClass("sm-rtl")) {
						this.opts.rightToLeftSubMenus = true;
					}
					// init root (main menu)
					var eNS = ".smartmenus";
					this.$root
						.data("smartmenus", this)
						.attr("data-smartmenus-id", this.rootId)
						.dataSM("level", 1)
						.on(
							getEventsNS(
								{
									"mouseover focusin": $.proxy(this.rootOver, this),
									"mouseout focusout": $.proxy(this.rootOut, this),
									keydown: $.proxy(this.rootKeyDown, this)
								},
								eNS
							)
						)
						.on(
							getEventsNS(
								{
									mouseenter: $.proxy(this.itemEnter, this),
									mouseleave: $.proxy(this.itemLeave, this),
									mousedown: $.proxy(this.itemDown, this),
									focus: $.proxy(this.itemFocus, this),
									blur: $.proxy(this.itemBlur, this),
									click: $.proxy(this.itemClick, this)
								},
								eNS
							),
							"a"
						);
					// hide menus on tap or click outside the root UL
					eNS += this.rootId;
					if (this.opts.hideOnClick) {
						$(document).on(
							getEventsNS(
								{
									touchstart: $.proxy(this.docTouchStart, this),
									touchmove: $.proxy(this.docTouchMove, this),
									touchend: $.proxy(this.docTouchEnd, this),
									// for Opera Mobile < 11.5, webOS browser, etc. we'll check click too
									click: $.proxy(this.docClick, this)
								},
								eNS
							)
						);
					}
					// hide sub menus on resize
					$(window).on(
						getEventsNS(
							{ "resize orientationchange": $.proxy(this.winResize, this) },
							eNS
						)
					);
					if (this.opts.subIndicators) {
						this.$subArrow = $("<span/>").addClass("sub-arrow");
						if (this.opts.subIndicatorsText) {
							this.$subArrow.html(this.opts.subIndicatorsText);
						}
					}
					// make sure mouse detection is enabled
					initMouseDetection();
				}
				// init sub menus
				this.$firstSub = this.$root
					.find("ul")
					.each(function() {
						self.menuInit($(this));
					})
					.eq(0);
				this.$firstLink = this.$root.find("a").eq(0);
				// find current item
				if (this.opts.markCurrentItem) {
					var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
						reHash = /#.*/,
						locHref = window.location.href.replace(reDefaultDoc, ""),
						locHrefNoHash = locHref.replace(reHash, "");
					this.$root.find("a:not(.mega-menu a)").each(function() {
						var href = this.href.replace(reDefaultDoc, ""),
							$this = $(this);
						if (href == locHref || href == locHrefNoHash) {
							$this.addClass("current");
							if (self.opts.markCurrentTree) {
								$this
									.parentsUntil("[data-smartmenus-id]", "ul")
									.each(function() {
										$(this)
											.dataSM("parent-a")
											.addClass("current");
									});
							}
						}
					});
				}
				// save initial state
				this.wasCollapsible = this.isCollapsible();
			},
			destroy: function(refresh) {
				if (!refresh) {
					var eNS = ".smartmenus";
					this.$root
						.removeData("smartmenus")
						.removeAttr("data-smartmenus-id")
						.removeDataSM("level")
						.off(eNS);
					eNS += this.rootId;
					$(document).off(eNS);
					$(window).off(eNS);
					if (this.opts.subIndicators) {
						this.$subArrow = null;
					}
				}
				this.menuHideAll();
				var self = this;
				this.$root
					.find("ul")
					.each(function() {
						var $this = $(this);
						if ($this.dataSM("scroll-arrows")) {
							$this.dataSM("scroll-arrows").remove();
						}
						if ($this.dataSM("shown-before")) {
							if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
								$this
									.css({ width: "", minWidth: "", maxWidth: "" })
									.removeClass("sm-nowrap");
							}
							if ($this.dataSM("scroll-arrows")) {
								$this.dataSM("scroll-arrows").remove();
							}
							$this.css({
								zIndex: "",
								top: "",
								left: "",
								marginLeft: "",
								marginTop: "",
								display: ""
							});
						}
						if (($this.attr("id") || "").indexOf(self.accessIdPrefix) == 0) {
							$this.removeAttr("id");
						}
					})
					.removeDataSM("in-mega")
					.removeDataSM("shown-before")
					.removeDataSM("scroll-arrows")
					.removeDataSM("parent-a")
					.removeDataSM("level")
					.removeDataSM("beforefirstshowfired")
					.removeAttr("role")
					.removeAttr("aria-hidden")
					.removeAttr("aria-labelledby")
					.removeAttr("aria-expanded");
				this.$root
					.find("a.has-submenu")
					.each(function() {
						var $this = $(this);
						if ($this.attr("id").indexOf(self.accessIdPrefix) == 0) {
							$this.removeAttr("id");
						}
					})
					.removeClass("has-submenu")
					.removeDataSM("sub")
					.removeAttr("aria-haspopup")
					.removeAttr("aria-controls")
					.removeAttr("aria-expanded")
					.closest("li")
					.removeDataSM("sub");
				if (this.opts.subIndicators) {
					this.$root.find("span.sub-arrow").remove();
				}
				if (this.opts.markCurrentItem) {
					this.$root.find("a.current").removeClass("current");
				}
				if (!refresh) {
					this.$root = null;
					this.$firstLink = null;
					this.$firstSub = null;
					if (this.$disableOverlay) {
						this.$disableOverlay.remove();
						this.$disableOverlay = null;
					}
					menuTrees.splice($.inArray(this, menuTrees), 1);
				}
			},
			disable: function(noOverlay) {
				if (!this.disabled) {
					this.menuHideAll();
					// display overlay over the menu to prevent interaction
					if (!noOverlay && !this.opts.isPopup && this.$root.is(":visible")) {
						var pos = this.$root.offset();
						this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>')
							.css({
								position: "absolute",
								top: pos.top,
								left: pos.left,
								width: this.$root.outerWidth(),
								height: this.$root.outerHeight(),
								zIndex: this.getStartZIndex(true),
								opacity: 0
							})
							.appendTo(document.body);
					}
					this.disabled = true;
				}
			},
			docClick: function(e) {
				if (this.$touchScrollingSub) {
					this.$touchScrollingSub = null;
					return;
				}
				// hide on any click outside the menu or on a menu link
				if (
					(this.visibleSubMenus.length &&
						!$.contains(this.$root[0], e.target)) ||
					$(e.target).closest("a").length
				) {
					this.menuHideAll();
				}
			},
			docTouchEnd: function(e) {
				if (!this.lastTouch) {
					return;
				}
				if (
					this.visibleSubMenus.length &&
					(this.lastTouch.x2 === undefined ||
						this.lastTouch.x1 == this.lastTouch.x2) &&
					(this.lastTouch.y2 === undefined ||
						this.lastTouch.y1 == this.lastTouch.y2) &&
					(!this.lastTouch.target ||
						!$.contains(this.$root[0], this.lastTouch.target))
				) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					// hide with a delay to prevent triggering accidental unwanted click on some page element
					var self = this;
					this.hideTimeout = setTimeout(function() {
						self.menuHideAll();
					}, 350);
				}
				this.lastTouch = null;
			},
			docTouchMove: function(e) {
				if (!this.lastTouch) {
					return;
				}
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch.x2 = touchPoint.pageX;
				this.lastTouch.y2 = touchPoint.pageY;
			},
			docTouchStart: function(e) {
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch = {
					x1: touchPoint.pageX,
					y1: touchPoint.pageY,
					target: touchPoint.target
				};
			},
			enable: function() {
				if (this.disabled) {
					if (this.$disableOverlay) {
						this.$disableOverlay.remove();
						this.$disableOverlay = null;
					}
					this.disabled = false;
				}
			},
			getClosestMenu: function(elm) {
				var $closestMenu = $(elm).closest("ul");
				while ($closestMenu.dataSM("in-mega")) {
					$closestMenu = $closestMenu.parent().closest("ul");
				}
				return $closestMenu[0] || null;
			},
			getHeight: function($elm) {
				return this.getOffset($elm, true);
			},
			// returns precise width/height float values
			getOffset: function($elm, height) {
				var old;
				if ($elm.css("display") == "none") {
					old = {
						position: $elm[0].style.position,
						visibility: $elm[0].style.visibility
					};
					$elm.css({ position: "absolute", visibility: "hidden" }).show();
				}
				var box =
						$elm[0].getBoundingClientRect && $elm[0].getBoundingClientRect(),
					val =
						box &&
						(height
							? box.height || box.bottom - box.top
							: box.width || box.right - box.left);
				if (!val && val !== 0) {
					val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
				}
				if (old) {
					$elm.hide().css(old);
				}
				return val;
			},
			getStartZIndex: function(root) {
				var zIndex = parseInt(
					this[root ? "$root" : "$firstSub"].css("z-index")
				);
				if (!root && isNaN(zIndex)) {
					zIndex = parseInt(this.$root.css("z-index"));
				}
				return !isNaN(zIndex) ? zIndex : 1;
			},
			getTouchPoint: function(e) {
				return (
					(e.touches && e.touches[0]) ||
					(e.changedTouches && e.changedTouches[0]) ||
					e
				);
			},
			getViewport: function(height) {
				var name = height ? "Height" : "Width",
					val = document.documentElement["client" + name],
					val2 = window["inner" + name];
				if (val2) {
					val = Math.min(val, val2);
				}
				return val;
			},
			getViewportHeight: function() {
				return this.getViewport(true);
			},
			getViewportWidth: function() {
				return this.getViewport();
			},
			getWidth: function($elm) {
				return this.getOffset($elm);
			},
			handleEvents: function() {
				return !this.disabled && this.isCSSOn();
			},
			handleItemEvents: function($a) {
				return this.handleEvents() && !this.isLinkInMegaMenu($a);
			},
			isCollapsible: function() {
				return this.$firstSub.css("position") == "static";
			},
			isCSSOn: function() {
				return this.$firstLink.css("display") != "inline";
			},
			isFixed: function() {
				var isFixed = this.$root.css("position") == "fixed";
				if (!isFixed) {
					this.$root.parentsUntil("body").each(function() {
						if ($(this).css("position") == "fixed") {
							isFixed = true;
							return false;
						}
					});
				}
				return isFixed;
			},
			isLinkInMegaMenu: function($a) {
				return $(this.getClosestMenu($a[0])).hasClass("mega-menu");
			},
			isTouchMode: function() {
				return !mouse || this.opts.noMouseOver || this.isCollapsible();
			},
			itemActivate: function($a, hideDeeperSubs) {
				var $ul = $a.closest("ul"),
					level = $ul.dataSM("level");
				// if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first
				if (
					level > 1 &&
					(!this.activatedItems[level - 2] ||
						this.activatedItems[level - 2][0] != $ul.dataSM("parent-a")[0])
				) {
					var self = this;
					$(
						$ul
							.parentsUntil("[data-smartmenus-id]", "ul")
							.get()
							.reverse()
					)
						.add($ul)
						.each(function() {
							self.itemActivate($(this).dataSM("parent-a"));
						});
				}
				// hide any visible deeper level sub menus
				if (!this.isCollapsible() || hideDeeperSubs) {
					this.menuHideSubMenus(
						!this.activatedItems[level - 1] ||
							this.activatedItems[level - 1][0] != $a[0]
							? level - 1
							: level
					);
				}
				// save new active item for this level
				this.activatedItems[level - 1] = $a;
				if (this.$root.triggerHandler("activate.smapi", $a[0]) === false) {
					return;
				}
				// show the sub menu if this item has one
				var $sub = $a.dataSM("sub");
				if (
					$sub &&
					(this.isTouchMode() || !this.opts.showOnClick || this.clickActivated)
				) {
					this.menuShow($sub);
				}
			},
			itemBlur: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				this.$root.triggerHandler("blur.smapi", $a[0]);
			},
			itemClick: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (
					this.$touchScrollingSub &&
					this.$touchScrollingSub[0] == $a.closest("ul")[0]
				) {
					this.$touchScrollingSub = null;
					e.stopPropagation();
					return false;
				}
				if (this.$root.triggerHandler("click.smapi", $a[0]) === false) {
					return false;
				}
				var $sub = $a.dataSM("sub"),
					firstLevelSub = $sub ? $sub.dataSM("level") == 2 : false;
				if ($sub) {
					var subArrowClicked = $(e.target).is(".sub-arrow"),
						collapsible = this.isCollapsible(),
						behaviorToggle = /toggle$/.test(this.opts.collapsibleBehavior),
						behaviorLink = /link$/.test(this.opts.collapsibleBehavior),
						behaviorAccordion = /^accordion/.test(
							this.opts.collapsibleBehavior
						);
					// if the sub is hidden, try to show it
					if (!$sub.is(":visible")) {
						if (!behaviorLink || !collapsible || subArrowClicked) {
							if (this.opts.showOnClick && firstLevelSub) {
								this.clickActivated = true;
							}
							// try to activate the item and show the sub
							this.itemActivate($a, behaviorAccordion);
							// if "itemActivate" showed the sub, prevent the click so that the link is not loaded
							// if it couldn't show it, then the sub menus are disabled with an !important declaration (e.g. via mobile styles) so let the link get loaded
							if ($sub.is(":visible")) {
								this.focusActivated = true;
								return false;
							}
						}
						// if the sub is visible and we are in collapsible mode
					} else if (collapsible && (behaviorToggle || subArrowClicked)) {
						this.itemActivate($a, behaviorAccordion);
						this.menuHide($sub);
						if (behaviorToggle) {
							this.focusActivated = false;
						}
						return false;
					}
				}
				if (
					(this.opts.showOnClick && firstLevelSub) ||
					$a.hasClass("disabled") ||
					this.$root.triggerHandler("select.smapi", $a[0]) === false
				) {
					return false;
				}
			},
			itemDown: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.dataSM("mousedown", true);
			},
			itemEnter: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
					var self = this;
					this.showTimeout = setTimeout(
						function() {
							self.itemActivate($a);
						},
						this.opts.showOnClick && $a.closest("ul").dataSM("level") == 1
							? 1
							: this.opts.showTimeout
					);
				}
				this.$root.triggerHandler("mouseenter.smapi", $a[0]);
			},
			itemFocus: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				// fix (the mousedown check): in some browsers a tap/click produces consecutive focus + click events so we don't need to activate the item on focus
				if (
					this.focusActivated &&
					(!this.isTouchMode() || !$a.dataSM("mousedown")) &&
					(!this.activatedItems.length ||
						this.activatedItems[this.activatedItems.length - 1][0] != $a[0])
				) {
					this.itemActivate($a, true);
				}
				this.$root.triggerHandler("focus.smapi", $a[0]);
			},
			itemLeave: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					$a[0].blur();
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
				}
				$a.removeDataSM("mousedown");
				this.$root.triggerHandler("mouseleave.smapi", $a[0]);
			},
			menuHide: function($sub) {
				if (this.$root.triggerHandler("beforehide.smapi", $sub[0]) === false) {
					return;
				}
				if (canAnimate) {
					$sub.stop(true, true);
				}
				if ($sub.css("display") != "none") {
					var complete = function() {
						// unset z-index
						$sub.css("z-index", "");
					};
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (canAnimate && this.opts.collapsibleHideFunction) {
							this.opts.collapsibleHideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.collapsibleHideDuration, complete);
						}
					} else {
						if (canAnimate && this.opts.hideFunction) {
							this.opts.hideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.hideDuration, complete);
						}
					}
					// deactivate scrolling if it is activated for this sub
					if ($sub.dataSM("scroll")) {
						this.menuScrollStop($sub);
						$sub
							.css({
								"touch-action": "",
								"-ms-touch-action": "",
								"-webkit-transform": "",
								transform: ""
							})
							.off(".smartmenus_scroll")
							.removeDataSM("scroll")
							.dataSM("scroll-arrows")
							.hide();
					}
					// unhighlight parent item + accessibility
					$sub
						.dataSM("parent-a")
						.removeClass("highlighted")
						.attr("aria-expanded", "false");
					$sub.attr({
						"aria-expanded": "false",
						"aria-hidden": "true"
					});
					var level = $sub.dataSM("level");
					this.activatedItems.splice(level - 1, 1);
					this.visibleSubMenus.splice($.inArray($sub, this.visibleSubMenus), 1);
					this.$root.triggerHandler("hide.smapi", $sub[0]);
				}
			},
			menuHideAll: function() {
				if (this.showTimeout) {
					clearTimeout(this.showTimeout);
					this.showTimeout = 0;
				}
				// hide all subs
				// if it's a popup, this.visibleSubMenus[0] is the root UL
				var level = this.opts.isPopup ? 1 : 0;
				for (var i = this.visibleSubMenus.length - 1; i >= level; i--) {
					this.menuHide(this.visibleSubMenus[i]);
				}
				// hide root if it's popup
				if (this.opts.isPopup) {
					if (canAnimate) {
						this.$root.stop(true, true);
					}
					if (this.$root.is(":visible")) {
						if (canAnimate && this.opts.hideFunction) {
							this.opts.hideFunction.call(this, this.$root);
						} else {
							this.$root.hide(this.opts.hideDuration);
						}
					}
				}
				this.activatedItems = [];
				this.visibleSubMenus = [];
				this.clickActivated = false;
				this.focusActivated = false;
				// reset z-index increment
				this.zIndexInc = 0;
				this.$root.triggerHandler("hideAll.smapi");
			},
			menuHideSubMenus: function(level) {
				for (var i = this.activatedItems.length - 1; i >= level; i--) {
					var $sub = this.activatedItems[i].dataSM("sub");
					if ($sub) {
						this.menuHide($sub);
					}
				}
			},
			menuInit: function($ul) {
				if (!$ul.dataSM("in-mega")) {
					// mark UL's in mega drop downs (if any) so we can neglect them
					if ($ul.hasClass("mega-menu")) {
						$ul.find("ul").dataSM("in-mega", true);
					}
					// get level (much faster than, for example, using parentsUntil)
					var level = 2,
						par = $ul[0];
					while ((par = par.parentNode.parentNode) != this.$root[0]) {
						level++;
					}
					// cache stuff for quick access
					var $a = $ul.prevAll("a").eq(-1);
					// if the link is nested (e.g. in a heading)
					if (!$a.length) {
						$a = $ul
							.prevAll()
							.find("a")
							.eq(-1);
					}
					$a.addClass("has-submenu").dataSM("sub", $ul);
					$ul
						.dataSM("parent-a", $a)
						.dataSM("level", level)
						.parent()
						.dataSM("sub", $ul);
					// accessibility
					var aId = $a.attr("id") || this.accessIdPrefix + ++this.idInc,
						ulId = $ul.attr("id") || this.accessIdPrefix + ++this.idInc;
					$a.attr({
						id: aId,
						"aria-haspopup": "true",
						"aria-controls": ulId,
						"aria-expanded": "false"
					});
					$ul.attr({
						id: ulId,
						role: "group",
						"aria-hidden": "true",
						"aria-labelledby": aId,
						"aria-expanded": "false"
					});
					// add sub indicator to parent item
					if (this.opts.subIndicators) {
						$a[this.opts.subIndicatorsPos](this.$subArrow.clone());
					}
				}
			},
			menuPosition: function($sub) {
				var $a = $sub.dataSM("parent-a"),
					$li = $a.closest("li"),
					$ul = $li.parent(),
					level = $sub.dataSM("level"),
					subW = this.getWidth($sub),
					subH = this.getHeight($sub),
					itemOffset = $a.offset(),
					itemX = itemOffset.left,
					itemY = itemOffset.top,
					itemW = this.getWidth($a),
					itemH = this.getHeight($a),
					$win = $(window),
					winX = $win.scrollLeft(),
					winY = $win.scrollTop(),
					winW = this.getViewportWidth(),
					winH = this.getViewportHeight(),
					horizontalParent =
						$ul.parent().is("[data-sm-horizontal-sub]") ||
						(level == 2 && !$ul.hasClass("sm-vertical")),
					rightToLeft =
						(this.opts.rightToLeftSubMenus && !$li.is(".nav-sm-reverse")) ||
						(!this.opts.rightToLeftSubMenus && $li.is(".nav-sm-reverse")),
					subOffsetX =
						level == 2
							? this.opts.mainMenuSubOffsetX
							: this.opts.subMenusSubOffsetX,
					subOffsetY =
						level == 2
							? this.opts.mainMenuSubOffsetY
							: this.opts.subMenusSubOffsetY,
					x,
					y;
				if (horizontalParent) {
					x = rightToLeft ? itemW - subW - subOffsetX : subOffsetX;
					y = this.opts.bottomToTopSubMenus
						? -subH - subOffsetY
						: itemH + subOffsetY;
				} else {
					x = rightToLeft ? subOffsetX - subW : itemW - subOffsetX;
					y = this.opts.bottomToTopSubMenus
						? itemH - subOffsetY - subH
						: subOffsetY;
				}
				if (this.opts.keepInViewport) {
					var absX = itemX + x,
						absY = itemY + y;
					if (rightToLeft && absX < winX) {
						x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
					} else if (!rightToLeft && absX + subW > winX + winW) {
						x = horizontalParent
							? winX + winW - subW - absX + x
							: subOffsetX - subW;
					}
					if (!horizontalParent) {
						if (subH < winH && absY + subH > winY + winH) {
							y += winY + winH - subH - absY;
						} else if (subH >= winH || absY < winY) {
							y += winY - absY;
						}
					}
					// do we need scrolling?
					// 0.49 used for better precision when dealing with float values
					if (
						(horizontalParent &&
							(absY + subH > winY + winH + 0.49 || absY < winY)) ||
						(!horizontalParent && subH > winH + 0.49)
					) {
						var self = this;
						if (!$sub.dataSM("scroll-arrows")) {
							$sub.dataSM(
								"scroll-arrows",
								$([
									$(
										'<span class="scroll-up"><span class="scroll-up-arrow"></span></span>'
									)[0],
									$(
										'<span class="scroll-down"><span class="scroll-down-arrow"></span></span>'
									)[0]
								])
									.on({
										mouseenter: function() {
											$sub.dataSM("scroll").up = $(this).hasClass("scroll-up");
											self.menuScroll($sub);
										},
										mouseleave: function(e) {
											self.menuScrollStop($sub);
											self.menuScrollOut($sub, e);
										},
										"mousewheel DOMMouseScroll": function(e) {
											e.preventDefault();
										}
									})
									.insertAfter($sub)
							);
						}
						// bind scroll events and save scroll data for this sub
						var eNS = ".smartmenus_scroll";
						$sub
							.dataSM("scroll", {
								y: this.cssTransforms3d ? 0 : y - itemH,
								step: 1,
								// cache stuff for faster recalcs later
								itemH: itemH,
								subH: subH,
								arrowDownH: this.getHeight($sub.dataSM("scroll-arrows").eq(1))
							})
							.on(
								getEventsNS(
									{
										mouseover: function(e) {
											self.menuScrollOver($sub, e);
										},
										mouseout: function(e) {
											self.menuScrollOut($sub, e);
										},
										"mousewheel DOMMouseScroll": function(e) {
											self.menuScrollMousewheel($sub, e);
										}
									},
									eNS
								)
							)
							.dataSM("scroll-arrows")
							.css({
								top: "auto",
								left: "0",
								marginLeft: x + (parseInt($sub.css("border-left-width")) || 0),
								width:
									subW -
									(parseInt($sub.css("border-left-width")) || 0) -
									(parseInt($sub.css("border-right-width")) || 0),
								zIndex: $sub.css("z-index")
							})
							.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1)
							.show();
						// when a menu tree is fixed positioned we allow scrolling via touch too
						// since there is no other way to access such long sub menus if no mouse is present
						if (this.isFixed()) {
							var events = {};
							events[
								touchEvents
									? "touchstart touchmove touchend"
									: "pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"
							] = function(e) {
								self.menuScrollTouch($sub, e);
							};
							$sub
								.css({ "touch-action": "none", "-ms-touch-action": "none" })
								.on(getEventsNS(events, eNS));
						}
					}
				}
				$sub.css({
					top: "auto",
					left: "0",
					marginLeft: x,
					marginTop: y - itemH
				});
			},
			menuScroll: function($sub, once, step) {
				var data = $sub.dataSM("scroll"),
					$arrows = $sub.dataSM("scroll-arrows"),
					end = data.up ? data.upEnd : data.downEnd,
					diff;
				if (!once && data.momentum) {
					data.momentum *= 0.92;
					diff = data.momentum;
					if (diff < 0.5) {
						this.menuScrollStop($sub);
						return;
					}
				} else {
					diff =
						step ||
						(once || !this.opts.scrollAccelerate
							? this.opts.scrollStep
							: Math.floor(data.step));
				}
				// hide any visible deeper level sub menus
				var level = $sub.dataSM("level");
				if (
					this.activatedItems[level - 1] &&
					this.activatedItems[level - 1].dataSM("sub") &&
					this.activatedItems[level - 1].dataSM("sub").is(":visible")
				) {
					this.menuHideSubMenus(level - 1);
				}
				data.y =
					(data.up && end <= data.y) || (!data.up && end >= data.y)
						? data.y
						: Math.abs(end - data.y) > diff
						? data.y + (data.up ? diff : -diff)
						: end;
				$sub.css(
					this.cssTransforms3d
						? {
								"-webkit-transform": "translate3d(0, " + data.y + "px, 0)",
								transform: "translate3d(0, " + data.y + "px, 0)"
						  }
						: { marginTop: data.y }
				);
				// show opposite arrow if appropriate
				if (
					mouse &&
					((data.up && data.y > data.downEnd) ||
						(!data.up && data.y < data.upEnd))
				) {
					$arrows.eq(data.up ? 1 : 0).show();
				}
				// if we've reached the end
				if (data.y == end) {
					if (mouse) {
						$arrows.eq(data.up ? 0 : 1).hide();
					}
					this.menuScrollStop($sub);
				} else if (!once) {
					if (this.opts.scrollAccelerate && data.step < this.opts.scrollStep) {
						data.step += 0.2;
					}
					var self = this;
					this.scrollTimeout = requestAnimationFrame(function() {
						self.menuScroll($sub);
					});
				}
			},
			menuScrollMousewheel: function($sub, e) {
				if (this.getClosestMenu(e.target) == $sub[0]) {
					e = e.originalEvent;
					var up = (e.wheelDelta || -e.detail) > 0;
					if (
						$sub
							.dataSM("scroll-arrows")
							.eq(up ? 0 : 1)
							.is(":visible")
					) {
						$sub.dataSM("scroll").up = up;
						this.menuScroll($sub, true);
					}
				}
				e.preventDefault();
			},
			menuScrollOut: function($sub, e) {
				if (mouse) {
					if (
						!/^scroll-(up|down)/.test((e.relatedTarget || "").className) &&
						(($sub[0] != e.relatedTarget &&
							!$.contains($sub[0], e.relatedTarget)) ||
							this.getClosestMenu(e.relatedTarget) != $sub[0])
					) {
						$sub.dataSM("scroll-arrows").css("visibility", "hidden");
					}
				}
			},
			menuScrollOver: function($sub, e) {
				if (mouse) {
					if (
						!/^scroll-(up|down)/.test(e.target.className) &&
						this.getClosestMenu(e.target) == $sub[0]
					) {
						this.menuScrollRefreshData($sub);
						var data = $sub.dataSM("scroll"),
							upEnd =
								$(window).scrollTop() -
								$sub.dataSM("parent-a").offset().top -
								data.itemH;
						$sub
							.dataSM("scroll-arrows")
							.eq(0)
							.css("margin-top", upEnd)
							.end()
							.eq(1)
							.css(
								"margin-top",
								upEnd + this.getViewportHeight() - data.arrowDownH
							)
							.end()
							.css("visibility", "visible");
					}
				}
			},
			menuScrollRefreshData: function($sub) {
				var data = $sub.dataSM("scroll"),
					upEnd =
						$(window).scrollTop() -
						$sub.dataSM("parent-a").offset().top -
						data.itemH;
				if (this.cssTransforms3d) {
					upEnd = -(parseFloat($sub.css("margin-top")) - upEnd);
				}
				$.extend(data, {
					upEnd: upEnd,
					downEnd: upEnd + this.getViewportHeight() - data.subH
				});
			},
			menuScrollStop: function($sub) {
				if (this.scrollTimeout) {
					cancelAnimationFrame(this.scrollTimeout);
					this.scrollTimeout = 0;
					$sub.dataSM("scroll").step = 1;
					return true;
				}
			},
			menuScrollTouch: function($sub, e) {
				e = e.originalEvent;
				if (isTouchEvent(e)) {
					var touchPoint = this.getTouchPoint(e);
					// neglect event if we touched a visible deeper level sub menu
					if (this.getClosestMenu(touchPoint.target) == $sub[0]) {
						var data = $sub.dataSM("scroll");
						if (/(start|down)$/i.test(e.type)) {
							if (this.menuScrollStop($sub)) {
								// if we were scrolling, just stop and don't activate any link on the first touch
								e.preventDefault();
								this.$touchScrollingSub = $sub;
							} else {
								this.$touchScrollingSub = null;
							}
							// update scroll data since the user might have zoomed, etc.
							this.menuScrollRefreshData($sub);
							// extend it with the touch properties
							$.extend(data, {
								touchStartY: touchPoint.pageY,
								touchStartTime: e.timeStamp
							});
						} else if (/move$/i.test(e.type)) {
							var prevY =
								data.touchY !== undefined ? data.touchY : data.touchStartY;
							if (prevY !== undefined && prevY != touchPoint.pageY) {
								this.$touchScrollingSub = $sub;
								var up = prevY < touchPoint.pageY;
								// changed direction? reset...
								if (data.up !== undefined && data.up != up) {
									$.extend(data, {
										touchStartY: touchPoint.pageY,
										touchStartTime: e.timeStamp
									});
								}
								$.extend(data, {
									up: up,
									touchY: touchPoint.pageY
								});
								this.menuScroll($sub, true, Math.abs(touchPoint.pageY - prevY));
							}
							e.preventDefault();
						} else {
							// touchend/pointerup
							if (data.touchY !== undefined) {
								if (
									(data.momentum =
										Math.pow(
											Math.abs(touchPoint.pageY - data.touchStartY) /
												(e.timeStamp - data.touchStartTime),
											2
										) * 15)
								) {
									this.menuScrollStop($sub);
									this.menuScroll($sub);
									e.preventDefault();
								}
								delete data.touchY;
							}
						}
					}
				}
			},
			menuShow: function($sub) {
				if (!$sub.dataSM("beforefirstshowfired")) {
					$sub.dataSM("beforefirstshowfired", true);
					if (
						this.$root.triggerHandler("beforefirstshow.smapi", $sub[0]) ===
						false
					) {
						return;
					}
				}
				if (this.$root.triggerHandler("beforeshow.smapi", $sub[0]) === false) {
					return;
				}
				$sub.dataSM("shown-before", true);
				if (canAnimate) {
					$sub.stop(true, true);
				}
				if (!$sub.is(":visible")) {
					// highlight parent item
					var $a = $sub.dataSM("parent-a"),
						collapsible = this.isCollapsible();
					if (this.opts.keepHighlighted || collapsible) {
						$a.addClass("highlighted");
					}
					if (collapsible) {
						$sub
							.removeClass("sm-nowrap")
							.css({
								zIndex: "",
								width: "auto",
								minWidth: "",
								maxWidth: "",
								top: "",
								left: "",
								marginLeft: "",
								marginTop: ""
							});
					} else {
						// set z-index
						$sub.css(
							"z-index",
							(this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1)
						);
						// min/max-width fix - no way to rely purely on CSS as all UL's are nested
						if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
							$sub
								.css({ width: "auto", minWidth: "", maxWidth: "" })
								.addClass("sm-nowrap");
							if (this.opts.subMenusMinWidth) {
								$sub.css("min-width", this.opts.subMenusMinWidth);
							}
							if (this.opts.subMenusMaxWidth) {
								var noMaxWidth = this.getWidth($sub);
								$sub.css("max-width", this.opts.subMenusMaxWidth);
								if (noMaxWidth > this.getWidth($sub)) {
									$sub
										.removeClass("sm-nowrap")
										.css("width", this.opts.subMenusMaxWidth);
								}
							}
						}
						this.menuPosition($sub);
					}
					var complete = function() {
						// fix: "overflow: hidden;" is not reset on animation complete in jQuery < 1.9.0 in Chrome when global "box-sizing: border-box;" is used
						$sub.css("overflow", "");
					};
					// if sub is collapsible (mobile view)
					if (collapsible) {
						if (canAnimate && this.opts.collapsibleShowFunction) {
							this.opts.collapsibleShowFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.collapsibleShowDuration, complete);
						}
					} else {
						if (canAnimate && this.opts.showFunction) {
							this.opts.showFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.showDuration, complete);
						}
					}
					// accessibility
					$a.attr("aria-expanded", "true");
					$sub.attr({
						"aria-expanded": "true",
						"aria-hidden": "false"
					});
					// store sub menu in visible array
					this.visibleSubMenus.push($sub);
					this.$root.triggerHandler("show.smapi", $sub[0]);
				}
			},
			popupHide: function(noHideTimeout) {
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				var self = this;
				this.hideTimeout = setTimeout(
					function() {
						self.menuHideAll();
					},
					noHideTimeout ? 1 : this.opts.hideTimeout
				);
			},
			popupShow: function(left, top) {
				if (!this.opts.isPopup) {
					alert(
						'SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'
					);
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				this.$root.dataSM("shown-before", true);
				if (canAnimate) {
					this.$root.stop(true, true);
				}
				if (!this.$root.is(":visible")) {
					this.$root.css({ left: left, top: top });
					// show menu
					var self = this,
						complete = function() {
							self.$root.css("overflow", "");
						};
					if (canAnimate && this.opts.showFunction) {
						this.opts.showFunction.call(this, this.$root, complete);
					} else {
						this.$root.show(this.opts.showDuration, complete);
					}
					this.visibleSubMenus[0] = this.$root;
				}
			},
			refresh: function() {
				this.destroy(true);
				this.init(true);
			},
			rootKeyDown: function(e) {
				if (!this.handleEvents()) {
					return;
				}
				switch (e.keyCode) {
					case 27: // reset on Esc
						var $activeTopItem = this.activatedItems[0];
						if ($activeTopItem) {
							this.menuHideAll();
							$activeTopItem[0].focus();
							var $sub = $activeTopItem.dataSM("sub");
							if ($sub) {
								this.menuHide($sub);
							}
						}
						break;
					case 32: // activate item's sub on Space
						var $target = $(e.target);
						if ($target.is("a") && this.handleItemEvents($target)) {
							var $sub = $target.dataSM("sub");
							if ($sub && !$sub.is(":visible")) {
								this.itemClick({ currentTarget: e.target });
								e.preventDefault();
							}
						}
						break;
				}
			},
			rootOut: function(e) {
				if (
					!this.handleEvents() ||
					this.isTouchMode() ||
					e.target == this.$root[0]
				) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				if (!this.opts.showOnClick || !this.opts.hideOnClick) {
					var self = this;
					this.hideTimeout = setTimeout(function() {
						self.menuHideAll();
					}, this.opts.hideTimeout);
				}
			},
			rootOver: function(e) {
				if (
					!this.handleEvents() ||
					this.isTouchMode() ||
					e.target == this.$root[0]
				) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
			},
			winResize: function(e) {
				if (!this.handleEvents()) {
					// we still need to resize the disable overlay if it's visible
					if (this.$disableOverlay) {
						var pos = this.$root.offset();
						this.$disableOverlay.css({
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight()
						});
					}
					return;
				}
				// hide sub menus on resize - on mobile do it only on orientation change
				if (
					!("onorientationchange" in window) ||
					e.type == "orientationchange"
				) {
					var collapsible = this.isCollapsible();
					// if it was collapsible before resize and still is, don't do it
					if (!(this.wasCollapsible && collapsible)) {
						if (this.activatedItems.length) {
							this.activatedItems[this.activatedItems.length - 1][0].blur();
						}
						this.menuHideAll();
					}
					this.wasCollapsible = collapsible;
				}
			}
		}
	});
	$.fn.dataSM = function(key, val) {
		if (val) {
			return this.data(key + "_smartmenus", val);
		}
		return this.data(key + "_smartmenus");
	};
	$.fn.removeDataSM = function(key) {
		return this.removeData(key + "_smartmenus");
	};
	$.fn.smartmenus = function(options) {
		if (typeof options == "string") {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			return this.each(function() {
				var smartmenus = $(this).data("smartmenus");
				if (smartmenus && smartmenus[method]) {
					smartmenus[method].apply(smartmenus, args);
				}
			});
		}
		return this.each(function() {
			// [data-sm-options] attribute on the root UL
			var dataOpts = $(this).data("sm-options") || null;
			if (dataOpts) {
				try {
					dataOpts = eval("(" + dataOpts + ")");
				} catch (e) {
					dataOpts = null;
					alert(
						'ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.'
					);
				}
			}
			new $.SmartMenus(
				this,
				$.extend({}, $.fn.smartmenus.defaults, options, dataOpts)
			);
		});
	};
	// default settings
	$.fn.smartmenus.defaults = {
		isPopup: false, // is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar
		mainMenuSubOffsetX: 0, // pixels offset from default position
		mainMenuSubOffsetY: 0, // pixels offset from default position
		subMenusSubOffsetX: 0, // pixels offset from default position
		subMenusSubOffsetY: 0, // pixels offset from default position
		subMenusMinWidth: "10em", // min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subMenusMaxWidth: "20em", // max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subIndicators: true, // create sub menu indicators - creates a SPAN and inserts it in the A
		subIndicatorsPos: "append", // position of the SPAN relative to the menu item content ('append', 'prepend')
		subIndicatorsText: "", // [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)
		scrollStep: 30, // pixels step when scrolling long sub menus that do not fit in the viewport height
		scrollAccelerate: true, // accelerate scrolling or use a fixed step
		showTimeout: 250, // timeout before showing the sub menus
		hideTimeout: 500, // timeout before hiding the sub menus
		showDuration: 0, // duration for show animation - set to 0 for no animation - matters only if showFunction:null
		showFunction: null, // custom function to use when showing a sub menu (the default is the jQuery 'show')
		// don't forget to call complete() at the end of whatever you do
		// e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }
		hideDuration: 0, // duration for hide animation - set to 0 for no animation - matters only if hideFunction:null
		hideFunction: function($ul, complete) {
			$ul.fadeOut(200, complete);
		}, // custom function to use when hiding a sub menu (the default is the jQuery 'hide')
		// don't forget to call complete() at the end of whatever you do
		// e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }
		collapsibleShowDuration: 0, // duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null
		collapsibleShowFunction: function($ul, complete) {
			$ul.slideDown(200, complete);
		}, // custom function to use when showing a collapsible sub menu
		// (i.e. when mobile styles are used to make the sub menus collapsible)
		collapsibleHideDuration: 0, // duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null
		collapsibleHideFunction: function($ul, complete) {
			$ul.slideUp(200, complete);
		}, // custom function to use when hiding a collapsible sub menu
		// (i.e. when mobile styles are used to make the sub menus collapsible)
		showOnClick: false, // show the first-level sub menus onclick instead of onmouseover (i.e. mimic desktop app menus) (matters only for mouse input)
		hideOnClick: true, // hide the sub menus on click/tap anywhere on the page
		noMouseOver: false, // disable sub menus activation onmouseover (i.e. behave like in touch mode - use just mouse clicks) (matters only for mouse input)
		keepInViewport: true, // reposition the sub menus if needed to make sure they always appear inside the viewport
		keepHighlighted: true, // keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)
		markCurrentItem: false, // automatically add the 'current' class to the A element of the item linking to the current URL
		markCurrentTree: true, // add the 'current' class also to the A elements of all ancestor items of the current item
		rightToLeftSubMenus: false, // right to left display of the sub menus (check the CSS for the sub indicators' position)
		bottomToTopSubMenus: false, // bottom to top display of the sub menus
		collapsibleBehavior: "default" // parent items behavior in collapsible (mobile) view ('default', 'toggle', 'link', 'accordion', 'accordion-toggle', 'accordion-link')
		// 'default' - first tap on parent item expands sub, second tap loads its link
		// 'toggle' - the whole parent item acts just as a toggle button for its sub menu (expands/collapses on each tap)
		// 'link' - the parent item acts as a regular item (first tap loads its link), the sub menu can be expanded only via the +/- button
		// 'accordion' - like 'default' but on expand also resets any visible sub menus from deeper levels or other branches
		// 'accordion-toggle' - like 'toggle' but on expand also resets any visible sub menus from deeper levels or other branches
		// 'accordion-link' - like 'link' but on expand also resets any visible sub menus from deeper levels or other branches
	};
	return $;
});

// https://github.com/nk-o/jarallax
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.5
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(n,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};n.exports=t}).call(this,t(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),a=n(3),r=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,c,u=a.window.jarallax;a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=u,this},void 0!==a.jQuery&&((s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=r.default.apply(a.window,t);return"object"!==l(o)?o:this}).constructor=r.default.constructor,c=a.jQuery.fn.jarallax,a.jQuery.fn.jarallax=s,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=c,this}),i()(function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),b=n(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,h,p=b.window.navigator,d=-1<p.userAgent.indexOf("MSIE ")||-1<p.userAgent.indexOf("Trident/")||-1<p.userAgent.indexOf("Edge/"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function f(){h=s?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),(l?l.clientHeight:0)||b.window.innerHeight||document.documentElement.clientHeight):b.window.innerHeight||document.documentElement.clientHeight}f(),b.window.addEventListener("resize",f),b.window.addEventListener("orientationchange",f),b.window.addEventListener("load",f),i()(function(){f()});var g=[];function y(){g.length&&(g.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:b.window.innerWidth,wndH:h},r=!o||o.wndW!==a.wndW||o.wndH!==a.wndH||o.width!==a.width||o.height!==a.height,l=r||!o||o.top!==a.top||o.bottom!==a.bottom;g[t].oldData=a,r&&n.onResize(),l&&n.onScroll()}),b.window.requestAnimationFrame(y))}function v(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?e instanceof HTMLElement:e&&"object"===u(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n,o=e.length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===u(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e}var x=0,w=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=this;n.instanceID=x,x+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(p.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(p.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===u(l)&&void 0!==l.length&&(l=c(l,1)[0]),l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(p.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=s,(t=[{key:"css",value:function(t,n){return"string"==typeof n?b.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:b.window.innerWidth||document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t,n,o=this,i={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},a={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};o.options.keepImg||((e=o.$item.getAttribute("style"))&&o.$item.setAttribute("data-jarallax-original-styles",e),!o.image.useImgTag||(t=o.image.$item.getAttribute("style"))&&o.image.$item.setAttribute("data-jarallax-original-styles",t)),"static"===o.css(o.$item,"position")&&o.css(o.$item,{position:"relative"}),"auto"===o.css(o.$item,"z-index")&&o.css(o.$item,{zIndex:0}),o.image.$container=document.createElement("div"),o.css(o.image.$container,i),o.css(o.image.$container,{"z-index":o.options.zIndex}),d&&o.css(o.image.$container,{opacity:.9999}),o.image.$container.setAttribute("id","jarallax-container-".concat(o.instanceID)),o.$item.appendChild(o.image.$container),o.image.useImgTag?a=o.extend({"object-fit":o.options.imgSize,"object-position":o.options.imgPosition,"font-family":"object-fit: ".concat(o.options.imgSize,"; object-position: ").concat(o.options.imgPosition,";"),"max-width":"none"},i,a):(o.image.$item=document.createElement("div"),o.image.src&&(a=o.extend({"background-position":o.options.imgPosition,"background-size":o.options.imgSize,"background-repeat":o.options.imgRepeat,"background-image":o.image.bgImage||'url("'.concat(o.image.src,'")')},i,a))),"opacity"!==o.options.type&&"scale"!==o.options.type&&"scale-opacity"!==o.options.type&&1!==o.options.speed||(o.image.position="absolute"),"fixed"===o.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(o.$item).filter(function(e){var t=b.window.getComputedStyle(e),n=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return n&&"none"!==n||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),o.image.position=n.length?"absolute":"fixed"),a.position=o.image.position,o.css(o.image.$item,a),o.image.$container.appendChild(o.image.$item),o.onResize(),o.onScroll(!0),o.options.onInit&&o.options.onInit.call(o),"none"!==o.css(o.$item,"background-image")&&o.css(o.$item,{"background-image":"none"}),o.addToParallaxList()}},{key:"addToParallaxList",value:function(){g.push({instance:this}),1===g.length&&b.window.requestAnimationFrame(y)}},{key:"removeFromParallaxList",value:function(){var n=this;g.forEach(function(e,t){e.instance.instanceID===n.instanceID&&g.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n,o,i;"fixed"===this.image.position&&(n=(t=(e=this).image.$container.getBoundingClientRect()).width,o=t.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),i="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(n,"px ").concat(o,"px 0);\n            clip: rect(0, ").concat(n,"px, ").concat(o,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,h),h<n&&(a-=o*(n-h))):a=o*(n+h),1<o?r=Math.abs(a-h):o<0?r=a/o+Math.abs(a):r+=(h-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(h-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s,c,u,p=this,d=p.$item.getBoundingClientRect(),m=d.top,f=d.height,g={},y=d;p.options.elementInViewport&&(y=p.options.elementInViewport.getBoundingClientRect()),p.isElementInViewport=0<=y.bottom&&0<=y.right&&y.top<=h&&y.left<=b.window.innerWidth,(e||p.isElementInViewport)&&(t=Math.max(0,m),n=Math.max(0,f+m),o=Math.max(0,-m),i=Math.max(0,m+f-h),a=Math.max(0,f-(m+f-h)),r=Math.max(0,-m+h-f),l=1-(h-m)/(h+f)*2,s=1,f<h?s=1-(o||i)/f:n<=h?s=n/h:a<=h&&(s=a/h),"opacity"!==p.options.type&&"scale-opacity"!==p.options.type&&"scroll-opacity"!==p.options.type||(g.transform="translate3d(0,0,0)",g.opacity=s),"scale"!==p.options.type&&"scale-opacity"!==p.options.type||(c=1,p.options.speed<0?c-=p.options.speed*s:c+=p.options.speed*(1-s),g.transform="scale(".concat(c,") translate3d(0,0,0)")),"scroll"!==p.options.type&&"scroll-opacity"!==p.options.type||(u=p.parallaxScrollDistance*l,"absolute"===p.image.position&&(u-=m),g.transform="translate3d(0,".concat(u,"px,0)")),p.css(p.image.$item,g),p.options.onScroll&&p.options.onScroll.call(p,{section:d,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:s,fromViewportCenter:l}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&r(e.prototype,t),n&&r(e,n),s}();v.constructor=w,t.default=v}]);
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(o,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};o.exports=t}).call(this,t(4))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(i=window)}e.exports=i},,function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t);var i=o(8),n=o(3),a=o.n(n),r=o(2),l=o.n(r),p=o(9);a.a.VideoWorker=a.a.VideoWorker||i.default,Object(p.default)(),l()(function(){void 0!==a.a.jarallax&&a.a.jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return v});var i=o(3),s=o.n(i);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){this.doneCallbacks=[],this.failCallbacks=[]}r.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o;)e[--o].apply(null,t)},resolve:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.doneCallbacks,t)},reject:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.failCallbacks,t)},done:function(e){this.doneCallbacks.push(e)},fail:function(e){this.failCallbacks.push(e)}};var l=0,p=0,u=0,d=0,c=0,y=new r,m=new r,v=function(){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=l,l+=1,o.loadAPI(),o.init())}var e,t,o;return e=i,(t=[{key:"extend",value:function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];var i=o[0]||{};return Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){i[e]=o[t][e]})}),i}},{key:"parseURL",value:function(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],p=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!p&&(this.type="local",p)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1)}):delete this.userEventsList[o])}},{key:"fire",value:function(e){for(var t=this,o=arguments.length,i=new Array(1<o?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,i)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),s.a.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&s.a.YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var e,o,i,n,a=this;a.videoImage?t(a.videoImage):("youtube"===a.type&&(e=["maxresdefault","sddefault","hqdefault","0"],o=0,(i=new Image).onload=function(){120!==(this.naturalWidth||this.width)||o===e.length-1?(a.videoImage="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"),t(a.videoImage)):(o+=1,this.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"))},i.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg")),"vimeo"===a.type&&((n=new XMLHttpRequest).open("GET","https://vimeo.com/api/v2/video/".concat(a.videoID,".json"),!0),n.onreadystatechange=function(){var e;4===this.readyState&&200<=this.status&&this.status<400&&(e=JSON.parse(this.responseText),a.videoImage=e[0].thumbnail_large,t(a.videoImage))},n.send(),n=null))}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(p){var u=this;u.$video?p(u.$video):u.onAPIready(function(){var e,t,o,i,n,a,r,l;u.$video||((e=document.createElement("div")).style.display="none"),"youtube"===u.type&&(u.playerOptions={host:"https://www.youtube-nocookie.com",videoId:u.videoID,playerVars:{autohide:1,rel:0,autoplay:0,playsinline:1}},u.options.showContols||(u.playerOptions.playerVars.iv_load_policy=3,u.playerOptions.playerVars.modestbranding=1,u.playerOptions.playerVars.controls=0,u.playerOptions.playerVars.showinfo=0,u.playerOptions.playerVars.disablekb=1),u.playerOptions.events={onReady:function(t){u.options.mute?t.target.mute():u.options.volume&&t.target.setVolume(u.options.volume),u.options.autoplay&&u.play(u.options.startTime),u.fire("ready",t),u.options.loop&&!u.options.endTime&&(u.options.endTime=u.player.getDuration()-.1),setInterval(function(){u.getVolume(function(e){u.options.volume!==e&&(u.options.volume=e,u.fire("volumechange",t))})},150)},onStateChange:function(e){u.options.loop&&e.data===s.a.YT.PlayerState.ENDED&&u.play(u.options.startTime),t||e.data!==s.a.YT.PlayerState.PLAYING||(t=1,u.fire("started",e)),e.data===s.a.YT.PlayerState.PLAYING&&u.fire("play",e),e.data===s.a.YT.PlayerState.PAUSED&&u.fire("pause",e),e.data===s.a.YT.PlayerState.ENDED&&u.fire("ended",e),e.data===s.a.YT.PlayerState.PLAYING?o=setInterval(function(){u.fire("timeupdate",e),u.options.endTime&&u.player.getCurrentTime()>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())},150):clearInterval(o)},onError:function(e){u.fire("error",e)}},(i=!u.$video)&&((n=document.createElement("div")).setAttribute("id",u.playerID),e.appendChild(n),document.body.appendChild(e)),u.player=u.player||new s.a.YT.Player(u.playerID,u.playerOptions),i&&(u.$video=document.getElementById(u.playerID),u.videoWidth=parseInt(u.$video.getAttribute("width"),10)||1280,u.videoHeight=parseInt(u.$video.getAttribute("height"),10)||720)),"vimeo"===u.type&&(u.playerOptions={dnt:1,id:u.videoID,autopause:0,transparent:0,autoplay:u.options.autoplay?1:0,loop:u.options.loop?1:0,muted:u.options.mute?1:0},u.options.volume&&(u.playerOptions.volume=u.options.volume),u.options.showContols||(u.playerOptions.badge=0,u.playerOptions.byline=0,u.playerOptions.portrait=0,u.playerOptions.title=0,u.playerOptions.background=1),u.$video||(a="",Object.keys(u.playerOptions).forEach(function(e){""!==a&&(a+="&"),a+="".concat(e,"=").concat(encodeURIComponent(u.playerOptions[e]))}),u.$video=document.createElement("iframe"),u.$video.setAttribute("id",u.playerID),u.$video.setAttribute("src","https://player.vimeo.com/video/".concat(u.videoID,"?").concat(a)),u.$video.setAttribute("frameborder","0"),u.$video.setAttribute("mozallowfullscreen",""),u.$video.setAttribute("allowfullscreen",""),e.appendChild(u.$video),document.body.appendChild(e)),u.player=u.player||new s.a.Vimeo.Player(u.$video,u.playerOptions),u.options.startTime&&u.options.autoplay&&u.player.setCurrentTime(u.options.startTime),u.player.getVideoWidth().then(function(e){u.videoWidth=e||1280}),u.player.getVideoHeight().then(function(e){u.videoHeight=e||720}),u.player.on("timeupdate",function(e){r||(u.fire("started",e),r=1),u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&e.seconds>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.on("play",function(e){u.fire("play",e),u.options.startTime&&0===e.seconds&&u.play(u.options.startTime)}),u.player.on("pause",function(e){u.fire("pause",e)}),u.player.on("ended",function(e){u.fire("ended",e)}),u.player.on("loaded",function(e){u.fire("ready",e)}),u.player.on("volumechange",function(e){u.fire("volumechange",e)}),u.player.on("error",function(e){u.fire("error",e)})),"local"===u.type&&(u.$video||(u.$video=document.createElement("video"),u.options.showContols&&(u.$video.controls=!0),u.options.mute?u.$video.muted=!0:u.$video.volume&&(u.$video.volume=u.options.volume/100),u.options.loop&&(u.$video.loop=!0),u.$video.setAttribute("playsinline",""),u.$video.setAttribute("webkit-playsinline",""),u.$video.setAttribute("id",u.playerID),e.appendChild(u.$video),document.body.appendChild(e),Object.keys(u.videoID).forEach(function(e){var t,o,i,n;t=u.$video,o=u.videoID[e],i="video/".concat(e),(n=document.createElement("source")).src=o,n.type=i,t.appendChild(n)})),u.player=u.player||u.$video,u.player.addEventListener("playing",function(e){l||u.fire("started",e),l=1}),u.player.addEventListener("timeupdate",function(e){u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&this.currentTime>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.addEventListener("play",function(e){u.fire("play",e)}),u.player.addEventListener("pause",function(e){u.fire("pause",e)}),u.player.addEventListener("ended",function(e){u.fire("ended",e)}),u.player.addEventListener("loadedmetadata",function(){u.videoWidth=this.videoWidth||1280,u.videoHeight=this.videoHeight||720,u.fire("ready"),u.options.autoplay&&u.play(u.options.startTime)}),u.player.addEventListener("volumechange",function(e){u.getVolume(function(e){u.options.volume=e}),u.fire("volumechange",e)}),u.player.addEventListener("error",function(e){u.fire("error",e)})),p(u.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!p||!u){var e,t,o="";if("youtube"!==this.type||p||(p=1,o="https://www.youtube.com/iframe_api"),"vimeo"===this.type&&!u){if(u=1,void 0!==s.a.Vimeo)return;o="https://player.vimeo.com/api/player.js"}o&&(e=document.createElement("script"),t=document.getElementsByTagName("head")[0],e.src=o,t.appendChild(e),e=t=null)}}},{key:"onAPIready",value:function(e){var t;"youtube"===this.type&&(void 0!==s.a.YT&&0!==s.a.YT.loaded||d?"object"===n(s.a.YT)&&1===s.a.YT.loaded?e():y.done(function(){e()}):(d=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,y.resolve("done"),e()})),"vimeo"===this.type&&(void 0!==s.a.Vimeo||c?void 0!==s.a.Vimeo?e():m.done(function(){e()}):(c=1,t=setInterval(function(){void 0!==s.a.Vimeo&&(clearInterval(t),m.resolve("done"),e())},20))),"local"===this.type&&e()}}])&&a(e.prototype,t),o&&a(e,o),i}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return n});var r=o(8),i=o(3),p=o.n(i);function n(){var e,t,l,o,n,i,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.a.jarallax;void 0!==a&&(e=a.constructor,t=e.prototype.onScroll,e.prototype.onScroll=function(){var o=this;t.apply(o),o.isVideoInserted||!o.video||o.options.videoLazyLoading&&!o.isElementInViewport||o.options.disableVideo()||(o.isVideoInserted=!0,o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity",margin:0,zIndex:-1}),o.$video=e,"local"===o.video.type&&(o.image.src?o.$video.setAttribute("poster",o.image.src):o.image.$item&&"IMG"===o.image.$item.tagName&&o.image.$item.src&&o.$video.setAttribute("poster",o.image.$item.src)),o.image.$container.appendChild(e),t.parentNode.removeChild(t)}))},l=e.prototype.coverImage,e.prototype.coverImage=function(){var e,t,o,i,n=this,a=l.apply(n),r=!!n.image.$item&&n.image.$item.nodeName;return a&&n.video&&r&&("IFRAME"===r||"VIDEO"===r)&&(t=(e=a.image.height)*n.image.width/n.image.height,o=(a.container.width-t)/2,i=a.image.marginTop,a.container.width>t&&(e=(t=a.container.width)*n.image.height/n.image.width,o=0,i+=(a.image.height-e)/2),"IFRAME"===r&&(e+=400,i-=200),n.css(n.$video,{width:"".concat(t,"px"),marginLeft:"".concat(o,"px"),height:"".concat(e,"px"),marginTop:"".concat(i,"px")})),a},o=e.prototype.initImg,e.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t},n=e.prototype.canInitParallax,e.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r.default(o.options.videoSrc,{autoplay:!0,loop:o.options.videoLoop,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});function i(){o.image.$default_item&&(o.image.$item=o.image.$default_item,o.image.$item.style.display="block",o.coverImage(),o.clipContainer(),o.onScroll())}if(t.isValid())if(this.options.disableParallax()&&(e=!0,o.image.position="absolute",o.options.type="scroll",o.options.speed=1),e){if(t.on("ready",function(){var e;o.options.videoPlayOnlyVisible?(e=o.onScroll,o.onScroll=function(){e.apply(o),o.videoError||!o.options.videoLoop&&(o.options.videoLoop||o.videoEnded)||(o.isVisible()?t.play():t.pause())}):t.play()}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none")}),t.on("ended",function(){o.videoEnded=!0,o.options.videoLoop||i()}),t.on("error",function(){o.videoError=!0,i()}),o.video=t,!o.defaultInitImgResult&&(o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==t.type))return t.getImageURL(function(e){o.image.bgImage='url("'.concat(e,'")'),o.init()}),!1}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'.concat(e,'")'),"background-position":"center","background-size":"cover"})});return e},i=e.prototype.destroy,e.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),i.apply(e)})}}]);
//# sourceMappingURL=jarallax-video.min.js.map

// https://www.jqueryscript.net/other/jQuery-Plugin-To-Determine-If-An-Element-Is-In-the-Viewport-Viewport-Checker.html
/*
The MIT License (MIT)

Copyright (c) 2014 Dirk Groenen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/
(function($) {
	$.fn.viewportChecker = function(useroptions) {
		// Define options and extend with user
		var options = {
			classToAdd: 'visible',
			classToRemove: 'invisible',
			classToAddForFullView: 'full-visible',
			removeClassAfterAnimation: false,
			offset: 100,
			repeat: false,
			invertBottomOffset: true,
			callbackFunction: function(elem, action) {},
			scrollHorizontal: false,
			scrollBox: window
		};
		$.extend(options, useroptions);
		// Cache the given element and height of the browser
		var $elem = this,
			boxSize = { height: $(options.scrollBox).height(), width: $(options.scrollBox).width() };
		/*
		 * Main method that checks the elements and adds or removes the class(es)
		 */
		this.checkElements = function() {
			var viewportStart, viewportEnd;
			// Set some vars to check with
			if (!options.scrollHorizontal) {
				viewportStart = Math.max($('html').scrollTop(), $('body').scrollTop(), $(window).scrollTop());
				viewportEnd = (viewportStart + boxSize.height);
			} else {
				viewportStart = Math.max($('html').scrollLeft(), $('body').scrollLeft(), $(window).scrollLeft());
				viewportEnd = (viewportStart + boxSize.width);
			}
			// Loop through all given dom elements
			$elem.each(function() {
				var $obj = $(this),
					objOptions = {},
					attrOptions = {};
				//  Get any individual attribution data
				if ($obj.data('vp-add-class')) attrOptions.classToAdd = $obj.data('vp-add-class');
				if ($obj.data('vp-remove-class')) attrOptions.classToRemove = $obj.data('vp-remove-class');
				if ($obj.data('vp-add-class-full-view')) attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
				if ($obj.data('vp-keep-add-class')) attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
				if ($obj.data('vp-offset')) attrOptions.offset = $obj.data('vp-offset');
				if ($obj.data('vp-repeat')) attrOptions.repeat = $obj.data('vp-repeat');
				if ($obj.data('vp-scrollHorizontal')) attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
				if ($obj.data('vp-invertBottomOffset')) attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');
				// Extend objOptions with data attributes and default options
				$.extend(objOptions, options);
				$.extend(objOptions, attrOptions);
				// If class already exists; quit
				if ($obj.data('vp-animated') && !objOptions.repeat) {
					return;
				}
				// Check if the offset is percentage based
				if (String(objOptions.offset).indexOf("%") > 0) {
					console.log('if string')
					objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;
				}
				// Get the raw start and end positions
				var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
					rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();
				// Add the defined offset
				var elemStart = Math.round(rawStart) + objOptions.offset,
					elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();
				if (objOptions.invertBottomOffset) elemEnd -= (objOptions.offset * 2);
				// Add class if in viewport
				if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
					// Remove class
					$obj.removeClass(objOptions.classToRemove);
					$obj.addClass(objOptions.classToAdd);
					// Do the callback function. Callback wil send the jQuery object as parameter
					objOptions.callbackFunction($obj, "add");
					// Check if full element is in view
					if (rawEnd <= viewportEnd && rawStart >= viewportStart) $obj.addClass(objOptions.classToAddForFullView);
					else $obj.removeClass(objOptions.classToAddForFullView);
					// Set element as already animated
					$obj.data('vp-animated', true);
					if (objOptions.removeClassAfterAnimation) {
						$obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							$obj.removeClass(objOptions.classToAdd);
						});
					}
					// Remove class if not in viewport and repeat is true
				} else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)) {
					$obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
					// Do the callback function.
					objOptions.callbackFunction($obj, "remove");
					// Remove already-animated-flag
					$obj.data('vp-animated', false);
				}
			});
		};
		/**
		 * Binding the correct event listener is still a tricky thing.
		 * People have expierenced sloppy scrolling when both scroll and touch
		 * events are added, but to make sure devices with both scroll and touch
		 * are handles too we always have to add the window.scroll event
		 *
		 * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
		 * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
		 */
		// Select the correct events
		if ('ontouchstart' in window || 'onmsgesturechange' in window) {
			// Device with touchscreen
			$(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
		}
		// Always load on window load
		$(options.scrollBox).bind("load scroll", this.checkElements);
		// On resize change the height var
		$(window).resize(function(e) {
			boxSize = { height: $(options.scrollBox).height(), width: $(options.scrollBox).width() };
			$elem.checkElements();
		});
		// trigger inital check if elements already visible
		this.checkElements();
		// Default jquery plugin behaviour
		return this;
	};
})(jQuery);

// https://github.com/chayka/jQuery.Scroolly
(function(root, factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
      // Set up jQuery.Scroolly appropriately for the environment. Start with AMD.
      define(['jquery'], function($) {
          // Export global even in AMD case in case this script is loaded with
          return factory(root, $, false);
      });

      return;
  }

  // Finally, as a browser global in jquery ns.
  factory(root, (root.jQuery || root.Zepto || root.ender || root.$), true);
}(this, function(root, $, patchJQuery) {
  "use strict";

  var scroolly;

  scroolly = {
      options: {
          timeout: null,
          meter: $('.scroolly'),
          body: document
      },
      theCSSPrefix: '',
      theDashedCSSPrefix: '',
      isMobile: false,
      isInitialized: false,
      //        requestAnimFrame: null,
      //        cancelAnimFrame: null,

      animFrame: null,
      direction: 0,
      scrollTop: 0,
      scrollCenter: 0,
      scrollBottom: 0,
      docHeight: 0,
      docMiddle: 0,
      winHeight: $(window).height()
  };

  scroolly.scrollLayout = {
      //  TSB - top screen border
      //        topbarSearchForm:{
      //            element: searchFormTop,
      //            rules:[
      //                {
      //                    from: 0, // top border of the rule region
      //                    to: 'finish', // bottom border of the rule region
      //                          // if ommited then set to 'from' of the following rule
      //                          // if there is no following rule set to 'bottom'
      //                    minWith: 0, // min viewport width for the rule to apply
      //                    maxWidth: 'infinity', // max viewport width for the rule to apply
      //                    direction: 0, // 0 - ignored, >0 - forward, <0 - backward
      //                    alias: 'top', // region alias
      //                    css: null,//{'display': 'none'}, // css to apply when TSB enters rule region
      //                    cssFrom: {'border': '0px solid #000000'},
      //                    cssTo: {'border': '10px solid #eeeeee'},
      //                    addClass: null,   // $.addClass() param value to add classes when TSB enters rule region
      //                    removeClass: null,    // $.removeClass() param value to remove classes when TSB enters rule region
      //                    onCheckIn: function(element){ // callback on TSB enters rule region
      //                        element
      //                        .hide('fade', 100);
      //                        searchInputMain.val(searchInputTop.val());
      //                    },
      //                    onCheckOut: function(element){} // callback on TSB leaves rule region
      //                    onTopIn: function(element){}  // callback on TSB enters rule region from the top border
      //                    onTopOut: function(element){}  // callback on TSB leaves rule region from the top border
      //                    onBottomIn: function(element){}  // callback on TSB enters rule region from the bottom border
      //                    onBottomOut: function(element){}  // callback on TSB leaves rule region from the bottom border
      //                    onScroll: function(element, offset, length){}  // callback on scroll event while TSB is in the rule region
      //                                      // offset - is the offset (px) of the TSB from the rule region top border
      //                                      // length - is the rule region size (px)
      //                    onDirectionChanged: function(element, direction){}
      //                },
      //                {
      //                    from: searchFormMain.offset().top,
      //                    alias: 'searchform',
      //                    css: null,//{'display': 'block'},
      //                    addClass: null,
      //                    removeClass: null,
      //                    onCheckIn: function(element){
      //                        element.show('fade', 300);
      //                        searchInputTop.val(searchInputMain.val());
      //                    },
      //                    onCheckOut: function(element){}
      //                }
      //            ]
      //        }

  };

  scroolly._isObject = function(val) {
      return typeof val === 'object';
  };

  scroolly._isArray = function(val) {
      return val instanceof Array;
  };

  scroolly._isNumber = function(val) {
      return val instanceof Number || typeof val === 'number';
  };

  scroolly._isString = function(val) {
      return val instanceof String || typeof val === 'string';
  };

  scroolly._default = function(obj, key, defaultValue) {
      if (defaultValue === undefined) {
          defaultValue = null;
      }
      var parts = (key + '').split('.');
      if (obj && (scroolly._isObject(obj) || scroolly._isArray(obj))) {
          var root = obj,
                  part;
          for (var i in parts) {
              part = parts[i];
              if ((scroolly._isObject(root) || scroolly._isArray(root)) && root[part] !== undefined) {
                  root = root[part];
              } else {
                  return defaultValue;
              }
          }
          return root;
      }

      return defaultValue;
      //        return _.empty(obj[key])?defaultValue:obj[key];
  };

  /**
   * Parse rule boundry
   * @param {string} boundry - '[anchor] [offset] = [vieport anchor] [offset]'
   * @return {object} - parsed boundry
   */
  scroolly.parseCoords = function(boundry) {
      var strings = boundry.split(/\s*=\s*/),
              coordRel = strings[0] || 'doc-top',
              parsedCoordRel = scroolly.parseCoord(coordRel),
              coordVP = strings[1] || parsedCoordRel.anchor,
              parsedCoordVP = scroolly.parseCoord(coordVP);

      return [parsedCoordRel, parsedCoordVP];
  };

  /**
   * Parse rule coord part
   * @param {string} coord - '[anchor] [offset]'
   * @return {object} - parsed boundry
   */
  scroolly.parseCoord = function(coord) {
      var reAnchor = /((vp|doc|el|con)-)?(top|center|bottom)?/i,
              reOffsetStr = '(\\+|-)?\\s*(\\d+)(\\%|vp|doc|el|con)?',
              reOffset = new RegExp(reOffsetStr, 'gi'),
              mA = coord.match(reAnchor),
              mO = coord.match(reOffset);

      if (!mA && !mO) {
          return false;
      }

      var subject = mA[1] ? mA[2] : 'vp',
              anchor = mA[3] || 'top',
              offsets = [];

      if (mO) {
          reOffset = new RegExp(reOffsetStr, 'i');
          var offsetStr,
                  mO2,
                  sign,
                  offset,
                  offsetSubject;

          for (var i = 0; i < mO.length; i++) {
              offsetStr = mO[i];
              mO2 = offsetStr.match(reOffset);
              sign = mO2[1] && mO2[1] === '-' ? -1 : 1;
              offset = mO2[2] && parseInt(mO2[2]) * sign || 0;
              offsetSubject = 'px';

              if (mO2[3]) {
                  offsetSubject = mO2[3] === '%' ? subject : mO2[3];
              }

              offsets.push({
                  offset: offset,
                  subject: offsetSubject
              });
          }
      }
      return {
          original: coord,
          subject: subject,
          anchor: anchor,
          offsets: offsets
      };

  };

  /**
   * Calculate coord position towards top of the document
   * @param {string} coord - '[anchor] [offset]'
   * @param {jQuery(element)} $element
   * @param {jQuery(container)} $container
   * @return {object} - parsed boundry
   */
  scroolly.calculateCoord = function(coord, $element, $container) {
      if (scroolly._isString(coord)) {
          coord = scroolly.parseCoord(coord);
      }

      var subjectCoord = 0;
      if ('vp' === coord.subject) {
          switch (coord.anchor) {
              case 'top':
                  subjectCoord = scroolly.scrollTop;
                  break;
              case 'center':
                  subjectCoord = scroolly.scrollCenter;
                  break;
              case 'bottom':
                  subjectCoord = scroolly.scrollBottom;
                  break;
          }
      } else if ('doc' === coord.subject) {
          switch (coord.anchor) {
              case 'top':
                  subjectCoord = 0;
                  break;
              case 'center':
                  subjectCoord = scroolly.docMiddle;
                  break;
              case 'bottom':
                  subjectCoord = scroolly.docHeight;
          }
      } else {
          var $subject = 'con' === coord.subject ? $container : $element,
                  subjectHeight = $subject.outerHeight(),
                  subjectTop = $subject.offset().top,
                  subjectBottom = subjectTop + subjectHeight,
                  subjectCenter = subjectTop + Math.floor(subjectHeight / 2);

          switch (coord.anchor) {
              case 'top':
                  subjectCoord = subjectTop;
                  break;
              case 'center':
                  subjectCoord = subjectCenter;
                  break;
              case 'bottom':
                  subjectCoord = subjectBottom;
                  break;
          }
      }

      var i, o, subjectOffset, relativeHeight;
      for (i = 0; i < coord.offsets.length; i++) {
          o = coord.offsets[i];
          subjectOffset = o.offset;

          if ('px' !== o.subject) {
              relativeHeight = 0;
              switch (o.subject) {
                  case 'vp':
                      relativeHeight = scroolly.winHeight;
                      break;
                  case 'doc':
                      relativeHeight = scroolly.docHeight;
                      break;
                  case 'el':
                      relativeHeight = $element.outerHeight();
                      break;
                  case 'con':
                      relativeHeight = $container.outerHeight();
                      break;
              }

              subjectOffset = Math.ceil(o.offset / 100 * relativeHeight);
              //                console.log(subjectOffset);
          }
          subjectCoord += subjectOffset;
      }

//        console.dir({'computed':{ags: arguments, res: subjectCoord}});

      return subjectCoord;
  };

  /**
   * Calculate how much we should scroll down till boundry
   * @param {Object} coords
   * @param {$(DOMnode)} $element
   * @param {$(DOMnode)} $container
   * @returns {integer} how much we should scroll down till boundry
   */
  scroolly.cmpCoords = function(coords, $element, $container) {
      return scroolly.calculateCoord(coords[0], $element, $container) - scroolly.calculateCoord(coords[1], $element, $container);
  };

  /**
   * Check if rule is active
   * @param {object} rule
   * @return {boolean}
   */
  scroolly.isRuleInActiveWidthRange = function(rule) {
      var fromX = scroolly._default(rule, 'minWidth', 0),
              toX = scroolly._default(rule, 'maxWidth', 'infinity'),
              meter = scroolly._default(scroolly.options, 'meter'),
              width = $(window).width(),
              minWidthScrolly,
              maxWidthScrolly,
              checkinWidth;

      if (meter.length) {
          minWidthScrolly = meter.length ? parseInt(meter.css('min-width')) : 0;
          maxWidthScrolly = meter.length ? meter.css('max-width') : 'none';
          maxWidthScrolly = maxWidthScrolly === 'none' ? 'infinity' : parseInt(maxWidthScrolly);
          checkinWidth = fromX <= minWidthScrolly && (toX === 'infinity' || toX >= maxWidthScrolly);

          return checkinWidth;
      }

      return fromX < width && (toX === 'infinity' || toX >= width);
  };

  /**
   * Check if rule is active
   *
   * @param {object} rule
   * @param {$(DOMnode)} $element
   * @param {$(DOMnode)|String} $container description
   * @returns {boolean|object} false if rule is not active or scrolling params instead
   * {
   *      offset: how many pixels since top boundry were scrolled
   *      length: total length of the region in pisels
   * }
   */
  scroolly.isRuleActive = function(rule, $element, $container) {
      var checkinWidth = scroolly.isRuleInActiveWidthRange(rule);
      if (!checkinWidth) {
          return false;
      }

      var ruleDirection = scroolly._default(rule, 'direction', 0),
              scrollDirection = scroolly.direction;

      if (ruleDirection && (ruleDirection > 0 && scrollDirection < 0 || ruleDirection < 0 && scrollDirection >= 0)) {
          return false;
      }

      var fromY = scroolly._default(rule, 'from', '0'),
              toY = scroolly._default(rule, 'to', 'finish');

      var toTop = scroolly.cmpCoords(fromY, $element, $container);
      if (toTop > 0) {
          return false;
      }

      var toBottom = scroolly.cmpCoords(toY, $element, $container);
      if (toBottom <= 0) {
          return false;
      }

      return {
          offset: -toTop,
          length: toBottom - toTop
      };
  };

  /**
   * Helper and polyfill for non-ECMA5 compliant browsers to get layout length
   * @returns {number} length of scrollLayout
   */
  scroolly.getScrollLayoutLength = function () {
      return (!Object.keys) ? $.map(scroolly.scrollLayout, function (){ return 1; }).length : Object.keys(scroolly.scrollLayout).length;
  };

  /**
   * Add ellement with its rules to scroll layout
   * See the commented sample above for the rules syntax
   *
   * @param {string} id
   * @param {$(DOMnode)} $element
   * @param {array} rules
   * @param {$(DOMnode)} $container description
   */
  scroolly.addItem = function(id, $element, rules, $container) {
      if (!$element.length) {
          return false;
      }

      $container = $container || 'self';

      var rule,
              isAbsolute,
              fromY,
              toY,
              fromCss,
              toCss,
              cssOnScroll;

      cssOnScroll = function(element, offset, length, rule) {
          var progress = offset / length,
                  fromCss = scroolly._default(rule, 'cssFrom'),
                  toCss = scroolly._default(rule, 'cssTo'),
                  css = {},
                  fromProp,
                  toProp;

          for (var property in fromCss) {
              fromProp = fromCss[property];
              toProp = scroolly._default(toCss, property, fromProp);
              css[property] = scroolly.getTransitionValue(fromProp, toProp, progress);
          }

          element.css(scroolly.extendCssWithPrefix(css));
      };

      for (var i in rules) {
          rule = rules[i];

          isAbsolute = !$container;//?true:false;

          fromY = scroolly._default(rule, 'from', 'doc-top');

          if (scroolly._isString(fromY) || scroolly._isNumber(fromY)) {
              fromY = scroolly.parseCoords('' + fromY);
              rule.from = fromY;
          }

          toY = scroolly._default(rule, 'to', 'doc-bottom');

          if (scroolly._isString(toY) || scroolly._isNumber(toY)) {
              toY = scroolly.parseCoords('' + toY);

              rule.to = toY;
          }

          fromCss = scroolly._default(rule, 'cssFrom');
          toCss = scroolly._default(rule, 'cssTo');

          if (fromCss && toCss) {

              rule.cssOnScroll = cssOnScroll;
          }
      }
      if ($element.length > 1) {
          $element.each(function(i) {
              var clonedRules = [],
                      rule,
                      clonedRule,
                      $con = null;

              for (var j = 0; j < rules.length; j++) {
                  rule = rules[j];
                  clonedRule = {};
                  $.extend(clonedRule, rule);
                  clonedRules.push(clonedRule);
              }

              if ($container) {
                  if ($container === 'self') {
                      $con = $container;
                  } else {
                      $con = $container.length > 1 && i < $container.length ? $($container[i]) : $container;
                  }
              }

              scroolly.addItem(id + '-' + i, $(this), clonedRules, $con);
          });

          return true;
      }
      var item = scroolly._default(scroolly.scrollLayout, id);
      if (item) {
          item.rules.concat(rules);
      } else {
          scroolly.scrollLayout[id] = {
              element: $element,
              container: $container,
              rules: rules
          };
      }
      return true;
  };

  scroolly.factory = function($element, rules, $container, id) {
      scroolly.init();

      if (!$element.length) {
          return false;
      }

      if (!rules) {
          return false;
      }

      id = id || $element[0].tagName + '_' + scroolly.getScrollLayoutLength();
      scroolly.addItem(id, $element, rules, $container, false);
  };

  /**
   * Fix DOM element in NON-Responsive (non viewport width dependent) layout.
   * When applied, DOMnode is fixed when TSB is within
   * (node's top border - offsetTop) and ($bottomContainer's bottom border - offsetBottom)
   * and unfixed when TSB is out of the region
   *
   * @param string id
   * @param $(DOMnode) $element
   * @param object params: {
   *      $bottomContainer - $(DOMnode) which restricts fix from the bottom,
   *          '<body>' by default,
   *          'next' means the next dom sibling $element.next()
   *          'parent' means $element.parent()
   *      mode - sets the mode of adding needed white space to $bottomContainer
   *          when $element is fixed
   *          'margin' means margin-top=$element.height() wil be added to $bottomContainer
   *          'padding' means padding-top=$element.height() wil be added to $bottomContainer
   *      offsetTop - top offset that is left before fixed element when fixed
   *      offsetBottom - bottom offset left before $bottomContainer
   *      minWidth, maxWidth - viewport width (px) boundries
   *          is used within stickItemXY for responsive layouts
   *          0, 'infinity' by default
   *      static -
   * }
   */
  scroolly.stickItem = function(id, $element, params /*$bottomContainer, mode, offsetTop, offsetBottom*/) {
      scroolly.stickItemXY(id, $element, (params instanceof Array) ? params : [params]);
  };

  /**
   * Fix DOM element in NON-Responsive (non viewport width dependent) layout.
   * When applied, DOMnode is fixed when TSB is within
   * (node's top border - offsetTop) and ($bottomContainer's bottom border - offsetBottom)
   * and unfixed when TSB is out of the region
   *
   * @param string id
   * @param $(DOMnode) $element
   * @param array params - array of objects described in stickItem()
   */
  scroolly.stickItemXY = function(id, $element, params /*$bottomContainer, mode, offsetTop, offsetBottom*/) {
      params = params || [];
      var rules = [],
              xRange,
              $bottomContainer,
              mode,
              offsetTop,
              offsetBottom,
              minWidth,
              maxWidth,
              isStatic
              ;
      for (var x in params) {
          xRange = params[x];
          $bottomContainer = scroolly._default(xRange, '$bottomContainer', $('body'));
          mode = scroolly._default(xRange, 'mode');
          offsetTop = scroolly._default(xRange, 'offsetTop', 0);
          offsetBottom = scroolly._default(xRange, 'offsetBottom', 0);
          minWidth = scroolly._default(xRange, 'minWidth', 0);
          maxWidth = scroolly._default(xRange, 'maxWidth', 'infinity');
          isStatic = scroolly._default(xRange, 'static', false);

          if ('next' === $bottomContainer) {
              mode = mode || 'margin';
              $bottomContainer = $($element).next();
          } else if ('parent' === $bottomContainer || !$bottomContainer) {
              mode = mode || 'padding';
              $bottomContainer = $($element).parent();
          }

          if (!isStatic) {
              rules.push({
                  source: 'sticky',
                  alias: 'top',
                  minWidth: minWidth,
                  maxWidth: maxWidth,
                  offsetTop: offsetTop,
                  offsetBottom: offsetBottom,
                  bottomContainer: $bottomContainer,
                  mode: mode
              });
              rules.push({
                  source: 'sticky',
                  alias: 'fixed',
                  minWidth: minWidth,
                  maxWidth: maxWidth,
                  offsetTop: offsetTop,
                  offsetBottom: offsetBottom,
                  bottomContainer: $bottomContainer,
                  mode: mode
              });

              rules.push({
                  source: 'sticky',
                  alias: 'bottom',
                  minWidth: minWidth,
                  maxWidth: maxWidth,
                  offsetTop: offsetTop,
                  offsetBottom: offsetBottom,
                  bottomContainer: $bottomContainer,
                  mode: mode
//                    from: offset_2,
//                    css: {'position': 'absolute', 'top':(offset_2+offsetTop)+'px'}
              });
          } else {
              rules.push({
                  source: 'sticky',
                  alias: 'static',
                  minWidth: minWidth,
                  maxWidth: maxWidth,
                  bottomContainer: $bottomContainer
              });
          }
      }

      scroolly.addItem(id, $($element), rules);
  };

  /**
   * This function calculates all rules boundries when browser is resized and
   * enters new width range. We cannot precalculate all sizes as during window
   * resize some element are resized.
   *
   * @param {$(DOMnode)} $element
   * @param {object} rule - single rule
   * @returns {object} - recalculated rule
   */
  scroolly.processStickyItemRange = function($element, rule) {
      rule = rule || {};

      var $bottomContainer = scroolly._default(rule, 'bottomContainer', $('body')),
              mode = scroolly._default(rule, 'mode'),
              offsetTop = scroolly._default(rule, 'offsetTop', 0),
              offsetBottom = scroolly._default(rule, 'offsetBottom', 0),
              itemHeight = parseInt($element.css('margin-top')) + $element.height() + parseInt($element.css('margin-bottom'));

      if ($element.css('box-sizing') === 'border-box') {
          itemHeight += parseInt($element.css('padding-top')) + parseInt($element.css('padding-bottom'));
      }

      var bottomContainerHeight = parseInt($bottomContainer.css('margin-top')) + $bottomContainer.height() + parseInt($bottomContainer.css('margin-bottom'));
      if ($bottomContainer.css('box-sizing') === 'border-box') {
          bottomContainerHeight += parseInt($bottomContainer.css('padding-top')) + parseInt($bottomContainer.css('padding-bottom'));
      }

      var offset_1 = Math.round($element.offset().top - parseInt($element.css('margin-top'))),
              offset_2 = Math.round($bottomContainer.offset().top + (bottomContainerHeight - itemHeight - offsetBottom));

      switch (rule.alias) {
          case 'top':
              rule.from = 0;
              rule.to = offset_1 - offsetTop;
              rule.css = {'position': 'absolute', 'top': offset_1 + 'px'};
              rule.itemHeight = itemHeight;
              break;

          case 'fixed':
              rule.from = offset_1 - offsetTop;
              rule.to = offset_2;
              rule.css = {'position': 'fixed', 'top': offsetTop + 'px'};
              rule.itemHeight = itemHeight;
              break;

          case 'bottom':
              rule.from = offset_2;
              rule.css = {'position': 'absolute', 'top': (offset_2 + offsetTop) + 'px'};
              rule.itemHeight = itemHeight;
              break;

          case 'static':
              rule.from = 0;
              rule.css = {'position': '', 'top': ''};
              rule.itemHeight = 0;
              break;
      }

      return rule;
  };

  /**
   * Heads up, this function is called on window resize. However even if window
   * has entered new width range it doesn't mean that new responsive styles were
   * allready applied. So we cannot rely on $( window ).width(). What we can rely
   * on are styles that are applied to some predefined element called 'meter'.
   *
   * Html: (our Meter)
   * <div class="scroolly"></div>
   *
   * CSS:
   *
   * .scroolly{
   *      display: none;
   * }
   *
   * media (min-device-width : 320px) and (max-device-width : 480px){
   *      .scroolly{
   *          min-width: 320px;
   *          max-width: 480px;
   *      }
   * }
   * media (min-device-width : 481px) and (max-device-width : 800px){
   *      .scroolly{
   *          min-width: 481px;
   *          max-width: 800px;
   *      }
   * }
   *
   * JS rules:
   *
   * {
   *      minWidth: 320,
   *      maxWidth: 480
   * },
   * {
   *      minWidth: 480,
   *      maxWidth: 800
   * }
   *
   * @returns {Boolean}
   */
  scroolly.onResize = function() {
      scroolly.winHeight = $(window).height();
      //        scroolly.docHeight = $(document).height();
      scroolly.docHeight = scroolly.body.height();
      scroolly.docMiddle = Math.floor(scroolly.docHeight / 2);

      var needScroll = false;

      for (var id in scroolly.scrollLayout) {
          // cycling through all visual elements that should react
          // to scrolling and resizing
          var item = scroolly.scrollLayout[id],
                  rule,
                  checkin,
                  source
                  ;
          for (var i in item.rules) {
              rule = item.rules[i];
              checkin = scroolly.isRuleInActiveWidthRange(rule);
              needScroll |= checkin;
              if (checkin && rule.from === undefined) {
                  $(item.element).css('position', '');
                  $(item.element).css('top', '');
                  if (rule.bottomContainer) {
                      rule.bottomContainer.css('margin-top', '');
                  }
                  // item entered new range and should adapt
                  source = scroolly._default(rule, 'source');
                  if ('sticky' === source) {
                      item.rules[i] = scroolly.processStickyItemRange(item.element, rule);
                  }

              }
          }
      }
      if (needScroll) {
          // dark magick here do not touch this useless string
          scroolly.scrollLayout = scroolly.scrollLayout;
          setTimeout(function() {
              scroolly.onScroll(true);
          }, 0);
          //            scroolly.onScroll();
      }
      return true;
  };

  /**
   * Helper to get progress values for onScroll handlers
   * @param {integer} offset
   * @param {integer} length
   * @returns {object} progress metrics
   */
  scroolly.getProgress = function(offset, length) {
      var relative = offset / length;
      return {
          offset: offset,
          length: length,
          relative: relative,
          left: length - offset,
          leftRelative: 1 - relative
      };
  };

  /**
   * Get transition float value  based on start, stop and progress values
   * @param {number} start
   * @param {number} stop
   * @param {float} progress
   * @returns {Number}
   */
  scroolly.getTransitionFloatValue = function(start, stop, progress) {
      if (progress <= 0) {
          return start;
      }

      if (progress >= 1) {
          return stop;
      }

      return start + (stop - start) * progress;
  };

  /**
   * Get transition integer value  based on start, stop and progress values
   * @param {number} start
   * @param {number} stop
   * @param {float} progress
   * @returns {Number}
   */
  scroolly.getTransitionIntValue = function(start, stop, progress) {
      return Math.round(scroolly.getTransitionFloatValue(start, stop, progress));
  };

  /**
   * Get [R, G, B] array of integers for provided '#RRGGBB' or '#RGB' value
   * @param {type} color
   * @returns {Array}
   */
  scroolly.hashColor2rgb = function(color) {
      var m = color.match(/^#([0-9a-f]{3})$/i);
      if (m) {
          // in three-character format, each value is multiplied by 0x11 to give an
          // even scale from 0x00 to 0xff
          return [
              parseInt(m[1].charAt(0), 16) * 0x11, parseInt(m[1].charAt(1), 16) * 0x11, parseInt(m[1].charAt(2), 16) * 0x11
          ];
      } else {
          m = color.match(/^#([0-9a-f]{6})$/i);
          if (m) {
              return [
                  parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16)
              ];
          }
      }
      return [0, 0, 0];
  };

  /**
   * Get '#RRGGBB' value for provided R, G, B integer values
   * @param {integer} r
   * @param {integer} g
   * @param {integer} b
   * @returns {string} #RRGGBB
   */
  scroolly.rgb2HashColor = function(r, g, b) {
      var res = '#', c, hex;
      for (var i in arguments) {
          c = arguments[i];
          hex = c.toString(16);

          if (c < 16) {
              hex = '0' + hex;
          }

          res += hex;
      }

      return res;
  };

  /**
   * Get transition color value  based on start, stop and progress values
   * @param {cssColor} start
   * @param {cssColor} stop
   * @param {float} progress
   * @returns {Number}
   */
  scroolly.getTransitionColorValue = function(start, stop, progress) {
      if (progress <= 0) {
          return start;
      }

      if (progress >= 1) {
          return stop;
      }

      var startRGB = scroolly.hashColor2rgb(start),
              stopRGB = scroolly.hashColor2rgb(stop),
              r = scroolly.getTransitionIntValue(startRGB[0], stopRGB[0], progress),
              g = scroolly.getTransitionIntValue(startRGB[1], stopRGB[1], progress),
              b = scroolly.getTransitionIntValue(startRGB[2], stopRGB[2], progress);

      return scroolly.rgb2HashColor(r, g, b);
  };

  /**
   * Get transition css value  based on start, stop and progress values
   * @param {cssColor} start
   * @param {cssColor} stop
   * @param {float} progress
   * @returns {Number}
   */
  scroolly.getTransitionValue = function(start, stop, progress) {
      if (progress <= 0) {
          return start;
      }

      if (progress >= 1) {
          return stop;
      }

      var called = 0;
      if (scroolly._isNumber(start) && scroolly._isNumber(stop)) {
          return scroolly.getTransitionFloatValue(start, stop, progress);
      }

      var re = /(\d*\.\d+)|(\d+)|(#[0-9a-f]{6})|(#[0-9a-f]{3})/gi,
              stops = ('' + stop).match(re);

      return ('' + start).replace(re, function(value, float, int, color6, color3) {
          //            console.dir({'replace callback args':arguments, stops: stops, called: called});
          var currentStop = stops[called];

          called++;
          if (int && int.length) {
              return /\d*\.\d+/.test(currentStop) ? scroolly.getTransitionFloatValue(parseFloat(value), parseFloat(currentStop), progress) : scroolly.getTransitionIntValue(parseInt(value), parseInt(currentStop), progress);
          }

          if (float && float.length) {
              return scroolly.getTransitionFloatValue(parseFloat(value), parseFloat(currentStop), progress);
          }

          if (color6 && color6.length || color3 && color3.length) {
              return scroolly.getTransitionColorValue(value, currentStop, progress);
          }

          return value;
      });
  };

  /**
   * Function that is called while sccrolls.
   * @param {boolean} force description
   * @returns {boolean}
   */
  scroolly.onScroll = function(force) {
      //        var scrollPos = $(document).scrollTop(); // Y-coord that is checked against fromY & toY
      var scrollPos = scroolly.body.scrollTop(); // Y-coord that is checked against fromY & toY

      if (!force && scrollPos === scroolly.scrollTop) {
          return false;
      }

      var prevPos = scroolly.scrollTop,
              prevDirection = scroolly.direction;

      scroolly.scrollTop = scrollPos; // Y-coord that is checked against fromY & toY
      scroolly.scrollBottom = scrollPos + scroolly.winHeight;
      scroolly.scrollCenter = scrollPos + Math.floor(scroolly.winHeight / 2);
      (scrollPos > 0) ? (scroolly.direction = scrollPos - prevPos) : (scroolly.direction = -1);
      // scroolly.direction = scrollPos - prevPos;

      var directionChanged = !(scroolly.direction === prevDirection || scroolly.direction < 0 && prevDirection < 0 || scroolly.direction > 0 && prevDirection > 0),
              item,
              totalRules,
              checkedIn,
              checkedOut,
              active,
              id, i, l, j,
              rule,
              fromX,
              toX,
              container,
              $bottomContainer,
              mode,
              itemHeight;

      for (id in scroolly.scrollLayout) {
          // cycling through all visual elements that should react
          // to scrolling and resizing
          item = scroolly.scrollLayout[id];
          totalRules = item.rules.length;
          checkedIn = [];
          checkedOut = [];
          active = [];

          for (i = 0; i < totalRules; i++) {
              rule = item.rules[i];
              fromX = scroolly._default(rule, 'minWidth', 0);
              toX = scroolly._default(rule, 'maxWidth', 'infinity');

              container = item.container === 'self' ? item.element : item.container;

              rule.checkin = scroolly.isRuleActive(rule, item.element, container);
              rule['class'] = rule['class'] || 'scroll-pos-' + (rule.alias) + ' window-width-' + fromX + '-to-' + toX;
              if (rule.checkin) {
                  active.push(i);
                  if (!rule.isActive) {
                      rule.isActive = true;
                      checkedIn.push(i);
                  }
              } else if (rule.isActive) {
                  rule.isActive = false;
                  checkedOut.push(i);
              }
              item.rules[i] = rule;
          }

          for (j = 0; j < checkedOut.length; j++) {
              i = checkedOut[j];
              rule = item.rules[i];
              item.element.removeClass(rule['class']);
              if (rule.cssOnScroll) {
                  l = rule.length || 0;
                  rule.cssOnScroll(item.element, scrollPos > prevPos ? l : 0, l, rule);
              }
              if (rule.onScroll) {
                  l = rule.length || 0;
                  rule.onScroll(item.element, scrollPos > prevPos ? l : 0, l, rule);
              }
              if (rule.onCheckOut) {
                  rule.onCheckOut(item.element, rule);
              }
              if (rule.onTopOut && scrollPos < prevPos) {
                  rule.onTopOut(item.element, rule);
              } else if (rule.onBottomOut && scrollPos > prevPos) {
                  rule.onBottomOut(item.element, rule);
              }
          }

          for (j = 0; j < checkedIn.length; j++) {
              i = checkedIn[j];
              rule = item.rules[i];

              if (rule.css) {
                  item.element.css(scroolly.extendCssWithPrefix(rule.css));
              }

              if (rule.addClass) {
                  item.element.addClass(rule.addClass);
              }

              if (rule.removeClass) {
                  item.element.removeClass(rule.removeClass);
              }
              item.element.addClass(rule['class']);

              $bottomContainer = scroolly._default(rule, 'bottomContainer');
              mode = scroolly._default(rule, 'mode');
              itemHeight = scroolly._default(rule, 'itemHeight');

              if ($bottomContainer && mode && itemHeight) {
                  $bottomContainer.css(mode + '-top', itemHeight + 'px');
              }

              if (rule.onCheckIn) {
                  rule.onCheckIn(item.element, rule);
              }

              if (rule.onTopIn && scrollPos > prevPos) {
                  rule.onTopIn(item.element, rule);
              } else if (rule.onBottomIn && scrollPos < prevPos) {
                  rule.onBottomIn(item.element, rule);
              }

              rule.length = rule.checkin.length;
          }

          for (j = 0; j < active.length; j++) {
              i = active[j];
              rule = item.rules[i];

              if (rule.cssOnScroll) {
                  rule.cssOnScroll(item.element, rule.checkin.offset, rule.checkin.length, rule);
              }

              if (rule.onScroll) {
                  rule.onScroll(item.element, rule.checkin.offset, rule.checkin.length, rule);
              }

              if (directionChanged && rule.onDirectionChanged) {
                  rule.onDirectionChanged(item.element, scroolly.direction, rule);
              }
          }
          scroolly.scrollLayout[id] = item;
      }

  };

  //Will be called once (when scroolly gets initialized).
  scroolly.detectCSSPrefix = function() {
      //Only relevant prefixes. May be extended.
      //Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
      var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

      //Detect prefix for current browser by finding the first property using a prefix.
      if (!window.getComputedStyle) {
          return;
      }

      var style = window.getComputedStyle(document.body, null);

      for (var k in style) {
          //We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
          scroolly.theCSSPrefix = (k.match(rxPrefixes) || (+k === k && style[k].match(rxPrefixes)));

          if (scroolly.theCSSPrefix) {
              break;
          }
      }

      //Did we even detect a prefix?
      if (!scroolly.theCSSPrefix) {
          scroolly.theCSSPrefix = scroolly.theDashedCSSPrefix = '';

          return;
      }

      scroolly.theCSSPrefix = scroolly.theCSSPrefix[0];

      //We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
      if (scroolly.theCSSPrefix.slice(0, 1) === '-') {
          scroolly.theDashedCSSPrefix = scroolly.theCSSPrefix;

          //There's no logic behind these. Need a look up.
          scroolly.theCSSPrefix = ({
              '-webkit-': 'webkit',
              '-moz-': 'Moz',
              '-ms-': 'ms',
              '-o-': 'O'
          })[scroolly.theCSSPrefix];
      } else {
          scroolly.theDashedCSSPrefix = '-' + scroolly.theCSSPrefix.toLowerCase() + '-';
      }
  };

  scroolly.cssPrefix = function(key) {
      return scroolly.theDashedCSSPrefix + key;
  };

  scroolly.extendCssWithPrefix = function(cssObj) {
      var cssExt = {}, prop, re, m, newProp, val;

      for (prop in cssObj) {
          re = /^-(moz-|webkit-|o-|ms-)?/i;
          m = prop.match(re);
          newProp = prop.slice(1);
          //            console.dir({m: m});
          if (m && !m[1]) {
              val = cssObj[prop];
              cssExt[newProp] = val;
              cssExt[scroolly.cssPrefix(newProp)] = val;
              delete cssObj[prop];
          }
      }

      $.extend(cssObj, cssExt);

      return cssObj;
  };

  scroolly.now = Date.now || function() {
      return +new Date();
  };

  scroolly.getRAF = function() {
      var requestAnimFrame = window.requestAnimationFrame || window[scroolly.theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'],
              lastTime = scroolly.now();

      if (false && scroolly.isMobile || !requestAnimFrame) {
          requestAnimFrame = function(callback) {
              //How long did it take to render?
              var deltaTime = scroolly.now() - lastTime,
                      delay = Math.max(0, 1000 / 60 - deltaTime);

              return window.setTimeout(function() {
                  lastTime = scroolly.now();
                  //        scroolly.timesCalled++;
                  //        scroolly.x.text(scroolly.timesCalled);
                  callback();
              }, delay);
          };
      }

      return requestAnimFrame;
  };

  scroolly.getCAF = function() {
      var cancelAnimFrame = window.cancelAnimationFrame || window[scroolly.theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

      if (scroolly.isMobile || !cancelAnimFrame) {
          cancelAnimFrame = function(timeout) {
              return window.clearTimeout(timeout);
          };
      }

      return cancelAnimFrame;

  };

  scroolly.animLoop = function() {
      scroolly.onScroll();
      scroolly.animFrame = window.requestAnimFrame(scroolly.animLoop);
  };

  scroolly.init = function(options) {
      if (scroolly.isInitialized) {
          return false;
      }
      $.extend(scroolly.options, options);
      scroolly.isMobile = scroolly._default(scroolly.options, 'isMobile', (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera));
      scroolly.detectCSSPrefix();
      scroolly.body = $(scroolly.options.body);
      window.requestAnimFrame = scroolly.getRAF();
      window.cancelAnimFrame = scroolly.getCAF();

      scroolly.timesCalled = 0;
      $(document).ready(function() {
          $(window).resize(scroolly.onResize).resize();
          //            scroolly.body.scroll(function(){scroolly.onScroll(true);}).scroll();
          scroolly.animLoop();
      });
      scroolly.isInitialized = true;
  };

  scroolly.destroy = function() {
      window.cancelAnimFrame(scroolly.animFrame);
  };

  scroolly.factorySticky = function($element, params, id) {
      id = id || $element[0].tagName + '_' + scroolly.getScrollLayoutLength();
      return scroolly.stickItemXY(id, $element, (params instanceof Array) ? params : [params]) ? id : false;
  };

  if (patchJQuery) {
      $.scroolly = scroolly;

      $.fn.scroolly = function(rules, $container, id) {
          scroolly.factory(this, rules, $container, id);
          return this;
      };

      /**
       * params = [widthRange1, widthRange2, ... , widthRangeN]
       *
       * widthRangeN = {
       *      $bottomContainer: $(DOMnode),   // - container that defines bottom container
       *      mode: 'margin'||'padding', // - defines the way element height will be compensated
       *      minWidth: 0,
       *      maxWidth: 'infinity',
       *      static: false // - whether element should be fixed allways for current width range
       * }
       *
       *
       * @param {type} params
       * @param {type} id
       * @returns {Boolean|String}
       */
      $.fn.scroollySticky = function(params, id) {
          scroolly.init();

          if (!this.length) {
              return false;
          }

          return scroolly.factorySticky(this, params, id);
      };
  }

  return scroolly;
}));

// https://yiotis.net/filterizr/#/documentation/jquery/options
// https://yiotis.net/filterizr/#/documentation/jquery/options
var Filterizr=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var r={IDLE:"IDLE",FILTERING:"FILTERING",SORTING:"SORTING",SHUFFLING:"SHUFFLING"},i={SAME_SIZE:"sameSize",SAME_HEIGHT:"sameHeight",SAME_WIDTH:"sameWidth",PACKED:"packed",HORIZONTAL:"horizontal",VERTICAL:"vertical"},o=/(^linear$)|(^ease-in-out$)|(^ease-in$)|(^ease-out$)|(^ease$)|(^step-start$)|(^step-end$)|(^steps\(\d\s*,\s*(end|start)\))$|(^cubic-bezier\((\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\))$/,s=function(t,e,n,r,i){if(void 0!==e){var o=new Error('Filterizr: expected type of option "'+t+'" to be "'+n+'", but its type is: "'+typeof e+'"'),s=!1,a=!1,u=n.includes("array");if((typeof e).match(n)?s=!0:!s&&u&&(a=Array.isArray(e)),!s&&!u)throw o;if(!s&&u&&!a)throw o;var c=function(t){return t?" For further help read here: "+t:""};if(Array.isArray(r)){var l=!1;if(r.forEach(function(t){t===e&&(l=!0)}),!l)throw new Error('Filterizr: allowed values for option "'+t+'" are: '+r.map(function(t){return'"'+t+'"'}).join(", ")+'. Value received: "'+e+'".'+c(i))}else if("string"==typeof e&&r instanceof RegExp){if(!e.match(r))throw new Error('Filterizr: invalid value "'+e+'" for option "'+t+'" received.'+c(i))}}},a=function(t,e,n){var r;return function(){var i=this,o=arguments;clearTimeout(r),r=window.setTimeout(function(){r=null,n||t.apply(i,o)},e),n&&!r&&t.apply(i,o)}},u=function(t,e){return t.length===e.length&&t.reduce(function(t,n,r){var i=n.getSortAttribute("index"),o=e[r].getSortAttribute("index");return t&&i===o},!0)};var c=function(t){return"string"==typeof t?document.querySelector(t):t};function l(t){return t&&"object"==typeof t&&!Array.isArray(t)}function f(t){for(var e,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(!r.length)return t;var o=r.shift();if(l(t)&&l(o))for(var s in o)l(o[s])?(t[s]||Object.assign(t,((e={})[s]={},e)),f(t[s],o[s])):Object.assign(t,((n={})[s]=o[s],n));return f.apply(void 0,[t].concat(r))}var h=function(){};function p(t,e){Object.entries(e).forEach(function(e){var n=e[0],r=e[1];t.style[n]=r})}var d=function(t){for(var e=t.slice(0),n=[];0!==e.length;){var r=Math.floor(e.length*Math.random());n.push(e[r]),e.splice(r,1)}return n},y=function(){function t(t){this.receiver=t,this.eventDictionary={}}return t.prototype.on=function(t,e){var n=this.receiver,r=n instanceof NodeList;!!this.eventDictionary[t]&&delete this.eventDictionary[t],r&&n.length?(this.eventDictionary[t]=e,Array.from(n).forEach(function(n){n.addEventListener(t,e)})):!r&&n&&(this.eventDictionary[t]=e,n.addEventListener(t,e))},t.prototype.off=function(t){var e=this.receiver,n=this.eventDictionary[t],r=e instanceof NodeList;r&&e.length?Array.from(e).forEach(function(e){e.removeEventListener(t,n)}):!r&&e&&e.removeEventListener(t,n),delete this.eventDictionary[t]},t.prototype.destroy=function(){var t=this,e=this.receiver,n=e instanceof NodeList;n&&e.length?Array.from(e).forEach(function(e){return t.removeAllEvents(e)}):!n&&e&&this.removeAllEvents(e)},t.prototype.removeAllEvents=function(t){var e=this;Object.keys(this.eventDictionary).forEach(function(n){t.removeEventListener(n,e.eventDictionary[n]),delete e.eventDictionary[n]})},t}(),v={animationDuration:.5,callbacks:{onInit:h,onFilteringStart:h,onFilteringEnd:h,onShufflingStart:h,onShufflingEnd:h,onSortingStart:h,onSortingEnd:h},controlsSelector:"",delay:0,delayMode:"progressive",easing:"ease-out",filter:"all",filterOutCss:{opacity:0,transform:"scale(0.5)"},filterInCss:{opacity:1,transform:"scale(1)"},gridItemsSelector:".filtr-item",gutterPixels:0,layout:i.SAME_SIZE,multifilterLogicalOperator:"or",searchTerm:"",setupControls:!0,spinner:{enabled:!1,fillColor:"#2184D0",styles:{height:"75px",margin:"0 auto",width:"75px","z-index":2}}},g=function(){function t(t){this.filter=t}return t.prototype.get=function(){return this.filter},t.prototype.set=function(t){this.filter=t},t.prototype.toggle=function(t){this.filter=this.toggleFilter(this.filter,t)},t.prototype.toggleFilter=function(t,e){if("all"===t)return e;if(Array.isArray(t)){if(t.includes(e)){var n=t.filter(function(t){return t!==e});return 1===n.length?n[0]:n}return t.concat([e])}return t===e?"all":[t,e]},t}(),m=function(){return(m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},b=function(){function t(t){var e=f({},v,this.validate(t));this.options=this.convertToFilterizrOptions(e)}return Object.defineProperty(t.prototype,"isSpinnerEnabled",{get:function(){return this.options.spinner.enabled},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"areControlsEnabled",{get:function(){return this.options.setupControls},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"controlsSelector",{get:function(){return this.options.controlsSelector},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filter",{get:function(){return this.options.filter.get()},set:function(t){this.options.filter.set(t)},enumerable:!0,configurable:!0}),t.prototype.toggleFilter=function(t){this.options.filter.toggle(t)},Object.defineProperty(t.prototype,"searchTerm",{get:function(){return this.options.searchTerm},set:function(t){this.options.searchTerm=t},enumerable:!0,configurable:!0}),t.prototype.get=function(){return this.options},t.prototype.getRaw=function(){return this.convertToOptions(this.options)},t.prototype.set=function(t){var e=f({},this.convertToOptions(this.options),this.validate(t));this.options=this.convertToFilterizrOptions(e)},t.prototype.convertToFilterizrOptions=function(t){return m({},t,{filter:new g(t.filter)})},t.prototype.convertToOptions=function(t){return m({},t,{filter:t.filter.get()})},t.prototype.validate=function(t){return s("animationDuration",t.animationDuration,"number"),s("callbacks",t.callbacks,"object"),s("controlsSelector",t.controlsSelector,"string"),s("delay",t.delay,"number"),s("easing",t.easing,"string",o,"https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp"),s("delayMode",t.delayMode,"string",["progressive","alternate"]),s("filter",t.filter,"string|number|array"),s("filterOutCss",t.filterOutCss,"object"),s("filterInCss",t.filterOutCss,"object"),s("gridItemsSelector",t.gridItemsSelector,"string"),s("gutterPixels",t.gutterPixels,"number"),s("layout",t.layout,"string",Object.values(i)),s("multifilterLogicalOperator",t.multifilterLogicalOperator,"string",["and","or"]),s("searchTerm",t.searchTerm,"string"),s("setupControls",t.setupControls,"boolean"),t},t}(),w=function(){function t(t,e){void 0===e&&(e=""),this.filterizr=t,this.selector=e,this.filterControls=new y(document.querySelectorAll(e+"[data-filter]")),this.multiFilterControls=new y(document.querySelectorAll(e+"[data-multifilter]")),this.shuffleControls=new y(document.querySelectorAll(e+"[data-shuffle]")),this.searchControls=new y(document.querySelectorAll(e+"[data-search]")),this.sortAscControls=new y(document.querySelectorAll(e+"[data-sortAsc]")),this.sortDescControls=new y(document.querySelectorAll(e+"[data-sortDesc]")),this.initialize()}return t.prototype.destroy=function(){this.filterControls.destroy(),this.multiFilterControls.destroy(),this.shuffleControls.destroy(),this.searchControls.destroy(),this.sortAscControls.destroy(),this.sortDescControls.destroy()},t.prototype.initialize=function(){var t=this.filterizr,e=this.selector;this.filterControls.on("click",function(e){var n=e.currentTarget.getAttribute("data-filter");t.filter(n)}),this.multiFilterControls.on("click",function(e){var n=e.target.getAttribute("data-multifilter");t.toggleFilter(n)}),this.shuffleControls.on("click",t.shuffle.bind(t)),this.searchControls.on("keyup",a(function(e){var n=e.target.value;t.search(n)},250,!1)),this.sortAscControls.on("click",function(){var n=document.querySelector(e+"[data-sortOrder]").value;t.sort(n,"asc")}),this.sortDescControls.on("click",function(){var n=document.querySelector(e+"[data-sortOrder]").value;t.sort(n,"desc")})},t}(),E=function(){function t(t,e){this.node=t,this.options=e,this.eventReceiver=new y(this.node)}return Object.defineProperty(t.prototype,"dimensions",{get:function(){return{width:this.node.clientWidth,height:this.node.clientHeight}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.styles.destroy()},t.prototype.trigger=function(t){var e=new Event(t);this.node.dispatchEvent(e)},t}();function I(t,e){var n=e.get(),r=n.delay;return"progressive"===n.delayMode?r*t:t%2==0?r:0}var S,O=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},x=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},_=function(){function t(){}return t.animate=function(e,n){return O(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return[4,t.process({node:e,targetStyles:n,eventReceiver:new y(e)})];case 1:return r.sent(),[2]}})})},t.process=function(t){return O(this,void 0,void 0,function(){return x(this,function(e){return[2,new Promise(function(e){t.eventReceiver.on("transitionend",function(){t.eventReceiver.destroy(),e()}),setTimeout(function(){p(t.node,t.targetStyles)},10)})]})})},t}().animate,k=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},C=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},A=function(){function t(t,e){this.node=t,this.options=e}return t.prototype.destroy=function(){this.node.removeAttribute("style")},t.prototype.animate=function(t){return k(this,void 0,void 0,function(){return C(this,function(e){return _(this.node,t),[2]})})},t.prototype.set=function(t){p(this.node,t)},t.prototype.remove=function(t){this.node.style.removeProperty(t)},t}(),T=(S=function(t,e){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),j=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},P=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},F=n(1),L=function(t){function e(e,n,r){var i=t.call(this,e,r)||this;return i._index=n,i}return T(e,t),e.prototype.initialize=function(){var t;this.set((t=this.options,Object.assign({},t.get().filterOutCss,{"-webkit-backface-visibility":"hidden",perspective:"1000px","-webkit-perspective":"1000px","-webkit-transform-style":"preserve-3d",position:"absolute"})))},e.prototype.setFilteredStyles=function(t,e){this.set(function(t,e){return Object.assign({},e,{transform:(e.transform||"")+" translate3d("+t.left+"px, "+t.top+"px, 0)"})}(t,e))},e.prototype.updateTransitionStyle=function(){var t,e,n;this.set((t=this._index,e=this.options,{transition:"all "+(n=e.get()).animationDuration+"s "+n.easing+" "+I(t,e)+"ms, width 1ms"}))},e.prototype.updateWidth=function(){var t=this.options.get().gutterPixels,e=this.node.parentElement.clientWidth,n=this.node.clientWidth,r=n-t*(1/Math.floor(e/n)+1)+"px";this.set({width:r})},e.prototype.enableTransitions=function(){return j(this,void 0,void 0,function(){var t=this;return P(this,function(e){return[2,new Promise(function(e){!!t.node.querySelectorAll("img").length?F(t.node,function(){setTimeout(function(){t.updateTransitionStyle(),e()},10)}):setTimeout(function(){t.updateTransitionStyle(),e()},10)})]})})},e.prototype.disableTransitions=function(){this.remove("transition")},e.prototype.setZIndex=function(t){this.set({"z-index":t})},e.prototype.removeZIndex=function(){this.remove("z-index")},e.prototype.removeWidth=function(){this.remove("width")},e.prototype.setHidden=function(){this.set({display:"none"})},e.prototype.setVisible=function(){this.remove("display")},e}(A),z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(){return(D=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},N=function(t){function e(e,n,r){var i=t.call(this,e,r)||this;return i.filteredOut=!1,i.lastPosition={left:0,top:0},i.sortData=D({},function(t){for(var e={category:"",sort:""},n=0,r=t.attributes,i=r.length;n<i;n++){var o=r[n],s=o.nodeName,a=o.nodeValue;s.includes("data")&&(e[s.slice(5,s.length)]=a)}return delete e.category,delete e.sort,e}(e),{index:n,sortData:e.getAttribute("data-sort")}),i.styledNode=new L(e,n,r),i.styles.initialize(),i.bindEvents(),i}return z(e,t),Object.defineProperty(e.prototype,"styles",{get:function(){return this.styledNode},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unbindEvents()},e.prototype.filterIn=function(t){var e=this.options.get().filterInCss;this.styles.setFilteredStyles(t,e),this.lastPosition=t,this.filteredOut=!1},e.prototype.filterOut=function(){var t=this.options.get().filterOutCss;this.styles.setFilteredStyles(this.lastPosition,t),this.filteredOut=!0},e.prototype.contentsMatchSearch=function(t){return this.node.textContent.toLowerCase().includes(t)},e.prototype.getCategories=function(){return this.node.getAttribute("data-category").split(/\s*,\s*/g)},e.prototype.getSortAttribute=function(t){return this.sortData[t]},e.prototype.bindEvents=function(){var t=this;this.eventReceiver.on("transitionend",function(){t.filteredOut?(t.node.classList.add("filteredOut"),t.styles.setZIndex(-1e3),t.styles.setHidden()):(t.node.classList.remove("filteredOut"),t.styles.removeZIndex())})},e.prototype.unbindEvents=function(){this.eventReceiver.off("transitionend")},e}(E),M=function(){},R=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),H=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},W=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},q=function(t){function e(e){var n=t.call(this)||this;return n._filterItems=e.map(function(t){return t.styles}),n}return R(e,t),e.prototype.resetDisplay=function(){this._filterItems.forEach(function(t){return t.setVisible()})},e.prototype.removeWidth=function(){this._filterItems.forEach(function(t){return t.removeWidth()})},e.prototype.updateWidth=function(){this._filterItems.forEach(function(t){return t.updateWidth()})},e.prototype.updateTransitionStyle=function(){this._filterItems.forEach(function(t){return t.updateTransitionStyle()})},e.prototype.disableTransitions=function(){this._filterItems.forEach(function(t){return t.disableTransitions()})},e.prototype.enableTransitions=function(){return H(this,void 0,void 0,function(){var t=this;return W(this,function(e){return this._filterItems.forEach(function(e){return H(t,void 0,void 0,function(){return W(this,function(t){switch(t.label){case 0:return[4,e.enableTransitions()];case 1:return[2,t.sent()]}})})}),[2]})})},e.prototype.updateWidthWithTransitionsDisabled=function(){this.disableTransitions(),this.removeWidth(),this.updateWidth(),this.enableTransitions()},e}(M),G=function(){function t(t,e){this.filterItems=t,this.styledFilterItems=new q(t),this.options=e}return Object.defineProperty(t.prototype,"styles",{get:function(){return this.styledFilterItems},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this.filterItems.length},enumerable:!0,configurable:!0}),t.prototype.getItem=function(t){return this.filterItems[t]},t.prototype.destroy=function(){this.filterItems.forEach(function(t){return t.destroy()})},t.prototype.push=function(t){return this.filterItems.push(t)},t.prototype.remove=function(t){this.filterItems=this.filterItems.filter(function(e){return e.node!==t})},t.prototype.getFiltered=function(t){var e=this,n=this.options.searchTerm,r=this.search(this.filterItems,n);return"all"===t?r:r.filter(function(n){return e.shouldBeFiltered(n.getCategories(),t)})},t.prototype.getFilteredOut=function(t){var e=this,n=this.options.searchTerm;return this.filterItems.filter(function(r){var i=r.getCategories(),o=e.shouldBeFiltered(i,t),s=r.contentsMatchSearch(n);return!o||!s})},t.prototype.sort=function(t,e){void 0===t&&(t="index"),void 0===e&&(e="asc");var n,r,i=(n=this.filterItems,r=function(e){return e.getSortAttribute(t)},n.slice(0).sort(function(t){return function(e,n){var r=t(e),i=t(n);return r<i?-1:r>i?1:0}}(r))),o="asc"===e?i:i.reverse();this.filterItems=o},t.prototype.shuffle=function(){var t=this,e=this.getFiltered(this.options.filter);if(e.length>1){var n=this.getFiltered(this.options.filter).map(function(e){return t.filterItems.indexOf(e)}).slice(),r=void 0;do{r=d(e)}while(u(e,r));(r=d(e)).forEach(function(e,r){var i,o=n[r];t.filterItems=Object.assign([],t.filterItems,((i={})[o]=e,i))})}},t.prototype.search=function(t,e){return e?t.filter(function(t){return t.contentsMatchSearch(e)}):t},t.prototype.shouldBeFiltered=function(t,e){var n,r,i=this.options.getRaw().multifilterLogicalOperator;return Array.isArray(e)?"or"===i?!!(n=t,r=e,Array.prototype.filter.call(n,function(t){return r.includes(t)})).length:function(t,e){return t.reduce(function(t,n){return t&&e.includes(n)},!0)}(e,t):t.includes(e)},t}(),B=function(){return(B=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Q=function(t){return{padding:t.get().gutterPixels+"px"}},Z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),$=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Z(e,t),e.prototype.initialize=function(){var t;this.set((t=this.options,B({},Q(t),{position:"relative",width:"100%",display:"flex",flexWrap:"wrap"})))},e.prototype.updatePaddings=function(){this.set(Q(this.options))},e.prototype.setHeight=function(t){this.set({height:t+"px"})},e}(A),J=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(t){function e(e,n){var i=this;if(!e)throw new Error("Filterizr: could not initialize container, check the selector or node you passed to the constructor exists.");return(i=t.call(this,e,n)||this).styledNode=new $(e,n),i._filterizrState=r.IDLE,i.styles.initialize(),i.filterItems=i.makeFilterItems(i.options),i.bindEvents(),i}return J(e,t),Object.defineProperty(e.prototype,"styles",{get:function(){return this.styledNode},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterizrState",{set:function(t){this._filterizrState=t},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unbindEvents(),this.filterItems.destroy()},e.prototype.makeFilterItems=function(t){var e=Array.from(this.node.querySelectorAll(t.get().gridItemsSelector)).map(function(e,n){return new N(e,n,t)}),n=new G(e,t);if(!n.length)throw new Error("Filterizr: cannot initialize empty container. Make sure the gridItemsSelector option corresponds to the selector of your grid's items");return n.styles.updateWidth(),n},e.prototype.insertItem=function(t){var e=t.cloneNode(!0);e.removeAttribute("style"),this.node.appendChild(e);var n=new N(e,this.filterItems.length,this.options);n.styles.enableTransitions(),n.styles.updateWidth(),this.filterItems.push(n)},e.prototype.removeItem=function(t){this.filterItems.remove(t),this.node.removeChild(t)},e.prototype.setHeight=function(t){this.dimensions.height=t,this.styles.setHeight(t)},e.prototype.bindEvents=function(){var t=this,e=this.options.get(),n=e.animationDuration,i=e.callbacks,o=e.delay,s=e.delayMode,u=e.gridItemsSelector,c="progressive"===s?o*this.filterItems.length:o;this.eventReceiver.on("transitionend",a(function(e){if(Array.from(e.target.classList).reduce(function(t,e){return t||u.includes(e)},!1)){switch(t._filterizrState){case r.FILTERING:t.trigger("filteringEnd");break;case r.SORTING:t.trigger("sortingEnd");break;case r.SHUFFLING:t.trigger("shufflingEnd")}t.filterizrState=r.IDLE}},100*n+c,!1)),this.eventReceiver.on("init",i.onInit),this.eventReceiver.on("filteringStart",i.onFilteringStart),this.eventReceiver.on("filteringEnd",i.onFilteringEnd),this.eventReceiver.on("shufflingStart",i.onShufflingStart),this.eventReceiver.on("shufflingEnd",i.onShufflingEnd),this.eventReceiver.on("sortingStart",i.onSortingStart),this.eventReceiver.on("sortingEnd",i.onSortingEnd)},e.prototype.unbindEvents=function(){this.eventReceiver.off("transitionend"),this.eventReceiver.off("init"),this.eventReceiver.off("filteringStart"),this.eventReceiver.off("filteringEnd"),this.eventReceiver.off("shufflingStart"),this.eventReceiver.off("shufflingEnd"),this.eventReceiver.off("sortingStart"),this.eventReceiver.off("sortingEnd")},e}(E);var U=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K=function(){return(K=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},X=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},Y=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},tt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return U(e,t),e.prototype.initialize=function(){var t=this.options.get().spinner.styles;this.set(K({},t,{opacity:1,transition:"all ease-out 500ms"}))},e.prototype.fadeOut=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.animate({opacity:0})];case 1:return t.sent(),[2]}})})},e}(A),et=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},nt=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},rt=function(){function t(t,e){var n,r,i;this.filterContainer=t,this.node=(n=e.get().spinner,r='<?xml version="1.0" encoding="UTF-8"?><svg stroke="'+n.fillColor+'" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>',(i=document.createElement("img")).classList.add("Filterizr__spinner"),i.src="data:image/svg+xml;base64,"+window.btoa(r),i.alt="Spinner",i),this.styledNode=new tt(this.node,e),this.initialize()}return Object.defineProperty(t.prototype,"styles",{get:function(){return this.styledNode},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){return et(this,void 0,void 0,function(){return nt(this,function(t){switch(t.label){case 0:return[4,this.styles.fadeOut()];case 1:return t.sent(),this.filterContainer.node.removeChild(this.node),[2]}})})},t.prototype.initialize=function(){this.styles.initialize(),this.filterContainer.node.appendChild(this.node)},t}(),it=n(2),ot=n.n(it);function st(t,e){return t.reduce(function(t,n){return t+n.width+e},0)}function at(t,e){return t.length?t.reduce(function(t,n){return t+n.height+e},0):0}var ut=function(){return(ut=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},ct=function(){function t(t){this.init(t)}return t.prototype.init=function(t){this.root={x:0,y:0,w:t}},t.prototype.fit=function(t){var e,n,r,i=t.length,o=i>0?t[0].h:0;for(this.root.h=o,e=0;e<i;e++)r=t[e],(n=this.findNode(this.root,r.w,r.h))?r.fit=this.splitNode(n,r.w,r.h):r.fit=this.growDown(r.w,r.h)},t.prototype.findNode=function(t,e,n){return t.used?this.findNode(t.right,e,n)||this.findNode(t.down,e,n):e<=t.w&&n<=t.h?t:null},t.prototype.splitNode=function(t,e,n){return t.used=!0,t.down={x:t.x,y:t.y+n,w:t.w,h:t.h-n},t.right={x:t.x+e,y:t.y,w:t.w-e,h:n},t},t.prototype.growDown=function(t,e){var n;return this.root={used:!0,x:0,y:0,w:this.root.w,h:this.root.h+e,down:{x:0,y:this.root.h,w:this.root.w,h:e},right:this.root},(n=this.findNode(this.root,t,e))?this.splitNode(n,t,e):null},t}(),lt=ot()(function(t,e,n){var r=n.gutterPixels,o=n.layout;if(!e.length)return{containerHeight:0,itemsPositions:[]};switch(o){case i.HORIZONTAL:return function(t,e){return{containerHeight:Math.max.apply(Math,t.map(function(t){return t.height}))+2*e,itemsPositions:t.map(function(n,r){return{left:st(t.slice(0,r),e),top:0}})}}(e,r);case i.VERTICAL:return function(t,e){return{containerHeight:at(t,e)+e,itemsPositions:t.map(function(n,r){return{left:0,top:at(t.slice(0,r),e)}})}}(e,r);case i.SAME_HEIGHT:return function(t,e,n){var r=e.map(function(t,r){var i=t.width;return e.slice(0,r).reduce(function(t,e){return t+e.width+2*n},0)+i+n}),i=r.reduce(function(e,n,r){var i,o=Object.keys(e).length;return ut({},e,n>t*o&&((i={})[o]=r,i))},{0:0}),o=e.map(function(o,s){var a=o.height,u=Math.floor(r[s]/t);return{left:e.slice(i[u],s).reduce(function(t,e){return t+e.width+n},0),top:(a+n)*u}});return{containerHeight:Object.keys(i).length*(e[0].height+n)+n,itemsPositions:o}}(t,e,r);case i.SAME_WIDTH:return function(t,e,n){var r=Math.floor(t/(e[0].width+n)),i=e.map(function(t,i){var o=t.width,s=Math.floor(i/r);return{left:(i-r*s)*(o+n),top:e.slice(0,i).filter(function(t,e){return(i-e)%r==0}).reduce(function(t,e){return t+e.height+n},0)}}),o=e.reduce(function(t,e,i){var o=e.height,s=Math.floor(i/r);return t[i-r*s]+=o+n,t},Array.apply(null,Array(r)).map(Number.prototype.valueOf,0));return{containerHeight:Math.max.apply(Math,o)+n,itemsPositions:i}}(t,e,r);case i.PACKED:return function(t,e,n){var r=new ct(t),i=e.map(function(t){var e=t.width,r=t.height;return{w:e+n,h:r+n}});r.fit(i);var o=i.map(function(t){var e=t.fit;return{left:e.x,top:e.y}});return{containerHeight:r.root.h+n,itemsPositions:o}}(t,e,r);case i.SAME_SIZE:default:return function(t,e,n){var r=Math.floor(t/(e[0].width+n)),i=e.map(function(t,e){var i=t.width,o=t.height,s=Math.floor(e/r);return{left:(e-r*s)*(i+n),top:s*(o+n)}});return{containerHeight:Math.ceil(e.length/r)*(e[0].height+n)+n,itemsPositions:i}}(t,e,r)}});function ft(t){if(!t)throw new Error("Filterizr as a jQuery plugin, requires jQuery to work. If you would prefer to use the vanilla JS version, please use the correct bundle file.");t.fn.filterizr=function(){var e="."+t.trim(this.get(0).className).replace(/\s+/g,"."),n=arguments;if(!this._fltr&&0===n.length||1===n.length&&"object"==typeof n[0]){var r=n.length>0?n[0]:v;this._fltr=new yt(e,r)}else if(n.length>=1&&"string"==typeof n[0]){var i=n[0],o=Array.prototype.slice.call(n,1),s=this._fltr;switch(i){case"filter":return s.filter.apply(s,o),this;case"insertItem":return s.insertItem.apply(s,o),this;case"removeItem":return s.removeItem.apply(s,o),this;case"toggleFilter":return s.toggleFilter.apply(s,o),this;case"sort":return s.sort.apply(s,o),this;case"shuffle":return s.shuffle.apply(s,o),this;case"search":return s.search.apply(s,o),this;case"setOptions":return s.setOptions.apply(s,o),this;case"destroy":return s.destroy.apply(s,o),delete this._fltr,this;default:throw new Error("Filterizr: "+i+" is not part of the Filterizr API. Please refer to the docs for more information.")}}return this}}var ht=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},pt=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},dt=n(1),yt=function(){function t(t,e){void 0===t&&(t=".filtr-container"),void 0===e&&(e={}),this.options=new b(e);var n=this.options,r=n.areControlsEnabled,i=n.controlsSelector,o=n.isSpinnerEnabled;this.windowEventReceiver=new y(window),this.filterContainer=new V(c(t),this.options),this.imagesHaveLoaded=!this.filterContainer.node.querySelectorAll("img").length,r&&(this.filterControls=new w(this,i)),o&&(this.spinner=new rt(this.filterContainer,this.options)),this.initialize()}return Object.defineProperty(t.prototype,"filterItems",{get:function(){return this.filterContainer.filterItems},enumerable:!0,configurable:!0}),t.prototype.filter=function(t){var e=this.filterContainer;e.trigger("filteringStart"),e.filterizrState=r.FILTERING,t=Array.isArray(t)?t.map(function(t){return t.toString()}):t.toString(),this.options.filter=t,this.render()},t.prototype.destroy=function(){var t=this.windowEventReceiver,e=this.filterControls;this.filterContainer.destroy(),t.destroy(),this.options.areControlsEnabled&&e&&e.destroy()},t.prototype.insertItem=function(t){return ht(this,void 0,void 0,function(){return pt(this,function(e){switch(e.label){case 0:return this.filterContainer.insertItem(t),[4,this.waitForImagesToLoad()];case 1:return e.sent(),this.render(),[2]}})})},t.prototype.removeItem=function(t){this.filterContainer.removeItem(t),this.render()},t.prototype.sort=function(t,e){void 0===t&&(t="index"),void 0===e&&(e="asc");var n=this.filterContainer,i=this.filterItems;n.trigger("sortingStart"),n.filterizrState=r.SORTING,i.sort(t,e),this.render()},t.prototype.search=function(t){void 0===t&&(t=this.options.get().searchTerm),this.options.searchTerm=t.toLowerCase(),this.render()},t.prototype.shuffle=function(){var t=this.filterContainer,e=this.filterItems;t.trigger("shufflingStart"),t.filterizrState=r.SHUFFLING,e.shuffle(),this.render()},t.prototype.setOptions=function(t){var e=this.filterContainer,n=this.filterItems,r="animationDuration"in t||"delay"in t||"delayMode"in t;(t.callbacks||r)&&e.unbindEvents(),this.options.set(t),(t.easing||r)&&n.styles.updateTransitionStyle(),(t.callbacks||r)&&e.bindEvents(),"searchTerm"in t&&this.search(t.searchTerm),("filter"in t||"multifilterLomultifilterLogicalOperator"in t)&&this.filter(this.options.filter),"gutterPixels"in t&&(this.filterContainer.styles.updatePaddings(),this.filterItems.styles.updateWidthWithTransitionsDisabled(),this.render())},t.prototype.toggleFilter=function(t){this.options.toggleFilter(t),this.filter(this.options.filter)},t.prototype.render=function(){var t=this.filterContainer,e=this.filterItems,n=this.options,r=e.getFiltered(n.filter);e.styles.resetDisplay(),e.getFilteredOut(n.filter).forEach(function(t){t.filterOut()});var i=lt(t.dimensions.width,r.map(function(t){return t.dimensions}),this.options.get()),o=i.containerHeight,s=i.itemsPositions;t.setHeight(o),r.forEach(function(t,e){t.filterIn(s[e])})},t.prototype.initialize=function(){return ht(this,void 0,void 0,function(){var t,e,n,r;return pt(this,function(i){switch(i.label){case 0:return e=(t=this).filterContainer,n=t.filterItems,r=t.spinner,this.bindEvents(),[4,this.waitForImagesToLoad()];case 1:return i.sent(),this.options.isSpinnerEnabled?[4,r.destroy()]:[3,3];case 2:i.sent(),i.label=3;case 3:return this.render(),[4,n.styles.enableTransitions()];case 4:return i.sent(),e.trigger("init"),[2]}})})},t.prototype.bindEvents=function(){var t=this,e=this.filterItems;this.windowEventReceiver.on("resize",a(function(){e.styles.updateWidthWithTransitionsDisabled(),t.render()},50,!1))},t.prototype.waitForImagesToLoad=function(){return ht(this,void 0,void 0,function(){var t,e,n,r=this;return pt(this,function(i){return e=(t=this).imagesHaveLoaded,n=t.filterContainer,e?[2,Promise.resolve()]:[2,new Promise(function(t){dt(n.node,function(){r.imagesHaveLoaded=!0,t()})})]})})},t.FilterContainer=V,t.FilterItem=N,t.defaultOptions=v,t.installAsJQueryPlugin=ft,t}();n.d(e,"a",function(){return yt})},function(t,e,n){var r,i;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(o,s){"use strict";r=[n(3)],void 0===(i=function(t){return function(t,e){var n=t.jQuery,r=t.console;function i(t,e){for(var n in e)t[n]=e[n];return t}var o=Array.prototype.slice;function s(t,e,a){if(!(this instanceof s))return new s(t,e,a);var u=t;"string"==typeof t&&(u=document.querySelectorAll(t)),u?(this.elements=function(t){if(Array.isArray(t))return t;if("object"==typeof t&&"number"==typeof t.length)return o.call(t);return[t]}(u),this.options=i({},this.options),"function"==typeof e?a=e:i(this.options,e),a&&this.on("always",a),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(u||t))}s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var n=t.querySelectorAll("img"),r=0;r<n.length;r++){var i=n[r];this.addImage(i)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(r=0;r<o.length;r++){var s=o[r];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function u(t){this.img=t}function c(t,e){this.url=t,this.element=e,this.img=new Image}return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(e.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,t),r=n.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new u(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var n=new c(t,e);this.images.push(n)},s.prototype.check=function(){var t=this;function e(e,n,r){setTimeout(function(){t.progress(e,n,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},s.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+n,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},u.prototype=Object.create(e.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},u.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(u.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(n(this))})},s.makeJQueryPlugin(),s}(o,t)}.apply(e,r))||(t.exports=i)}("undefined"!=typeof window?window:this)},function(t,e){function n(t,e,n,r){var i,o=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:n(r),s=e.get(o);return void 0===s&&(s=t.call(this,r),e.set(o,s)),s}function r(t,e,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),o=e.get(i);return void 0===o&&(o=t.apply(this,r),e.set(i,o)),o}function i(t,e,n,r,i){return n.bind(e,t,r,i)}function o(t,e){return i(t,this,1===t.length?n:r,e.cache.create(),e.serializer)}function s(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(t){return t in this.cache},a.prototype.get=function(t){return this.cache[t]},a.prototype.set=function(t,e){this.cache[t]=e};var u={create:function(){return new a}};t.exports=function(t,e){var n=e&&e.cache?e.cache:u,r=e&&e.serializer?e.serializer:s;return(e&&e.strategy?e.strategy:o)(t,{cache:n,serializer:r})},t.exports.strategies={variadic:function(t,e){return i(t,this,r,e.cache.create(),e.serializer)},monadic:function(t,e){return i(t,this,n,e.cache.create(),e.serializer)}}},function(t,e,n){var r,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(r=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},r=n[t]=n[t]||[];return-1==r.indexOf(e)&&r.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=n.indexOf(e);return-1!=r&&n.splice(r,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var r=this._onceEvents&&this._onceEvents[t],i=0;i<n.length;i++){var o=n[i];r&&r[o]&&(this.off(t,o),delete r[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?r.call(e,n,e,t):r)||(t.exports=i)},function(t,e,n){"use strict";n.r(e);var r,i=n(0);
/**
 * Filterizr is a JavaScript library that sorts, shuffles and applies stunning filters over
 * responsive galleries using CSS3 transitions and custom CSS effects.
 *
 * @author Yiotis Kaltsikis
 * @see {@link http://yiotis.net/filterizr}
 * @license MIT
 */
/**
 * Filterizr is a JavaScript library that sorts, shuffles and applies stunning filters over
 * responsive galleries using CSS3 transitions and custom CSS effects.
 *
 * @author Yiotis Kaltsikis
 * @see {@link http://yiotis.net/filterizr}
 * @license MIT
 */
r=window.jQuery,i.a.installAsJQueryPlugin(r),e.default=i.a}]).default;

// https://github.com/clarketm/image-map#readme
/**
 * Copyright (c) 2020, Travis Clarke (https://www.travismclarke.com/)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? (module.exports = factory())
		: typeof define === "function" && define.amd
		? define(factory)
		: ((global = global || self), (global.ImageMap = factory()));
})(this, function() {
	"use strict";

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	var version = "2.0.1";

	var RESIZE = "resize";
	var LOAD = "load";
	var USEMAP = "usemap";
	var COORDS = "coords";
	var COMPLETE = "complete";
	/**
	 * ImageMap main library constructor
	 *
	 * @param selector {string} CSS selector
	 * @param wait {number} [wait=500] debounce wait interval
	 * @constructor
	 */

	var ImageMap = /*#__PURE__*/ (function() {
		function ImageMap(selector, wait) {
			_classCallCheck(this, ImageMap);

			this.selector =
				selector instanceof Array
					? selector
					: document.querySelectorAll(selector);
			if (document.readyState !== COMPLETE)
				window.addEventListener(LOAD, this.update.bind(this));
			else this.update();
			window.addEventListener(
				RESIZE,
				this.debounce(this.update, wait).bind(this)
			);
		}

		_createClass(
			ImageMap,
			[
				{
					key: "update",

					/**
					 * Update
					 */
					value: function update() {
						var imgs = this.selector;

						for (var i = 0; i < imgs.length; i++) {
							var img = imgs[i];
							if (img.getAttribute(USEMAP) === undefined) return;
							var newImg = img.cloneNode();
							newImg.addEventListener(
								LOAD,
								this.handleImageLoad(img.offsetWidth, img.offsetHeight)
							);
							newImg.src = img.src; // required for IE
						}
					}
					/**
					 * Debounce
					 *
					 * @param {function} func
					 * @param {number} [wait=500]
					 */
				},
				{
					key: "debounce",
					value: function debounce(func) {
						var _this = this;

						var wait =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: 500;
						var timeout;
						return function() {
							for (
								var _len = arguments.length, args = new Array(_len), _key = 0;
								_key < _len;
								_key++
							) {
								args[_key] = arguments[_key];
							}

							window.clearTimeout(timeout);
							timeout = window.setTimeout(
								function(ctx) {
									return func.apply(ctx, args);
								},
								wait,
								_this
							);
						};
					}
					/**
					 * handleImageLoad
					 *
					 * @param {number} [offsetWidth=0]
					 * @param {number} [offsetHeight=0]
					 */
				},
				{
					key: "handleImageLoad",
					value: function handleImageLoad() {
						var offsetWidth =
							arguments.length > 0 && arguments[0] !== undefined
								? arguments[0]
								: 0;
						var offsetHeight =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: 0;
						return function(e) {
							var w = e.target.width;
							var h = e.target.height;
							var mapName = e.target.getAttribute(USEMAP).replace(/^#/, "");
							var areas = document.querySelectorAll(
								ImageMap.genAreaSelector(mapName)
							);

							var _loop = function _loop(i) {
								var area = areas[i];
								var coordsString = (area.dataset[COORDS] =
									area.dataset[COORDS] || area.getAttribute(COORDS));
								var coordsArrayOld = coordsString.split(",");
								var coordsArrayNew = coordsArrayOld.map(function(_, i) {
									// Scale the coordinate from the original width/height to the actual rendered width/height (i.e. offset)
									return i % 2 === 0
										? Number((coordsArrayOld[i] / w) * offsetWidth)
										: Number((coordsArrayOld[i] / h) * offsetHeight);
								});
								area.setAttribute(COORDS, coordsArrayNew.toString());
							};

							for (var i = 0; i < areas.length; i++) {
								_loop(i);
							}
						};
					}
				}
			],
			[
				{
					key: "genAreaSelector",
					value: function genAreaSelector(mapName) {
						return 'map[name="'.concat(mapName, '"] area');
					}
				}
			]
		);

		return ImageMap;
	})();

	function _ImageMap(selector, wait) {
		return new ImageMap(selector, wait);
	}

	_ImageMap.VERSION = version;

	return _ImageMap;
});

// http://dimsemenov.com/plugins/magnific-popup/
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) {
if (typeof define === 'function' && define.amd) {
 // AMD. Register as an anonymous module.
 define(['jquery'], factory);
 } else if (typeof exports === 'object') {
 // Node/CommonJS
 factory(require('jquery'));
 } else {
 // Browser globals
 factory(window.jQuery || window.Zepto);
 }
 }(function($) {

/*>>core*/
/**
 *
 * Magnific Popup Core JS file
 *
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true;
		}

		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}

		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin.
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) {
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}

		mfp.types = [];
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data );
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}


		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}



		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}



		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}

		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();


		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}



		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);

		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;

		// Wait for next cycle to allow CSS transition
		setTimeout(function() {

			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}

			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}

		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},

	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));

// small custom function to smoth scroll
function myScrollLink() {
	var navLink = jQuery("[data-scroll]");
	navLink.on('click', function(e) {
		var elementClick = jQuery(this).attr("href");
		var destination = jQuery(elementClick).offset().top;
		var scrollTime = (jQuery(this).attr("data-scrollTime") != undefined) ? +(jQuery(this).attr("data-scrollTime")) : 1300;
		var scrollTopVar = (jQuery(this).attr("data-scrollTop") != undefined) ? +(jQuery(this).attr("data-scrollTop")) : 0;
		var scrollBottomVar = (jQuery(this).attr("data-scrollBottom") != undefined) ? +(jQuery(this).attr("data-scrollBottom")) : 0;
		var destinationFull = destination - scrollTopVar + scrollBottomVar;

		jQuery("html,body").stop().animate({
			scrollTop: destinationFull
		}, scrollTime);
		return false;
	});
}
//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------