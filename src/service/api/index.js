/**
 * @author Cuong Nguyen
 * @email cuongmn2301@gmail.com
 * @create date 2019-10-09 10:45:23
 * @modify date 2019-10-09 10:45:23
 * @desc api render
 */

import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

let api;

const addAPILogging = api => {
    api.interceptors.request.use(
        config => {
            // Do something before request is sent
            //console.log({ config });
            return config;
        },
        error => {
            // Do something with request error
            // console.log({ req_error: error });
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    api.interceptors.response.use(
        response => {
            // Do something with response data
            // console.log({ response });
            return response;
        },
        error => {
            //console.log({ res_error: error.response });
            //console.warn(error);
            return {
                data: {
                    status: false,
                    data: {
                        isConnectLost: true,
                        message: 'Kiểm tra lại kết nối mạng'
                    }
                }
            }
        },
    );
    return api;
};

export const getInitializedApi = (newApi = false, token) => {
    if (api && !newApi) return api;
    return (api = addAPILogging(
        axios.create({
            baseURL: baseUrl,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                // 'Cache-Control': 'no-cache, no-store, must-revalidate',
                // 'Authorization': 'Bearer ' + token
            },
            responseType: 'json',
        }),
    ));
};

export const uploadImage = async ({ user_id, image }) => {
    try {
        let bodyFormData = new FormData();
        bodyFormData.append('user_id', user_id);
        bodyFormData.append('image', image);
        const data = await getInitializedApi().post(`/image/upload`, bodyFormData);
        if (data.data.status !== undefined) {
            return data.data.data;
        } else {
            undefined
            throw { message: 'Có lỗi xảy ra trong quá trình xử lý' };
        }
    } catch (exception) {
        throw { message: exception.toString() };
    }
};