import axios from "axios";
import { baseURL } from './constants';

const { REACT_APP_API_TOKEN: token } = process.env || {};

const api = axios.create({
    baseURL,
    params: { token }
});

export const getStatus = async () => {
    try {
        await api.get(`/status`);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const getQuotesForStock = async ({ symbol = '' }) => {
    try {
        const res = await api.get(`/stock/${symbol}/quote`);
        return res;
    } catch (error) {
        const message = error || {};
        throw new Error(message);
    }
};

export const getLogoForStock = async ({ symbol = '' }) => {
    try {
        const res = await api.get(`/stock/${symbol}/logo`);
        return res;
    } catch (error) {
        const message = error || {};
        throw new Error(message);
    }
};

export const getChartForStock = async ({ symbol = '', range = '' }) => {
    try {
        const res = await api.get(`/stock/${symbol}/chart/${range}`);
        return res;
    } catch (error) {
        const message = error || {};
        throw new Error(message);
    }
};