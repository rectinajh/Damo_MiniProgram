const app = getApp();

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.getSetting({

        })
    },
    onLoad: function () {
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res.userInfo)
                            //用户已经授权过

                            wx.navigateTo({
                                url: '/pages/entry/entry',
                            });

                        }
                    })
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        console.log(e.detail.userInfo)
        if (e.detail.userInfo) {
            
            //用户按了允许授权按钮
            wx.navigateTo({
                url: '/pages/entry/entry',
            });
            

        } else {
            //用户按了拒绝按钮
        }
    }
})