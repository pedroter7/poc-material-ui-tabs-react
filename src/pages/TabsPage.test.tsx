import { render, screen, fireEvent } from '@testing-library/react';
import { TabIndex } from '../enum/enums';
import TabsPage from './TabsPage';

test('Default page is set', () => {
    render(<TabsPage defaultTab={TabIndex.Red}></TabsPage>);
    const linkElement = screen.getByText(/supposed to be red/i);
    expect(linkElement).toBeInTheDocument();
});

test('Tab change on click', () => {
    render(<TabsPage></TabsPage>);
    fireEvent.click(screen.getByTestId('tabpanel-green'));
    const linkElement = screen.getByText(/supposed to be green/i);
    expect(linkElement).toBeInTheDocument();
});

test('Hidden tab content not in document', () => {
    render(<TabsPage defaultTab={TabIndex.Green}></TabsPage>);
    expect(() => screen.getByText(/supposed to be red/i)).toThrow();
});