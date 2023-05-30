import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { FC, useEffect, useState } from 'react';
import './index.less';

export interface NavigatorProps {
    title: string
    className?: string
}

/**
 * 
 * @param props NavigatorProps
 * @returns 通用组件 - 导航栏
 */
const NavBar = props => {
    const { title = '', className = '' } = props;
    const [navTop, setBackTop] = useState(26);
    const [navHeight, setHeight] = useState(32);

    useEffect(() => {
        const { top, height } = Taro.getMenuButtonBoundingClientRect();
        setBackTop(top)
        setHeight(height)
    }, [])

    return <View className={`navigator ${className}`} style={{ height: navHeight, paddingTop: navTop }}>
        {props.children}
        {title && <Text className="navigator-title">{title}</Text>}
    </View>
}

export default NavBar;