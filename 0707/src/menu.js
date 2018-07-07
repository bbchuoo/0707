

var menuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        return true;
    }
});

var menuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new menuLayer();
        this.addChild(layer);
    }
});

