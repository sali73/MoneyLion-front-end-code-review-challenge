import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HeaderSection from '../components/HeaderSection';
import ArtSearchGrid from '../components/ArtSearchGrid';
import ErrorBoundary from '../app/error';

describe('Art Search Application - Component Unit Tests', () => {
  
  it('should render HeaderSection correctly', () => {
    render(<HeaderSection />);
    const editInstruction = screen.getByText(/Get started by editing/i);
    expect(editInstruction).toBeDefined();
  });

  it('should render all search cards in ArtSearchGrid', () => {
    render(<ArtSearchGrid />);
    expect(screen.getByRole('link', { name: /Docs/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Learn/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Templates/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Deploy/i })).toBeDefined();
  });

  it('should render error message and trigger reset correctly in ErrorBoundary', () => {
    const mockError = new Error('Test failure message');
    const mockReset = vi.fn();

    render(<ErrorBoundary error={mockError} reset={mockReset} />);

    // checking for the presence of error message and title in the rendered output
    expect(screen.getByText(/Oops, something went wrong!/i)).toBeDefined();
    expect(screen.getByText(/Test failure message/i)).toBeDefined();

    // checking for the presence of the Try Again button and its interactivity
    const button = screen.getByRole('button', { name: /Try Again/i });
    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(mockReset).toHaveBeenCalledTimes(1);
  });

});