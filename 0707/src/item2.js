var item2Layer = cc.Layer.extend({
    ctor:function (data) {
        this._super();
        var title = new cc.LabelTTF("item2","",48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height *7 /8;

        this.addChild(title);
        this.initMenu();
        cc.log("Item2Layer:" + data);
        cc.log("Item2Layer:var1 = " + var2);

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

var item2Scene = cc.Scene.extend({
    mydata:null,
    ctor:function(data){
        this._super();
        this.mydata = data;
        cc.log("Item2Scene:ctor():" + data)
        var layer = new item2Layer(data);
        this.addChild(layer);

    },

    // onEnter:function () {
    //     this._super();
    //     cc.log("Item2Scene:onEnter()" + this.mydata)
    //     var layer = new Item2Layer();
    //     this.addChild(layer);
    // }

});