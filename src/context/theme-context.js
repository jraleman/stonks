import { createContext, useReducer } from 'react';

const initialState = {
    primary: '#19b3ff',
    secondary: '#148fcc',
    chart: {
        price: 'steelblue',
        average: 'orange',
        gain: '#03a678',
        lose: '#c0392b',
    },
    bg: '#ffffff',
    text: '#171818',
};

const darkTheme = {
    ...initialState,
    bg: '#222222',
    text: '#eff1f2',
};

const reducer = (state, action) => {
    const { type } = action || {};
    switch(type) {
        case 'DARK_MODE':
            return darkTheme;
        case 'RESET_CONTEXT':
            return initialState;
        default:
            throw new Error('Invalid action');
    }
}

export const ThemeStateContext = createContext();
export const ThemeDispatchContext = createContext();

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    )
};

export default ThemeProvider;
