import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Descripcion from '../../components/descripcion/Descripcion'

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe('<Descripcion />', () => {
    let dispatch;
    let container;
    let componente

    beforeEach(() => {
        window.fetch = jest.fn();
        dispatch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [
                {
                    id: 3,
                    descripcion:
                        "Men Seam Front Tee & Track Shorts Set",
                    nombre_comida: "Men Co-ords",
                    precio: 600,
                    url_img: "/img/Athleisure/2.jpg"
                },
            ],
            ok: true,
        });

        const rendered = await act(async () => {
            render(
                    <Descripcion >

                    </Descripcion>
            )
            });
        
        container = rendered.container;
        console.log(container)
    })

    test('Test 1', () => {
        
    })

})