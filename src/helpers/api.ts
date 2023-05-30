import curry from "lodash/curry";
import Taro from '@tarojs/taro';
import allMockData from "../mock/index";
import compact from 'lodash/compact';
import get from 'lodash/get';

const diffUrls = (prev, next) => {
    const a = compact(prev.split('/')); // 之前的请求
    const b: any[] = compact(next.split('/')); // 之前的请求

    if (b[b.length - 1].match(/[0-9]/)) {
        b.splice(b.length - 1, 1);
    }
    return a.length === b.length && a.join('') === b.join('');
};

function TaroApi(server, method, ifForm, mock, url, data) {
    const token = Taro.getStorageSync('token');
    return new Promise((resolve, reject) => {

        // 启动mock接口
        if (mock && process.env.NODE_ENV !== 'production') {
            Object.keys(allMockData).forEach(key => {

                if (url.includes(key) && diffUrls(key, url)) {
                    console.log(`%c收到mock请求: ${url}`, 'color: #43bb88;font-size: 14px;font-weight: bold;text-decoration: underline;');
                    console.log(`%c返回mock数据如下:`, 'color: #43bb88;font-size: 14px;font-weight: bold;text-decoration: underline;');
                    console.log(allMockData[key].data);
                    resolve([null, allMockData[key].data]);
                    return;
                }
            });
            return;
        }

        Taro.request({
            url: `${server}${url}`,
            method,
            data,
            dataType: 'json',
            header: {
                'Content-Type': ifForm ? `application/x-www-form-urlencoded` : 'application/json; charset=utf-8',
                'token': token,
                'Authorization': `Bearer ${token}`
            },
            success: res => {
                const code = res.statusCode + '';
                const innerCode = get(res, 'data.code', '') + '';
                const msg = get(res, 'data.msg', '');

                const errObj = {
                    data: res.data,
                    msg: msg || '服务器异常：' + innerCode || code
                };

                if (code.includes('5') || code.includes('4') || innerCode.includes('5') || innerCode.includes('4')) {
                    reject(errObj);
                    return;
                }

                if (res.data.data || res.data.returnData || code == '200' || res.data.msg === "SUCCESS") {
                    resolve([null, res.data]);
                    return;
                }

                reject(errObj);
            },
            fail: () => reject([new Error()])
        });
    }).catch(err => {
        return [err];
    });
}

const curryApi = curry(TaroApi);
export const TaroPostApi = curryApi(SERVERURL, 'post', false, false);
export const TaroPostFormApi = curryApi(SERVERURL, 'post', true, false);
export const TaroGetApi = curryApi(SERVERURL, 'get', false, false);
export const TaroPutApi = curryApi(SERVERURL, 'put', false, false);
