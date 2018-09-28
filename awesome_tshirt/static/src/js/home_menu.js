
odoo.define('awesome_tshirt.HomeMenu', function (require) {
"use strict";

var core = require('web.core');
var HomeMenu = require('web_enterprise.HomeMenu');

var _t = core._t;

HomeMenu.include({
    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * @override
     * @private
     */
    _render: function () {
        this._super.apply(this, arguments);
        var $message = $('<div>', {
            class: 'p-2 alert-warning',
        }).text(_t("Bafien Ckinpaers is watching you!"));
        this.$el.prepend($message);
    },
});

});
