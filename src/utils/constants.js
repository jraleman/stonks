import StockLogo from '../components/StocksTable/StockLogo';

export const navTabs = [
    { title: 'Stocks List', href: '/stocks' },
];
export const navDropdownItems = [
    { label: 'About', onClick: () => window.alert('Nike coding challenge') },
    { label: 'Language', onClick: () => window.alert('i18n support comming soon!') },
];
export const baseURL = 'https://cloud.iexapis.com/stable';
export const stocksList = [
    'NKE',
    'NIO',
    'MRK',
    'WFC',
    'SQ',
    'DIS',
    'AAPL',
    'TSLA',
    'MSFT',
    'AMZN',
];
export const tableColumns = [
    {
        Header: '',
        accessor: 'logo',
        Cell: ({ value }) => <StockLogo src={value} />,
    },
    {
        Header: 'Symbol',
        accessor: 'symbol',
    },
    {
        Header: 'Open',
        accessor: 'iexOpen',
    },
    {
        Header: 'Close',
        accessor: 'iexClose',
    },
    {
        Header: 'Price',
        accessor: 'latestPrice',
    },
];
export const basicInfo = [
    "logo",
    "symbol",
    "iexOpen",
    "iexClose",
    "latestPrice",
];
export const additionalInfo = [
    "high",
    "low",
    "previousClose",
    "peRatio",
    "week52High",
    "week52Low",
];
