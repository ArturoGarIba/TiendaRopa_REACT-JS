import actions from "./Actions";

function reducer(state, action) {
	let prenda, quantity, item, id;

	console.log(action);

	switch (action.type) {
		case actions.AGREGAR_PRENDA:
			prenda = action.payload.prenda;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.prenda.id === prenda.id);

			if (!item) {
				return {
					...state,
					cart: [...state.cart, { prenda, quantity }],
				};
			}

			return reducer(state, {
				type: actions.ACTUALIZAR_PRENDA,
				payload: {
					id: prenda.id,
					quantity,
				},
			});

		case actions.ACTUALIZAR_PRENDA:
			id = action.payload.id;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.prenda.id === id);
			item.quantity += quantity;
			return { ...state, cart: [...state.cart] };

		case actions.OPEN_MODAL:
			return {
				...state,
				isOpen: true,
			};

		case actions.CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
			};

		default:
			throw new Error("No existe dicha acción");
	}
}

export default reducer;
