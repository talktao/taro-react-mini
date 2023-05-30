import { useRouter } from "taro-hooks";

export default function useCsRouter() {

    const [routerInfo, { navigateTo, switchTab, relaunch, redirectTo, navigateBack }] = useRouter();
    
    return {
        routerInfo,
        navigate: navigateTo,
        switchTab,
        relaunch,
        redirect: redirectTo,
        back: navigateBack,
    }
}