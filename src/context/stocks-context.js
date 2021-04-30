import { createContext, useReducer } from 'react';

const initialState = {
    symbol: '',
    charts: [{}],
};

const reducer = (state, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case 'LOAD_STOCK':
            const { symbol, charts } = payload || {};
            return { ...state, symbol, charts };
        case 'RESET_CONTEXT':
            return initialState;
        default:
            throw new Error('Invalid action');
    }
};

export const StocksStateContext = createContext();
export const StocksDispatchContext = createContext();

const StocksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StocksStateContext.Provider value={state}>
            <StocksDispatchContext.Provider value={dispatch}>
                {children}
            </StocksDispatchContext.Provider>
        </StocksStateContext.Provider>
    );
};

export default StocksProvider;
