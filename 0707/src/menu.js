
var var2 = 321;
var menuLayer = cc.Layer.extend({
    item2:null,
    ctor:function () {
        this._super();


        this.initMenu();

        //標題

        var title = new cc.LabelTTF("選單場景測試","",48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height *7 /8;
        this.addChild(title);

        return true;
    },

    initMenu: function () {
        //設定方式 <放在上面>
        cc.MenuItemFont.setFontSize(52);
        //文字選項(文字內容,如果觸發他的時候我把事件交給哪個方法,作用在哪裡)
        //第二個事件不用括號 是講哪一個方法名稱 回呼函式
        //回呼函式的意思就是會在適當的時間自己去呼叫
        var menuItem1 = new cc.MenuItemFont("Item1",this.doItem1, this);
        cc.MenuItemFont.setFontSize(36);
        var menuItem2 = new cc.MenuItemFont("Item2",this.doItem2, this);
        cc.MenuItemFont.setFontSize(48);
        var menuItem3 = new cc.MenuItemFont("Item3",this.doItem3, this);
        var menuItem4 = new cc.MenuItemFont("Item4",this.doItem4, this);
        var menuItem5 = new cc.MenuItemFont("Item5",this.doItem5, this);
        var menuItem6 = new cc.MenuItemFont("Item6",this.doItem6, this);
        var menuItem7 = new cc.MenuItemFont("Item7",this.doItem7, this);

        //選單(各個選項)
        var menu = new cc.Menu(
            menuItem1, menuItem2,menuItem3, menuItem4,menuItem5,menuItem6,menuItem7);
        //沿著垂直的方式
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    doItem1: function () {
        cc.director.pushScene(new item1Scene());
    },
    doItem2: function () {
        cc.director.pushScene(new item2Scene(100));
    },
    doItem3: function () {
        cc.director.pushScene(new item31Scene());
    },
    doItem4: function () {
        cc.director.pushScene(new item4Scene());
    },
    doItem5: function () {
        cc.director.pushScene(new item5Scene());
    },
    doItem6: function () {
        cc.director.pushScene(new item6Scene());
    },
    doItem7: function () {
        cc.director.pushScene(new item7Scene());
    },


});

var menuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new menuLayer();
        this.addChild(layer);
    }
});