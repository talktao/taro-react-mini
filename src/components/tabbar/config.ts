import { routes } from "@/const/routes";
import Home from '@/images/tabbar/home.png';
import HomeSelected from '@/images/tabbar/homeSelected.png';
import My from '@/images/tabbar/my.png';
import MySelected from '@/images/tabbar/mySelected.png';


/**
 * tabbar config
 */
export const NORMAL_LIST = [
    {
        "selectedIconPath": HomeSelected,
        "iconPath": Home,
        "pagePath": routes.home,
        "text": "首页"
    },
    {
        "selectedIconPath": MySelected,
        "iconPath": My,
        "pagePath": routes.my,
        "text": "我的",
    },
];
