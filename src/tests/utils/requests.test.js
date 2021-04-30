import axios from 'axios';
import {
    getStatus,
    getQuotesForStock,
    getLogoForStock,
    getChartForStock
} from '../../utils/requests';

jest.mock('axios');

// Default stock symbol for testing
const symbol = 'NKE';
const range = '';

describe('getStatus', () => {
    it('should pass', async () => {
        const res = {
            "data": {
                "status": "up",
                "version": "1.32",
                "time": 1607979129127,
                "currentMonthAPICalls": 14225180421,
            },
            "status": 200,
            "statusText": "",
            "headers": {},
            "config": {},
            "request": {}
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(res));
        await expect(getStatus()).resolves.toEqual(res);
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

describe('getQuotesForStock', () => {
    it('should pass', async () => {
        const res = {
            "data": {
                "symbol": "NKE",
                "companyName": "Nike, Inc. - Class B",
                "primaryExchange": "NEW YORK STOCK EXCHANGE, INC.",
                "calculationPrice": "close",
                "open": 131.77,
                "openTime": 1619703001340,
                "openSource": "official",
                "close": 133.26,
                "closeTime": 1619726402156,
                "closeSource": "official",
                "high": 134.12,
                "highTime": 1619726399911,
                "highSource": "15 minute delayed price",
                "low": 131.23,
                "lowTime": 1619703030819,
                "lowSource": "15 minute delayed price",
                "latestPrice": 133.26,
                "latestSource": "Close",
                "latestTime": "April 29, 2021",
                "latestUpdate": 1619726402156,
                "latestVolume": 6612461,
                "iexRealtimePrice": 133.26,
                "iexRealtimeSize": 100,
                "iexLastUpdated": 1619726396622,
                "delayedPrice": 133.27,
                "delayedPriceTime": 1619726399902,
                "oddLotDelayedPrice": 133.27,
                "oddLotDelayedPriceTime": 1619726399902,
                "extendedPrice": 133.26,
                "extendedChange": 0,
                "extendedChangePercent": 0,
                "extendedPriceTime": 1619740657457,
                "previousClose": 130.71,
                "previousVolume": 8195648,
                "change": 2.55,
                "changePercent": 0.01951,
                "volume": 6612461,
                "iexMarketPercent": 0.04708640247556847,
                "iexVolume": 311357,
                "avgTotalVolume": 7065490,
                "iexBidPrice": 0,
                "iexBidSize": 0,
                "iexAskPrice": 0,
                "iexAskSize": 0,
                "iexOpen": 133.26,
                "iexOpenTime": 1619726392734,
                "iexClose": 133.26,
                "iexCloseTime": 1619726396622,
                "marketCap": 209195547932,
                "peRatio": 62.27,
                "week52High": 147.65,
                "week52Low": 83.38,
                "ytdChange": -0.054670319160238706,
                "lastTradeTime": 1619726399903,
                "isUSMarketOpen": false
            },
            "status": 200,
            "statusText": "",
            "headers": {},
            "config": {},
            "request": {}
        };
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
    it('should pass', async () => {
        const res = {
            "data": {
                "url": "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/NKE.png"
            },
            "status": 200,
            "statusText": "",
            "headers": {},
            "config": {},
            "request": {}
        };
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
    it('should pass', async () => {
        const res = {
            "data": [{
                "close": 132.95,
                "high": 133.35,
                "low": 131.22,
                "open": 132.345,
                "symbol": "NKE",
                "volume": 6026601,
                "id": "HISTORICAL_PRICES",
                "key": "NKE",
                "subkey": "",
                "date": "2021-03-30",
                "updated": 1617153379000,
                "changeOverTime": 0,
                "marketChangeOverTime": 0,
                "uOpen": 132.345,
                "uClose": 132.95,
                "uHigh": 133.35,
                "uLow": 131.22,
                "uVolume": 6026601,
                "fOpen": 132.345,
                "fClose": 132.95,
                "fHigh": 133.35,
                "fLow": 131.22,
                "fVolume": 6026601,
                "label": "Mar 30, 21",
                "change": 0,
                "changePercent": 0
            }],
            "status": 200,
            "statusText": "",
            "headers": {},
            "config": {},
            "request": {}
        };
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
