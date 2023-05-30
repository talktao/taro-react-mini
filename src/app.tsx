import { useEffect } from "react";
import { useEnv, useSystemInfo } from "taro-hooks";
import "./app.less";
import { useRunModel } from "./stores/useRunModel";

export default function App(props) {
  const systemInfo = useSystemInfo();
  const { setEnv, checkIfPc } = useRunModel();
  const env = useEnv();

  useEffect(() => {

    if (!systemInfo) return;
    console.log('当前系统信息: ');
    console.log(systemInfo);
    // changeLanguage('en'); // 注入系统语言
  }, [systemInfo]);

  useEffect(() => {

    if (!env) return;
    console.log('当前运行环境: ' + env);
    setEnv(env);
    console.log('当前是否pc端', checkIfPc());
  }, [env]);

  useEffect(() => {

  }, []);

  return props.children;
}

