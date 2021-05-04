import { render } from '@testing-library/react';
import Footer from '../../components/Footer';
import { footerLabel } from '../../utils/constants';

describe('Footer', () => {
    it('should render', () => {
        const component = render(<Footer />);
        expect(component).toMatchSnapshot();
    });

    it('checks footer text', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(footerLabel)).toBeDefined();
    });
});
