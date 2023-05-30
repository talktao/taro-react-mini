
import { View } from '@tarojs/components';
// import LangSelect from '../langSelect';
import NavBar from '../navigator';
import Tabbar from '../tabbar';
import './index.less';

export default function Layout(props) {
    return <View className={`layout ${props.className || ''}`}>
        <NavBar title={props.title || ''} />
        <View className="layout-body">{props.children}</View>
        <Tabbar />
    </View>;
}