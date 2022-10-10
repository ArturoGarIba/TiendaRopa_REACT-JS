import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./../UI/App.js";
describe("Card", () => {
  beforeEach(() => render(<App />));
  //afterEach(cleanup);
  test("renders nav image", () => {
    const image = screen.getByTestId("ImageNav");
    expect(image).toBeInTheDocument;
    //expect(input).toHaveValue("");
    //userEvent.type(input, expectedValue);
    //expect(input).toHaveValue(expectedValue);
  });
});









