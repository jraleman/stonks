import StockLogo from '../components/StocksTable/StockLogo';

// To be replaced by i18n
export const failedStatusLabel = 'Failed to fetch stocks list - try next month?';
export const stocksListLabel = 'Stocks List';
export const aboutLabel = 'About';
export const aboutMessageLabel = 'Nike coding challenge';
export const footerLabel = 'Stonks - © 2021';
export const searchbarLabel = 'Symbol';
export const searchbarPlaceholder = 'NKE';
export const averageInfoLabel = '-- Additional Information --'

export const navTabs = [
    { title: stocksListLabel, href: '/stocks' },
];
// TODO
// - implement modal
//      - theme editor (color picker)
//      - language selector (i18n dropdown)
export const navDropdownItems = [
    { label: aboutLabel, onClick: () => window.alert(aboutMessageLabel) },
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
    'logo',
    'symbol',
    'iexOpen',
    'iexClose',
    'latestPrice',
];
export const additionalInfo = [
    'high',
    'low',
    'close',
    'volume',
    'change',
    'peRatio',
    'week52High',
    'week52Low',
];
export const chartId = '#chart';
export const xAxisChart = 'date';
export const yAxisChart = 'close';
