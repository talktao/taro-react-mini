import { apisUrl } from "@/const/api";


const mock = {
    [apisUrl.GET_HOME_LIST]: {
        "total": 3,
        "rows": [
            {
                coverImage: 'https://img0.baidu.com/it/u=1273517628,1100314156&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
                id: 1,
                "startDate": "2023-03-01 00:00:00",
                title: '福田CBD文化金融街区——首届年货节'
            },
            {
                coverImage: 'https://img0.baidu.com/it/u=1273517628,1100314156&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
                id: 2,
                "startDate": "2023-03-01 00:00:00",
                title: '福田CBD文化金融街区——首届年货节'
            },
            {
                coverImage: 'https://img0.baidu.com/it/u=1273517628,1100314156&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
                id: 3,
                "startDate": "2023-03-01 00:00:00",
                title: '福田CBD文化金融街区——首届年货节'
            },
        ],
        "code": 200,
        "msg": "查询成功"
    }
};

export default mock;