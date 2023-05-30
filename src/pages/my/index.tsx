import Layout from "@/components/layout";
import { View } from "@tarojs/components";
import './index.less';

export default function My() {

    return <Layout title="我的">
        <View className="about">我的</View>
    </Layout>;
}