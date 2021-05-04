import { render } from '@testing-library/react';
import Searchbar from '../../components/Searchbar';

describe('Searchbar', () => {
    it('should render', () => {
        render(<Searchbar />);
    });
});
