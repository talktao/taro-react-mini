import useCsRouter from "@/hooks/useCsRouter";
import { View, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import { NORMAL_LIST } from "./config";
import './index.less';

export default function Tabbar() {
    const [selected, setSelected] = useState(NORMAL_LIST[0].pagePath);

    const { routerInfo, switchTab } = useCsRouter();

    useEffect(() => {
        wx.onAppRoute((route) => {
            setSelected(`/${route.path}`);
        });
    }, []);

    useEffect(() => {
        setSelected(routerInfo.path);
    }, [routerInfo]);

    return <View className="tabbar">
        {
            NORMAL_LIST.map(i => {
                const ifSelected = i.pagePath === selected;

                return <View className={`tabbar-item ${ifSelected ? 'selected' : ''}`} onClick={() => switchTab(i.pagePath)}>
                    <Image src={ifSelected ? i.selectedIconPath : i.iconPath} />
                    <View className="tabbar-txt">{i.text}</View>
                </View>;
            })
        }
    </View>;
}