odoo.define('awesome_map.MapRenderer', function (require) {
"use strict";

var AbstractRenderer = require('web.AbstractRenderer');

var MapRenderer = AbstractRenderer.extend({
    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * @override
     */
    _render: function () {
        this.$el.text('Hello world');
        return this._super.apply(this, arguments);
    },
});

return MapRenderer;

});
