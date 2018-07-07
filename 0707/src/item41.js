var item41Layer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var bg = new cc.Sprite(res.bg_jpg);
        bg.x = cc.winSize.width / 2;
        bg.y = cc.winSize.height / 2;
        this.addChild(bg);

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
        back.x = 0 - cc.winSize.width / 2 + back.width/2;
        back.y = 0 - cc.winSize.height / 2 + back.height/2;
        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },
    onExitTransitionDidStart:function(){

        cc.log("finish")
    },

});

var item41Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new item41Layer();
        this.addChild(layer);
    }
});