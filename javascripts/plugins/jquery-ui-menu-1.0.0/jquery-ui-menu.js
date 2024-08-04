/*!
 * Widget:  jquery-ui-menu.js
 *
 * Autor:   K3nguruh <https://github.com/K3nguruh>
 * Version: 1.0.0
 * Datum:   2024-08-04 15:25
 * Lizenz:  MIT-Lizenz
 */

(function ($) {
  //
  //
  $.widget("custom.menu", {
    version: "1.0.0",
    date: "2024-08-04",

    options: {
      breakpoint: 992,
      duration: 300,
      menuHover: false,
    },

    _create: function () {
      this.options = $.extend(true, {}, this.options, this.element.data());

      this._render();
      this._resize();
      this._events();
    },

    _render: function () {
      this.$window = $(window);

      this.$menu = $(this.element);
      this.$menuLists = this.$menu.find("ul");
      this.$menuItems = this.$menuLists.children("li");
      this.$menuTexts = this.$menuItems.children("span");
      this.$menuLinks = this.$menuItems.children("a");
      this.$menuLinksSub = this.$menuLinks.filter(":not(:only-child)");
      this.$menuIcon = $("<i></i>");

      this.$menuLists.addClass("menu-list");
      this.$menuItems.addClass("menu-item");
      this.$menuTexts.addClass("menu-text");
      this.$menuLinks.addClass("menu-link");
      this.$menuLinksSub.addClass("menu-link-sub");
      this.$menuIcon.addClass("menu-icon");

      this.$menuLinksSub.append(this.$menuIcon);
    },

    _resize: function () {
      const windowWidth = this.$window.innerWidth();

      // mobile
      if (windowWidth < this.options.breakpoint) {
        if (this.$menu.hasClass(`${this.widgetName}-mobile`)) {
          return;
        }

        this.$menu.addClass(`${this.widgetName}-mobile`);
        this.$menu.removeClass(`${this.widgetName}-desktop`);
      }
      // desktop
      else {
        if (this.$menu.hasClass(`${this.widgetName}-desktop`)) {
          return;
        }

        this.$menu.addClass(`${this.widgetName}-desktop`);
        this.$menu.removeClass(`${this.widgetName}-mobile`);
      }

      this.$menuLists.slice(1).hide().prev("a").removeClass("active");
    },

    _close: function (event) {
      const $target = $(event.target);

      if (!this.$menuLists.has($target).length) {
        this.$menuLists.slice(1).finish().slideUp(this.options.duration).prev("a").removeClass("active");
      }
    },

    _toggle: function (event) {
      const $thisLink = $(event.currentTarget);
      const $nextList = $thisLink.next("ul");
      const $parentLists = $thisLink.parents("ul");

      $thisLink.toggleClass("active");
      $nextList.finish().slideToggle(this.options.duration);
      this.$menuLists.slice(1).not($nextList).not($parentLists).finish().slideUp(this.options.duration).prev("a").removeClass("active");
    },

    _enter: function (event) {
      const $thisItem = $(event.currentTarget);
      const $childList = $thisItem.children("ul");

      if (this.options.menuHover === true && this.$menu.hasClass(`${this.widgetName}-desktop`)) {
        $childList.finish().slideDown(this.options.duration).prev("a").addClass("active");
      }
    },

    _leave: function (event) {
      const $thisItem = $(event.currentTarget);
      const $childList = $thisItem.children("ul");

      if (this.options.menuHover === true && this.$menu.hasClass(`${this.widgetName}-desktop`)) {
        $childList.finish().slideUp(this.options.duration).prev("a").removeClass("active");
      }
    },

    _events: function () {
      this._on(this.$window, { resize: this._onResize, click: this._onClose });
      this._on(this.$menuItems, { mouseenter: this._onEnter, mouseleave: this._onLeave });
      this._on(this.$menuLinksSub, { click: this._onToggle });
    },

    _onResize: function (event) {
      event.preventDefault();
      this._resize();
    },

    _onClose: function (event) {
      //event.preventDefault();
      this._close(event);
    },

    _onToggle: function (event) {
      event.preventDefault();
      this._toggle(event);
    },

    _onEnter: function (event) {
      event.preventDefault();
      this._enter(event);
    },

    _onLeave: function (event) {
      event.preventDefault();
      this._leave(event);
    },
  });

  //
  //
  $(function () {
    $("[data-plugin='menu']").menu();
  });
})(jQuery);
