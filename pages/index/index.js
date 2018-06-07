//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        text: 'init data',
        array: [{ msg: '1' }, { msg: '2' }]
    },
    // 页面加载 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数
    onLoad: function(query) {
        console.log('onLoad');
    },
    // 页面初次渲染完成 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置
    onReady: function() {
        console.log('onReady');
    },
    // 页面显示 每次打开页面都会调用一次
    onShow: function() {
        console.log('onShow');
    },
    // 页面隐藏 当navigateTo或底部tab切换时调用
    onHide: function() {
        console.log('onHide');
    },
    // 页面卸载 当redirectTo或navigateBack的时候调用
    onUnload: function() {
        console.log('onUnload');
    },
    // 下拉刷新
    // 监听用户下拉刷新事件。
    // 需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
    // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
    onPullDownRefresh: function() {
        console.log('下拉刷新');
    },
    // 上拉触底
    // 监听用户上拉触底事件。
    // 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
    // 在触发距离内滑动期间，本事件只会被触发一次
    onReachBottom: function() {
        console.log("上拉触底");
    }
});
