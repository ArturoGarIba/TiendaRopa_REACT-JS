import { render, screen } from "@testing-library/react";
import Producto from "../pages/Productos";
import StateContext from "../components/context/state";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Producto", () => {
	let dispatch;
	let container;

	beforeEach(async () => {
		jest.fn();
		window.fetch = jest.fn();
		
		dispatch = jest.fn();

		window.fetch.mockResolvedValueOnce({
			json: async () => [
                {
                    descripcion: "Men Thermal Lined Sweatshirt",
                    id: 1,
                    nombre_comida: "Men Sweatshirts",
                    precio: 600,
                    url_img: "../../img/Hoodies/5.JPG"
                }
			],
			ok: true,
		});

		const rendered = await act(async () =>
			render(
				<StateContext.Provider value={{ dispatch, state: {} }}>
					<MemoryRouter initialEntries={['/some-route']}>
						<Producto />
					</MemoryRouter>
				</StateContext.Provider>
			)
		);

		container = rendered.container;
	});

	it("Should display clothes", async () => {
		const nombre_comida = await screen.findByText("Men Sweatshirts");
		const descripcion = await screen.findByText("Men Thermal Lined Sweatshirt");

		expect(nombre_comida).toBeInTheDocument;
		expect(descripcion).toBeInTheDocument;
	});

});

