import { render, waitFor } from '@testing-library/react';
import App from '../App';

test('renders App', async () => {
    await waitFor(() => {
        const component = render(<App />);
        expect(component).toMatchSnapshot();
    });
});
