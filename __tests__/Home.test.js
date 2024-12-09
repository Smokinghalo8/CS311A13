import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page';

describe('Home Component', () => {
  it('should display the number input and submit it correctly', () => {
    //Render the Home component
    render(<Home />);

    //Find field and number
    const numberInput = screen.getByPlaceholderText('Enter a number');
    const submitButton = screen.getByText('Submit');
    const displayInput = screen.getByPlaceholderText('Last input');

    //Enter the number 40 into the input field
    fireEvent.change(numberInput, { target: { value: '40' } });

    //Click submit
    fireEvent.click(submitButton);

    //Verify
    expect(displayInput.value).toBe('40');
  });
});
