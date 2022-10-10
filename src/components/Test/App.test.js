import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./../UI/App.js";
describe("App component", () => {
  beforeEach(() => render(<App />));

  test("renders home image", () => {
    const image = screen.getByTestId("imag-ini01");
    expect(image).toBeInTheDocument;
    //expect(input).toHaveValue("");
    //userEvent.type(input, expectedValue);
    //expect(input).toHaveValue(expectedValue);
  });
  
  test("link GO SHOPPING with href to  /store", () => {
    const link = screen.getByTestId('link-ini01');
    expect(link).toBeInTheDocument;
    fireEvent.click(link)
    expect(screen.getByText(/Your best option in terms of design/i)).toBeInTheDocument
  });
  //afterEach(cleanup);
  test("renders nav image", () => {
    const image = screen.getByTestId("ImageNav");
    expect(image).toBeInTheDocument;
    //expect(input).toHaveValue("");
    //userEvent.type(input, expectedValue);
    //expect(input).toHaveValue(expectedValue);
  });
  
});