
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';

export const promiseMockData = (res) => ({
    data: res,
    error_code: 0,
    msg: "SUCCESS",
});

/**
 * 
 * @param format 格式化mock data 提供默认方法promiseMockData
 * @returns (...mocks)接收mock data对象数组 返回一个收集所有mock的对象
 */
const createMockData = (format: (res) => any = promiseMockData) => (...mocks) => {
    const allMocks = mocks.reduce((totalMock, mock) => {
        let mockAPIs;

        if (isFunction(mock)) {
            mockAPIs = mock();
        } else if (isObject(mock)) {
            mockAPIs = mock;
        } else {
            throw new Error('mock file require both Function or Object');
        }
        return {
            ...totalMock,
            ...mockAPIs
        }
    });
    Object.keys(allMocks).forEach(key => {

        // 定制化
        if (isFunction(allMocks[key])) {
            allMocks[key] = allMocks[key]();
        } else {
            allMocks[key] = format(allMocks[key])
        }
    });
    return allMocks;
}

export default createMockData;

// demo 
/**
    const mockData = createMockData();
    const allMockData = mockData(
        loginMock,
        articleMock
    );
 */