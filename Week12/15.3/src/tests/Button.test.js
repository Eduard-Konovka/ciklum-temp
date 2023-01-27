import { render } from '@testing-library/react';
import Button from '../Button';

describe('Testing Button component', () => {
    test('renders Button text when text is passed in props', () => {
        const { getByText } = render(<Button text='Ok' />);
        expect(getByText('Ok')).toBeTruthy();
    })

    test('renders default text when text is not passed in props', () => {
        const { getByText } = render(<Button />);
        expect(getByText('Submit')).toBeTruthy();
    })
})