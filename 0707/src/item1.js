var item1Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var title = new cc.LabelTTF("item1","",48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height *7 /8;

        this.addChild(title);
        this.initMenu();

        return true;
    },

    initMenu: function () {
        var back = new cc.MenuItemImage(
            res.A_png,
            res.B_png,
            res.C_png,
            this.back, this
        );

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },
});

var item1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new item1Layer();
        this.addChild(layer);
    }
});