import { renderHook } from '@testing-library/react-hooks'
import { useStocks, useLinearChart } from '../../utils/hooks';
import stockData from '../../__mocks__/data/stockData';

describe('useStocks', () => {
    it('should mount hook', async () => {
        const { waitForNextUpdate } = renderHook(() => useStocks());
        await waitForNextUpdate();
    });
});

describe('useLinearChart', () => {
    it('should mount hook', () => {
        renderHook(() => useLinearChart({ data: stockData }));
    });
});
