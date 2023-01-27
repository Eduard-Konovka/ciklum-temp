import { render } from '@testing-library/react';
import Form from '../Form';

jest.mock('../Button', () => () => <button data-testid="mockedButton" />);

describe('Form', () => {
    test('renders First Name Input element', () => {
        const { getByTestId } = render(<Form />);

        expect(getByTestId('firstNameInput')).toBeTruthy();
    })

    test('renders Send data Button', () => {
        const { getByTestId } = render(<Form />);

        expect(getByTestId('mockedButton')).toBeTruthy();
    })
})