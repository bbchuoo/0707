var item3Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        cc.log("Item3:ctor()");

        var title = new cc.LabelTTF("Item3","",48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height * 7 / 8;
        this.addChild(title);

        this.initMenu();

        return true;
    },
    initMenu: function () {
        var next = new cc.MenuItemFont("Next", this.next, this);
        var back = new cc.MenuItemImage(
            res.A_png,
            res.B_png,
            res.C_png,
            this.back, this
        );

        var menu = new cc.Menu(next,back);
        menu.alignItemsHorizontally();
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },

    next: function () {
        cc.director.pushScene(new item31Scene());
    },


    onEnter: function () {
        cc.log("Item3:onEnter()");
    },
    onExit: function(){
        cc.log("Item3:onExit()");
    }

});

var item3Scene = cc.Scene.extend({
    ctor: function(){
        this._super();
        cc.log("Item3:Scene:ctor()")
        var layer = new item3Layer();
        this.addChild(layer);
    },
    onEnter:function () {

    }
});
