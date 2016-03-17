/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.0.4
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,s){if(e){if(s.element_.classList.contains(s.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var t=document.createElement("span");t.classList.add(s.CssClasses_.MDL_RIPPLE_CONTAINER),t.classList.add(s.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(s.CssClasses_.MDL_RIPPLE),t.appendChild(i),e.appendChild(t)}e.addEventListener("click",function(t){t.preventDefault();var i=e.href.split("#")[1],n=s.element_.querySelector("#"+i);s.resetTabState_(),s.resetPanelState_(),e.classList.add(s.CssClasses_.ACTIVE_CLASS),n.classList.add(s.CssClasses_.ACTIVE_CLASS)})}}function s(e,s,t,i){if(e){if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var n=document.createElement("span");n.classList.add(i.CssClasses_.RIPPLE_CONTAINER),n.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE),n.appendChild(a),e.appendChild(n)}e.addEventListener("click",function(n){n.preventDefault();var a=e.href.split("#")[1],l=i.content_.querySelector("#"+a);i.resetTabState_(s),i.resetPanelState_(t),e.classList.add(i.CssClasses_.IS_ACTIVE),l.classList.add(i.CssClasses_.IS_ACTIVE)})}}window.componentHandler=function(){function e(e,s){for(var t=0;t<c.length;t++)if(c[t].className===e)return void 0!==s&&(c[t]=s),c[t];return!1}function s(e){var s=e.getAttribute("data-upgraded");return null===s?[""]:s.split(",")}function t(e,t){var i=s(e);return-1!==i.indexOf(t)}function i(s,t){if(void 0===s&&void 0===t)for(var a=0;a<c.length;a++)i(c[a].className,c[a].cssClass);else{var l=s;if(void 0===t){var o=e(l);o&&(t=o.cssClass)}for(var r=document.querySelectorAll("."+t),_=0;_<r.length;_++)n(r[_],l)}}function n(i,n){if(!("object"==typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=s(i),l=[];if(n)t(i,n)||l.push(e(n));else{var o=i.classList;c.forEach(function(e){o.contains(e.cssClass)&&-1===l.indexOf(e)&&!t(i,e.className)&&l.push(e)})}for(var r,_=0,d=l.length;d>_;_++){if(r=l[_],!r)throw new Error("Unable to find a registered component for the given class.");a.push(r.className),i.setAttribute("data-upgraded",a.join(","));var h=new r.classConstructor(i);h[C]=r,p.push(h);for(var u=0,m=r.callbacks.length;m>u;u++)r.callbacks[u](i);r.widget&&(i[r.className]=h);var E=document.createEvent("Events");E.initEvent("mdl-componentupgraded",!0,!0),i.dispatchEvent(E)}}function a(e){Array.isArray(e)||(e="function"==typeof e.item?Array.prototype.slice.call(e):[e]);for(var s,t=0,i=e.length;i>t;t++)s=e[t],s instanceof HTMLElement&&(s.children.length>0&&a(s.children),n(s))}function l(s){var t={classConstructor:s.constructor,className:s.classAsString,cssClass:s.cssClass,widget:void 0===s.widget?!0:s.widget,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===t.cssClass)throw new Error("The provided cssClass has already been registered.");if(e.className===t.className)throw new Error("The provided className has already been registered")}),s.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var i=e(s.classAsString,t);i||c.push(t)}function o(s,t){var i=e(s);i&&i.callbacks.push(t)}function r(){for(var e=0;e<c.length;e++)i(c[e].className)}function _(e){for(var s=0;s<p.length;s++){var t=p[s];if(t.element_===e)return t}}function d(e){if(e&&e[C].classConstructor.prototype.hasOwnProperty(u)){e[u]();var s=p.indexOf(e);p.splice(s,1);var t=e.element_.getAttribute("data-upgraded").split(","),i=t.indexOf(e[C].classAsString);t.splice(i,1),e.element_.setAttribute("data-upgraded",t.join(","));var n=document.createEvent("Events");n.initEvent("mdl-componentdowngraded",!0,!0),e.element_.dispatchEvent(n)}}function h(e){var s=function(e){d(_(e))};if(e instanceof Array||e instanceof NodeList)for(var t=0;t<e.length;t++)s(e[t]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");s(e)}}var c=[],p=[],u="mdlDowngrade_",C="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:n,upgradeElements:a,upgradeAllRegistered:r,registerUpgradedCallback:o,register:l,downgradeElements:h}}(),window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),componentHandler.upgradeAllRegistered()):componentHandler.upgradeElement=componentHandler.register=function(){}}),componentHandler.ComponentConfig,componentHandler.Component,Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var n=t[i];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var a=0;window.requestAnimationFrame=function(e){var s=Date.now(),t=Math.max(a+16,s);return setTimeout(function(){e(a=t)},t-s)},window.cancelAnimationFrame=clearTimeout}var l=function(e){this.element_=e,this.init()};window.MaterialButton=l,l.prototype.Constant_={},l.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},l.prototype.blurHandler_=function(e){e&&this.element_.blur()},l.prototype.disable=function(){this.element_.disabled=!0},l.prototype.enable=function(){this.element_.disabled=!1},l.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},l.prototype.mdlDowngrade_=function(){this.rippleElement_&&this.rippleElement_.removeEventListener("mouseup",this.boundRippleBlurHandler),this.element_.removeEventListener("mouseup",this.boundButtonBlurHandler),this.element_.removeEventListener("mouseleave",this.boundButtonBlurHandler)},componentHandler.register({constructor:l,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var o=function(e){this.element_=e,this.init()};window.MaterialCheckbox=o,o.prototype.Constant_={TINY_TIMEOUT:.001},o.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},o.prototype.onChange_=function(e){this.updateClasses_()},o.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},o.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},o.prototype.onMouseUp_=function(e){this.blur_()},o.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},o.prototype.blur_=function(e){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},o.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},o.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},o.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},o.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},o.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},o.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},o.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var s=document.createElement("span");s.classList.add(this.CssClasses_.FOCUS_HELPER);var t=document.createElement("span");if(t.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(t),this.element_.appendChild(s),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},o.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundRippleMouseUp),this.inputElement_.removeEventListener("change",this.boundInputOnChange),this.inputElement_.removeEventListener("focus",this.boundInputOnFocus),this.inputElement_.removeEventListener("blur",this.boundInputOnBlur),this.element_.removeEventListener("mouseup",this.boundElementMouseUp)},componentHandler.register({constructor:o,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialIconToggle=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(e){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},r.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundRippleMouseUp),this.inputElement_.removeEventListener("change",this.boundInputOnChange),this.inputElement_.removeEventListener("focus",this.boundInputOnFocus),this.inputElement_.removeEventListener("blur",this.boundInputOnBlur),this.element_.removeEventListener("mouseup",this.boundElementOnMouseUp)},componentHandler.register({constructor:r,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialMenu=_,_.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},_.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},_.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},_.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var s=document.createElement("div");s.classList.add(this.CssClasses_.OUTLINE),this.outline_=s,e.insertBefore(s,this.element_);var t=this.element_.getAttribute("for"),i=null;t&&(i=document.getElementById(t),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},_.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var s=this.forElement_.getBoundingClientRect(),t=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=t.right-s.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=t.bottom-s.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=t.right-s.right+"px",this.container_.style.bottom=t.bottom-s.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},_.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var s=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");s&&s.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),s[s.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),s[0].focus()))}},_.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var s=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(s&&s.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var t=Array.prototype.slice.call(s).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),t>0?s[t-1].focus():s[s.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),s.length>t+1?s[t+1].focus():s[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},_.prototype.handleItemClick_=function(e){null!==e.target.getAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},_.prototype.applyClip_=function(e,s){this.element_.style.clip=this.element_.classList.contains(this.CssClasses_.UNALIGNED)?null:this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?"rect(0 "+s+"px 0 "+s+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?"rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?"rect("+e+"px "+s+"px "+e+"px "+s+"px)":null},_.prototype.addAnimationEndListener_=function(){var e=function(){this.element_.removeEventListener("transitionend",e),this.element_.removeEventListener("webkitTransitionEnd",e),this.element_.classList.remove(this.CssClasses_.IS_ANIMATING)}.bind(this);this.element_.addEventListener("transitionend",e),this.element_.addEventListener("webkitTransitionEnd",e)},_.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var s=this.element_.getBoundingClientRect().height,t=this.element_.getBoundingClientRect().width;this.container_.style.width=t+"px",this.container_.style.height=s+"px",this.outline_.style.width=t+"px",this.outline_.style.height=s+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(s-n[a].offsetTop-n[a].offsetHeight)/s*i+"s":n[a].offsetTop/s*i+"s",n[a].style.transitionDelay=l}this.applyClip_(s,t),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+t+"px "+s+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(s){s===e||this.closing_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},_.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),s=0;s<e.length;s++)e[s].style.transitionDelay=null;var t=this.element_.getBoundingClientRect().height,i=this.element_.getBoundingClientRect().width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(t,i),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},_.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},_.prototype.mdlDowngrade_=function(){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),s=0;s<e.length;s++)e[s].removeEventListener("click",this.boundItemClick),e[s].removeEventListener("keydown",this.boundItemKeydown)},componentHandler.register({constructor:_,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialProgress=d,d.prototype.Constant_={},d.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},d.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},d.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},d.prototype.mdlDowngrade_=function(){for(;this.element_.firstChild;)this.element_.removeChild(this.element_.firstChild)},componentHandler.register({constructor:d,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialRadio=h,h.prototype.Constant_={TINY_TIMEOUT:.001},h.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},h.prototype.onChange_=function(e){for(var s=document.getElementsByClassName(this.CssClasses_.JS_RADIO),t=0;t<s.length;t++){var i=s[t].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&s[t].MaterialRadio.updateClasses_()}},h.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},h.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},h.prototype.onMouseup_=function(e){this.blur_()},h.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},h.prototype.blur_=function(e){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},h.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},h.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},h.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},h.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},h.prototype.check=function(){this.btnElement_.checked=!0,this.updateClasses_()},h.prototype.uncheck=function(){this.btnElement_.checked=!1,this.updateClasses_()},h.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var s=document.createElement("span");s.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(s);var t;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),t=document.createElement("span"),t.classList.add(this.CssClasses_.RIPPLE_CONTAINER),t.classList.add(this.CssClasses_.RIPPLE_EFFECT),t.classList.add(this.CssClasses_.RIPPLE_CENTER),t.addEventListener("mouseup",this.onMouseup_.bind(this));var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),t.appendChild(i),this.element_.appendChild(t)}this.btnElement_.addEventListener("change",this.onChange_.bind(this)),this.btnElement_.addEventListener("focus",this.onFocus_.bind(this)),this.btnElement_.addEventListener("blur",this.onBlur_.bind(this)),this.element_.addEventListener("mouseup",this.onMouseup_.bind(this)),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},componentHandler.register({constructor:h,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var c=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=c,c.prototype.Constant_={},c.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},c.prototype.onInput_=function(e){this.updateValueStyles_()},c.prototype.onChange_=function(e){this.updateValueStyles_()},c.prototype.onMouseUp_=function(e){e.target.blur()},c.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var s=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(s)}},c.prototype.updateValueStyles_=function(e){var s=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===s?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=s,this.backgroundLower_.style.webkitFlex=s,this.backgroundUpper_.style.flex=1-s,this.backgroundUpper_.style.webkitFlex=1-s)},c.prototype.disable=function(){this.element_.disabled=!0},c.prototype.enable=function(){this.element_.disabled=!1},c.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},c.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var s=document.createElement("div");s.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(s,this.element_),this.element_.parentElement.removeChild(this.element_),s.appendChild(this.element_);var t=document.createElement("div");t.classList.add(this.CssClasses_.BACKGROUND_FLEX),s.appendChild(t),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),t.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),t.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},c.prototype.mdlDowngrade_=function(){this.element_.removeEventListener("input",this.boundInputHandler),this.element_.removeEventListener("change",this.boundChangeHandler),this.element_.removeEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.removeEventListener("mousedown",this.boundContainerMouseDownHandler)},componentHandler.register({constructor:c,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var p=function(e){this.element_=e,this.init()};window.MaterialSpinner=p,p.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},p.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},p.prototype.createLayer=function(e){var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),s.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),t.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[t,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}s.appendChild(t),s.appendChild(i),s.appendChild(n),this.element_.appendChild(s)},p.prototype.stop=function(){this.element_.classList.remove("is-active")},p.prototype.start=function(){this.element_.classList.add("is-active")},p.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded");

}},componentHandler.register({constructor:p,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSwitch=u,u.prototype.Constant_={TINY_TIMEOUT:.001},u.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},u.prototype.onChange_=function(e){this.updateClasses_()},u.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},u.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},u.prototype.onMouseUp_=function(e){this.blur_()},u.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},u.prototype.blur_=function(e){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},u.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},u.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},u.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},u.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},u.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},u.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},u.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var s=document.createElement("div");s.classList.add(this.CssClasses_.THUMB);var t=document.createElement("span");if(t.classList.add(this.CssClasses_.FOCUS_HELPER),s.appendChild(t),this.element_.appendChild(e),this.element_.appendChild(s),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},u.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundMouseUpHandler),this.inputElement_.removeEventListener("change",this.boundChangeHandler),this.inputElement_.removeEventListener("focus",this.boundFocusHandler),this.inputElement_.removeEventListener("blur",this.boundBlurHandler),this.element_.removeEventListener("mouseup",this.boundMouseUpHandler)},componentHandler.register({constructor:u,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var C=function(e){this.element_=e,this.init()};window.MaterialTabs=C,C.prototype.Constant_={},C.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},C.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var s=0;s<this.tabs_.length;s++)new e(this.tabs_[s],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},C.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},C.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},C.prototype.init=function(){this.element_&&this.initTabs_()},componentHandler.register({constructor:C,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var m=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=m,m.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},m.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded"},m.prototype.onKeyDown_=function(e){var s=e.target.value.split("\n").length;13===e.keyCode&&s>=this.maxRows&&e.preventDefault()},m.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},m.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},m.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty()},m.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},m.prototype.checkValidity=function(){this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID)},m.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},m.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},m.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},m.prototype.change=function(e){e&&(this.input_.value=e),this.updateClasses_()},m.prototype.init=function(){this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_&&(this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler)),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)))},m.prototype.mdlDowngrade_=function(){this.input_.removeEventListener("input",this.boundUpdateClassesHandler),this.input_.removeEventListener("focus",this.boundFocusHandler),this.input_.removeEventListener("blur",this.boundBlurHandler),this.boundKeyDownHandler&&this.input_.removeEventListener("keydown",this.boundKeyDownHandler)},componentHandler.register({constructor:m,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialTooltip=E,E.prototype.Constant_={},E.prototype.CssClasses_={IS_ACTIVE:"is-active"},E.prototype.handleMouseEnter_=function(e){e.stopPropagation();var s=e.target.getBoundingClientRect(),t=s.left+s.width/2,i=-1*(this.element_.offsetWidth/2);0>t+i?(this.element_.style.left=0,this.element_.style.marginLeft=0):(this.element_.style.left=t+"px",this.element_.style.marginLeft=i+"px"),this.element_.style.top=s.top+s.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE),window.addEventListener("scroll",this.boundMouseLeaveHandler,!1),window.addEventListener("touchmove",this.boundMouseLeaveHandler,!1)},E.prototype.handleMouseLeave_=function(e){e.stopPropagation(),this.element_.classList.remove(this.CssClasses_.IS_ACTIVE),window.removeEventListener("scroll",this.boundMouseLeaveHandler),window.removeEventListener("touchmove",this.boundMouseLeaveHandler,!1)},E.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.getAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveHandler=this.handleMouseLeave_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("click",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("blur",this.boundMouseLeaveHandler),this.forElement_.addEventListener("touchstart",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveHandler))}},E.prototype.mdlDowngrade_=function(){this.forElement_&&(this.forElement_.removeEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("click",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("touchstart",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("mouseleave",this.boundMouseLeaveHandler))},componentHandler.register({constructor:E,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var L=function(e){this.element_=e,this.init()};window.MaterialLayout=L,L.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,MENU_ICON:"menu",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},L.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},L.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},L.prototype.contentScrollHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)||(this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)))},L.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN))},L.prototype.drawerToggleHandler_=function(){this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN)},L.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},L.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},L.prototype.resetTabState_=function(e){for(var s=0;s<e.length;s++)e[s].classList.remove(this.CssClasses_.IS_ACTIVE)},L.prototype.resetPanelState_=function(e){for(var s=0;s<e.length;s++)e[s].classList.remove(this.CssClasses_.IS_ACTIVE)},L.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_);for(var t=this.element_.childNodes,i=0;i<t.length;i++){var n=t[i];n.classList&&n.classList.contains(this.CssClasses_.HEADER)&&(this.header_=n),n.classList&&n.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=n),n.classList&&n.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=n)}this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var a=this.Mode_.STANDARD;this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?a=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(a=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(a=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),a===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):a===this.Mode_.SEAMED||a===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):a===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_()));var l=function(e){e.preventDefault()};if(this.drawer_){var o=document.createElement("div");o.classList.add(this.CssClasses_.DRAWER_BTN),this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?o.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&o.classList.add(this.CssClasses_.ON_SMALL_SCREEN);var r=document.createElement("i");r.classList.add(this.CssClasses_.ICON),r.textContent=this.Constant_.MENU_ICON,o.appendChild(r),o.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.drawer_.addEventListener("mousewheel",l),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(o,this.header_.firstChild):this.element_.insertBefore(o,this.content_);var _=document.createElement("div");_.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(_),_.addEventListener("click",this.drawerToggleHandler_.bind(this)),_.addEventListener("mousewheel",l)}if(this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var d=document.createElement("div");d.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(d,this.tabBar_),this.header_.removeChild(this.tabBar_);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_BAR_BUTTON),h.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var c=document.createElement("i");c.classList.add(this.CssClasses_.ICON),c.textContent=this.Constant_.CHEVRON_LEFT,h.appendChild(c),h.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var p=document.createElement("div");p.classList.add(this.CssClasses_.TAB_BAR_BUTTON),p.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,p.appendChild(u),p.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),d.appendChild(h),d.appendChild(this.tabBar_),d.appendChild(p);var C=function(){this.tabBar_.scrollLeft>0?h.classList.add(this.CssClasses_.IS_ACTIVE):h.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?p.classList.add(this.CssClasses_.IS_ACTIVE):p.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",C),C(),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var m=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),E=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),L=0;L<m.length;L++)new s(m[L],m,E,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},componentHandler.register({constructor:L,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var I=function(e){this.element_=e,this.init()};window.MaterialDataTable=I,I.prototype.Constant_={},I.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},I.prototype.selectRow_=function(e,s,t){return s?function(){e.checked?s.classList.add(this.CssClasses_.IS_SELECTED):s.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):t?function(){var s,i;if(e.checked)for(s=0;s<t.length;s++)i=t[s].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),t[s].classList.add(this.CssClasses_.IS_SELECTED);else for(s=0;s<t.length;s++)i=t[s].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),t[s].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},I.prototype.createCheckbox_=function(e,s){var t=document.createElement("label");t.classList.add("mdl-checkbox"),t.classList.add("mdl-js-checkbox"),t.classList.add("mdl-js-ripple-effect"),t.classList.add("mdl-data-table__select");var i=document.createElement("input");return i.type="checkbox",i.classList.add("mdl-checkbox__input"),e?i.addEventListener("change",this.selectRow_(i,e)):s&&i.addEventListener("change",this.selectRow_(i,null,s)),t.appendChild(i),componentHandler.upgradeElement(t,"MaterialCheckbox"),t},I.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),s=this.element_.querySelector("tbody").querySelectorAll("tr");if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var t=document.createElement("th"),i=this.createCheckbox_(null,s);t.appendChild(i),e.parentElement.insertBefore(t,e);for(var n=0;n<s.length;n++){var a=s[n].querySelector("td");if(a){var l=document.createElement("td"),o=this.createCheckbox_(s[n]);l.appendChild(o),s[n].insertBefore(l,a)}}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},componentHandler.register({constructor:I,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var f=function(e){this.element_=e,this.init()};window.MaterialRipple=f,f.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},f.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},f.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var s=this.element_.getBoundingClientRect();this.boundHeight=s.height,this.boundWidth=s.width,this.rippleSize_=2*Math.sqrt(s.width*s.width+s.height*s.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var t=this.getFrameCount();if(t>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},f.prototype.upHandler_=function(e){e&&2!==e.detail&&this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE),window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},f.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,s){this.x_=e,this.y_=s},this.setRippleStyles=function(s){if(null!==this.rippleElement_){var t,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";s?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),t="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=t,this.rippleElement_.style.msTransform=t,this.rippleElement_.style.transform=t,s?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-->0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},f.prototype.mdlDowngrade_=function(){this.element_.removeEventListener("mousedown",this.boundDownHandler),this.element_.removeEventListener("touchstart",this.boundDownHandler),this.element_.removeEventListener("mouseup",this.boundUpHandler),this.element_.removeEventListener("mouseleave",this.boundUpHandler),this.element_.removeEventListener("touchend",this.boundUpHandler),this.element_.removeEventListener("blur",this.boundUpHandler)},componentHandler.register({constructor:f,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map
/*!
 * Metro UI CSS v3.0.12 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */

(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define([ 'jquery' ], factory );
    } else {
        factory( jQuery );
    }
}(function( jQuery ) { 
'use strict';

var $ = jQuery;

// Source: js/requirements.js
if (typeof jQuery === 'undefined') {
    throw new Error('Metro\'s JavaScript requires jQuery');
}

// Source: js/global.js
window.METRO_VERSION = '3.0.12';

if (window.METRO_AUTO_REINIT === undefined) window.METRO_AUTO_REINIT = true;
if (window.METRO_LANGUAGE === undefined) window.METRO_LANGUAGE = 'en';
if (window.METRO_LOCALE === undefined) window.METRO_LOCALE = 'EN_en';
if (window.METRO_CURRENT_LOCALE === undefined) window.METRO_CURRENT_LOCALE = 'en';
if (window.METRO_SHOW_TYPE === undefined) window.METRO_SHOW_TYPE = 'slide';
if (window.METRO_DEBUG === undefined) window.METRO_DEBUG = true;
if (window.METRO_CALENDAR_WEEK_START === undefined) window.METRO_CALENDAR_WEEK_START = 0;

window.canObserveMutation = 'MutationObserver' in window;

String.prototype.isUrl = function () {
var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(this);
};

String.prototype.isColor = function () {
return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this);
};

Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

Array.prototype.clone = function () {
    return this.slice(0);
};

Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

window.uniqueId = function (prefix) {
var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

window.isTouchDevice = function() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
};

window.METRO_LOCALES = {
    'en': {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        days: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
        ],
        buttons: [
            "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'fr': {
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
            "Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
        ],
        days: [
            "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
            "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
        ],
        buttons: [
            "Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"
        ]
    },
    'nl': {
        months: [
            "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
            "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ],
        days: [
            "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
            "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
        ],
        buttons: [
            "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
        ]
    },
    'ua': {
        months: [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",
            "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"
        ],
        days: [
            "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота",
            "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"
        ]
    },
    'ru': {
        months: [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
            "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        days: [
            "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
            "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"
        ]
    },
    /** By NoGrief (nogrief@gmail.com) */
    'zhCN': {
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        days: [
            "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
            "日", "一", "二", "三", "四", "五", "六"
        ],
        buttons: [
            "今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'it': {
        months: [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
            'Gen', ' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
        ],
        days: [
            'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica',
            'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
        ],
        buttons: [
            "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'de': {
        months: [
            "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
            "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        days: [
            "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
            "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ],
        buttons: [
            "Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"
        ]
    },
    /** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
    'es': {
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
        ],
        days: [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
            "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
        ],
        buttons: [
            "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'pt': {
        months: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        days: [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado',
            'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
        ],
        buttons: [
            "Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"
        ]
    },
    'pl': {
        months: [
            "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
            "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"
        ],
        days: [
            "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",
            "Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"
        ],
        buttons: [
            "Dzisiaj", "Wyczyść", "Anuluj", "Pomoc", "Poprzedni", "Następny", "Koniec"
        ]
    },
    'cs': {
        months: [
            "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",
            "Led", "Ún", "Bř", "Dub", "Kvě", "Če", "Čer", "Srp", "Zá", "Ří", "Li", "Pro"
        ],
        days: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota",
            "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
        ],
        buttons: [
            "Dnes", "Vyčistit", "Zrušit", "Pomoc", "Předešlý", "Další", "Dokončit"
        ]
    },
    /* By Satit Rianpit <rianpit@gmail.com> */
    'th': {
        months: [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
            "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
        ],
        days: [
            "อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์",
            "อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."
        ],
        buttons: [
            "วันนี้", "ล้าง", "ยกเลิก", "ช่วยเหลือ", "กลับ", "ต่อไป", "เสร็จ"
        ]
    }
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {
                val = "0" + val;
            }
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //console.log(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //console.log(locale);

        var locale = window.METRO_CURRENT_LOCALE || 'en';

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: window.METRO_LOCALES[locale].days[D],
                dddd: window.METRO_LOCALES[locale].days[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: window.METRO_LOCALES[locale].months[m],
                mmmm: window.METRO_LOCALES[locale].months[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// For convenience...
Date.prototype.format = function (mask, utc) {
return dateFormat(this, mask, utc);
};

// Source: js/widget.js
var widget_uuid = 0,
    widget_slice = Array.prototype.slice;

$.cleanData = (function (orig) {
    return function (elems) {
        var events, elem, i;
        for (i = 0; (elem = elems[i]) != null; i++) {
            try {

                // Only trigger remove when necessary to save time
                events = $._data(elem, "events");
                if (events && events.remove) {
                    $(elem).triggerHandler("remove");
                }

                // http://bugs.$.com/ticket/8235
            } catch (e) {
            }
        }
        orig(elems);
    };
})($.cleanData);

$.widget = function (name, base, prototype) {
    var fullName, existingConstructor, constructor, basePrototype,
    // proxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
        proxiedPrototype = {},
        namespace = name.split(".")[0];

    name = name.split(".")[1];
    fullName = namespace + "-" + name;

    if (!prototype) {
        prototype = base;
        base = $.Widget;
    }

    // create selector for plugin
    $.expr[":"][fullName.toLowerCase()] = function (elem) {
        return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];
    constructor = $[namespace][name] = function (options, element) {
        // allow instantiation without "new" keyword
        if (!this._createWidget) {
            return new constructor(options, element);
        }

        // allow instantiation without initializing for simple inheritance
        // must use "new" keyword (the code above always passes args)
        if (arguments.length) {
            this._createWidget(options, element);
        }
    };
    // extend with the existing constructor to carry over any static properties
    $.extend(constructor, existingConstructor, {
        version: prototype.version,
        // copy the object used to create the prototype in case we need to
        // redefine the widget later
        _proto: $.extend({}, prototype),
        // track widgets that inherit from this widget in case this widget is
        // redefined after a widget inherits from it
        _childConstructors: []
    });

    basePrototype = new base();
    // we need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
        if (!$.isFunction(value)) {
            proxiedPrototype[prop] = value;
            return;
        }
        proxiedPrototype[prop] = (function () {
            var _super = function () {
                    return base.prototype[prop].apply(this, arguments);
                },
                _superApply = function (args) {
                    return base.prototype[prop].apply(this, args);
                };
            return function () {
                var __super = this._super,
                    __superApply = this._superApply,
                    returnValue;

                this._super = _super;
                this._superApply = _superApply;

                returnValue = value.apply(this, arguments);

                this._super = __super;
                this._superApply = __superApply;

                return returnValue;
            };
        })();
    });
    constructor.prototype = $.widget.extend(basePrototype, {
        // TODO: remove support for widgetEventPrefix
        // always use the name + a colon as the prefix, e.g., draggable:start
        // don't prefix for widgets that aren't DOM-based
        widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
        constructor: constructor,
        namespace: namespace,
        widgetName: name,
        widgetFullName: fullName
    });

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if (existingConstructor) {
        $.each(existingConstructor._childConstructors, function (i, child) {
            var childPrototype = child.prototype;

            // redefine the child widget using the same prototype that was
            // originally used, but inherit from the new version of the base
            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
        });
        // remove the list of existing child constructors from the old constructor
        // so the old child constructors can be garbage collected
        delete existingConstructor._childConstructors;
    } else {
        base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);

    return constructor;
};

$.widget.extend = function (target) {
    var input = widget_slice.call(arguments, 1),
        inputIndex = 0,
        inputLength = input.length,
        key,
        value;
    for (; inputIndex < inputLength; inputIndex++) {
        for (key in input[inputIndex]) {
            value = input[inputIndex][key];
            if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                // Clone objects
                if ($.isPlainObject(value)) {
                    target[key] = $.isPlainObject(target[key]) ?
                        $.widget.extend({}, target[key], value) :
                        // Don't extend strings, arrays, etc. with objects
                        $.widget.extend({}, value);
                    // Copy everything else by reference
                } else {
                    target[key] = value;
                }
            }
        }
    }
    return target;
};

$.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[name] = function (options) {
        var isMethodCall = typeof options === "string",
            args = widget_slice.call(arguments, 1),
            returnValue = this;

        if (isMethodCall) {
            this.each(function () {
                var methodValue,
                    instance = $.data(this, fullName);
                if (options === "instance") {
                    returnValue = instance;
                    return false;
                }
                if (!instance) {
                    return $.error("cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'");
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    return $.error("no such method '" + options + "' for " + name + " widget instance");
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== undefined) {
                    returnValue = methodValue && methodValue.jquery ?
                        returnValue.pushStack(methodValue.get()) :
                        methodValue;
                    return false;
                }
            });
        } else {

            // Allow multiple hashes to be passed on init
            if (args.length) {
                options = $.widget.extend.apply(null, [options].concat(args));
            }

            this.each(function () {
                var instance = $.data(this, fullName);
                if (instance) {
                    instance.option(options || {});
                    if (instance._init) {
                        instance._init();
                    }
                } else {
                    $.data(this, fullName, new object(options, this));
                }
            });
        }

        return returnValue;
    };
};

$.Widget = function (/* options, element */) {
};
$.Widget._childConstructors = [];

$.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
        disabled: false,

        // callbacks
        create: null
    },
    _createWidget: function (options, element) {
        element = $(element || this.defaultElement || this)[0];
        this.element = $(element);
        this.uuid = widget_uuid++;
        this.eventNamespace = "." + this.widgetName + this.uuid;

        this.bindings = $();
        this.hoverable = $();
        this.focusable = $();

        if (element !== this) {
            $.data(element, this.widgetFullName, this);
            this._on(true, this.element, {
                remove: function (event) {
                    if (event.target === element) {
                        this.destroy();
                    }
                }
            });
            this.document = $(element.style ?
                // element within the document
                element.ownerDocument :
                // element is window or document
            element.document || element);
            this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
        }

        this.options = $.widget.extend({},
            this.options,
            this._getCreateOptions(),
            options);

        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init();
    },
    _getCreateOptions: $.noop,
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,

    destroy: function () {
        this._destroy();
        // we can probably remove the unbind calls in 2.0
        // all event bindings should go through this._on()
        this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            // support: jquery <1.6.3
            // http://bugs.jquery.com/ticket/9413
            .removeData($.camelCase(this.widgetFullName));
        this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
            this.widgetFullName + "-disabled " +
            "ui-state-disabled");

        // clean up events and states
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus");
    },
    _destroy: $.noop,

    widget: function () {
        return this.element;
    },

    option: function (key, value) {
        var options = key,
            parts,
            curOption,
            i;

        if (arguments.length === 0) {
            // don't return a reference to the internal hash
            return $.widget.extend({}, this.options);
        }

        if (typeof key === "string") {
            // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
            options = {};
            parts = key.split(".");
            key = parts.shift();
            if (parts.length) {
                curOption = options[key] = $.widget.extend({}, this.options[key]);
                for (i = 0; i < parts.length - 1; i++) {
                    curOption[parts[i]] = curOption[parts[i]] || {};
                    curOption = curOption[parts[i]];
                }
                key = parts.pop();
                if (arguments.length === 1) {
                    return curOption[key] === undefined ? null : curOption[key];
                }
                curOption[key] = value;
            } else {
                if (arguments.length === 1) {
                    return this.options[key] === undefined ? null : this.options[key];
                }
                options[key] = value;
            }
        }

        this._setOptions(options);

        return this;
    },
    _setOptions: function (options) {
        var key;

        for (key in options) {
            this._setOption(key, options[key]);
        }

        return this;
    },
    _setOption: function (key, value) {
        this.options[key] = value;

        if (key === "disabled") {
            this.widget()
                .toggleClass(this.widgetFullName + "-disabled", !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus");
            }
        }

        return this;
    },

    enable: function () {
        return this._setOptions({disabled: false});
    },
    disable: function () {
        return this._setOptions({disabled: true});
    },

    _on: function (suppressDisabledCheck, element, handlers) {
        var delegateElement,
            instance = this;

        // no suppressDisabledCheck flag, shuffle arguments
        if (typeof suppressDisabledCheck !== "boolean") {
            handlers = element;
            element = suppressDisabledCheck;
            suppressDisabledCheck = false;
        }

        // no element argument, shuffle and use this.element
        if (!handlers) {
            handlers = element;
            element = this.element;
            delegateElement = this.widget();
        } else {
            element = delegateElement = $(element);
            this.bindings = this.bindings.add(element);
        }

        $.each(handlers, function (event, handler) {
            function handlerProxy() {
                // allow widgets to customize the disabled handling
                // - disabled as an array instead of boolean
                // - disabled class as method for disabling individual parts
                if (!suppressDisabledCheck &&
                    ( instance.options.disabled === true ||
                    $(this).hasClass("ui-state-disabled") )) {
                    return;
                }
                return ( typeof handler === "string" ? instance[handler] : handler )
                    .apply(instance, arguments);
            }

            // copy the guid so direct unbinding works
            if (typeof handler !== "string") {
                handlerProxy.guid = handler.guid =
                    handler.guid || handlerProxy.guid || $.guid++;
            }

            var match = event.match(/^([\w:-]*)\s*(.*)$/),
                eventName = match[1] + instance.eventNamespace,
                selector = match[2];
            if (selector) {
                delegateElement.delegate(selector, eventName, handlerProxy);
            } else {
                element.bind(eventName, handlerProxy);
            }
        });
    },

    _off: function (element, eventName) {
        eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace;
        element.unbind(eventName).undelegate(eventName);

        // Clear the stack to avoid memory leaks (#10056)
        this.bindings = $(this.bindings.not(element).get());
        this.focusable = $(this.focusable.not(element).get());
        this.hoverable = $(this.hoverable.not(element).get());
    },

    _delay: function (handler, delay) {
        function handlerProxy() {
            return ( typeof handler === "string" ? instance[handler] : handler )
                .apply(instance, arguments);
        }

        var instance = this;
        return setTimeout(handlerProxy, delay || 0);
    },

    _hoverable: function (element) {
        this.hoverable = this.hoverable.add(element);
        this._on(element, {
            mouseenter: function (event) {
                $(event.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (event) {
                $(event.currentTarget).removeClass("ui-state-hover");
            }
        });
    },

    _focusable: function (element) {
        this.focusable = this.focusable.add(element);
        this._on(element, {
            focusin: function (event) {
                $(event.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (event) {
                $(event.currentTarget).removeClass("ui-state-focus");
            }
        });
    },

    _trigger: function (type, event, data) {
        var prop, orig,
            callback = this.options[type];

        data = data || {};
        event = $.Event(event);
        event.type = ( type === this.widgetEventPrefix ?
            type :
        this.widgetEventPrefix + type ).toLowerCase();
        // the original event may come from any element
        // so we need to reset the target on the new event
        event.target = this.element[0];

        // copy original event properties over to the new event
        orig = event.originalEvent;
        if (orig) {
            for (prop in orig) {
                if (!( prop in event )) {
                    event[prop] = orig[prop];
                }
            }
        }

        this.element.trigger(event, data);
        return !( $.isFunction(callback) &&
        callback.apply(this.element[0], [event].concat(data)) === false ||
        event.isDefaultPrevented() );
    }
};

$.each({show: "fadeIn", hide: "fadeOut"}, function (method, defaultEffect) {
    $.Widget.prototype["_" + method] = function (element, options, callback) {
        if (typeof options === "string") {
            options = {effect: options};
        }
        var hasOptions,
            effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                options.effect || defaultEffect;
        options = options || {};
        if (typeof options === "number") {
            options = {duration: options};
        }
        hasOptions = !$.isEmptyObject(options);
        options.complete = callback;
        if (options.delay) {
            element.delay(options.delay);
        }
        if (hasOptions && $.effects && $.effects.effect[effectName]) {
            element[method](options);
        } else if (effectName !== method && element[effectName]) {
            element[effectName](options.duration, options.easing, callback);
        } else {
            element.queue(function (next) {
                $(this)[method]();
                if (callback) {
                    callback.call(element[0]);
                }
                next();
            });
        }
    };
});

var widget = $.widget;

// Source: js/initiator.js
$.fn.reverse = Array.prototype.reverse;

$.Metro = function(params){
    params = $.extend({
    }, params);
};

$.Metro.hotkeys = [];

$.Metro.initWidgets = function(){
    var widgets = $("[data-role]");

    var hotkeys = $("[data-hotkey]");
    $.each(hotkeys, function(){
        var element = $(this);
        var hotkey = element.data('hotkey').toLowerCase();

        //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
        //    return;
        //}
        if (element.data('hotKeyBonded') === true ) {
            return;
        }

        $.Metro.hotkeys.push(hotkey);

        $(document).on('keyup', null, hotkey, function(e){
            if (element === undefined) return;

            if (element[0].tagName === 'A' &&
                element.attr('href') !== undefined &&
                element.attr('href').trim() !== '' &&
                element.attr('href').trim() !== '#') {
                document.location.href = element.attr('href');
            } else {
                element.click();
            }
            return false;
        });

        element.data('hotKeyBonded', true);
    });

    $.each(widgets, function(){
        var $this = $(this), w = this;
        var roles = $this.data('role').split(/\s*,\s*/);
        roles.map(function(func){
            try {
                //$(w)[func]();
                if ($.fn[func] !== undefined && $this.data(func+'-initiated') !== true) {
                    $.fn[func].call($this);
                    $this.data(func+'-initiated', true);
                }
            } catch(e) {
                if (window.METRO_DEBUG) {
                    console.log(e.message, e.stack);
                }
            }
        });
    });
};

$.Metro.init = function(){
    $.Metro.initWidgets();

    if (window.METRO_AUTO_REINIT) {
        if (!window.canObserveMutation) {
            var originalDOM = $('body').html(),
                actualDOM;

            setInterval(function () {
                actualDOM = $('body').html();

                if (originalDOM !== actualDOM) {
                    originalDOM = actualDOM;

                    $.Metro.initWidgets();
                }
            }, 100);
        } else {
            var observer, observerOptions, observerCallback;
            observerOptions = {
                'childList': true,
                'subtree': true
            };
            observerCallback = function(mutations){

                //console.log(mutations);

                mutations.map(function(record){

                    if (record.addedNodes) {

                        /*jshint loopfunc: true */
                        var obj, widgets, plugins, hotkeys;

                        for(var i = 0, l = record.addedNodes.length; i < l; i++) {
                            obj = $(record.addedNodes[i]);

                            plugins = obj.find("[data-role]");

                            hotkeys = obj.find("[data-hotkey]");

                            $.each(hotkeys, function(){
                                var element = $(this);
                                var hotkey = element.data('hotkey').toLowerCase();

                                //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
                                //    return;
                                //}

                                if (element.data('hotKeyBonded') === true ) {
                                    return;
                                }

                                $.Metro.hotkeys.push(hotkey);

                                $(document).on('keyup', null, hotkey, function () {
                                    if (element === undefined) return;

                                    if (element[0].tagName === 'A' &&
                                        element.attr('href') !== undefined &&
                                        element.attr('href').trim() !== '' &&
                                        element.attr('href').trim() !== '#') {
                                        document.location.href = element.attr('href');
                                    } else {
                                        element.click();
                                    }
                                    return false;
                                });

                                element.data('hotKeyBonded', true);
                                //console.log($.Metro.hotkeys);
                            });

                            if (obj.data('role') !== undefined) {
                                widgets = $.merge(plugins, obj);
                            } else {
                                widgets = plugins;
                            }

                            if (widgets.length) {
                                $.each(widgets, function(){
                                    var _this = $(this);
                                    var roles = _this.data('role').split(/\s*,\s*/);
                                    roles.map(function(func){
                                        try {
                                            if ($.fn[func] !== undefined && _this.data(func+'-initiated') !== true) {
                                                $.fn[func].call(_this);
                                                _this.data(func+'-initiated', true);
                                            }
                                        } catch(e) {
                                            if (window.METRO_DEBUG) {
                                                console.log(e.message, e.stack);
                                            }
                                        }
                                    });
                                });
                            }
                        }
                    }
                });
            };

            //console.log($(document));
            observer = new MutationObserver(observerCallback);
            observer.observe(document, observerOptions);
        }
    }
};

// Source: js/utils/easing.js
	$.easing['jswing'] = $.easing['swing'];

	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d / 2) == 2) return b + c;
			if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

// Source: js/utils/hotkeys.js
$.hotkeys = {
    version: "0.8",

    specialKeys: {
        8: "backspace",
        9: "tab",
        10: "return",
        13: "return",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        59: ";",
        61: "=",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    },

    shiftNums: {
        "`": "~",
        "1": "!",
        "2": "@",
        "3": "#",
        "4": "$",
        "5": "%",
        "6": "^",
        "7": "&",
        "8": "*",
        "9": "(",
        "0": ")",
        "-": "_",
        "=": "+",
        ";": ": ",
        "'": "\"",
        ",": "<",
        ".": ">",
        "/": "?",
        "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
        "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
        "datetime-local", "search", "color", "tel"],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
        filterInputAcceptingElements: true,
        filterTextInputs: true,
        filterContentEditable: true
    }
};

function keyHandler(handleObj) {
    if (typeof handleObj.data === "string") {
        handleObj.data = {
            keys: handleObj.data
        };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
        return;
    }

    var origHandler = handleObj.handler,
        keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function(event) {
        //      Don't fire in text-accepting inputs that we didn't directly bind to
        if (this !== event.target &&
            ($.hotkeys.options.filterInputAcceptingElements &&
            $.hotkeys.textInputTypes.test(event.target.nodeName) ||
            ($.hotkeys.options.filterContentEditable && $(event.target).attr('contenteditable')) ||
            ($.hotkeys.options.filterTextInputs &&
            $.inArray(event.target.type, $.hotkeys.textAcceptingInputTypes) > -1))) {
            return;
        }

        var special = event.type !== "keypress" && $.hotkeys.specialKeys[event.which],
            character = String.fromCharCode(event.which).toLowerCase(),
            modif = "",
            possible = {};

        $.each(["alt", "ctrl", "shift"], function(index, specialKey) {

            if (event[specialKey + 'Key'] && special !== specialKey) {
                modif += specialKey + '+';
            }
        });

        // metaKey is triggered off ctrlKey erronously
        if (event.metaKey && !event.ctrlKey && special !== "meta") {
            modif += "meta+";
        }

        if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
            modif = modif.replace("alt+ctrl+shift+", "hyper+");
        }

        if (special) {
            possible[modif + special] = true;
        }
        else {
            possible[modif + character] = true;
            possible[modif + $.hotkeys.shiftNums[character]] = true;

            // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
            if (modif === "shift+") {
                possible[$.hotkeys.shiftNums[character]] = true;
            }
        }

        for (var i = 0, l = keys.length; i < l; i++) {
            if (possible[keys[i]]) {
                return origHandler.apply(this, arguments);
            }
        }
    };
}

$.each(["keydown", "keyup", "keypress"], function() {
    $.event.special[this] = {
        add: keyHandler
    };
});

// Source: js/utils/mousewheel.js
var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
var lowestDelta, lowestDeltaXY;

if ( $.event.fixHooks ) {
    for ( var i = toFix.length; i; ) {
        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.addEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },

    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.removeEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event,
        args = [].slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0,
        absDeltaXY = 0,
        fn;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
    if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

    // New school wheel delta (wheel event)
    if ( orgEvent.deltaY ) {
        deltaY = orgEvent.deltaY * -1;
        delta  = deltaY;
    }
    if ( orgEvent.deltaX ) {
        deltaX = orgEvent.deltaX;
        delta  = deltaX * -1;
    }

    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

    // Look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

    // Get a whole value for the deltas
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
}

// Source: js/utils/pre-code.js
function preCode(selector) {
	var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

	els.forEach(function(el, idx, arr){
		var txt = el.textContent
			.replace(/^[\r\n]+/, "")	// strip leading newline
			.replace(/\s+$/g, "");

		if (/^\S/gm.test(txt)) {
			el.textContent = txt;
			return;
		}

		var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

		while (mat = re.exec(txt)) {
			len = mat[0].length;

			if (len < min) {
				min = len;
				str = mat[0];
			}
		}

		if (min == 1e3)
			return;

		el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
	});
}

document.addEventListener("DOMContentLoaded", function() {
	preCode("pre code, textarea");
}, false);
// Source: js/utils/touch-handler.js
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false;

var addTouchEvents = function(element) {
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
};

function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
        case "touchstart":
            mouseEv = "mousedown";
            break;
        case "touchend":
            mouseEv = "mouseup";
            break;
        case "touchmove":
            mouseEv = "mousemove";
            break;
        default:
            return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}

// Source: js/widgets/accordion.js
$.widget("metro.accordion", {

    version: "3.0.0",

    options: {
        closeAny: false,
        speed: 'fast',
        onFrameOpen: function(frame){return true;},
        onFrameOpened: function(frame){},
        onFrameClose: function(frame){return true;},
        onFrameClosed: function(frame){}
    },

    init: function(){
        var that = this, element = this.element;

        element.on('click', '.heading', function(e){
            var frame = $(this).parent();

            if (frame.hasClass('disabled')) {return false;}

            if  (!frame.hasClass('active')) {
                that._openFrame(frame);
            } else {
                that._closeFrame(frame);
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _closeAllFrames: function(){
        var that = this;
        var frames = this.element.children('.frame.active');
        $.each(frames, function(){
            that._closeFrame($(this));
        });
    },

    _openFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameOpen === 'function') {
            if (!o.onFrameOpen(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameOpen] === 'function') {
                if (!window[o.onFrameOpen](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameOpen+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        if (o.closeAny) {this._closeAllFrames();}

        content.slideDown(o.speed);
        frame.addClass('active');

        if (typeof o.onFrameOpened === 'function') {
            o.onFrameOpened(frame);
        } else {
            if (typeof window[o.onFrameOpened] === 'function') {
                window[o.onFrameOpened](frame);
            } else {
                result = eval("(function(){"+o.onFrameOpened+"})");
                result.call(frame);
            }
        }
    },

    _closeFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameClose === 'function') {
            if (!o.onFrameClose(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameClose] === 'function') {
                if (!window[o.onFrameClose](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameClose+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        content.slideUp(o.speed,function(){
            frame.removeClass("active");
        });

        if (typeof o.onFrameClosed === 'function') {
            o.onFrameClosed(frame);
        } else {
            if (typeof window[o.onFrameClosed] === 'function') {
                window[o.onFrameClosed](frame);
            } else {
                result = eval("(function(){"+o.onFrameClosed+"})");
                result.call(frame);
            }
        }
    },

    _create: function(){
        var that = this, o = this.options, element = this.element;

        $.each(this.element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        that.init();
        element.data('accordion', this);

    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/appbar.js
    $.widget("metro.appbar", {
        version: "3.0.0",
        options: {
            flexstyle: "app-bar-menu", //app-bar-menu | YOUR_OWN class for the pull flexmenu, basic support for "sidebar2" are integrated in the appbar.less file
            flexclean: false,           //true | false. if set all entries except the no-flexible ones will removed
            flextolerance: 3               //in px. if set the freespace is runnig out a little bit earlier, so floats 
                                        //and not no-wrap elements have no chance to wrap. help for rounding errors also
        },
        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initBar();

            element.data('appbar', this);

        },
        _calculateFreeSpace: function () {
            var that = this, element = this.element, o = this.options;
            var menusParentWidth = 0, childrenWidth = 0, children;
            var freeSpace;

            //get the overall free space from the wrapping parent of the menus
            menusParentWidth = $(that.menusParent).width();

            //get the width of all visible children
            children = $(that.menusParent).children(":visible").not(".app-bar-pullmenu");


            //margin support: because there could be margins between elements, we do not summarize the width up with a one liner
            //but calculate width of all children in an intelligent way, we takte the left offsett of the first element and right offset of the right element
            //for that we have to support float left and right too:
            //float left and right support: we can not be sure that the first element in dom is on the left and the last is on the right
            //right floated
            //   - sort the children as the user see them

            //sort the children as the user see them according to the css float
            var childrenLeftFloated = [];
            var childrenRightFloated = [];
            var childrenAsUsual = [];
            var floatState;

            for (var i = 0, len = children.length; i < len; i++) {
                floatState = $(children[i]).css("float");
                switch (floatState) {
                    case "left":
                        childrenLeftFloated.push(children[i]);
                        break;
                    case "right":
                        childrenRightFloated.push(children[i]);
                        break;
                    default:
                        childrenAsUsual.push(children[i]);
                }
            }
            //right floats are from right to left
            childrenRightFloated.reverse();

            //=== build up the new children jquery object ===
            //join the left, right and normal children   
            children = new Array();
            children = childrenLeftFloated.concat(childrenAsUsual, childrenRightFloated);

            //convert the array to jquery object again
            children = $(children);

            //=== calculate the width of the elements with margin support ===

            //adds the left margin dedicated to the first child
            childrenWidth += parseInt($(children).first().css("margin-left"));

            //walk trough the children and add the size, 
            for (var i = 0, len = children.length - 1; i <= len; i++) {
                childrenWidth += $(children[i]).outerWidth();
                if (i !== len) {
                    //the highest margin between two elements counts
                    childrenWidth += Math.max(
                            parseInt($(children[i]).css("margin-right")),
                            parseInt($(children[i + 1]).css("margin-left"))

                            );
                }
            }
            //the right margin for the right child
            childrenWidth += parseInt($(children[len]).css("margin-right"));

            //now we have all data for calculation. Yippie-Ya-Yeah, Schweinebacke!! (much cooler German translation of B. W. Yippie-Ya-Yeah, Motherf***er)
            freeSpace = menusParentWidth - childrenWidth;

            //writing the data we found out to the element's data
            that.freeSpace = freeSpace;                     //not used space within the parent(mostly the appbar itself)
            that.childrenWidth = childrenWidth;             //the total width of the children
            that.menusParentWidth = menusParentWidth;       //the width without padding or something

            return freeSpace;
        },
        _originIndexMove: function(menu, child) {
                //find all children which are lower than we
                var flexChildren = $(menu).children().filter(function () {
                    return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(child).attr("data-flexorderorigin"));
                });
                
                if (flexChildren.length > 0) {
                    //because we are greater, we set it after the childern which are lower
                    $(flexChildren).last().after(child);
                } else {
                    //find all children which are greater than we are
                    flexChildren = $(menu).children().filter(function () {
                        return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(child).attr("data-flexorderorigin"));
                    });
                    if (flexChildren.length > 0) {
                        //because we are lower, we set us before the childern which are greater
                        $(flexChildren).first().before(child);
                    } else {
                        //we have no children, just append it
                        $(menu).append(child);
                    }
                }
        },
        _moveMenuEntry: function (direction) {
            var that = this, element = this.element, o = this.options;

            direction = direction || "toPullMenu"; // "fromPullMenu" is also an option

            if (direction === "toPullMenu") {
                //get next candidate which could be moved to the pullmenu, in fact the last which not have a mark as pullmenu-entry

                var nextToHide = $(that.allMenuEntries).not(".app-bar-pullmenu-entry").last();

                if (nextToHide.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }


                //find out in which menubar we are located in
                var topMenu = $(nextToHide).parent(); //this is only a appbar-menu not the appbar itself
                //find out where we have to go
                var topMenuIndex = $(that.flexVisibles).index($(nextToHide).parent());
                var pullMenuBar = $(that.pullMenu).find(".app-bar-pullmenubar").eq(topMenuIndex); //TODO: Make the class app-bar-menu configurable - perhaps sidebar

                that._originIndexMove(pullMenuBar, nextToHide);
                //move it to the pullmenu
//                if ($(topMenu).is("[data-flexdirection='reverse']")) {//data-flexdirection="reverse" support
//                    $(nextToHide).appendTo(pullMenuBar);
//                } else {                                             //normal way
//                    $(nextToHide).prependTo(pullMenuBar);
//                }

                //mark the entry as a entry of the pullmenu
                $(nextToHide).addClass("app-bar-pullmenu-entry");

                //the menubar is initiated with the hidden class, so we do not see empty pullmenubars, we must unhide them
                //it does not matter, if we see it already, we do it always:
                $(pullMenuBar).removeClass("hidden")
                        .show();

                //in case there are no more entries in the top menu bar we can hide it
                if ($(topMenu).children().length === 0) {
                    $(topMenu).addClass("hidden");
                }

                //we show the pullbutton now
                $(that.pullButton).show();

                return nextToHide;

            } else if (direction === "fromPullMenu") {
                //get next candidate which could be moved to the topbar menu, in fact the first which is still marked as pullmenu-entry
                var nextToShow = $(that.allMenuEntries).filter(".app-bar-pullmenu-entry").first();


                //find out in which pullmenu we are located in
                var pullMenuBar = $(nextToShow).parent(); //only one single menu, not the whole thing

                //find out where we have to go
                var topMenuIndex = $(pullMenuBar).index(); //it is the same structur as that.flexVisibles, so we can use the simple index
                var topMenu = $(that.flexVisibles).eq(topMenuIndex);

                $(topMenu).removeClass("hidden");
                //remove the mark as a entry of the pullmenu and move it to the normal top menu
                $(nextToShow).removeClass("app-bar-pullmenu-entry");

                //cosider the flexorder

                //walk trough the children in topMenu and find out what we must do

                //find all children which are lower than we
                that._originIndexMove(topMenu, nextToShow);

                //in case there are no more entries left, we can hide the pullbar menu from this entry
                if ($(pullMenuBar).children().length === 0) {
                    $(pullMenuBar).addClass("hidden")
                            .hide();
                }

                //in case we have no more menus in the pullbar area, we hide the pullbar thing
                if ($(that.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length === 0) {
                    $(that.pullMenu).hide().addClass("hidden");
                    $(that.pullButton).hide();
                }

                if (nextToShow.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }
                return nextToShow;
            }
        },
        _checkMenuEntries: function () {
            var that = this, element = this.element, o = this.options;

            var forceEndLoop = false;

            for (var maxLoop = 0, maxLoopLen = that.allMenuEntries.length; maxLoop < maxLoopLen; maxLoop++) {  //we do nothing with this, we could use while(true) but there is a danger of infinite loops

                //calculate the empty space within the appbar we can use for hidden children
                that._calculateFreeSpace();
                var freeSpace = that.freeSpace;

                if (freeSpace < o.flextolerance || o.flexclean) { //3px is tolerance and to be faster than the wrapping. TODO: make this configurable
                    //no space left, we hide a menu entry now

                    //move the menu entry to the pullbar and check if there are more menuentries left
                    if (!(that._moveMenuEntry("toPullMenu"))) {
                        //nothing left to hide
                        break;
                    } else {
                        //we moved successfully, perhaps we can hide more entries, we recheck the appbar, 
                        //remember, we are in a endless loop, which checks this for us

                        if (!forceEndLoop) {
                            continue;
                        }
                    }

                } else {
                    //we have space here, we try to get more entries there

                    //check if there is something to do
                    if (!(that._moveMenuEntry("fromPullMenu"))) {
                        //nothing left to show
                        break;
                    } else {
                        forceEndLoop = true;
                        continue;
                    }

                }

                //we continue manually. if we reach the end of the loop we end this better so we do not produce infinite loop accidentally
                break;
            }
        },
        resize: function () {
            var that = this, element = this.element, o = this.options;

            if (that.initiatedAsFlex) {
                this._checkMenuEntries();
            }
        },
        _initBar: function () {
            var that = this, element = this.element, o = this.options;

            that.lastFlexAction = undefined;

            that.pullButton = $(element).find('.app-bar-pullbutton');
            var menus = $(element).find('.app-bar-menu');

            that.initiatedAsFlex = false;   //we change it later in the code - conditionally
            o.flexclean = $(element).is("[data-flexclean='true']") || o.flexclean;
            o.flexstyle = $(element).attr("data-flexstyle") || o.flexstyle;

            var flexVisible, menuEntries; //temporarly used vars

            that.flexVisibles = $();    //the menus which are directly in the appbar
            that.allMenuEntries = $();  //all menu entries in a sorted order
            that.menusParent = $();     //common parent from the menus, which can but do not need to be this.element. We get the max width from it
            that.pullMenu = $();

            if (menus.length > 0 && $(element).is(":not('.no-flexible')")) {
                //strip off all .no-flexible menus
                that.flexVisibles = $(menus).not(".no-flexible");

                if (that.flexVisibles.length > 0) {

                    that.initiatedAsFlex = true;

                    //sort the menus according to the data-flexorder attribute
                    that.flexVisibles.sort(function (a, b) {
                        var aValue = (parseInt($(a).data("flexorder")) || $(a).index() + 1);
                        var bValue = (parseInt($(b).data("flexorder")) || $(b).index() + 1);
                        return aValue - bValue;
                    });

                    //get all children in a sorted order according to the data-flexorder attribute
                    $(that.flexVisibles).each(function () {
                        flexVisible = this;

                        menuEntries = $(flexVisible).children();

                        //give  all menuEntries a flexorder which have not one and save the original order
                        $(menuEntries).each(function () {
                            $(this).attr("data-flexorderorigin", $(this).index());
                            
                            if(!($(this).is("[data-flexorder]"))) {
                                $(this).attr("data-flexorder", $(this).index() + 1);
                            }
                        });

                        menuEntries.sort(function (a, b) {
                            var aValue = parseInt($(a).data("flexorder"));
                            var bValue = parseInt($(b).data("flexorder"));
                            return aValue - bValue;
                        });

                        //data-flexdirection="reverse" support 
                        if ($(flexVisible).is("[data-flexdirection='reverse']")) {
                            menuEntries.reverse();
                        }

                        $.merge(that.allMenuEntries, $(menuEntries).not(".no-flexible")); //strip off all .no-flexible elements
                    });

                    //find the parent, which contains all menus
                    that.menusParent = $(element).find(".app-bar-menu").first().parent();

                    // === create a pull down button + pull menu ===
                    //check if a pulldown button already exists, if not we create one
                    if (!(that.pullButton.length > 0)) {
                        //DOC: We can create a display:none button, if we want to force to not show a pull button
                        that.pullButton = $('<div class="app-bar-pullbutton automatic"></div>');
                        $(that.menusParent).append(that.pullButton);
                    }

                    //create a pullmenu
                    that.pullMenu = $('<nav class="app-bar-pullmenu hidden" />');

                    //create menubars within the pullmenu
                    that.flexVisibles.each(function () {
                        $(that.pullMenu).append($('<ul class="app-bar-pullmenubar hidden ' + o.flexstyle + '" />'));
                    });
                    
                    
                    
                    // WORKAROUND: this is because a :after:before clearfix for the pullmenu do not work for some reason
                    //position: absolute does not work if we do not break the float. another pure css solution should be written in the appbar.less
                    //after that remove this line
                    $(that.menusParent).append($('<div class="clearfix" style="width: 0;">'));
                    //-----------
                    
                    
                    $(that.pullMenu).addClass("flexstyle-" + o.flexstyle);

                    $(that.menusParent).append(that.pullMenu);

                    //check for the first time the menu entries /hide them if needed, etc.
                    that._checkMenuEntries();



                    //===  EVENTS =================================================

                    //activate the click event for the pull button
                    $(that.pullButton).on("click", function () {

                        //who am i?
                        that = $(this).closest("[data-role=appbar]").data("appbar");

                        //we show /hide the pullmenu
                        if ($(that.pullMenu).is(":hidden")) {
                            $(that.pullMenu).show();
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .hide().not(".hidden").slideDown("fast");
                        } else {
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .not(".hidden").show().slideUp("fast", function () {
                                $(that.pullMenu).hide();
                            });
                        }

                    });


                    //we have to calculate everything new, if the user resizes or zooms the window
                    $(window).resize(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });


                    //because fonts(also icon-fonts) are often loaded async after the page has loaded and this script walked through already, 
                    //we have to check again after these elements loaded. Because there is no way to observe only specific elements, we do it for the window
                    $(window).load(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });

                    //pictures (or other outside stuff was loaded - pictures are also often loaded async or have a lazy load or are injected after a while. 
                    //a picture can change a size of the element from the appbar, so we must recheck it again.
                    $("[data-role=appbar]:not(.no-flexible) [src]").on("load", function () {
                        //who am i?
                        var appbar = $(this).closest("[data-role=appbar]").data("appbar");
                        appbar.resize();
                    });
                }
            }

        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

// Source: js/widgets/button-groups.js
$.widget( "metro.group" , {

    version: "3.0.0",

    options: {
        groupType: 'one-state', // 'multi-state'
        buttonStyle: false,
        onChange: function(index, btn){return true;},
        onChanged: function(index, btn){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var result;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('group-of-buttons')) {element.addClass('group-of-buttons');}

        var buttons = element.find('.button, .toolbar-button');

        for(var i = 0; i < buttons.length; i++) {
            $(buttons[i]).data('index', i);
        }

        if (o.buttonStyle !== false) {
            buttons.addClass(o.buttonStyle);
        }

        element.on('click', '.button, .toolbar-button', function(){

            var button = $(this), index = button.data('index');

            if (typeof o.onChange === 'function') {
                if (!o.onChange(index, button)) {return false;}
            } else {
                if (typeof window[o.onChange] === 'function') {
                    if (!window[o.onChange](index, button)) {return false;}
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    if (!result.call(index, button)) {return false;}
                }
            }

            if (o.groupType === 'one-state') {
                buttons.removeClass('active');
                $(this).addClass('active');
            } else  {
                $(this).toggleClass('active');
            }

            if (typeof o.onChanged === 'function') {
                o.onChanged(index, button);
            } else {
                if (typeof window[o.onChanged] === 'function') {
                    window[o.onChanged](index, button);
                } else {
                    result = eval("(function(){"+o.onChanged+"})");
                    result.call(index, button);
                }
            }
        });

        element.data('group', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/calendar.js
$.widget("metro.calendar", {

    version: "3.0.0",

    options: {
        format: "yyyy-mm-dd",
        multiSelect: false,
        startMode: 'day', //year, month, day
        weekStart: window.METRO_CALENDAR_WEEK_START, // 0 - Sunday, 1 - Monday
        otherDays: true,
        date: new Date(),
        minDate: false,
        maxDate: false,
        preset: false,
        exclude: false,
        stored: false,
        buttons: true,
        buttonToday: true,
        buttonClear: true,
        syncCalenderToDateField: true,
        locale: 'en',
        actions: true,
        condensedGrid: false,
        scheme: 'default',
        getDates: function (d) { },
        dayClick: function (d, d0) { }
    },

    //_storage: [],
    //_exclude: [],

    _year: 0,
    _month: 0,
    _day: 0,
    _today: new Date(),
    _event: '',

    _mode: 'day', // day, month, year
    _distance: 0,

    _events: [],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function (key, value) {
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.date === 'string') {
            o.date = new Date(o.date);
        }

        if (o.minDate !== false && typeof o.minDate === 'string') {
            o.minDate = new Date(o.minDate.replace(/\./g, "-") + 'T00:00:00Z');
            o.minDate.setTime(o.minDate.getTime() - 24 * 60 * 60 * 1000);
        }

        if (o.maxDate !== false && typeof o.maxDate === 'string') {
            o.maxDate = new Date(o.maxDate.replace(/\./g, "-") + 'T00:00:00Z');
        }

        //console.log(window.METRO_LOCALES);

        this.locales = window.METRO_LOCALES;

        this._year = o.date.getFullYear();
        this._distance = o.date.getFullYear() - 4;
        this._month = o.date.getMonth();
        this._day = o.date.getDate();
        this._mode = o.startMode;

        element.data("_storage", []);
        element.data("_exclude", []);
        element.data("_stored", []);
        if (!element.hasClass('calendar')) { element.addClass('calendar'); }

        var re, dates;

        if (o.preset) {
            re = /\s*,\s*/;
            dates = o.preset.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDate(this); }
            });
        }

        if (o.exclude) {
            re = /\s*,\s*/;
            dates = o.exclude.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateExclude(this); }
            });
        }

        if (o.stored) {
            re = /\s*,\s*/;
            dates = o.stored.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateStored(this); }
            });
        }

        if (o.scheme !== 'default') {
            element.addClass(o.scheme);
        }

        this._renderCalendar();

        element.data('calendar', this);

    },

    _renderButtons: function (table) {
        var tr, td, o = this.options;

        if (this.options.buttons) {

            var buttonToday = o.buttonToday ? "<button class='button calendar-btn-today small-button success'>" + this.locales[o.locale].buttons[0] + "</button>" : "";
            var buttonClear = o.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>" + this.locales[o.locale].buttons[1] + "</button>" : "";

            tr = $("<div/>").addClass("calendar-row calendar-actions");
            td = $("<div/>").addClass("align-center").html(
                buttonToday + buttonClear
            );
            td.appendTo(tr);
            tr.appendTo(table);
        }
    },

    _renderMonth: function () {
        var that = this, o = this.options,
            year = this._year,
            month = this._month,
            day = this._day,
            event = this._event,
            feb = 28;

        if (month === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                feb = 29;
            }
        }

        var totalDays = ["31", "" + feb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var daysInMonth = totalDays[month];
        
        var first_week_day = this._dateFromNumbers(year, month+1, 1).getDay();

        var table, tr, td, i, div;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (o.condensedGrid) {
            table.addClass('condensed no-border');
        }

        //console.log(this.locales);

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row no-margin');

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>" + this.locales[o.locale].months[month] + ' ' + year + "</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        // Add day names
        var j;
        tr = $("<div/>").addClass('calendar-row week-days');
        for (i = 0; i < 7; i++) {
            if (!o.weekStart) {
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[i + 7]).appendTo(td);
            } else {
                j = i + 1;
                if (j === 7) { j = 0; }
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[j + 7]).appendTo(td);
            }
        }
        tr.addClass("calendar-subheader").appendTo(table);

        // Add empty days for previos month
        var prevMonth = this._month - 1; if (prevMonth < 0) { prevMonth = 11; } var daysInPrevMonth = totalDays[prevMonth];
        var _first_week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;
        var htmlPrevDay = "";
        tr = $("<div/>").addClass('calendar-row');
        for (i = 0; i < _first_week_day; i++) {
            if (o.otherDays) { htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1); }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlPrevDay).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        // Days for current month
        var week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;

        var d, a, d_html;

        for (i = 1; i <= daysInMonth; i++) {
            week_day %= 7;

            if (week_day === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }

            td = $("<div/>").addClass("calendar-cell align-center day");
            div = $("<div/>").appendTo(td);

            if (o.minDate !== false && (this._dateFromNumbers(year, month+1, i) < o.minDate) || o.maxDate !== false && (this._dateFromNumbers(year, month+1, i) > o.maxDate)) {
                td.removeClass("day");
                div.addClass("other-day");
                d_html = i;
            } else {
                d_html = "<a href='#'>" + i + "</a>";
            }

            div.html(d_html);

            //console.log(div);

            if (year === this._today.getFullYear() && month === this._today.getMonth() && this._today.getDate() === i) {
                td.addClass("today");
            }

            //console.log('xxx');
            d = this._dateNumberStringyFy(this._year, this._month + 1, i);

            if (this.element.data('_storage').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("selected");
            }

            if (this.element.data('_exclude').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("exclude");
            }

            if (this.element.data('_stored').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("stored");
            }

            td.appendTo(tr);
            week_day++;
        }


        // next month other days
        var htmlOtherDays = "";
        for (i = week_day + 1; i <= 7; i++) {
            if (o.otherDays) { htmlOtherDays = i - week_day; }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlOtherDays).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        tr.appendTo(table);
        this._renderButtons(table);
        table.appendTo(this.element);
    },

    _renderMonths: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');
        j = 0;
        for (i = 0; i < 12; i++) {

            //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
            td = $("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='" + i + "'>" + this.locales[this.options.locale].months[i + 12] + "</a>");

            if (this._month === i && (new Date()).getFullYear() === this._year) {
                td.addClass("today");
            }

            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderYears: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row cells4');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + (this._distance) + "-" + (this._distance + 11) + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');

        j = 0;
        for (i = this._distance; i < this._distance + 12; i++) {
            td = $("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='" + i + "'>" + i + "</a>");
            if ((new Date()).getFullYear() === i) {
                td.addClass("today");
            }
            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderCalendar: function () {
        switch (this._mode) {
            case 'year': this._renderYears(); break;
            case 'month': this._renderMonths(); break;
            default: this._renderMonth();
        }
        this._initButtons();
    },

    _initButtons: function () {
        // Add actions
        var that = this, o = this.options,
            table = this.element.find('.calendar-grid');

        if (this._mode === 'day') {
            table.find('.btn-select-month').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-month').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._month -= 1;
                if (that._month < 0) {
                    that._year -= 1;
                    that._month = 11;
                }
                that._renderCalendar();
            });
            table.find('.btn-next-month').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month += 1;
                if (that._month === 12) {
                    that._year += 1;
                    that._month = 0;
                }
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.day a').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if ($(this).parent().parent().hasClass('exclude')) {
                    return false;
                }

                var d = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)).format(that.options.format, null));
                var d0 = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)));

                if (that.options.multiSelect) {
                    $(this).parent().parent().toggleClass("selected");

                    if ($(this).parent().parent().hasClass("selected")) {
                        that._addDate(that._dateStringyFy(d0));
                    } else {
                        that._removeDate(that._dateStringyFy(d0));
                    }
                } else {
                    table.find('.day a').parent().parent().removeClass('selected');
                    $(this).parent().parent().addClass("selected");
                    that.element.data('_storage', []);
                    that._addDate(that._dateStringyFy(d0));
                }


                if (typeof o.dayClick === 'function') {
                    o.dayClick(d, d0);
                } else {
                    if (typeof window[o.dayClick] === 'function') {
                        window[o.dayClick](d, d0);
                    } else {
                        var result = eval("(function(){" + o.dayClick + "})");
                        result.call(d, d0);
                    }
                }
            });
        } else if (this._mode === 'month') {
            table.find('.month a').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month = parseInt($(this).data('month'));
                that._mode = 'day';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.btn-select-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'year';
                that._renderCalendar();
            });
        } else {
            table.find('.year a').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year = parseInt($(this).data('year'));
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._distance -= 10;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._distance += 10;
                that._renderCalendar();
            });
        }

        table.find('.calendar-btn-today').on('click', function (e) {
            //that._event = 'eventNext';
            e.preventDefault();
            e.stopPropagation();
            that._mode = that.options.startMode;
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that._renderCalendar();
        });
        table.find('.calendar-btn-clear').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that.element.data('_storage', []);
            that._renderCalendar();
        });

    },

    _addDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        if (index < 0) { this.element.data('_storage').push(d); }
    },

    _removeDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        this.element.data('_storage').splice(index, 1);
    },

    _addDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        if (index < 0) { this.element.data('_exclude').push(d); }
    },

    _addDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        if (index < 0) { this.element.data('_stored').push(d); }
    },

    _removeDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        this.element.data('_exclude').splice(index, 1);
    },

    _removeDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        this.element.data('_stored').splice(index, 1);
    },

    _paddy: function paddy(n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    },

    _dateFromNumbers: function dateFromNumbers(year, month, day){
        return new Date(this._paddy(year, 4) + "/" +  this._paddy(month, 2) + "/" + this._paddy(day, 2));
    },

    _dateNumberStringyFy: function dateNumberStringyFy(year, month, day) {
        return (this._dateFromNumbers(year, month, day)).format('yyyy-mm-dd')
    },

    _dateStringyFy: function dateStringyFy(d) {
        return this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
    },

    setDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        
        this._addDate(r);
        if (this.options.syncCalenderToDateField) {
            this._year = d.getFullYear();
            this._month = d.getMonth();
            this._day = d.getDate();
        }
        this._renderCalendar();
    },

    setDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateExclude(r);
        this._renderCalendar();
    },

    setDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateStored(r);
        this._renderCalendar();
    },

    getDate: function (index) {
        return new Date(index !== undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
    },

    getDates: function () {
        var res;
        res = $.merge($.merge([], this.element.data('_storage')), this.element.data('_stored'));
        return res.unique();
    },

    unsetDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDate(r);
        this._renderCalendar();
    },

    unsetDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateExclude(r);
        this._renderCalendar();
    },

    unsetDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateStored(r);
        this._renderCalendar();
    },

    _destroy: function () { },

    _setOption: function (key, value) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/carousel.js
$.widget("metro.carousel", {

    version: "3.0.0",

    options: {
        auto: true,
        period: 5000,
        duration: 1000,
        effect: 'slide', // slide, fade, switch, slowdown
        effectFunc: 'linear',
        direction: 'left',
        controls: true,
        controlNext: false,
        controlPrev: false,
        markers: true,
        stop: true,
        width: '100%',
        height: false,

        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _animating: false
    },


    _create: function(){
        var that = this, o = this.options,
            element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        o._slides = element.find('.slide');

        var max_height = 0; //element.find('.slide:nth-child(1)').outerHeight();


        $.each(o._slides, function(){
            var oh, slide = $(this);

            oh = slide.outerHeight();

            if (oh > max_height) {max_height = oh;}
        });

        element.css({
            'width': o.width,
            'height': o.height ? o.height : max_height
        });

        if (o._slides.length <= 1) {return;}

        if (o.markers) {
            this._markers();
        }

        if (o.controls) {
            this._controls();
        }

        if (o.stop) {
            element
                .on('mouseenter', function(){
                    clearInterval(o._interval);
                })
                .on('mouseleave', function(){
                    if (that.options.auto) {that._autoStart();}// that.options.period;
                });
        }

        element.find('.slide').hide();
        element.find('.slide:nth-child(1)').show();

        //this._slideToSlide(0);
        if (o.auto) {
            this._autoStart();
        }

        element.data('carousel', this);

    },

    _autoStart: function(){
        var that = this, o = this.options;
        o._interval = setInterval(function(){
            if (o.direction === 'left') {
                that._slideTo('next');
            } else {
                that._slideTo('prior');
            }
        }, o.period);
    },

    _slideTo: function(direction){
        var carousel = this.element, that = this, o = this.options;
        var currentSlide = o._slides[o._currentIndex], nextSlide;

        if (direction === undefined) {direction = 'next';}

        if (direction === 'prior') {
            o._currentIndex -= 1;
            if (o._currentIndex < 0) {o._currentIndex = o._slides.length - 1;}

            o._outPosition = this.element.width();

        } else if (direction === 'next') {
            o._currentIndex += 1;
            if (o._currentIndex >= o._slides.length) {o._currentIndex = 0;}

            o._outPosition = -this.element.width();

        }

        nextSlide = o._slides[o._currentIndex];

        switch (this.options.effect) {
            case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
            case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
            default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
        }

        carousel.find('.carousel-bullets a').each(function(){
            var index = $(this).data('num');
            if (index === o._currentIndex) {
                $(this).addClass('bullet-on');
            } else {
                $(this).removeClass('bullet-on');
            }
        });
    },

    _slideToSlide: function(slideIndex){
        var o = this.options,
            currentSlide = o._slides[o._currentIndex],
            nextSlide = o._slides[slideIndex];

        if (o._currentIndex === slideIndex) {
            return false;
        }

        if (slideIndex > o._currentIndex) {
            o._outPosition = -this.element.width();
        } else {
            o._outPosition = this.element.width();
        }

        switch (this.options.effect) {
            case 'switch' : this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide); break;
            case 'fade': this._effectFade(currentSlide, nextSlide); break;
            default : this._effectSlide(currentSlide, nextSlide);
        }

        o._currentIndex = slideIndex;
    },

    _controls: function(){
        var next, prev, that = this, element = this.element, o = this.options;

        next = $('<span/>').addClass('carousel-switch-next').html("&gt;");
        prev = $('<span/>').addClass('carousel-switch-prev').html("&lt;");

        if (o.controlNext) {
            next.html(o.controlNext);
        }

        if (o.controlPrev) {
            prev.html(o.controlPrev);
        }

        next.appendTo(element);
        prev.appendTo(element);

        if (o._slides.length > 1) {
            prev.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('prior');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
            next.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('next');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
        } else {
            next.hide();
            prev.hide();
        }
    },

    _markers: function () {
        var div, a, i, that = this, o = this.options;

        div = $('<div class="carousel-bullets" />');

        for (i = 0; i < o._slides.length; i++) {
            a = $('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + i + '"></a>');
            if (i === 0) {
                a.addClass('bullet-on');
            }
            a.appendTo(div);
        }


        div.find('a').on('click', function (e) {
            var _this = $(this),
                index = _this.data('num');



            div.find('a').removeClass('bullet-on');
            _this.addClass('bullet-on');

            if (index === o._currentIndex) {
                return false;
            }

            that._slideToSlide(index);

            e.preventDefault();
            e.stopPropagation();
        });

        div.appendTo(this.element);

    },


    _effectSwitch: function(currentSlide, nextSlide){
        $(currentSlide)
            .hide();
        $(nextSlide)
            .css({left: 0})
            .show();
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    _effectSlide: function(currentSlide, nextSlide){
        var o = this.options;
        $(currentSlide)
            .animate({left: o._outPosition}, o.duration, o.effectFunc);
        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, o.duration, o.effectFunc);
    },

    _effectSlowdown: function(currentSlide, nextSlide){
        var o = this.options;
        var options = {
            'duration': o.duration,
            'easing': 'doubleSqrt'
        };
        $.easing.doubleSqrt = function(t) {
            return Math.sqrt(Math.sqrt(t));
        };

        $(currentSlide)
            .animate({left: o._outPosition}, options);


        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, options);
    },

    _effectFade: function(currentSlide, nextSlide){
        var o = this.options;

        $(currentSlide)
            .fadeOut(o.duration);
        $(nextSlide)
            .css({left: 0})
            .fadeIn(o.duration);
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    slideTo: function(index){
        this._slideToSlide(index);
    },

    nextSlide: function(){
        this._slideTo('next');
    },

    priorSlide: function(){
        this._slideTo('prior');
    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/charm.js
$.widget( "metro.charm" , {

    version: "3.0.0",

    options: {
        position: "right",
        opacity: 1,
        outside: false,
        timeout: 0,
        duration: 400
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });


        this._createCharm();

        element.data('charm', this);
    },

    _createCharm: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("charm").addClass(o.position+"-side").css({opacity: o.opacity}).hide();

        var closer = $("<span/>").addClass("charm-closer").appendTo(element);
        closer.on('click', function(){
            that.close();
        });

        if (o.outside === true) {
            element.on('mouseleave', function(e){
                that.close();
            });
        }
    },

    _showCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.css({
                    left: -size
                }).show().animate({
                    left: 0
                }, o.duration);
            } else {
                element.css({
                    right: -size
                }).show().animate({
                    right: 0
                }, o.duration);
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.css({
                    top: -size
                }).show().animate({
                    top: 0
                }, o.duration);
            } else {
                element.css({
                    bottom: -size
                }).show().animate({
                    bottom: 0
                }, o.duration);
            }
        }

        if (o.timeout > 0) {
            this._timeout_interval = setInterval(function(){
                if (!element.is(":hover")) {
                    that.close();
                    clearInterval(this._timeout_interval);
                }
            }, o.timeout);
        }
    },

    _hideCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.animate({
                    left: -size
                }, o.duration, function(){
                    element.hide();
                });
            } else {
                element.animate({
                    right: -size
                }, o.duration, function(){
                    element.hide();
                });
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.animate({
                    top: -size
                }, o.duration, function(){
                    element.hide();
                });
            } else {
                element.animate({
                    bottom: -size
                }, o.duration, function(){
                    element.hide();
                });
            }
        }

        clearInterval(this._timeout_interval);
    },

    open: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === true) {
            return;
        }

        element.data("opened", true);
        this._showCharm();
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === false) {
            return;
        }

        element.data("opened", false);

        this._hideCharm();
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/clock.js
$.widget( "metro.clock" , {

    version: "1.0.0",

    options: {
        format: '24',
        showSeconds: true,
        showDate: false,
        dateFormat: 'american'
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._createClock();

        element.data('clock', this);
    },

    _tick: function(){
        var that = this, element = this.element, o = this.options;
        var current_time = new Date();

        var h = current_time.getHours(),
            m = current_time.getMinutes(),
            s = current_time.getSeconds(),
            dy = current_time.getDay(),
            dt = current_time.getDate(),
            mo = current_time.getMonth() + 1,
            y = current_time.getFullYear(),
            ap = "";

        if (o.format == "12") {
            ap = " AM";
            if (h > 11) { ap = " PM"; }
            if (h > 12) { h = h - 12; }
            if (h == 0) { h = 12; }
        }

        h = this._leadZero(h);
        m = this._leadZero(m);
        s = this._leadZero(s);

        dy = this._leadZero(dt);
        mo = this._leadZero(mo);

        var ddd, result = "";

        if (o.dateFormat == 'american') {
            ddd = y+"-"+mo+"-"+dy;
        } else {
            ddd = dy+"-"+mo+"-"+y;
        }

        if (o.showDate) {
            result += ddd;
        }

        result += "<span></span> <span class='hour'>"+h+"</span>:<span class='minute'>"+m+"</span>";

        if (o.showSeconds) {
            result += ":<span class='second'>"+s+"</span>";
        }

        result += "<span class='ap'>"+ap+"</span>";

        element.html(result);
    },

    _leadZero: function(i){
        return i < 10 ? "0" + i : i;
    },

    _createClock: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass('clock');

        this._tick();

        this._clockInterval = setInterval(function(){
            that._tick();
        }, 1000);
    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
        clearInterval(this._clockInterval);
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/countdown.js
$.widget( "metro.countdown" , {

    version: "3.0.0",

    options: {
        stop: false,
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
        backgroundColor: 'bg-cyan',
        digitColor: 'fg-white',
        dividerColor: 'fg-dark',
        labelColor: 'fg-grayLight',
        labels: {
            'days': 'days',
            'hours': 'hours',
            'minutes': 'mins',
            'seconds': 'secs'
        },
        onTick: function(d, h, m, s){},
        onStop: function(){}
    },

    _interval: 0,
    _interval2: 0,
    _alarmOn: undefined,

    _create: function () {
        //console.log('hi from countdown');

        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._alarmOn = new Date();

        if (o.stop !== false) {
            this._alarmOn = new Date(o.stop);
        }

        var dm = 24*60*60*1000, hm = 60*60*1000, mm = 60*1000, sm = 1000;

        if (o.days !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.days*dm;
        }

        if (o.hours !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.hours*hm;
        }

        if (o.minutes !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.minutes*mm;
        }

        if (o.seconds !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.seconds*sm;
        }

        this._createDigits();

        element.find('.digit').text('0');

        that._tick();

        element.data('countdown', this);

    },

    _createDigits: function(){
        var element = this.element, o = this.options;
        var parts = ['days', 'hours', 'minutes', 'seconds'];
        var p, d;

        parts.map(function(v){
            p = $("<div/>").addClass('part ' + v).attr('data-day-text', o.labels[v]).appendTo(element);
            $("<div/>").addClass('digit').appendTo(p);
            $("<div/>").addClass('digit').appendTo(p);
            if (o.labelColor.isColor()) {
                p.css({
                    color: o.labelColor
                });
            } else {
                p.addClass(o.labelColor);
            }

            if (o.backgroundColor.isColor()) {
                p.find('.digit').css({
                    background: o.backgroundColor
                });
            } else {
                p.find('.digit').addClass(o.backgroundColor);
            }

            if (o.digitColor.isColor()) {
                p.find('.digit').css({
                    color: o.digitColor
                });
            } else {
                p.find('.digit').addClass(o.digitColor);
            }

            if (v !== 'seconds') {
                d = $("<div/>").addClass("divider").text(':').appendTo(element);
                if (o.dividerColor.isColor()) {
                    d.css({'color': o.dividerColor});
                } else {
                    d.addClass(o.dividerColor);
                }
            }

        });

    },

    _blink: function(){
        this.element.toggleClass('tick');
    },

    _tick: function(){
        var that = this, o = this.options, element = this.element;
        var days = 24*60*60,
            hours = 60*60,
            minutes = 60;

        var left, d, h, m, s;

        this._interval2 = setInterval(function(){
            that._blink();
        }, 500);

        this._interval = setInterval(function(){
            var result;

            left = Math.floor((that._alarmOn - (new Date())) / 1000);
            if (left < 0) {left = 0;}

            d = Math.floor(left / days);
            left -= d*days;
            that._update('days', d);

            if (d === 0) {
                element.find('.part.days').addClass('disabled');
            }

            h = Math.floor(left / hours);
            left -= h*hours;
            that._update('hours', h);

            if (d === 0 && h === 0) {
                element.find('.part.hours').addClass('disabled');
            }

            m = Math.floor(left / minutes);
            left -= m*minutes;
            that._update('minutes', m);

            if (d === 0 && h === 0 && m === 0) {
                element.find('.part.minutes').addClass('disabled');
            }

            s = left;
            that._update('seconds', s);

            if (typeof o.onTick === 'function') {
                o.onTick(d, h, m, s);
            } else {
                if (typeof window[o.onTick] === 'function') {
                    window[o.onTick](d, h, m, s);
                } else {
                    result = eval("(function(){"+o.onTick+"})");
                    result.call(d, h, m, s);
                }
            }

            //that._blink();

            if (d === 0 && h === 0 && m === 0 && s === 0) {
                element.find('.part').addClass('disabled');

                if (typeof o.onStop === 'function') {
                    o.onStop();
                } else {
                    if (typeof window[o.onStop] === 'function') {
                        window[o.onStop]();
                    } else {
                        result = eval("(function(){"+o.onStop+"})");
                        result.call();
                    }
                }

                that._stop('all');
                that._trigger('alarm');
                clearInterval(that._interval);
            }

        }, 1000);
    },

    _update: function(part, value){
        var element = this.element;
        var major_value = Math.floor(value/10)%10;
        var minor_value = value%10;
        var major_digit, minor_digit;

        major_digit = element.find("."+part+" .digit:eq(0)");
        minor_digit = element.find("."+part+" .digit:eq(1)");

        if (minor_value !== parseInt(minor_digit.text())) {
            minor_digit.toggleClass('scaleIn');
            setTimeout(function(){
                minor_digit.text(minor_value).toggleClass('scaleIn');
            }, 500);
        }
        if (major_value !== parseInt(major_digit.text())) {
            major_digit.toggleClass('scaleIn');
            setTimeout(function(){
                major_digit.text(major_value).toggleClass('scaleIn');
            }, 500);
        }
    },

    _stop: function(){
        clearInterval(this._interval);
        clearInterval(this._interval2);
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datatable.js
$.widget( "metro.datatable" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        if($().dataTable) {
            try {
                element.dataTable(o);
            } catch (e) {

            }
        } else {
            alert('dataTable plugin required');
        }

        element.data('datatable', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datepicker.js
$.widget("metro.datepicker", {

    version: "3.0.0",

    options: {
        format: "yyyy.mm.dd",
        preset: false,
        minDate: false,
        maxDate: false,
        effect: 'fade',
        position: 'bottom',
        locale: window.METRO_CURRENT_LOCALE,
        weekStart: window.METRO_CALENDAR_WEEK_START,
        otherDays: false,
        exclude: false,
        stored: false,
        buttons: false,
        buttonToday: true,
        buttonClear: true,
        condensedGrid: false,
        scheme: 'default',
        onSelect: function(d, d0){}
    },

    _calendar: undefined,

    _create: function(){
        var that = this,
            element = this.element, o = this.options,
            input = element.children("input"),
            button = element.children("button");

        //console.log(o);

        $.each(element.data(), function(key, value){
            //console.log(typeof key, key, value);

            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createCalendar();

        input.attr('readonly', true);
        button.attr('type', 'button');

        button.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        element.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        $('html').on('click', function(){
            $(".calendar-dropdown").hide();
        });

        element.data('datepicker', this);

    },

    _createCalendar: function(){
        var _calendar, that = this, element = this.element, o = this.options;

        _calendar = $("<div/>").css({
            position: 'absolute',
            display: 'none',
            'max-width': 220,
            'z-index': 1000

        }).addClass('calendar calendar-dropdown').appendTo(element);

        //if (o.date != undefined) {
            //_calendar.data('date', o.date);
        //}


        _calendar.calendar({
            multiSelect: false,
            format: o.format,
            buttons: false,
            buttonToday: false,
            buttonClear: false,
            locale: o.locale,
            otherDays: o.otherDays,
            weekStart: o.weekStart,
            condensedGrid: o.condensedGrid,
            exclude: o.exclude,
            stored: o.stored,
            date: o.preset ? o.preset : new Date(),
            minDate: o.minDate,
            maxDate: o.maxDate,
            scheme: o.scheme,
            dayClick: function(d, d0){
                //console.log(d, d0);
                _calendar.calendar('setDate', d0);
                that.element.children("input[type=text]").val(d);
                that.element.children("input[type=text]").trigger('change', d0);
                that.element.children("input[type=text]").blur();
                that._hide();

                if (typeof o.onSelect === 'function') {
                    o.onSelect(d, d0);
                } else {
                    if (typeof window[o.onSelect] === 'function') {
                        window[o.onSelect](d, d0);
                    } else {
                        var result = eval("(function(){"+o.onSelect+"})");
                        result.call(d, d0);
                    }
                }
            }
        });

        if (o.preset !== false) {
            //console.log(o.preset);
            _calendar.calendar('setDate', o.preset);
            element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
        }

        // Set position
        switch (this.options.position) {
            case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
            default: _calendar.css({top: '100%', left: 0});
        }

        this._calendar = _calendar;
    },

    _show: function(){
        if (this.options.effect === 'slide') {
            $(".calendar-dropdown").slideUp('fast');
            this._calendar.slideDown('fast');
        } else if (this.options.effect === 'fade') {
            $(".calendar-dropdown").fadeOut('fast');
            this._calendar.fadeIn('fast');
        } else {
            $(".calendar-dropdown").hide();
            this._calendar.show();
        }
    },
    _hide: function(){
        if (this.options.effect === 'slide') {
            this._calendar.slideUp('fast');
        } else if (this.options.effect === 'fade') {
            this._calendar.fadeOut('fast');
        } else {
            this._calendar.hide();
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/dialog.js
$.widget( "metro.dialog" , {

    version: "3.0.0",

    options: {
        modal: false,
        overlay: false,
        overlayColor: 'default',
        type: 'default', // success, alert, warning, info
        place: 'center', // center, top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
        position: 'default',
        content: false,
        hide: false,
        width: 'auto',
        height: 'auto',
        background: 'default',
        color: 'default',
        closeButton: false,
        windowsStyle: false,
        show: false,
        _interval: undefined,
        _overlay: undefined,

        onDialogOpen: function(dialog){},
        onDialogClose: function(dialog){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.overlay) {
            this._createOverlay();
        }
        this._createDialog();

        element.data('dialog', this);

        if (o.show) {
            this.open();
        }
    },

    _createOverlay: function(){
        var that = this, element = this.element, o = this.options;
        var overlay = $('body').find('.dialog-overlay');

        if (overlay.length === 0) {
            overlay = $("<div/>").addClass('dialog-overlay');
        }

        if (o.overlayColor) {
            if (o.overlayColor.isColor()) {
                overlay.css({
                    background: o.overlayColor
                });
            } else {
                overlay.addClass(o.overlayColor);
            }
        }

        o._overlay = overlay;
    },

    _createDialog: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass('dialog');

        if (o.type !== 'default') {
            element.addClass(o.type);
        }

        if (o.windowsStyle) {
            o.width = 'auto';

            element.css({
                left: 0,
                right: 0
            });
        }

        if (o.background !== 'default') {
            if (o.background.isColor()) {
                element.css({
                    background: o.background
                });
            } else {
                element.addClass(o.background);
            }
        }

        if (o.color !== 'default') {
            if (o.color.isColor()) {
                element.css({
                    color: o.color
                });
            } else {
                element.addClass(o.color);
            }
        }

        element.css({
            width: o.width,
            height: o.height
        });

        if (o.closeButton) {
            $("<span/>").addClass('dialog-close-button').appendTo(element).on('click', function(){
                that.close();
            });
        }

        this._hide();
    },

    _hide: function(){
        var element = this.element;
        element.css({
           visibility: "hidden"
        });
    },

    _show: function(){
        var element = this.element;
        element.css({
           visibility: "visible"
        });
    },

    _setPosition: function(){
        var that = this, element = this.element, o = this.options;
        var width = element.width(),
            height = element.height();

        element.css({
            left: o.windowsStyle === false ? ( $(window).width() - width ) / 2 : 0,
            top: ( $(window).height() - height ) / 2
        });
    },

    toggle: function(){
        var element = this.element;
        if (element.data('opened')) {
            this.close();
        } else {
            this.open();
        }
    },

    open: function(){
        var that = this, element = this.element, o = this.options;
        var overlay;

        this._setPosition();

        element.data('opened', true);

        if (o.overlay) {
            overlay = o._overlay;
            overlay.appendTo('body').show();
        }

        //element.fadeIn();
        this._show();

        if (typeof o.onDialogOpen === 'function') {
            o.onDialogOpen(element);
        } else {
            if (typeof window[o.onDialogOpen] === 'function') {
                window[o.onDialogOpen](element);
            } else {
                var result = eval("(function(){"+o.onDialogOpen+"})");
                result.call(element);
            }
        }

        if (o.hide && parseInt(o.hide) > 0) {
            o._interval = setTimeout(function(){
                that.close();
            }, parseInt(o.hide));
        }
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        clearInterval(o._interval);

        if (o.overlay) {
            $('body').find('.dialog-overlay').remove();
        }

        element.data('opened', false);

        //element.fadeOut();
        this._hide();

        if (typeof o.onDialogClose === 'function') {
            o.onDialogClose(element);
        } else {
            if (typeof window[o.onDialogClose] === 'function') {
                window[o.onDialogClose](element);
            } else {
                var result = eval("(function(){"+o.onDialogClose+"})");
                result.call(element);
            }
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/draggable.js
$.widget( "metro.draggable" , {

    version: "3.0.0",

    options: {
        dragElement: null,
        dragArea: null,
        onDragStart: function(el){},
        onDragStop: function(el){},
        onDragMove: function(el, offset){}
    },

    drag: false,
    oldCursor: null,
    oldZindex: null,
    oldPosition: null,


    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();
        this._createDraggable();

        element.data('draggable', this);
    },

    _createDraggable: function(){
        var that = this, element = this.element, o = this.options;
        var dragElement  = o.dragElement ? element.find(o.dragElement) : element;

        addTouchEvents(element[0]);

        dragElement.on('mousedown', function(e){
            var result, el = $(this);

            that.drag = true;

            if (typeof o.onDragStart === 'function') {
                o.onDragStart(element);
            } else {
                if (typeof window[o.onDragStart] === 'function') {
                    window[o.onDragStart](element);
                } else {
                    result = eval("(function(){"+o.onDragStart+"})");
                    result.call(element);
                }
            }

            that.oldCursor = el.css('cursor') ? el.css('cursor') : 'default' ;
            that.oldZindex= element.css('z-index');
            dragElement.css({
                cursor: 'move'
            });

            element.css({
                'z-index': '2000'
            });

            var dragArea = o.dragArea ? $(o.dragArea) : $(window);
            var os = {
                left: o.dragArea ? dragArea.offset().left : 0,
                top: o.dragArea ? dragArea.offset().top : 0
            };

            var drg_h = element.outerHeight(),
                drg_w = element.outerWidth(),
                pos_y = element.offset().top + drg_h - e.pageY,
                pos_x = element.offset().left + drg_w - e.pageX;

            //console.log(pos_x, pos_y);

            dragArea.on('mousemove', function(e){
                var offset, pageX, pageY;

                if (!that.drag) return false;


                pageX = e.pageX - os.left;
                pageY = e.pageY - os.top;

                var t = (pageY > 0) ? (pageY + pos_y - drg_h) : (0);
                var l = (pageX > 0) ? (pageX + pos_x - drg_w) : (0);
                var t_delta = dragArea.innerHeight() + dragArea.scrollTop() - element.outerHeight();
                var l_delta = dragArea.innerWidth() + dragArea.scrollLeft() - element.outerWidth();

                if(t >= 0 && t <= t_delta) {
                    element.offset({top: t + os.top});
                }
                if(l >= 0 && l <= l_delta) {
                    element.offset({left: l + os.left});
                }

                offset = {
                    left: l,
                    top: t
                };

                if (typeof o.onDragMove === 'function') {
                    o.onDragMove(element, offset);
                } else {
                    if (typeof window[o.onDragMove] === 'function') {
                        window[o.onDragMove](element, offset);
                    } else {
                        result = eval("(function(){"+o.onDragMove+"})");
                        result.call(element, offset);
                    }
                }
            });

            e.preventDefault();
        });

        dragElement.on('mouseup', function(e){
            var result, el = $(this);

            that.drag = false;
            dragElement.css({
                cursor: that.oldCursor
            });
            element.css({
                'z-index': that.oldZindex,
                'position': that.oldPosition
            });

            if (typeof o.onDragStop === 'function') {
                o.onDragStop(element);
            } else {
                if (typeof window[o.onDragStop] === 'function') {
                    window[o.onDragStop](element);
                } else {
                    result = eval("(function(){"+o.onDragStop+"})");
                    result.call(element);
                }
            }

            e.preventDefault();
        });

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/dropdown.js
$.widget("metro.dropdown", {

    version: "3.0.0",

    options: {
        effect: window.METRO_SHOW_TYPE,
        toggleElement: false,
        noClose: false,
        onDrop: function(object){},
        onUp: function(object){}
    },

    _create: function(){
        var  that = this, element = this.element, o = this.options,
             menu = this.element,
             name = this.name,
             parent = this.element.parent();

        var toggle;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        if (METRO_SHOW_TYPE !== undefined) {
            this.options.effect = METRO_SHOW_TYPE;
        }

        toggle.on('click.'+name, function(e){
            parent.siblings(parent[0].tagName).removeClass("active-container");
            $(".active-container").removeClass("active-container");

            if (menu.css('display') === 'block' && !menu.hasClass('keep-open')) {
                that._close(menu);
            } else {
                $('[data-role=dropdown]').each(function(i, el){
                    if (!menu.parents('[data-role=dropdown]').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                        that._close(el);
                    }
                });
                if (menu.hasClass('horizontal')) {
                    menu.css({
                        'visibility': 'hidden',
                        'display': 'block'
                    });
                    var item_length = $(menu.children('li')[0]).outerWidth();
                    //var item_length2 = $(menu.children('li')[0]).width();
                    menu.css({
                        'visibility': 'visible',
                        'display': 'none'
                    });
                    var menu_width = menu.children('li').length * item_length + (menu.children('li').length - 1);
                    menu.css('width', menu_width);
                }
                that._open(menu);
                parent.addClass("active-container");
            }
            e.preventDefault();
            e.stopPropagation();
        });

        if (o.noClose === true) {
            element.on('click', function (e) {
               // e.preventDefault();
                e.stopPropagation();
            });
        }

        $(menu).find('li.disabled a').on('click', function(e){
            e.preventDefault();
        });

        $(document).on('click', function(e){
            $('[data-role=dropdown]').each(function(i, el){
                if (!$(el).hasClass('keep-open') && $(el).css('display')==='block') {
                    that._close(el);
                }
            });
        });

        element.data('dropdown', this);
    },

    _open: function(el){
        var parent = this.element.parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeIn('fast'); break;
            case 'slide': $(el).slideDown('fast'); break;
            default: $(el).show();
        }
        this._trigger("onOpen", null, el);
        toggle.addClass('active-toggle');

        if (typeof o.onDrop === 'function') {
            o.onDrop(el);
        } else {
            if (typeof window[o.onDrop] === 'function') {
                window[o.onDrop](el);
            } else {
                var result = eval("(function(){"+o.onDrop+"})");
                result.call(el);
            }
        }
    },

    _close: function(el){
        var parent = $(el).parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeOut('fast'); break;
            case 'slide': $(el).slideUp('fast'); break;
            default: $(el).hide();
        }
        this._trigger("onClose", null, el);
        toggle.removeClass('active-toggle');

        if (typeof o.onUp === 'function') {
            o.onUp(el);
        } else {
            if (typeof window[o.onUp] === 'function') {
                window[o.onUp](el);
            } else {
                var result = eval("(function(){"+o.onUp+"})");
                result.call(el);
            }
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/fit-image.js
$.widget( "metro.fitImage" , {

    version: "3.0.0",

    options: {
        shadow: false,
        overlay: false,
        type: 'default',
        frameColor: 'default',
        format: 'hd' // 'sd'
    },

    _create: function () {
        var element = this.element, o = this.options;
        var parent = element.parent();
        var i_w, i_h, p_w, p_h;
        var div, src = element.attr('src');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        $("<img/>")
            .attr('src', src)
            .load(function(){
                i_w = this.width;
                i_h = this.height;
            }).remove();

        var image_container = $("<div/>").addClass('image-container').css('width', '100%').appendTo(parent);
        var image_frame = $("<div/>").addClass('frame').appendTo(image_container);

        p_w = image_frame.innerWidth();
        p_h = image_frame.innerHeight();

        switch (o.format) {
            case 'sd': p_h = 3 * p_w / 4; break;
            case 'square': p_h = p_w; break;
            case 'cycle': p_h = p_w; break;
            case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
            case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
            default: p_h = 9 * p_w / 16;
        }

        div = $("<div/>").css({
            'width': '100%',
            'height': p_h,
            'background-image': 'url('+src+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'border-radius': o.format === 'cycle' ? '50%' : '0'
        });

        $(window).on('resize', function(){
            var p_w = image_frame.innerWidth();
            var p_h = image_frame.innerHeight();

            switch (o.format) {
                case 'sd': p_h = 3 * p_w / 4; break;
                case 'square': p_h = p_w; break;
                case 'cycle': p_h = p_w; break;
                case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                default: p_h = 9 * p_w / 16;
            }

            div.css({
                'height': p_h
            });
        });

        if (o.frameColor !== 'default') {
            if (o.frameColor.isUrl()) {
                image_frame.css('background-color', o.frameColor);
            } else {
                image_frame.addClass(o.frameColor);
            }
        }
        if (o.overlay !== false) {
            var overlay = $("<div/>").addClass('image-overlay').html(o.overlay).appendTo(image_container);
        }
        if (o.shadow !== false) {
            image_container.addClass('block-shadow');
        }
        div.appendTo(image_frame);

        switch (o.type) {
            case 'diamond': {
                image_container.addClass('diamond'); div.addClass('image-replacer'); break;
            }
            case 'bordered': {
                image_container.addClass('bordered'); break;
            }
            case 'polaroid': {
                image_container.addClass('polaroid'); break;
            }
            case 'handing': {
                image_container.addClass('handing'); break;
            }
            case 'handing-ani': {
                image_container.addClass('handing ani'); break;
            }
            case 'handing-ani-hover': {
                image_container.addClass('handing ani-hover'); break;
            }
        }

        image_container.addClass('image-format-'+ o.format);
        //element.css('display', 'none');
        element.remove();

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/fluentmenu.js
$.widget( "metro.fluentmenu" , {

    version: "3.0.0",

    options: {
        onSpecialClick: function(a, li){},
        onTabClick: function(a, li){},
        onTabChange: function(a, li){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createMenu();

        element.data('fluentmenu', this);

    },

    _createMenu: function(){
        var that = this, element = this.element, o = this.options;
        var active_tab = $(element.find(".tabs-holder > li.active")[0]);

        this.openTab(active_tab);

        element.on("click", ".tabs-holder > li > a", function(e){
            var a = $(this);
            var li = a.parent('li');
            var result;

            if (li.hasClass('special')) {
                if (typeof o.onSpecialClick === 'function') {
                    o.onSpecialClick(a, li);
                } else {
                    if (typeof window[o.onSpecialClick] === 'function') {
                        window[o.onSpecialClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onSpecialClick+"})");
                        result.call(a, li);
                    }
                }
            } else {
                var panel = $(a.attr('href'));
                that._hidePanels();
                that._showPanel(panel);
                element.find('.tabs-holder > li').removeClass('active');
                a.parent('li').addClass('active');

                if (typeof o.onTabClick === 'function') {
                    o.onTabClick(a, li);
                } else {
                    if (typeof window[o.onTabClick] === 'function') {
                        window[o.onTabClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabClick+"})");
                        result.call(a, li);
                    }
                }

                if (typeof o.onTabChange === 'function') {
                    o.onTabChange(a, li);
                } else {
                    if (typeof window[o.onTabChange] === 'function') {
                        window[o.onTabChange](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabChange+"})");
                        result.call(a, li);
                    }
                }
            }
            e.preventDefault();
        });
    },

    _hidePanels: function(){
        this.element.find('.tab-panel').hide();
    },

    _showPanel: function(panel){
        if (panel == undefined) {
            panel = this.element.find('.tabs-holder li.active a').attr('href');
        }
        $(panel).show();
    },

    openTab: function(tab){
        var that = this, element = this.element, o = this.options;
        var target_panel = $(tab.children('a').attr('href'));
        if (target_panel.length === 0) {
            return false;
        }
        this._hidePanels();
        this._showPanel(target_panel);
        element.find('.tabs-holder > li').removeClass('active');
        tab.addClass('active');
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/grid.js
$.widget( "metro.grid" , {

    version: "3.0.0",

    options: {
        equalHeight: true
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.equalHeight) {
            setTimeout(function(){
                that._setEqualHeight();
            }, 50);

            $(window).on('resize', function(){
                that._setEqualHeight();
            });
        }

        element.data('grid', this);

    },

    _setEqualHeight: function(){
        var that = this, element = this.element, o = this.options;
        var rows = element.find('.row');

        $.each(rows, function(){
            var row = $(this);
            var cells = row.children('.cell');
            var maxHeight = 0;

            cells.css('min-height', '0');

            $.each(cells, function(){
                //console.log(this.tagName, $(this).outerHeight());
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });

            cells.css('min-height', maxHeight);
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/hint.js
$.widget("metro.hint", {

    version: "3.0.0",

    options: {
        hintPosition: "auto", // bottom, top, left, right, auto
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hintMaxSize: 200,
        hintMode: 'default',
        hintShadow: false,
        hintBorder: true,
        hintTimeout: 0,
        hintTimeDelay: 0,

        _hint: undefined
    },

    _create: function(){
        var that = this, element = this.element;
        var o = this.options;


        this.element.on('mouseenter', function(e){
            $(".hint, .hint2").remove();
            if (o.hintTimeDelay > 0) {
                setTimeout(function(){
                    that.createHint();
                    o._hint.show();
                }, o.hintTimeDelay);
            } else {
                that.createHint();
                o._hint.show();
            }
            e.preventDefault();
        });

        this.element.on('mouseleave', function(e){
            if (o._hint.length) {
                o._hint.hide().remove();
            }
            e.preventDefault();
        });

        //element.data('hint', this);

    },

    createHint: function(){
        var that = this, element = this.element,
            hint = element.data('hint').split("|"),
            o = this.options;

        var _hint;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element[0].tagName === 'TD' || element[0].tagName === 'TH') {
            var wrp = $("<div/>").css("display", "inline-block").html(element.html());
            element.html(wrp);
            element = wrp;
        }

        var hint_title = hint.length > 1 ? hint[0] : false;
        var hint_text = hint.length > 1 ? hint[1] : hint[0];


        _hint = $("<div/>").appendTo('body');
        if (o.hintMode === 2) {
            _hint.addClass('hint2');
        } else {
            _hint.addClass('hint');
        }

        if (!o.hintBorder) {
            _hint.addClass('no-border');
        }

        if (hint_title) {
            $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
        }
        $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

        _hint.addClass(o.position);

        if (o.hintShadow) {_hint.addClass("shadow");}
        if (o.hintBackground) {
            if (o.hintBackground.isColor()) {
                _hint.css("background-color", o.hintBackground);
            } else {
                _hint.addClass(o.hintBackground);
            }
        }
        if (o.hintColor) {
            if (o.hintColor.isColor()) {
                _hint.css("color", o.hintColor);
            } else {
                _hint.addClass(o.hintColor);
            }
        }

        if (o.hintMaxSize > 0) {
            _hint.css({
                'max-width': o.hintMaxSize
            });
        }

        //if (o.hintMode !== 'default') {
        //    _hint.addClass(o.hintMode);
        //}

        if (o.hintPosition === 'top') {
            _hint.addClass('top');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'right') {
            _hint.addClass('right');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() + 15 - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'left') {
            _hint.addClass('left');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
            });
        } else {
            _hint.addClass('bottom');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        }

        o._hint = _hint;

        if (o.hintTimeout > 0) {
            setTimeout(function(){
                if (o._hint.length) {
                    o._hint.hide().remove();
                }
            }, o.hintTimeout);
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/inputs.js
$.widget("metro.input", {

    version: "3.0.0",

    options: {
        showLabelOnValue: false
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element.hasClass('file')) {this._createInputFile();}
        if (element.hasClass('text')) {this._createInputText();}
        if (element.hasClass('password')) {this._createInputText();}
        if (element.hasClass('select')) {this._createInputSelect();}
        if (element.hasClass('textarea')) {this._createInputTextarea();}
        if (element.hasClass('modern')) {this._createInputModern();}

        element.data('input', this);

    },

    _createInputModern: function(){
        var element = this.element;
        var input = element.find("input");
        var placeholder = element.find(".placeholder");

        if (input.val() !== "") {
            placeholder.css({display: "none"});
        }

        input.on("blur", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
        input.on("focus", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
    },

    _createInputFile: function(){
        var element = this.element;
        var wrapper, button, input;
        wrapper = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>");
        button = element.children('.button');
        input = element.children('input[type="file"]');
        input.css('z-index', 0);
        wrapper.insertAfter(input);
        input.attr('tabindex', '-1');
        button.attr('type', 'button');
        wrapper.attr('placeholder', input.attr('placeholder'))

        input.on('change', function(){
            var val = $(this).val();
            if (val !== '') {
                wrapper.val(val.replace(/.+[\\\/]/, ""));
                wrapper.attr('title', val.replace(/.+[\\\/]/, ""));
            }
        });

        element.on('click', '.button, .input-file-wrapper', function(){
            input.trigger('click');
        });
    },

    _createInputText: function(){
        var element = this.element;
        var helper_clear = element.find('.helper-button.clear');
        var helper_reveal = element.find('.helper-button.reveal');
        var input = element.find('input');
        var helpers = element.find('.helper-button');
        var buttons = element.find('.button');
        var states = element.find('.input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required');
        var padding = 0;
        var rtl = element.attr('dir') === 'rtl' || element.parents("[dir='rtl']").length > 0;


        $.each(buttons, function(){
            var b = $(this);
            padding += b.outerWidth();
        });

        if (rtl) {
            input.css({
                'padding-left': padding + 5
            });

            states.css({
                'left': padding + 8
            });
        } else {
            input.css({
                'padding-right': padding + 5
            });

            states.css({
                'right': padding + 8
            });
        }

        helpers
            .attr('tabindex', -1)
            .attr('type', 'button');

        if (helper_clear) {
            helper_clear.on('click', function(){
                input.val('').trigger('change').focus();
            });
        }
        if (helper_reveal && element.hasClass('password')) {
            helper_reveal
                .on('mousedown', function(){input.attr('type', 'text');})
                .on('mouseup', function(){input.attr('type', 'password').focus();});
        }
    },

    _createInputSelect: function(){

    },

    _createInputTextarea: function(){

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/keypad.js
$.widget( "metro.keypad" , {

    version: "3.0.0",

    options: {
        target: false,
        shuffle: false,
        length: false,
        keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        onKey: function(key){},
        onChange: function(value){}
    },

    //_keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.keys === 'string') {
            o.keys = o.keys.split(",");
        }

        if (o.target !== false) {
            o.target = $(o.target);
        }

        this._createKeypad();

        element.data('keypad', this);

    },

    _shuffleKeys: function(){
        var that = this, element = this.element, o = this.options;
        var keys = o.keys.slice(0);
        var keypad = this._keypad;
        var keys_length = keys.length + 2;

        if (o.shuffle) {
            keys = keys.shuffle();
        }

        keypad.html('').css({
            width: keys_length / 4 * 32 + (keys_length / 4 + 1) * 2 + 2
        });

        keys.map(function(i){
            $("<div/>").addClass('key').html(i).data('key', i).appendTo(keypad);
        });

        $("<div/>").addClass('key').html('&larr;').data('key', '&larr;').appendTo(keypad);
        $("<div/>").addClass('key').html('&times;').data('key', '&times;').appendTo(keypad);
    },

    _createKeypad: function(){
        var that = this, element = this.element, o = this.options;
        var keypad;

        if (element.hasClass('input-control')) {

            keypad = $("<div/>").addClass('keypad keypad-dropdown').css({
                position: 'absolute',
                'z-index': 1000,
                display: 'none'
            }).appendTo(element);

            o.target = element.find('input');

            element.on('click', function(e){
                if (keypad.css('display') === 'none') {
                    keypad.show();
                } else {
                    keypad.hide();
                }

                var opened_pads = $(".keypad.keypad-dropdown");
                $.each(opened_pads, function(){
                    if (!$(this).is(keypad)) {
                        $(this).hide();
                    }
                });

                e.stopPropagation();
            });

            $('html').on('click', function(){
                $(".keypad.keypad-dropdown").hide();
            });
        } else {
            keypad = element;
            keypad.addClass('keypad');
        }

        if (o.target !== false) {
            $(o.target).attr('readonly', true);
        }

        if (keypad.parent().data('role') === 'dropdown') {
            keypad.parent().css({
                top: '100%'
            });
        }

        this._keypad = keypad;

        this._shuffleKeys();

        keypad.on('click', '.key', function(e){
            var key = $(this);
            var result;

            if (o.target) {
                if (key.data('key') !== '&larr;' && key.data('key') !== '&times;') {
                    if (o.length && $(o.target).val().length === o.length) {
                        return false;
                    }
                    $(o.target).val($(o.target).val() + '' + key.data('key'));
                } else {
                    if (key.data('key') === '&times;') {
                        $(o.target).val('');
                    }
                    if (key.data('key') === '&larr;') {
                        var val = $(o.target).val();
                        $(o.target).val(val.substring(0, val.length - 1))
                    }
                }

                o.target.trigger('change');
            }

            if (typeof o.onKey === 'function') {
                o.onKey(key);
            } else {
                if (typeof window[o.onKey] === 'function') {
                    window[o.onKey](key);
                } else {
                    result = eval("(function(){"+o.onKey+"})");
                    result.call(key);
                }
            }

            if (typeof o.onChange === 'function') {
                o.onChange(o.target.val());
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](o.target.val());
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    result.call({value: o.target.val()});
                }
            }

            if (o.shuffle) {
                that._shuffleKeys();
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/listview.js
$.widget( "metro.listview" , {

    version: "3.0.0",

    options: {
        onExpand: function(group){},
        onCollapse: function(group){},
        onActivate: function(list){},
        onListClick: function(list){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initList();
        this._createEvents();

        element.data('listview', this);

    },

    _initList: function(){
        var that = this, element = this.element, o = this.options;
        var groups = element.find('.list-group');

        $.each(groups, function(){
            var group = $(this);
            if (group.hasClass('collapsed')) {
                group.find('.list-group-content').hide();
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('click', '.list-group-toggle', function(e){
            var toggle = $(this), parent = toggle.parent();
            var result;

            if (toggle.parent().hasClass('keep-open')) {
                return;
            }

            parent.toggleClass('collapsed');

            if (!parent.hasClass('collapsed')) {
                toggle.siblings('.list-group-content').slideDown('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent);
                    }
                }
            } else {
                toggle.siblings('.list-group-content').slideUp('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent);
                    }
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });

        element.on('click', '.list', function(e){
            var list = $(this);
            var result;

            element.find('.list').removeClass('active');
            list.addClass('active');
            if (typeof o.onActivate === 'function') {
                o.onActivate(list);
            } else {
                if (typeof window[o.onActivate] === 'function') {
                    window[o.onActivate](list);
                } else {
                    result = eval("(function(){"+o.onActivate+"})");
                    result.call(list);
                }
            }
            if (typeof o.onListClick === 'function') {
                o.onListClick(list);
            } else {
                if (typeof window[o.onListClick] === 'function') {
                    window[o.onListClick](list);
                } else {
                    result = eval("(function(){"+o.onListClick+"})");
                    result.call(list);
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/notify.js
var _notify_container = false;
var _notifies = [];

var Notify = {

	_container: null,
	_notify: null,
	_timer: null,

	version: "3.0.0",

	options: {
		icon: '', // to be implemented
		caption: '',
		content: '',
		shadow: true,
		width: 'auto',
		height: 'auto',
		style: false, // {background: '', color: ''}
		position: 'right', //right, left
		timeout: 3000,
		keepOpen: false,
		type: 'default' //default, success, alert, info, warning
	},

	init: function(options) {
		this.options = $.extend({}, this.options, options);
		this._build();
		return this;
	},

	_build: function() {
		var that = this, o = this.options;

		this._container = _notify_container || $("<div/>").addClass("notify-container").appendTo('body');
		_notify_container = this._container;

		if (o.content === '' || o.content === undefined) {return false;}

		this._notify = $("<div/>").addClass("notify");

		if (o.type !== 'default') {
			this._notify.addClass(o.type);
		}

		if (o.shadow) {this._notify.addClass("shadow");}
		if (o.style && o.style.background !== undefined) {this._notify.css("background-color", o.style.background);}
		if (o.style && o.style.color !== undefined) {this._notify.css("color", o.style.color);}

		// add Icon
		if (o.icon !== '') {
			var icon = $(o.icon).addClass('notify-icon').appendTo(this._notify);
		}

		// add title
		if (o.caption !== '' && o.caption !== undefined) {
			$("<div/>").addClass("notify-title").html(o.caption).appendTo(this._notify);
		}
		// add content
		if (o.content !== '' && o.content !== undefined) {
			$("<div/>").addClass("notify-text").html(o.content).appendTo(this._notify);
		}

		// add closer
		var closer = $("<span/>").addClass("notify-closer").appendTo(this._notify);
		closer.on('click', function(){
			that.close(0);
		});

		if (o.width !== 'auto') {this._notify.css('min-width', o.width);}
		if (o.height !== 'auto') {this._notify.css('min-height', o.height);}

		this._notify.hide().appendTo(this._container).fadeIn('slow');
		_notifies.push(this._notify);

		if (!o.keepOpen) {
			this.close(o.timeout);
		}

	},

	close: function(timeout) {
		var self = this;

		if(timeout === undefined) {
			return this._hide();
		}

		setTimeout(function() {
			self._hide();
		}, timeout);

		return this;
	},

	_hide: function() {
		var that = this;

		if(this._notify !== undefined) {
			this._notify.fadeOut('slow', function() {
				$(this).remove();
				_notifies.splice(_notifies.indexOf(that._notify), 1);
			});
			return this;
		} else {
			return false;
		}
	},

	closeAll: function() {
		_notifies.forEach(function(notEntry) {
			notEntry.hide('slow', function() {
				notEntry.remove();
				_notifies.splice(_notifies.indexOf(notEntry), 1);
			});
		});
		return this;
	}
};

$.Notify = function(options) {
	return Object.create(Notify).init(options);
};

$.Notify.show = function(message, title, icon) {
	return $.Notify({
		content: message,
		caption: title,
		icon: icon
	});
};


// Source: js/widgets/panel.js
$.widget("metro.panel", {

    version: "3.0.0",

    options: {
        onExpand: function(panel){},
        onCollapse: function(panel){}
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('collapsible')) {element.addClass('collapsible');}

        if (element.hasClass("collapsible")) {
            var toggle = element.children(".heading");
            var content = element.children(".content");

            toggle.on("click", function(){
                var result;

                if (element.hasClass("collapsed")) {
                    content.slideDown('fast', function(){
                        element.removeClass('collapsed');
                        if (typeof o.onExpand === 'function') {
                            o.onExpand(element);
                        } else {
                            if (typeof window[o.onExpand] === 'function') {
                                window[o.onExpand](element);
                            } else {
                                result = eval("(function(){"+o.onExpand+"})");
                                result.call(element);
                            }
                        }
                    });
                } else {
                    content.slideUp('fast', function(){
                        element.addClass('collapsed');
                        if (typeof o.onCollapse === 'function') {
                            o.onCollapse(element);
                        } else {
                            if (typeof window[o.onCollapse] === 'function') {
                                window[o.onCollapse](element);
                            } else {
                                result = eval("(function(){"+o.onCollapse+"})");
                                result.call(element);
                            }
                        }
                    });
                }

            });
        }

        element.data('panel', this);

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/plugin.js
$.widget( "metro.widget" , {

    version: "1.0.0",

    options: {
        someValue: null
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        element.data('widget', this);

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/popovers.js
$.widget("metro.popover", {

    version: "3.0.0",

    options: {
        popoverText: '',
        popoverTimeout: 3000,
        popoverPosition: 'top', //top, bottom, left, right
        popoverBackground: 'bg-cyan',
        popoverColor: 'fg-white',
        popoverMode: 'none', //click, hover,
        popoverShadow: true,
        onPopup: function(popover){}
    },

    popover: {},

    _create: function(){
        var element = this.element;

        this.createPopover();
        element.data('popover', this);

    },

    createPopover: function(){
        var that = this, element,
            o = this.options;

        element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        var popover, content_container, marker_class;

        popover = $("<div/>").addClass("popover").appendTo('body').hide();
        $("<div/>").appendTo(popover);

        if (o.popoverShadow) {
            popover.addClass("popover-shadow");
        }

        if (o.popoverBackground) {
            if (o.popoverBackground[0] === '#') {
                popover.css('background-color', o.popoverBackground);
            } else {
                popover.addClass(o.popoverBackground);
            }
        }
        if (o.popoverColor) {
            if (o.popoverColor[0] === '#') {
                popover.css('color', o.popoverColor);
            } else {
                popover.addClass(o.popoverColor);
            }
        }

        switch (o.popoverPosition) {
            case 'left': marker_class = 'marker-on-right'; break;
            case 'right': marker_class = 'marker-on-left'; break;
            case 'bottom': marker_class = 'marker-on-top'; break;
            default: marker_class = 'marker-on-bottom';
        }

        popover.css({
            position: 'fixed'
        });

        popover.addClass(marker_class);

        this.popover = popover;

        this.setText(o.popoverText);

        element.on(o.popoverMode, function(e){
            if (!popover.data('visible')) {
                that.show();
            }
        });

        $(window).scroll(function(){
            //that.popover.hide();
            if (that.popover.data('visible')) {
                that.setPosition();
            }
        });

    },

    setPosition: function(){
        var o = this.options, popover = this.popover, element = this.element;

        if (o.popoverPosition === 'top') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() - popover.outerHeight() - 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'bottom') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight() + 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'right') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() - $(window).scrollLeft() + 10
            });
        } else if (o.popoverPosition === 'left') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left - popover.outerWidth() - $(window).scrollLeft() - 10
            });
        }
        return this;
    },

    setText: function(text){
        this.popover.children('div').html(text);
    },

    show: function(){
        var o = this.options, popover = this.popover;

        this.setPosition();

        popover.fadeIn(function(){
            popover.data('visible', true);

            if (typeof o.onPopup === 'function') {
                o.onPopup(popover);
            } else {
                if (typeof window[o.onPopup] === 'function') {
                    window[o.onPopup](popover);
                } else {
                    var result = eval("(function(){"+o.onPopup+"})");
                    result.call(popover);
                }
            }

            setTimeout(function(){
                popover.fadeOut(
                    function(){popover.data('visible', false);}
                );
            }, o.popoverTimeout);
        });
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/preloaders.js
$.widget( "metro.preloader" , {

    version: "3.0.0",

    options: {
        type: 'ring',
        style: 'light'
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createStructure();

        element.data('preloader', this);

    },

    _createRing: function(){
        var that = this, element = this.element, o = this.options;
        var i, wrap, circle;

        for(i = 0; i < 5 ; i++) {
            wrap = $("<div/>").addClass('wrap').appendTo(element);
            circle = $("<div/>").addClass('circle').appendTo(wrap);
        }
    },

    _createMetro: function(){
        var that = this, element = this.element, o = this.options;
        var i, circle;

        for(i = 0; i < 5 ; i++) {
            circle = $("<div/>").addClass('circle').appendTo(element);
        }
    },

    _createSquare: function(){
        var that = this, element = this.element, o = this.options;
        var i, square;

        for(i = 0; i < 4 ; i++) {
            square = $("<div/>").addClass('square').appendTo(element);
        }
    },

    _createCycle: function(){
        var that = this, element = this.element, o = this.options;
        var i, cycle;

        //for(i = 0; i < 3 ; i++) {
            cycle = $("<div/>").addClass('cycle').appendTo(element);
        //}
    },

    _createStructure: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("preloader-"+o.type);
        if (o.style !== 'light') {
            element.addClass(o.style + '-style');
        }

        element.html('');

        switch (o.type) {
            case 'ring': this._createRing(); break;
            case 'metro': this._createMetro(); break;
            case 'square': this._createSquare(); break;
            case 'cycle': this._createCycle(); break;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/presenter.js
$.widget( "metro.presenter" , {

    version: "3.0.0",

    options: {
        height: '200',
        width: '100%',
        effect: 'random',
        duration: 1000,
        timeout: 2000,
        sceneTimeout: 2000,
        easing: 'swing'
    },

    _acts: undefined,
    _currentAct: 0,
    _actDone: true,
    _interval: undefined,
    _effects: ['top', 'bottom', 'left', 'right'],
    _actor_positions: [],


    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createPresenter();
        this._showScene();

        element.data('presenter', this);

    },

    _createPresenter: function (){
        var that = this, element = this.element, o = this.options;
        var acts = element.find('.act');

        acts.hide();

        this._acts = acts;

        element.css({
            height: o.height,
            width: o.width
        });
    },

    _showScene: function(){
        var that = this, element = this.element, o = this.options;

        this._interval = setInterval(function(){
            if (that._actDone) {
                that._currentAct++;

                if (that._currentAct == that._acts.length) {
                    that._currentAct = 0;
                }

                //that._closeAct();
                that._showAct();
            }
        }, 500);
    },

    _closeAct: function(){
        var that = this, element = this.element, o = this.options;
        var index = this._currentAct;
        setTimeout(function(){
            if (that._acts[index] !== undefined) $(that._acts[index]).fadeOut(1000, function(){
                that._actDone = true;
            });
        }, o.sceneTimeout);
    },

    _showAct: function(){
        var that = this, element = this.element, o = this.options;

        var act = $(this._acts[this._currentAct]);
        var actors = act.find('.actor');
        var i;

        this._actDone = false;

        act.fadeIn(1000);

        actors.css({
            opacity: 0,
            position: 'absolute',
            display: 'none'
        });

        i = 0;
        $.each(actors, function(){
            var actor = $(this), pos = {top: actor.data('position').split(",")[0], left: actor.data('position').split(",")[1]};//that._actor_positions[$(that._acts[that._currentAct]).attr('id')][actor.attr('id')];
            var actor_effect, actor_duration, actor_timeout, actor_easing;

            actor_effect = actor.data('effect') !== undefined ? actor.data('effect') : o.effect;
            if (actor_effect === 'random') {
                actor_effect = that._effects[Math.floor(Math.random() * that._effects.length)];
            }
            actor_duration = actor.data('duration') !== undefined ? actor.data('duration') : o.duration;
            actor_timeout = actor.data('timeout') !== undefined ? actor.data('timeout') : o.timeout;
            actor_easing = actor.data('easing') !== undefined ? actor.data('easing') : o.easing;

            if (actor_effect === 'top') {
                setTimeout(function(){
                    actor.css({
                        top: - (element.height()),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'bottom') {
                setTimeout(function(){
                    actor.css({
                        top: element.height(),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'left') {
                setTimeout(function(){
                    actor.css({
                        left: - element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'right') {
                setTimeout(function(){
                    actor.css({
                        left: element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else { //fade
                setTimeout(function(){
                    actor.css({
                        top: pos.top,
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, 'swing', function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            }

            i++;
        });

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/progressbar.js
$.widget( "metro.progress" , {

    version: "3.0.0",

    options: {
        color: 'default',
        colors: false,
        value: 0,
        animate: false,
        onProgress: function(value){}
    },

    colorsDim: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');

        if (!element.hasClass('progress')) {
            element.addClass('progress');
        }

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (bar.length === 0) {
            bar = $('<div/>').addClass('bar').appendTo(element);
        }

        if (o.colors) {
            var p = 0;
            $.each(o.colors, function(c,v){
                that.colorsDim[c] = [p,v];
                p = v + 1;
            });
        }

        this.set(o.value);
        this.color(o.color);

        element.data('progress', this);

    },

    color: function(value){
        var element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');
        var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isOk) {
            bar.css({
                'background-color': value
            });
        } else {
            bar.removeClass(function(index, css){
                return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
            }).addClass(value);
        }

        o.color = value;
    },

    set: function(value){
        if (value !== undefined) {
            var element = this.element, o = this.options, colors = this.colorsDim;
            var bar = element.children('.bar:last-child');
            var that = this, gradient = [];

            if (parseInt(value) < 0) {
                return;
            }


            if (o.colors) {

                $.each(colors, function (c, v) {
                    if (value >= v[0] && value <= v[1]) {
                        that.color(c);
                        return true;
                    }
                });
            }

            o.value = value;

            if (o.animate !== false) {
                var ani_speed = isNaN(o.animate) ? 500 : o.animate;
                bar.animate({
                    width: o.value + '%'
                }, ani_speed, function(){
                    if (typeof o.onProgress === 'function') {
                        o.onProgress(value);
                    } else {
                        if (typeof window[o.onProgress] === 'function') {
                            window[o.onProgress](value);
                        } else {
                            var result = eval("(function(){"+o.onProgress+"})");
                            result.call(value);
                        }
                    }
                });
            } else {
                bar.css({
                    width: o.value + '%'
                });
                if (typeof o.onProgress === 'function') {
                    o.onProgress(value);
                } else {
                    if (typeof window[o.onProgress] === 'function') {
                        window[o.onProgress](value);
                    } else {
                        var result = eval("(function(){"+o.onProgress+"})");
                        result.call(value);
                    }
                }
            }

        } else {
            return this.options.value;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/rating.js
$.widget( "metro.rating" , {

    version: "3.0.0",

    options: {
        stars: 5,
        value: 0,
        half: true,
        static: false,
        showScore: true,
        scoreTitle: "Current: ",
        size: 'default',
        colorRate: false,
        onRate: function(v, s, w){return true;},
        onRated: function(v, s, w){}
    },

    _value: 0,
    _values: [],

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._value = parseFloat(o.value);
        this._values[0] = Math.ceil(o.stars * 1 / 3);
        this._values[1] = Math.ceil(o.stars * 2 / 3);
        this._values[2] = o.stars;

        this._createRating();
        this._createEvents();
        this._setValue(this._value);
        this._setScore(this._value);

        element.data('rating', this);

    },

    _createRating: function(){
        var element = this.element, o = this.options;
        var i, star, stars, score;

        if (!element.hasClass('rating')) {element.addClass('rating');}
        switch (o.size) {
            case 'small': element.addClass('small'); break;
            case 'large': element.addClass('large'); break;
            default: break;
        }

        if (o.static) {
            element.addClass('static');
        }

        for (i = 0; i < o.stars; i++) {
            star = $("<span/>").addClass('star').appendTo(element).data('star-value', i+1);
        }

        if (o.showScore) {
            score = $("<span/>").addClass('score').appendTo(element);
        }

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var stars;

        stars = element.find('.star');

        stars.on('click', function(e){

            if (o.static || element.hasClass('static') || element.data('static')) {
                return false;
            }

            var result, value = $(this).data('star-value'),
                star = this,
                rating = that;

            if (typeof o.onRate === 'function') {
                if (!o.onRate(value, star, rating)) {return false;}
            } else {
                if (typeof window[o.onRate] === 'function') {
                    if (!window[o.onRate](value, star, rating)) {return false;}
                } else {
                    result = eval("(function(){"+o.onRate+"})");
                    if (!result.call(value, star, rating)) {return false;}
                }
            }

            if (typeof o.onRated === 'function') {
                o.onRated(value, star, rating);
            } else {
                if (typeof window[o.onRated] === 'function') {
                    window[o.onRated](value, star, rating);
                } else {
                    result = eval("(function(){"+o.onRated+"})");
                    result.call(value, star, rating);
                }
            }

            that._value = $(this).data('star-value');
            that._setValue();
            that._setScore();

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _setValue: function(){
        var stars, o = this.options, element = this.element;
        if (o.stars) {
            stars = element.find('.star').removeClass('on half');
            var index = Math.floor(this._value) - 1;
            var half = (this._value - Math.floor(this._value)) * 10 > 0;
            $(stars[index]).addClass('on');
            $(stars[index]).prevAll().addClass('on');
            if (half) {
                $(stars[index]).next().addClass('on half');
            }
        }

        if (o.colorRate) {
            element.removeClass('poor regular good');
            if (this._value <= this._values[0]) {element.addClass('poor');}
            else if (this._value > this._values[0] && this._value <= this._values[1]) {element.addClass('regular');}
            else if (this._value > this._values[1]) {element.addClass('good');}
        }
    },

    _setScore: function(){
        var value = this._value, element = this.element, o = this.options;

        if (value !== undefined) {
            element.find(".score").html(o.scoreTitle + value);
        }
    },

    value: function(value){
        if (value !== undefined) {
            this._value = value;
            this._setValue();
            this._setScore();
        } else {
            return this._value;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/select.js
$.widget( "metro.select" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var func_options = [
            'templateResult',
            'templateSelection',
            'matcher',
            'initSelection',
            'query'
        ];

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        func_options.map(function(func, index){
            if (o[func] !== undefined) {
                o[func] = window[o[func]];
            }
        });

        if (o.dropdownParent !== undefined) {
            o.dropdownParent = $(o.dropdownParent);
        }

        if($().select2) {
            try {
                element.find("select").select2(o);
            } catch (e) {

            }
        } else {
            console.log('You are trying to use support for Select2, but the plugin is not found!');
        }

        element.data('select', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/slider.js
$.widget("metro.slider", {

    version: "3.0.0",

    options: {
        position: 0,
        accuracy: 0,
        color: 'default',
        completeColor: 'default',
        markerColor: 'default',
        colors: false,
        showHint: false,
        permanentHint: false,
        hintPosition: 'top',
        vertical: false,
        min: 0,
        max: 100,
        animate: true,
        minValue: 0,
        maxValue: 100,
        currValue: 0,
        returnType: 'value',
        target: false,

        onChange: function(value, slider){},

        _slider : {
            vertical: false,
            offset: 0,
            length: 0,
            marker: 0,
            ppp: 0,
            start: 0,
            stop: 0
        }
    },

    _create: function(){
        var that = this,
            element = this.element;


        var o = this.options,
            s = o._slider;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        o.accuracy = o.accuracy < 0 ? 0 : o.accuracy;
        o.min = o.min < 0 ? 0 : o.min;
        o.min = o.min > o.max ? o.max : o.min;
        o.max = o.max > 100 ? 100 : o.max;
        o.max = o.max < o.min ? o.min : o.max;
        o.position = this._correctValue(element.data('position') > o.min ? (element.data('position') > o.max ? o.max : element.data('position')) : o.min);
        o.colors = o.colors ? o.colors.split(",") : false;

        s.vertical = o.vertical;
        if (o.vertical && !element.hasClass('vertical')) {
            element.addClass('vertical');
        }
        if (o.permanentHint && !element.hasClass('permanent-hint')) {
            element.addClass('permanent-hint');
        }

        if (!o.vertical && o.hintPosition === 'bottom') {
            element.addClass('hint-bottom');
        }

        if (o.vertical && o.hintPosition === 'left') {
            element.addClass('hint-left');
        }

        this._createSlider();
        this._initPoints();
        this._placeMarker(o.position);

        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';

        element.children('.marker').on(event_down, function (e) {
            e.preventDefault();
            that._startMoveMarker(e);
        });

        element.on(event_down, function (e) {
            e.preventDefault();
            that._startMoveMarker(e);
        });

        element.data('slider', this);

    },

    _startMoveMarker: function(e){
        var element = this.element, o = this.options, that = this, hint = element.children('.slider-hint');
        var returnedValue;

        var event_move = isTouchDevice() ? 'touchmove' : 'mousemove';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup mouseleave';

        $(element).on(event_move, function (event) {
            that._movingMarker(event);
            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'block');
            }
        });
        $(element).on(event_up, function () {
            $(element).off('mousemove');
            $(element).off('mouseup');
            element.data('value', o.position);
            element.trigger('changed', o.position);

            returnedValue = o.returnType === 'value' ? that._valueToRealValue(o.position) : o.position;

            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'none');
            }
        });

        this._initPoints();

        this._movingMarker(e);
    },

    _movingMarker: function (ev) {
        var element = this.element, o = this.options;
        var cursorPos,
            percents,
            valuePix,

            vertical = o._slider.vertical,
            sliderOffset = o._slider.offset,
            sliderStart = o._slider.start,
            sliderEnd = o._slider.stop,
            sliderLength = o._slider.length,
            markerSize = o._slider.marker;

        var event = !isTouchDevice() ? ev.originalEvent : ev.originalEvent.touches[0];

        //console.log(event);

        if (vertical) {
            cursorPos = event.pageY - sliderOffset;
        } else {
            cursorPos = event.pageX - sliderOffset;
        }

        if (cursorPos < sliderStart) {
            cursorPos = sliderStart;
        } else if (cursorPos > sliderEnd) {
            cursorPos = sliderEnd;
        }

        if (vertical) {
            valuePix = sliderLength - cursorPos - markerSize / 2;
        } else {
            valuePix = cursorPos - markerSize / 2;
        }

        percents = this._pixToPerc(valuePix);

        this._placeMarker(percents);

        o.currValue = this._valueToRealValue(percents);
        o.position = percents;

        var returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

        if (o.target) {
            $(o.target).val(returnedValue);
        }

        if (typeof o.onChange === 'function') {
            o.onChange(returnedValue, element);
        } else {
            if (typeof window[o.onChange] === 'function') {
                window[o.onChange](returnedValue, element);
            } else {
                var result = eval("(function(){"+o.onChange+"})");
                result.call(returnedValue, element);
            }
        }
    },

    _placeMarker: function (value) {
        var size, size2, o = this.options, colorParts, colorIndex = 0, colorDelta, element = this.element,
            marker = this.element.children('.marker'),
            complete = this.element.children('.complete'),
            hint = this.element.children('.slider-hint'), hintValue,
            oldPos = this._percToPix(o.position);

        colorParts = o.colors.length;
        colorDelta = o._slider.length / colorParts;

        if (o._slider.vertical) {
            var oldSize = this._percToPix(o.position) + o._slider.marker,
                oldSize2 = o._slider.length - oldSize;
            size = this._percToPix(value) + o._slider.marker;
            size2 = o._slider.length - size;
            this._animate(marker.css('top', oldSize2),{top: size2});
            this._animate(complete.css('height', oldSize),{height: size});

            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css('top', size2 - hint.height()/2 + (element.hasClass('large') ? 8 : 0));
            }
        } else {
            size = this._percToPix(value);
            this._animate(marker.css('left', oldPos),{left: size});
            this._animate(complete.css('width', oldPos),{width: size});
            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css({left: size - hint.width() / 2 + (element.hasClass('large') ? 6 : 0)});
            }
        }
    },

    _valueToRealValue: function(value){
        var o = this.options;
        var real_value;

        var percent_value = (o.maxValue - o.minValue) / 100;

        real_value = value * percent_value + o.minValue;

        return Math.round(real_value);
    },

    _animate: function (obj, val) {
        var o = this.options;

        if(o.animate) {
            obj.stop(true).animate(val);
        } else {
            obj.css(val);
        }
    },

    _pixToPerc: function (valuePix) {
        var valuePerc;
        valuePerc = valuePix * this.options._slider.ppp;
        return Math.round(this._correctValue(valuePerc));
    },

    _percToPix: function (value) {
        if (this.options._slider.ppp === 0) {
            return 0;
        }
        return Math.round(value / this.options._slider.ppp);
    },

    _correctValue: function (value) {
        var o = this.options;
        var accuracy = o.accuracy;
        var max = o.max;
        var min = o.min;
        if (accuracy === 0) {
            return value;
        }
        if (value === max) {
            return max;
        }
        if (value === min) {
            return min;
        }
        value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
        if (value > max) {
            return max;
        }
        if (value < min) {
            return min;
        }
        return value;
    },

    _initPoints: function(){
        var o = this.options, s = o._slider, element = this.element;

        if (s.vertical) {
            s.offset = element.offset().top;
            s.length = element.height();
            s.marker = element.children('.marker').height();
        } else {
            s.offset = element.offset().left;
            s.length = element.width();
            s.marker = element.children('.marker').width();
        }

        s.ppp = o.max / (s.length - s.marker);
        s.start = s.marker / 2;
        s.stop = s.length - s.marker / 2;
    },

    _createSlider: function(){
        var element = this.element,
            o = this.options,
            complete, marker, hint;

        element.html('');

        complete = $("<div/>").addClass("complete").appendTo(element);
        marker = $("<a/>").addClass("marker").appendTo(element);

        if (o.showHint) {
            hint = $("<span/>").addClass("slider-hint").appendTo(element);
        }

        if (o.color !== 'default') {
            if (o.color.isColor()) {
                element.css('background-color', o.color);
            } else {
                element.addClass(o.color);
            }
        }
        if (o.completeColor !== 'default') {
            if (o.completeColor.isColor()) {
                complete.css('background-color', o.completeColor);
            } else {
                complete.addClass(o.completeColor);
            }
        }
        if (o.markerColor !== 'default') {
            if (o.markerColor.isColor()) {
                marker.css('background-color', o.markerColor);
            } else {
                marker.addClass(o.markerColor);
            }
        }
    },

    value: function (value) {
        var element = this.element, o = this.options, returnedValue;

        if (typeof value !== 'undefined') {

            value = value > o.max ? o.max : value;
            value = value < o.min ? o.min : value;

            this._placeMarker(parseInt(value));
            o.position = parseInt(value);

            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

            if (o.target) {
                $(o.target).val(returnedValue);
            }

            if (typeof o.onChange === 'function') {
                o.onChange(returnedValue, element);
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](returnedValue, element);
                } else {
                    var result = eval("(function(){"+o.onChange+"})");
                    result.call(returnedValue, element);
                }
            }

            return this;
        } else {
            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;
            return returnedValue;
        }
    },

    _destroy: function(){},

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/stepper.js
$.widget("metro.stepper", {

    version: "3.0.0",

    options: {
        steps: 3,
        start: 1,
        type: 'default',
        clickable: true,
        onStep: function(index, step){},
        onStepClick: function(index, step){}
    },

    _create: function(){
        var element = this.element, o = this.options, element_id = element.attr('id');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('stepper')) {element.addClass('stepper');}
        if (element_id === undefined) {
            element_id = window.uniqueId(this.widgetName+'_');
            element.attr('id', element_id);
        }

        this._createStepper();
        if (o.clickable) {this._createEvents();}
        this._positioningSteps();
        this._stepTo(o.start);

        element.data('stepper', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o= this.options;
        element.on('click', 'li', function(e){
            var step = $(this).data('step');


            if (typeof o.onStepClick === 'function') {
                o.onStepClick(step - 1, step);
            } else {
                if (typeof window[o.onStepClick] === 'function') {
                    window[o.onStepClick](step - 1, step);
                } else {
                    var result = eval("(function(){"+o.onStepClick+"})");
                    result.call(step - 1, step);
                }
            }

            element.trigger("stepclick", step);
        });
    },

    _createStepper: function(){
        var element = this.element, o= this.options;
        var i, ul, li;

        ul = $("<ul/>");

        switch(o.type) {
            case 'diamond': element.addClass('diamond'); break;
            case 'cycle': element.addClass('cycle'); break;
        }

        for(i=0;i< o.steps;i++) {
            li = $("<li/>").data('step', i + 1).appendTo(ul);
        }
        ul.appendTo(element);
    },

    _positioningSteps: function(){
        var that = this, element = this.element, o = this.options,
            steps = element.find("li"),
            element_width = element.width(),
            steps_length = steps.length-1,
            step_width = $(steps[0]).width();

        $.each(steps, function(i, step){
            var left = i === 0 ? 0 : (element_width - step_width)/steps_length * i;
            console.log(element_width);
            $(step).animate({
                left: left
            });
        });
    },

    _stepTo: function(step){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        steps.removeClass('current').removeClass('complete');

        $.each(steps, function(i, s){
            if (i < step - 1) {$(s).addClass('complete');}
            if (i === step - 1) {
                $(s).addClass('current') ;

                if (typeof o.onStep === 'function') {
                    o.onStep(i+1, s);
                } else {
                    if (typeof window[o.onStep] === 'function') {
                        window[o.onStep](i+1, s);
                    } else {
                        var result = eval("(function(){"+o.onStep+"})");
                        result.call(i+1, s);
                    }
                }
            }
        });
    },

    stepTo: function(step){
        this._stepTo(step);
    },

    first: function(){
        var o = this.options;
        o.start = 1;
        this._stepTo(o.start);
    },

    last: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        o.start = steps.length;
        this._stepTo(o.start);
    },

    next: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        if (o.start + 1 > steps.length) {return;}

        o.start++;
        this._stepTo(o.start);
    },

    prior: function(){
        var o = this.options;

        if (o.start - 1 === 0) {return;}

        o.start--;
        this._stepTo(o.start);
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/streamer.js
$.widget("metro.streamer", {

    version: "3.0.0",

    options: {
        scrollBar: false,
        meterStart: 9,
        meterStop: 19,
        meterInterval: 20,
        slideToTime: "default",
        slideSleep: 1000,
        slideSpeed: 1000,
        onClick: function(event){}
    },

    _create: function(){
        var that = this, element = this.element, o = this.options,
            streams = element.find(".stream"),
            events = element.find(".event"),
            events_container = element.find(".events"),
            events_area = element.find(".events-area"),
            groups = element.find(".event-group"),
            event_streams = element.find(".event-stream");


        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        element.data('streamSelect', -1);

        var meter = $("<ul/>").addClass("meter");
        var i, j, m, start = o.meterStart, stop = o.meterStop, interval = o.meterInterval;

        var _intervals = [];
        for (i = start; i<stop; i++) {
            for (j = 0; j < 60; j+=interval) {
                m = (i<10?"0"+i:i)+":"+(j<10?"0"+j:j);
                $("<li/>").addClass("js-interval-"+ m.replace(":", "-")).html("<em>"+m+"</em>").appendTo(meter);
                _intervals.push(m);
            }
        }
        element.data("intervals", _intervals);
        meter.insertBefore(element.find(".events-grid"));

        //console.log(element.data("intervals"));

        // Re-Calc all event-stream width and set background for time
        element.find(".event-stream").each(function(i, s){
            var event_stream_width = 0;
            var events = $(s).find(".event");

            events.each(function(i, el){
                event_stream_width += $(el).outerWidth() + parseInt($(el).css('margin-left'));
            });

            $(s).css({
                width: (event_stream_width + ( (events.length-1) * 2 ) + 1)
            });

            $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
        });

        // Set scrollbar
        events_container.css({
            'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
        });

        // Set streamer height
        element.css({
            height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
        });

        // Re-Calc events-area width
        var events_area_width = 0;
        groups.each(function(i, el){
            events_area_width += $(el).outerWidth();
        });
        events_area_width += ( (groups.length-1) * 2 ) + 10;
        events_area.css('width', events_area_width);

        events.each(function(i, el){
            addTouchEvents(el);
        });

        element.mousewheel(function(event, delta){
            var scroll_value = delta * 50;
            events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
            return false;
        });

        streams.each(function(i, s){
            $(s).mousedown(function(e){
                if (element.data('streamSelect') == i) {
                    events.removeClass('event-disable');
                    element.data('streamSelect', -1);
                } else {
                    element.data('streamSelect', i);
                    events.addClass('event-disable');
                    $(event_streams[i]).find(".event").removeClass("event-disable");
                }
            });
        });

        this._createEvents();

        this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);

        element.data('streamer', this);
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var events = element.find(".event");

        events.on('click', function(e){

            var event = $(this);

            if (e.ctrlKey) {
                $(this).toggleClass("selected");
            }

            if (typeof o.onClick === 'function') {
                o.onClick(event);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](event);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(event);
                }
            }

            e.preventDefault();
        });

        element.find(".js-go-previous-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == 0) {
                return;
            }
            next_index--;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-go-next-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == element.data("intervals").length - 1) {
                return;
            }
            next_index++;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-show-all-streams").on("click", function(e){
            element.find(".event").removeClass("event-disable");
            element.data('streamSelect', -1);
            e.preventDefault();
        });


        element.find(".js-schedule-mode").on("click", function(e){
            $(this).toggleClass("active");
            element.data("schedule-mode", $(this).hasClass("inverse"));
            e.preventDefault();
        });
    },

    slideToTime: function(time, sleep, speed){
        var that = this, element = this.element,
            interval, _time;

        if (time === 'default') {
            interval = element.find(".meter li")[0];
            time = interval.className.replace("js-interval-", "").replace("-", ":");
        } else {
            _time = time.split(":");

            if (_time[0].length === 1) {
                time = '0' + time;
            }

        }

        interval = element.find(".meter li.js-interval-"+time.replace(":", "-"))[0];

        setTimeout(function(){
            element.find(".events").animate({
                scrollLeft:  (interval.offsetLeft - $('.streams').width())
            }, speed, function(){
                that._afterSlide();
            });
        }, sleep);

        element.data("current-time", time);
    },

    _afterSlide: function(){

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tabcontrol.js
$.widget( "metro.tabcontrol" , {

    version: "3.0.0",

    options: {
        openTarget: false,
        saveState: false,
        onTabClick: function(tab){return true;},
        onTabChange: function(tab){},
        _current: {tab: false, frame: false}
    },


    _create: function () {
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');
        var tab, target, frame;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {

            var stored_target = window.localStorage.getItem(element.attr('id')+"-stored-tab");
            if (stored_target && stored_target !== 'undefined') {
                tab = element.find("a[href='"+stored_target+"']");
                if (tab) {
                    target = tab.attr('href');
                    frame = target && target.isUrl() ? false : $(target);
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            }
        }

        if (!o._current.tab && o.openTarget !== false) {

            tab = element.find("a[href='"+ o.openTarget+"']");
            if (tab) {
                target = tab.attr('href');
                frame = target && target.isUrl() ? false : $(target);
                o._current.tab = tab;
                o._current.frame = frame;
            }
        }

        if (!o._current.tab) {

            $.each(tabs, function (i, v) {
                var tab = $(v), target = tab.attr('href'), frame = target.isUrl() ? false : $(target);
                if (tab.parent().hasClass('active') && !tab.parent().hasClass('disabled') && frame !== false) {
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            });
        }

        if (!o._current.tab) {

            for(var i = 0; i < tabs.length; i++) {
                if (!$(tabs[i]).attr('href').isUrl() && !$(tabs[i]).parent().hasClass('disabled')) {
                    o._current.tab = $(tabs[i]);
                    o._current.frame = $($(tabs[i]).attr('href'));
                    break;
                }
            }
        }

        this._createEvents();
        this._openTab();

        //this._hideTabs();
        //
        //$(window).on('resize', function(){
        //    that._hideTabs();
        //});

        element.data('tabcontrol', this);

    },

    _hideTabs: function(){
        var element = this.element;
        var w = element.outerWidth();
        var _tabs = element.children('.tabs').find('li:not(.non-visible-tabs)');
        var _nvt = element.children('.tabs').find('.non-visible-tabs').children('.d-menu');

        $.each(_tabs, function(){
            var $tab = $(this), tab = this;
            if (tab.offsetLeft + tab.offsetWidth + 30 > w) {
                var new_tab = $tab.clone(true);
                new_tab.appendTo(_nvt);
                $tab.remove();
            }
        });
    },

    _openTab: function(){
        var element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        tabs.parent().removeClass('active');
        frames.hide();

        o._current.tab.parent().addClass('active');
        o._current.frame.show();

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {
            window.localStorage.setItem(element.attr('id')+"-stored-tab", o._current.tab.attr('href'));
        }
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        element.on('click', '.tabs > li > a', function(e){
            var result;
            var tab = $(this), target = tab.attr('href'), frame = $(target);

            if (tab.parent().hasClass('disabled')) {return false;}

            if (typeof o.onTabClick === 'function') {
                if (!o.onTabClick(tab)) {return false;}
            } else {
                if (typeof window[o.onTabClick] === 'function') {
                    if (!window[o.onTabClick](tab)) {return false;}
                } else {
                    result = eval("(function(){"+o.onTabClick+"})");
                    if (!result.call(tab)) {return false;}
                }
            }

            if (target.isUrl()) {
                window.location.href = target;
                return true;
            }

            o._current.tab = tab;
            o._current.frame = frame;

            that._openTab();

            if (typeof o.onTabChange === 'function') {
                o.onTabChange(tab);
            } else {
                if (typeof window[o.onTabChange] === 'function') {
                    window[o.onTabChange](tab);
                } else {
                    result = eval("(function(){"+o.onTabChange+"})");
                    result.call(tab);
                }
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    hideTab: function(tab){

    },

    showTab: function(tab){

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tile.js
$.widget( "metro.tile" , {

    version: "3.0.0",

    options: {
        effect: 'slideLeft',
        period: 4000,
        duration: 700,
        easing: 'doubleSqrt',
        onClick: function(tile){}
    },

    _frames: {},
    _currentIndex: 0,
    _interval: 0,
    _outPosition: 0,
    _size: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createTransformTile();
        this._createLiveTile();
        this._createEvents();

        element.data('tile', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var event = isTouchDevice() ? 'touchstart' : 'click';

        element.on(event, function(e){
            if (element[0].tagName === "A") {

            } else {
                if (typeof o.onClick === 'function') {
                    o.onClick(element);
                } else {
                    if (typeof window[o.onClick] === 'function') {
                        window[o.onClick](element);
                    } else {
                        var result = eval("(function(){"+o.onClick+"})");
                        result.call(element);
                    }
                }
            }
        });
    },

    _createLiveTile: function(){
        var that = this, element = this.element, o = this.options;
        var event_down = isTouchDevice() ? 'touchstart' : 'mouseenter';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseleave';

        this._frames = element.find(".live-slide");
        if (this._frames.length <= 1) {return false;}

        $.easing.doubleSqrt = function(t) {return Math.sqrt(Math.sqrt(t));};

        this._size = {
            'width': element.width(),
            'height': element.height()
        };

        element.on(event_down, function(){
            that.stop();
        });

        element.on(event_up, function(){
            that.start();
        });

        this.start();
    },

    start: function(){
        var that = this;
        this._interval = setInterval(function(){
            that._animate();
        }, this.options.period);
    },

    stop: function(){
        clearInterval(this._interval);
    },

    _animate: function(){
        var currentFrame = this._frames[this._currentIndex], nextFrame;
        this._currentIndex += 1;
        if (this._currentIndex >= this._frames.length) {this._currentIndex = 0;}
        nextFrame = this._frames[this._currentIndex];

        switch (this.options.effect) {
            case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
            case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
            case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
            case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
            case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
            default: this._effectSlideUp(currentFrame, nextFrame);
        }
    },

    _effectSlideLeftRight: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideLeft(currentFrame, nextFrame);
        } else {
            this._effectSlideRight(currentFrame, nextFrame);
        }
    },

    _effectSlideUpDown: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideUp(currentFrame, nextFrame);
        } else {
            this._effectSlideDown(currentFrame, nextFrame);
        }
    },

    _effectSlideUp: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: -_out}, options);
        $(nextFrame)
            .css({top: _out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideDown: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: _out}, options);
        $(nextFrame)
            .css({top: -_out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideLeft: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out * -1}, options);
        $(nextFrame)
            .css({left: _out})
            .show()
            .animate({left: 0}, options);
    },

    _effectSlideRight: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out}, options);
        $(nextFrame)
            .css({left: -_out})
            .show()
            .animate({left: 0}, options);
    },

    _createTransformTile: function(){
        var that = this, element = this.element, o = this.options;
        var dim = {w: element.width(), h: element.height()};
        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup';
        var event_leave = isTouchDevice() ? 'touchend' : 'mouseleave';


        element.on(event_down, function(e){
            var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
            var transform = 'top';

            if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'left';
            } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'right';
            } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                transform = 'bottom';
            }

            $(this).addClass("tile-transform-"+transform);

            //console.log(transform);

            if (element[0].tagName === 'A' && element.attr('href')) {
                setTimeout(function(){
                    document.location.href = element.attr('href');
                }, 500);
            }
        });

        element.on(event_up, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
        element.on(event_leave, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/treeview.js
$.widget( "metro.treeview" , {

    version: "3.0.0",

    options: {
        doubleClick: true,
        onClick: function(leaf, node, pnode, tree){},
        onInputClick: function(leaf, node, pnode, tree){},
        onExpand: function(leaf, node, pnode, tree){},
        onCollapse: function(leaf, node, pnode, tree){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initTree();
        this._createEvents();

        element.data('treeview', this);
    },


    _createCheckbox: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control checkbox small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'checkbox').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _createRadio: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control radio small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'radio').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _initTree: function(){
        var that = this, element = this.element, o = this.options;
        var leafs = element.find('.leaf');
        $.each(leafs, function(){
            var leaf = $(this), parent = leaf.parent('li'), ul = leaf.siblings('ul'), node = $(leaf.parents('.node')[0]);
            //var input, checkbox, check;

            if (parent.data('mode') === 'checkbox') {
                that._createCheckbox(leaf, parent);
            }

            if (parent.data('mode') === 'radio') {
                that._createRadio(leaf, parent);
            }

            if (ul.length > 0) {
                if (!parent.hasClass('node')) {
                    parent.addClass('node');
                }
            }
            if (parent.hasClass('collapsed')) {
                ul.hide();
            }
        });
    },

    _renderChecks: function(check){
        var element = this.element, that = this, o = this.options;
        var state = check.is(":checked");
        var parent = $(check.parent().parent());
        var children_checks = parent.children('ul').find('[type="checkbox"]');

        children_checks.prop('checked', state).removeClass('indeterminate');

        $.each(element.find('.node[data-mode=checkbox]').reverse(), function(){
            var node = $(this),
                ch = node.children('.input-control').find('[type="checkbox"]'),
                children_all = node.children('ul').find('[type="checkbox"]'),
                children_checked = node.children('ul').find('[type="checkbox"]:checked');

            ch.removeClass('indeterminate');
            if (children_checked.length === 0) {
                ch.prop("checked", false);
                ch.removeClass('indeterminate');
            } else
            if (children_checked.length > 0 && children_all.length > children_checked.length) {
                ch.prop('checked', true);
                ch.addClass('indeterminate');
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('change', 'input:checkbox', function(){
            that._renderChecks($(this));
        });

        element.on('click', 'input', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li'),
                check = leaf.siblings('.input-control').find('input:checkbox'),
                radio = leaf.siblings('.input-control').find('input:radio'),
                new_check_state,
                check_disabled;

            if (check.length > 0) {
                new_check_state = !check.is(":checked");
                check_disabled = check.is(":disabled");
                if (!check_disabled) {check.prop('checked', new_check_state);}
                that._renderChecks(check);
            }
            if (radio.length > 0) {
                check_disabled = radio.is(":disabled");
                if (!check_disabled) {radio.prop('checked', true);}
            }

            if (typeof o.onInputClick === 'function') {
                o.onInputClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onInputClick] === 'function') {
                    window[o.onInputClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onInputClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        element.on('click', '.leaf', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li');

            element.find('.leaf').parent('li').removeClass('active');
            parent.addClass('active');

            if (typeof o.onClick === 'function') {
                o.onClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        if (o.doubleClick) {
            element.on('dblclick', '.leaf', function (e) {
                var leaf = $(this), parent = leaf.parent('li'), node = $(leaf.parents('.node')[0]);
                var result;

                if (parent.hasClass("keep-open")) {
                    return false;
                }

                parent.toggleClass('collapsed');
                if (!parent.hasClass('collapsed')) {
                    parent.children('ul').fadeIn('fast');

                    if (typeof o.onExpand === 'function') {
                        o.onExpand(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onExpand] === 'function') {
                            window[o.onExpand](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onExpand+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                } else {
                    parent.children('ul').fadeOut('fast');

                    if (typeof o.onCollapse === 'function') {
                        o.onCollapse(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onCollapse] === 'function') {
                            window[o.onCollapse](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onCollapse+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            });
        }

        element.on('click', '.node-toggle', function(e){
            var leaf = $(this).siblings('.leaf'), parent = $(this).parent('li'), node = $(leaf.parents('.node')[0]);
            var result;

            if (parent.hasClass("keep-open")) {return false;}

            parent.toggleClass('collapsed');
            if (!parent.hasClass('collapsed')) {
                parent.children('ul').fadeIn('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            } else {
                parent.children('ul').fadeOut('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            }
            e.stopPropagation();
            e.preventDefault();
        });
    },

    addLeaf: function(parent, name, data){
        var element = this.element;
        var leaf, li, ul;

        if (parent) {
            if (parent[0].tagName === "LI") {parent.addClass('node');}
            if (parent.children('.node-toggle').length === 0) {
                $("<span/>").addClass('node-toggle').appendTo(parent);
            }
        }

        ul = parent ? $(parent).children('ul') : element.children('ul');

        if (ul.length === 0) {
            ul = $("<ul/>").appendTo(parent ? parent : element);
        }

        li = $("<li/>").appendTo( ul );

        if (data !== undefined) {
            if (data.tagName !== undefined) {
                leaf = $("<"+data.tagName+"/>").addClass("leaf").appendTo(li);
            } else {
                leaf = $("<span/>").addClass("leaf").appendTo(li);
            }
        } else {
            leaf = $("<span/>").addClass("leaf").appendTo(li);
        }

        leaf.html(name);

        if (data !== undefined) {
            $.each(data, function(key, value){
                li.attr("data-"+key, value);
            });
            if (data.mode !== undefined) {
                switch (data.mode) {
                    case 'checkbox' : this._createCheckbox(leaf, li); break;
                    case 'radio' : this._createRadio(leaf, li); break;
                }
            }
        }

        return this;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/validator.js
$.widget( "metro.validator" , {

    version: "1.0.0",

    options: {
        showErrorState: true,
        showErrorHint: true,
        showRequiredState: true,
        showSuccessState: true,
        hintSize: 0,
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hideError: 2000,
        hideHint: 5000,
        hintEasing: 'easeInQuad',
        hintEasingTime: 400,
        hintMode: 'hint', // hint, line
        hintPosition: 'right',
        focusInput: true,
        onBeforeSubmit: function(form, result){return true;},
        onErrorInput: function(input){},
        onSubmit: function(form){return true;}
    },

    _scroll: 0,

    funcs: {
        required: function(val){
            return val.trim() !== "";
        },
        minlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length >= len;
        },
        maxlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length <= len;
        },
        min: function(val, min_value){
            if (min_value == undefined || isNaN(min_value)) {
                return false;
            }
            if (val.trim() === "") {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return val >= min_value;
        },
        max: function(val, max_value){
            if (max_value == undefined || isNaN(max_value)) {
                return false;
            }
            if (val.trim() === "") {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return val <= max_value;
        },
        email: function(val){
            return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(val);
        },
        url: function(val){
            return /^(?:[a-z]+:)?\/\//i.test(val);
        },
        date: function(val){
            return !!(new Date(val) !== "Invalid Date" && !isNaN(new Date(val)));
        },
        number: function(val){
            return (val - 0) == val && (''+val).trim().length > 0;
        },
        digits: function(val){
            return /^\d+$/.test(val);
        },
        hexcolor: function(val){
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
        },
        pattern: function(val, pat){
            if (pat == undefined) {
                return false;
            }
            var reg = new RegExp(pat);
            return reg.test(val);
        }
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.hintMode !== 'line') {
            o.hintMode = 'hint2';
        }

        this._scroll = $(window).scrollTop();

        this._createValidator();

        element.data('validator', this);

    },

    _createValidator: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");

        element.attr('novalidate', 'novalidate');

        if (o.showRequiredState) {
            $.each(inputs, function(){
                var input = $(this);
                if (input.parent().hasClass('input-control')) {
                    input.parent().addClass('required');
                } else {
                    input.addClass('required');
                }
            });
        }

        inputs.on('focus', function(){
        });

        //console.log(this._scroll);

        $(window).scroll(function(e){
            var st = $(this).scrollTop();
            var delta = isNaN(st - this._scroll) ? 0 : st - this._scroll;
            $(".validator-hint.hint2").css({
                top: '-='+delta
            });
            this._scroll = st;
        });

        if (element[0].onsubmit) {
            this._onsubmit = element[0].onsubmit;
            element[0].onsubmit = null;
        } else {
            this._onsubmit = null;
        }

        element[0].onsubmit = function(){
            return that._submit();
        };
    },

    _submit: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");
        var submit = element.find(":submit").attr('disabled', 'disabled').addClass('disabled');

        var result = 0;
        $('.validator-hint').hide();
        inputs.removeClass('error success');
        $.each(inputs, function(i, v){
            var input = $(v);
            if (input.parent().hasClass('input-control')) {
                input.parent().removeClass('error success');
            }
        });

        $.each(inputs, function(i, v){
            var input = $(v);
            var func = input.data('validateFunc'), arg = input.data('validateArg');
            var this_result = that.funcs[func](input.val(), arg);

            if (!this_result) {
                if (typeof o.onErrorInput === 'function') {
                    o.onErrorInput(input);
                } else {
                    if (typeof window[o.onErrorInput] === 'function') {
                        window[o.onErrorInput](input);
                    } else {
                        result = eval("(function(){"+o.onErrorInput+"})");
                        result.call(input);
                    }
                }
            }

            if (!this_result && o.showErrorState) {
                that._showError(input);
            }
            if (!this_result && o.showErrorHint) {
                setTimeout(function(){
                    that._showErrorHint(input);
                }, i*100);

            }
            if (this_result && o.showSuccessState) {
                that._showSuccess(input);
            }
            if (!this_result && i == 0 && o.focusInput) {
                input.focus();
            }
            result += !this_result ? 1 : 0;
        });

        if (typeof o.onBeforeSubmit === 'function') {
            result += !o.onBeforeSubmit(element, result) ? 1 : 0;
        } else {
            if (typeof window[o.onBeforeSubmit] === 'function') {
                result += window[o.onBeforeSubmit](element, result) ? 1 : 0;
            } else {
                var f0 = eval("(function(){"+o.onBeforeSubmit+"})");
                result += f0.call(element, result) ? 1 : 0;
            }
        }

        if (result !== 0) {
            submit.removeAttr('disabled').removeClass('disabled');
            return false;
        }

        if (typeof o.onSubmit === 'function') {
            result = o.onSubmit(element[0]);
        } else {
            if (typeof window[o.onSubmit] === 'function') {
                result = window[o.onSubmit](element[0]);
            } else {
                var f = eval("(function(){"+o.onSubmit+"})");
                result = f.call(element[0]);
            }
        }

        submit.removeAttr('disabled').removeClass('disabled');

        return result;
    },

    _showSuccess: function(input){
        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('success');
        } else {
            input.addClass('success');
        }
    },

    _showError: function(input){
        var o = this.options;

        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('error');
        } else {
            input.addClass('error');
        }

        if (o.hideError && o.hideError > 0) {
            setTimeout(function(){
                input.parent().removeClass('error');
            }, o.hideError);
        }
    },

    _showErrorHint: function(input){
        var o = this.options,
            msg = input.data('validateHint'),
            pos = input.data('validateHintPosition') || o.hintPosition,
            mode = input.data('validateHintMode') || o.hintMode,
            background = input.data('validateHintBackground') || o.hintBackground,
            color = input.data('validateHintColor') || o.hintColor;

        var hint, top, left;

        if (msg === undefined) {
            return false;
        }

        hint = $("<div/>").addClass(mode+' validator-hint');//.appendTo(input.parent());
        hint.html(msg !== undefined ? this._format(msg, input.val()) : '');
        hint.css({
            'min-width': o.hintSize
        });

        if (background.isColor()) {
            hint.css('background-color', background);
        } else {
            hint.addClass(background);
        }

        if (color.isColor()) {
            hint.css('color', color);
        } else {
            hint.addClass(color);
        }

        // Position
        if (mode === 'line') {
            hint.addClass('hint2').addClass('line');
            hint.css({
                'position': 'relative',
                'width': input.parent().hasClass('input-control') ? input.parent().width() : input.width(),
                'z-index': 100
            });
            hint.appendTo(input.parent());
            hint.fadeIn(o.hintEasingTime, function(){
                setTimeout(function () {
                    hint.hide().remove();
                }, o.hideHint);
            });
        } else {
            hint.appendTo("body");
            // right
            if (pos === 'right') {
                left = input.offset().left + input.outerWidth() + 15 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: $(window).width() + 100
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'left') {
                left = input.offset().left - hint.outerWidth() - 10 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: -input.offset().left - hint.outerWidth() - 10
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'top') {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() - hint.outerHeight() - 20;

                hint.addClass(pos);
                hint.css({
                    top: -hint.outerHeight(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else /*bottom*/ {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() + input.outerHeight();

                hint.addClass(pos);
                hint.css({
                    top: $(window).height(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            }
        }
    },

    _format: function( source, params ) {
        if ( arguments.length === 1 ) {
            return function() {
                var args = $.makeArray( arguments );
                args.unshift( source );
                return $.validator.format.apply( this, args );
            };
        }
        if ( arguments.length > 2 && params.constructor !== Array  ) {
            params = $.makeArray( arguments ).slice( 1 );
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        $.each( params, function( i, n ) {
            source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
                return n;
            });
        });
        return source;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/window.js
$.widget( "metro.window" , {

    version: "3.0.0",

    options: {
        parent: 'default',
        captionStyle: false,
        contentStyle: false,
        buttons: {
            btnMin: false,
            btnMax: false,
            btnClose: false
        },
        title: false,
        content: false,
        icon: false,
        type: 'default', // 'modal'
        size: false, // {width: x, height: y}

        onBtnMinClick: function(e){e.preventDefault();},
        onBtnMaxClick: function(e){e.preventDefault();},
        onBtnCloseClick: function(e){e.preventDefault();},
        onShow: function(e){e.preventDefault();},
        onHide: function(e){e.preventDefault();}
    },

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createWindow();

        element.data('window', this);

    },

    _createWindow: function(){
        var that = this, element = this.element, o = this.options;
        var wind = element, capt, cont;

        wind.addClass("window");
        capt = $("<div/>").addClass("window-caption");
        cont = $("<div/>").addClass("window-content");

        if (o.icon || o.title) {capt.appendTo(wind);}
        cont.appendTo(wind);

        if (typeof o.size === 'object') {
            $.each(o.size, function(key, value){
                cont.css(key, value);
            });
        }

        if (o.captionStyle && typeof o.captionStyle === 'object') {
            $.each(o.captionStyle, function(key, value){
                if (value.isColor()) {
                    capt.css(key, value + " !important");
                } else {
                    capt.addClass(value);
                }
            });
        }

        if (o.contentStyle && typeof o.contentStyle === 'object') {
            $.each(o.contentStyle, function(key, value){
                if (value.isColor()) {
                    cont.css(key, value + " !important");
                } else {
                    cont.addClass(value);
                }
            });
        }

        wind.appendTo(o.parent !== 'default' ? o.parent : element.parent());

        this.icon();
        this.title();
        this.buttons();
        this.content();
    },

    icon: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var icon = capt.find(".window-caption-icon");

        if (o.icon) {
            if (icon.length === 0) {
                $("<span/>").addClass('window-caption-icon').html(o.icon).appendTo(capt);
            } else {
                icon.html(o.icon);
            }

        }
    },

    title: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var title = capt.find(".window-caption-title");

        if (o.title) {
            if (title.length === 0) {
                $("<span/>").addClass('window-caption-title').html(o.title).appendTo(capt);
            } else {
                title.html(o.title);
            }
        }
    },

    buttons: function(){
        var o = this.options;
        var bMin, bMax, bClose;
        var capt = this.element.children('.window-caption');

        if (capt.length === 0) {return;}

        if (o.buttons) {
            var btnMin = o.buttons.btnMin;
            var btnMax = o.buttons.btnMax;
            var btnClose = o.buttons.btnClose;

            if (btnMin && btnMin !== false) {
                bMin = $("<span/>").addClass('btn-min').appendTo(capt);
                if (typeof btnMin === 'object') {
                    bMin.css(btnMin);
                }
                if (typeof o.onBtnMinClick === 'string') {
                    var bMinFn = window[o.onBtnMinClick];
                    bMin.on('click', bMinFn);
                } else {
                    bMin.on('click', o.onBtnMinClick(e));
                }
            }

            if (btnMax && btnMax !== false) {
                bMax = $("<span/>").addClass('btn-max').appendTo(capt);
                if (typeof btnMax === 'object') {
                    bMax.css(btnMax);
                }
                if (typeof o.onBtnMaxClick === 'string') {
                    var bMaxFn = window[o.onBtnMaxClick];
                    bMax.on('click', bMaxFn);
                } else {
                    bMax.on('click', o.onBtnMaxClick(e));
                }
            }

            if (btnClose && btnClose !== false) {
                bClose = $("<span/>").addClass('btn-close').appendTo(capt);
                if (typeof btnClose === 'object') {
                    bClose.css(btnClose);
                }
                if (typeof o.onBtnCloseClick === 'string') {
                    var bCloseFn = window[o.onBtnCloseClick];
                    bClose.on('click', bCloseFn);
                } else {
                    bClose.on('click', o.onBtnCloseClick(e));
                }
            }
        }
    },

    content: function(){
        var o = this.options;
        var c = o.content;
        var content = this.element.children('.window-content');

        if (!c) {return;}

        if (c.isUrl()) {
            if (c.indexOf('youtube') > -1) {
                var iframe = $("<iframe>");
                var video_container = $("<div/>").addClass('video-container').appendTo(content);

                iframe
                    .attr('src', c)
                    .attr('frameborder', '0');

                iframe.appendTo(video_container);
            }
        } else {
            content.html(c);
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/wizard.js
$.widget("metro.wizard", {

    version: "3.0.0",

    options: {
        stepper: true,
        stepperType: 'default',
        stepperClickable: false,
        startPage: 'default',
        finishStep: 'default',
        locale: window.METRO_CURRENT_LOCALE,
        buttons: {
            cancel: true,
            help: true,
            prior: true,
            next: true,
            finish: true
        },

        onCancel: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},

        onPage: function(page, wiz){},
        onStepClick: function(step){}
    },

    _stepper: undefined,
    _currentStep: 0,
    _steps: undefined,

    _create: function(){
        var that = this,
            element = this.element,
            o = this.options,
            steps = element.find(".step");

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._steps = steps;

        if (o.stepper) {
            this._stepper = this._createStepper(steps.length)
                .insertBefore(element.find('.steps'))
                .stepper({
                    clickable: o.stepperClickable
                }).on('stepclick', function(e, s){
                    that.stepTo(s);
                    if (typeof o.onStepClick === 'function') {
                        o.onStepClick(s);
                    } else {
                        if (typeof window[o.onStepClick] === 'function') {
                            window[o.onStepClick](s);
                        } else {
                            var result = eval("(function(){"+o.onStepClick+"})");
                            result.call(s);
                        }
                    }
                });
        }

        if (element.data('locale') !== undefined) {o.locale = element.data('locale');}

        this._createEvents();

        var sp = (o.startPage !== 'default' && parseInt(o.startPage) > 1) ? o.startPage : 1;
        this.stepTo(sp);

        if (typeof o.onPage === 'string') {
            window[o.onPage](this._currentStep + 1, element);
        } else {
            o.onPage(this._currentStep + 1, element);
        }

        element.data('wizard', this);

    },

    _createStepper: function(steps){
        var stepper, o = this.options;

        stepper = $("<div/>").addClass("stepper")
            .attr("data-role", "stepper")
            .attr("data-steps", steps);

        if (o.stepperType !== 'default') {
            stepper.addClass(o.stepperType);
        }

        return stepper;
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        if (o.buttons) {
            var actions = $("<div/>").addClass("actions").appendTo(element);
            var group_left = $("<div/>").addClass("group-left").appendTo(actions);
            var group_right = $("<div/>").addClass("group-right").appendTo(actions);
            var cancel_button, help_button, prior_button, next_button, finish_button;

            if (o.buttons.cancel) {
                cancel_button = $("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]);
                if (typeof o.buttons.cancel === "boolean") {
                    cancel_button.appendTo(group_left);
                } else {
                    if (o.buttons.cancel.title) {
                        cancel_button.html(o.buttons.cancel.title);
                    }
                    if (o.buttons.cancel.cls) {
                        cancel_button.addClass(o.buttons.cancel.cls);
                    }
                    if (o.buttons.cancel.group && o.buttons.cancel.group !== "left") {
                        cancel_button.appendTo(group_right);
                    } else {
                        cancel_button.appendTo(group_left);
                    }
                }
                cancel_button.on('click', function(){
                    if (typeof o.onCancel === 'function') {
                        o.onCancel(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onCancel] === 'function') {
                            window[o.onCancel](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onCancel+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.help) {
                help_button = $("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]);
                if (typeof o.buttons.help === "boolean") {
                    help_button.appendTo(group_right);
                } else {
                    if (o.buttons.help.title) {
                        help_button.html(o.buttons.help.title);
                    }
                    if (o.buttons.help.cls) {
                        help_button.addClass(o.buttons.help.cls);
                    }
                    if (o.buttons.help.group && o.buttons.help.group !== "left") {
                        help_button.appendTo(group_right);
                    } else {
                        help_button.appendTo(group_left);
                    }
                }
                help_button.on('click', function(){
                    if (typeof o.onHelp === 'function') {
                        o.onHelp(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onHelp] === 'function') {
                            window[o.onHelp](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onHelp+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.prior) {
                prior_button = $("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]);
                if (typeof o.buttons.prior === "boolean") {
                    prior_button.appendTo(group_right);
                } else {
                    if (o.buttons.prior.title) {
                        prior_button.html(o.buttons.prior.title);
                    }
                    if (o.buttons.prior.cls) {
                        prior_button.addClass(o.buttons.prior.cls);
                    }
                    if (o.buttons.prior.group && o.buttons.prior.group !== "left") {
                        prior_button.appendTo(group_right);
                    } else {
                        prior_button.appendTo(group_left);
                    }
                }
                prior_button.on('click', function(){
                    if (typeof o.onPrior === 'function') {
                        if (o.onPrior(that._currentStep+1, element)) {that.prior();}
                    } else {
                        if (typeof window[o.onPrior] === 'function') {
                            if (window[o.onPrior](that._currentStep+1, element)) {that.prior();}
                        } else {
                            var result = eval("(function(){"+o.onPrior+"})");
                            if (result.call(that._currentStep+1, element)) {that.prior();}
                        }
                    }
                });
            }
            if (o.buttons.next) {
                next_button = $("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]);
                if (typeof o.buttons.next === "boolean") {
                    next_button.appendTo(group_right);
                } else {
                    if (o.buttons.next.title) {
                        next_button.html(o.buttons.next.title);
                    }
                    if (o.buttons.next.cls) {
                        next_button.addClass(o.buttons.next.cls);
                    }
                    if (o.buttons.next.group && o.buttons.next.group !== "left") {
                        next_button.appendTo(group_right);
                    } else {
                        next_button.appendTo(group_left);
                    }
                }
                next_button.on('click', function(){
                    if (typeof o.onNext === 'function') {
                        if (o.onNext(that._currentStep+1, element)) {that.next();}
                    } else {
                        if (typeof window[o.onNext] === 'function') {
                            if (window[o.onNext](that._currentStep+1, element)) {that.next();}
                        } else {
                            var result = eval("(function(){"+o.onNext+"})");
                            if (result.call(that._currentStep+1, element)) {that.next();}
                        }
                    }
                });
            }
            if (o.buttons.finish) {
                finish_button = $("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]);
                if (typeof o.buttons.finish === "boolean") {
                    finish_button.appendTo(group_right);
                } else {
                    if (o.buttons.finish.title) {
                        finish_button.html(o.buttons.finish.title);
                    }
                    if (o.buttons.finish.cls) {
                        finish_button.addClass(o.buttons.finish.cls);
                    }
                    if (o.buttons.finish.group && o.buttons.finish.group !== "left") {
                        finish_button.appendTo(group_right);
                    } else {
                        finish_button.appendTo(group_left);
                    }
                }
                finish_button.on('click', function(){
                    if (typeof o.onFinish === 'function') {
                        o.onFinish(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onFinish] === 'function') {
                            window[o.onFinish](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onFinish+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
        }
    },

    next: function(){
        var element = this.element, that = this, o = this.options;
        var new_step = this._currentStep + 1;

        if (new_step === this._steps.length) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();


        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === this._steps.length - 1) {
            this.element.find('.btn-next').attr('disabled', true);
        } else {
            this.element.find('.btn-next').attr('disabled', false);
        }

        if (new_step > 0) {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        return true;
    },

    prior: function(){
        var element = this.element, that = this, new_step = this._currentStep - 1;
        var o = this.options;

        if (new_step < 0) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === 0) {
            this.element.find('.btn-prior').attr('disabled', true);
        } else {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        if (new_step < finish) {
            this.element.find('.btn-next').attr('disabled', false);
        }

        return true;
    },

    stepTo: function(step){
        var element = this.element, that = this, new_step = step - 1;
        var o = this.options;

        if (new_step < 0) {return false;}
        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', step);}

        var finish = (o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep);
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        this.element.find('.btn-next').attr('disabled', (new_step >= finish));
        this.element.find('.btn-prior').attr('disabled', (new_step <= 0));

        return true;
    },

    stepper: function(){
        return this._stepper;
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/wizard2.js
$.widget( "metro.wizard2" , {

    version: "3.0.0",

    options: {
        start: 1,
        finish: 'default',
        buttonLabels: {
            prev: '&lt;',
            next: '&gt;',
            finish: 'OK',
            help: '?'
        },
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPage: function(page, wiz){}

    },

    _step: 1,
    _steps: undefined,

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._step = o.start;
        this._steps = element.children('.step');
        this._height = 0;
        this._width = 0;

        if (o.finish === 'default') {
            o.finish = this._steps.length;
        }

        $.each(this._steps, function(i, v){
            if ($(v).outerHeight() > that._height) {that._height = $(v).outerHeight();}
            //console.log(i, $(v).outerHeight(), that._height);
            if ($(v).hasClass('active')) {
                that._step = i + 1;
            }
        });

        this._width = element.innerWidth() - ( (this._steps.length - 1) * 24 +  (this._steps.length));

        element.children('.step').css({
            height: this._height + 48
        });

        $(window).resize(function(){
            that._width = element.innerWidth() - ( (that._steps.length - 1) * 24 +  (that._steps.length));
            that.step(that._step);
        });

        this._createActionBar();
        this.step(o.start);
        this._placeActionBar();

        element.data('wizard2', this);
    },

    _createActionBar: function(){
        var that = this, element = this.element, o = this.options;
        var bar = $("<div/>").addClass('action-bar').appendTo(element);
        var btn_prev, btn_next, btn_help, btn_finish;

        btn_help = $("<button/>").html(o.buttonLabels.help).addClass('button cycle-button medium-button wiz-btn-help place-left').appendTo(bar);
        btn_finish = $("<button/>").html(o.buttonLabels.finish).addClass('button cycle-button medium-button wiz-btn-finish place-right').appendTo(bar);
        btn_next = $("<button/>").html(o.buttonLabels.next).addClass('button cycle-button medium-button wiz-btn-next place-right').appendTo(bar);
        btn_prev = $("<button/>").html(o.buttonLabels.prev).addClass('button cycle-button medium-button wiz-btn-prev place-right').appendTo(bar);

        btn_help.on('click', function(){
            if (typeof o.onHelp === 'function') {
                o.onHelp(that._step, that);
            } else {
                if (typeof window[o.onHelp] === 'function') {
                    window[o.onHelp](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onHelp+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_finish.on('click', function(){
            if (typeof o.onFinish === 'function') {
                o.onFinish(that._step, that);
            } else {
                if (typeof window[o.onFinish] === 'function') {
                    window[o.onFinish](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onFinish+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_prev.on('click', function(){
            if (typeof o.onPrior === 'function') {
                if (o.onPrior(that._step, element)) {that.prior();}
            } else {
                if (typeof window[o.onPrior] === 'function') {
                    if (window[o.onPrior](that._step, element)) {that.prior();}
                } else {
                    var result = eval("(function(){"+o.onPrior+"})");
                    if (result.call(that._step, element)) {that.prior();}
                }
            }
        });

        btn_next.on('click', function(){
            if (typeof o.onNext === 'function') {
                if (o.onNext(that._step, element)) {that.next();}
            } else {
                if (typeof window[o.onNext] === 'function') {
                    if (window[o.onNext](that._step, element)) {that.next();}
                } else {
                    var result = eval("(function(){"+o.onNext+"})");
                    if (result.call(that._step, element)) {that.next();}
                }
            }
        });
    },

    _placeActionBar: function(){
        var element = this.element, o = this.options;
        var action_bar = element.find('.action-bar');
        var curr_frame = element.find('.step.active');
        var left = curr_frame.position().left, right = curr_frame.innerWidth();

        action_bar.css({
            left: left,
            width: right
        });
    },

    step: function(index){
        var o = this.options;

        this.element.children('.step')
            .removeClass('active prev next');

        $(this.element.children('.step')[index - 1])
            .addClass('active')
            .css('width', this._width);

        this.element.children('.step.active').prevAll().addClass('prev').css('width', 0);
        this.element.children('.step.active').nextAll().addClass('next').css('width', 0);

        this._placeActionBar();

        if (index === 1) {
            this.element.find('.wiz-btn-prev').hide();
        } else {
            this.element.find('.wiz-btn-prev').show();
        }

        if (index === this._steps.length) {
            this.element.find('.wiz-btn-next').hide();
        } else {
            this.element.find('.wiz-btn-next').show();
        }

        if (index !== o.finish) {
            this.element.find('.wiz-btn-finish').hide();
        } else {
            this.element.find('.wiz-btn-finish').show();
        }

    },

    prior: function(){
        var new_step = this._step - 1;
        if (new_step <= 0) {
            return false;
        }

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    next: function(){
        var new_step = this._step + 1;
        if (new_step > this._steps.length) {return false;}

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});


 return $.Metro.init();

}));
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, _i, _len;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
          callback = callbacks[_i];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, _i, _len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(_super) {
    var extend, resolveOption;

    __extends(Dropzone, _super);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.

    You can register an event handler like this:

        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      accept: function(file, done) {
        return done();
      },
      init: function() {
        return noop;
      },
      forceFallback: false,
      fallback: function() {
        var child, messageElement, span, _i, _len, _ref;
        this.element.className = "" + this.element.className + " dz-browser-not-supported";
        _ref = this.element.getElementsByTagName("div");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        info.optWidth = this.options.thumbnailWidth;
        info.optHeight = this.options.thumbnailHeight;
        if ((info.optWidth == null) && (info.optHeight == null)) {
          info.optWidth = info.srcWidth;
          info.optHeight = info.srcHeight;
        } else if (info.optWidth == null) {
          info.optWidth = srcRatio * info.optHeight;
        } else if (info.optHeight == null) {
          info.optHeight = (1 / srcRatio) * info.optWidth;
        }
        trgRatio = info.optWidth / info.optHeight;
        if (file.height < info.optHeight || file.width < info.optWidth) {
          info.trgHeight = info.srcHeight;
          info.trgWidth = info.srcWidth;
        } else {
          if (srcRatio > trgRatio) {
            info.srcHeight = file.height;
            info.srcWidth = info.srcHeight * trgRatio;
          } else {
            info.srcWidth = file.width;
            info.srcHeight = info.srcWidth / trgRatio;
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        return info;
      },

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = file.name;
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            removeLink = _ref2[_k];
            _results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return _results;
        }
      },
      removedfile: function(file) {
        var _ref;
        if (file.previewElement) {
          if ((_ref = file.previewElement) != null) {
            _ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var thumbnailElement, _i, _len, _ref;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            thumbnailElement = _ref[_i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.textContent = message);
          }
          return _results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            if (node.nodeName === 'PROGRESS') {
              _results.push(node.value = progress);
            } else {
              _results.push(node.style.width = "" + progress + "%");
            }
          }
          return _results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop,
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
    };

    extend = function() {
      var key, object, objects, target, val, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        object = objects[_i];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element, options) {
      var elementOptions, fallback, _ref;
      this.element = element;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (!file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === status) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.init = function() {
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, _i, _len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
      _ref1 = this.events;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (_error) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var _ref;
      this.disable();
      this.removeAllFiles(true);
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        _ref = this.getActiveFiles();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, tagName, _i, _len, _ref;
      getFallback = function(elements) {
        var el, _i, _len;
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      _ref = ["div", "form"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tagName = _ref[_i];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.disable = function() {
      var file, _i, _len, _ref, _results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        _results.push(this.cancelUpload(file));
      }
      return _results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['TB', 'GB', 'MB', 'KB', 'b'];
        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, _ref;
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.addFile(file));
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            _results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            _results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            _results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            _results.push(this.addFile(item.getAsFile()));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, entriesReader;
      dirReader = directory.createReader();
      entriesReader = (function(_this) {
        return function(entries) {
          var entry, _i, _len;
          for (_i = 0, _len = entries.length; _i < _len; _i++) {
            entry = entries[_i];
            if (entry.isFile) {
              entry.file(function(file) {
                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                  return;
                }
                file.fullPath = "" + path + "/" + file.name;
                return _this.addFile(file);
              });
            } else if (entry.isDirectory) {
              _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
            }
          }
        };
      })(this);
      return dirReader.readEntries(entriesReader, function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      });
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
        return function() {
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, _i, _len, _ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      _ref = this.files.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.createThumbnail = function(file, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          if (file.type === "image/svg+xml") {
            _this.emit("thumbnail", file, fileReader.result);
            if (callback != null) {
              callback();
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
          file.width = img.width;
          file.height = img.height;
          resizeInfo = _this.options.resize.call(_this, file);
          if (resizeInfo.trgWidth == null) {
            resizeInfo.trgWidth = resizeInfo.optWidth;
          }
          if (resizeInfo.trgHeight == null) {
            resizeInfo.trgHeight = resizeInfo.optHeight;
          }
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;
          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          thumbnail = canvas.toDataURL("image/png");
          _this.emit("thumbnail", file, thumbnail);
          if (callback != null) {
            return callback();
          }
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = imageUrl;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var _i, _len, _ref, _results;
        _ref = this.files;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.xhr === xhr) {
            _results.push(file);
          }
        }
        return _results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
          groupedFile = groupedFiles[_i];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
          groupedFile = groupedFiles[_j];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return _results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
              file = files[_j];
              file.upload = {
                progress: progress,
                total: e.total,
                bytesSent: e.loaded
              };
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
              file = files[_k];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          _results = [];
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
            file = files[_l];
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return _results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var _ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          response = xhr.responseText;
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {
              response = JSON.parse(response);
            } catch (_error) {
              e = _error;
              response = "Invalid JSON response from server.";
            }
          }
          updateProgress();
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        _ref1 = this.options.params;
        for (key in _ref1) {
          value = _ref1[key];
          formData.append(key, value);
        }
      }
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
        file = files[_j];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          input = _ref2[_k];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            _ref3 = input.options;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              option = _ref3[_l];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], files[i].name);
      }
      return this.submitRequest(xhr, formData, files);
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "4.2.0";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, _i, _len, _results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )dropzone($| )/.test(el.className)) {
            _results.push(dropzones.push(el));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    _results = [];
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
      dropzone = dropzones[_i];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        _results.push(new Dropzone(dropzone));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, regex, _i, _len, _ref;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        _ref = Dropzone.blacklistedBrowsers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          regex = _ref[_i];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  without = function(list, rejectedItem) {
    var item, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      item = list[_i];
      if (item !== rejectedItem) {
        _results.push(item);
      }
    }
    return _results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, _i, _j, _len, _len1, _ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (_i = 0, _len = els.length; _i < _len; _i++) {
          el = els[_i];
          elements.push(this.getElement(el, name));
        }
      } catch (_error) {
        e = _error;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      _ref = document.querySelectorAll(els);
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        el = _ref[_j];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, mimeType, validType, _i, _len;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
      validType = acceptedFiles[_i];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*

  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e;
      try {
        root.doScroll("left");
      } catch (_error) {
        e = _error;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (_error) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
$.widget("metro.accordion", {

    version: "3.0.0",

    options: {
        closeAny: false,
        speed: 'fast',
        onFrameOpen: function(frame){return true;},
        onFrameOpened: function(frame){},
        onFrameClose: function(frame){return true;},
        onFrameClosed: function(frame){}
    },

    init: function(){
        var that = this, element = this.element;

        element.on('click', '.heading', function(e){
            var frame = $(this).parent();

            if (frame.hasClass('disabled')) {return false;}

            if  (!frame.hasClass('active')) {
                that._openFrame(frame);
            } else {
                that._closeFrame(frame);
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _closeAllFrames: function(){
        var that = this;
        var frames = this.element.children('.frame.active');
        $.each(frames, function(){
            that._closeFrame($(this));
        });
    },

    _openFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameOpen === 'function') {
            if (!o.onFrameOpen(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameOpen] === 'function') {
                if (!window[o.onFrameOpen](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameOpen+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        if (o.closeAny) {this._closeAllFrames();}

        content.slideDown(o.speed);
        frame.addClass('active');

        if (typeof o.onFrameOpened === 'function') {
            o.onFrameOpened(frame);
        } else {
            if (typeof window[o.onFrameOpened] === 'function') {
                window[o.onFrameOpened](frame);
            } else {
                result = eval("(function(){"+o.onFrameOpened+"})");
                result.call(frame);
            }
        }
    },

    _closeFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameClose === 'function') {
            if (!o.onFrameClose(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameClose] === 'function') {
                if (!window[o.onFrameClose](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameClose+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        content.slideUp(o.speed,function(){
            frame.removeClass("active");
        });

        if (typeof o.onFrameClosed === 'function') {
            o.onFrameClosed(frame);
        } else {
            if (typeof window[o.onFrameClosed] === 'function') {
                window[o.onFrameClosed](frame);
            } else {
                result = eval("(function(){"+o.onFrameClosed+"})");
                result.call(frame);
            }
        }
    },

    _create: function(){
        var that = this, o = this.options, element = this.element;

        $.each(this.element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        that.init();
        element.data('accordion', this);

    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

//# sourceMappingURL=all.js.map
