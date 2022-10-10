import { render, screen } from "@testing-library/react";
import InicioView from '../inicio/InicioView';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import ReactDOM from "react-dom";
import App from '../UI/App'
import actions from "../reducers/Actions";
import userEvent from '@testing-library/user-event'


describe("Inicio ", () => {
  beforeEach(() => render(
  <MemoryRouter initialEntries={['/some-route']}>
    <InicioView />
  </MemoryRouter>));
  test("renders home link to catalogue", () => {
    const link = screen.getByTestId("mono");
    expect(link).toBeInTheDocument;
  });
});