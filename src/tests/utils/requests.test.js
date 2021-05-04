import axios from 'jest-mock-axios';
import {
    getStatus,
    getQuotesForStock,
    getLogoForStock,
    getChartForStock
} from '../../utils/requests';
import mockGetChartForStock from '../../__mocks__/data/getChartForStock';
import mockGetLogoForStock from '../../__mocks__/data/getLogoForStock';
import mockGetQuotesForStock from '../../__mocks__/data/getQuotesForStock';
import mockGetStatus from '../../__mocks__/data/getStatus';

// Default stock symbol for testing
const symbol = 'NKE';
const range = '';

describe('getStatus', () => {
    afterEach(() => {
        axios.reset();
    });

    it('should pass', async () => {
        const res = mockGetStatus;
        const status = true;
        axios.get.mockImplementationOnce(() => Promise.resolve(res));
        await expect(getStatus()).resolves.toEqual(status);
        expect(axios.get).toHaveBeenCalledWith('/status');
    });
    
    it('should fail', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getQuotesForStock({ symbol })).rejects.toThrow(errorMessage);
    });
});

describe('getQuotesForStock', () => {
    afterEach(() => {
        axios.reset();
    });
    
    it('should pass', async () => {
        const res = mockGetQuotesForStock;
        axios.get.mockImplementationOnce(() => Promise.resolve(res));
        await expect(getQuotesForStock({ symbol })).resolves.toEqual(res);
        expect(axios.get).toHaveBeenCalledWith(`/stock/${symbol}/quote`);
    });
    
    it('should fail', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getQuotesForStock({ symbol })).rejects.toThrow(errorMessage);
    });
});

describe('getLogoForStock', () => {
    afterEach(() => {
        axios.reset();
    });

    it('should pass', async () => {
        const res = mockGetLogoForStock;
        axios.get.mockImplementationOnce(() => Promise.resolve(res));
        await expect(getLogoForStock({ symbol })).resolves.toEqual(res);
        expect(axios.get).toHaveBeenCalledWith(`/stock/${symbol}/logo`);
    });
    
    it('should fail', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getLogoForStock({ symbol })).rejects.toThrow(errorMessage);
    });
});

describe('getChartForStock', () => {
    afterEach(() => {
        axios.reset();
    });

    it('should pass', async () => {
        const res = mockGetChartForStock;
        axios.get.mockImplementationOnce(() => Promise.resolve(res));
        await expect(getChartForStock({ symbol })).resolves.toEqual(res);
        expect(axios.get).toHaveBeenCalledWith(`/stock/${symbol}/chart/${range}`);
    });
    
    it('should fail', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(getChartForStock({ symbol })).rejects.toThrow(errorMessage);
    });
});
