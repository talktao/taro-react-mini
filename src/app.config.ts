export default {
    pages: [
        "pages/index/index",
        "pages/my/index"
    ],
    window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black",
    },
    tabBar: {
        custom: true,
        list: [
            {
                "selectedIconPath": "./images/tabbar/homeSelected.png",
                "iconPath": "./images/tabbar/home.png",
                "pagePath": "pages/index/index",
                "text": "首页"
            },
            {
                "selectedIconPath": "./images/tabbar/mySelected.png",
                "iconPath": "./images/tabbar/my.png",
                "pagePath": "pages/my/index",
                "text": "我的"
            }
        ]
    },
};
