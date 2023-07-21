import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('className', () => {
    test('with only first param', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
