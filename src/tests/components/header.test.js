import { render } from '@testing-library/react';
import Header from '../../components/Header';
import HeaderDropdown from '../../components/Header/HeaderDropdown';
import HeaderTabs from '../../components/Header/HeaderTabs';

test('renders Header component', () => {
    render(<Header />);
});

test('renders HeaderDropdown component', () => {
    render(<HeaderDropdown />);
});

test('renders HeaderTabs component', () => {
    render(<HeaderTabs />);
});
