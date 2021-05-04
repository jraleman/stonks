import { render } from '@testing-library/react';
import Header from '../../components/Header';
import HeaderDropdown from '../../components/Header/HeaderDropdown';
import HeaderTabs from '../../components/Header/HeaderTabs';
import { navDropdownItems } from '../../utils/constants';
import { navTabs } from '../../utils/constants';

describe('Header', () => {
    it('should render', () => {
        const component = render(<Header />);
        expect(component).toMatchSnapshot();
    });
});
    
describe('HeaderDropdown', () => {
    it('should render', () => {
        const items = [];
        const component = render(<HeaderDropdown items={items} />);
        expect(component).toMatchSnapshot();
    });

    it('sets dropdown items', () => {
        const component = render(<HeaderDropdown items={navDropdownItems} />);
        expect(component).toMatchSnapshot();
    });
});

describe('HeaderTabs', () => {
    it('should render', () => {
        const items = [];
        const component = render(<HeaderTabs items={items} />);
        expect(component).toMatchSnapshot();
    });

    it('sets header tabs', () => {
        const component = render(<HeaderTabs items={navTabs} />);
        expect(component).toMatchSnapshot();
    });
});
