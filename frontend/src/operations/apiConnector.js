import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : null,
        },
        params: params ? params : null,
    });
};