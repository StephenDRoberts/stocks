import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import Card from './Card';

test('renders a title', async () => {
    render(<Card title={"Hello"} />)

    expect(screen.getByRole('heading')).toHaveTextContent("Hello")
});