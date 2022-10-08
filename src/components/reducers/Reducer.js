import actions from "./Actions";

function reducer(state, action) {
	let meal, quantity, item, id;

	console.log(action);

	switch (action.type) {
		case actions.AGREGAR_PRENDA:
			meal = action.payload.meal;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.meal.id === meal.id);

			if (!item) {
				return {
					...state,
					cart: [...state.cart, { meal, quantity }],
				};
			}

			return reducer(state, {
				type: actions.UPDATE_MEAL,
				payload: {
					id: meal.id,
					quantity,
				},
			});

		case actions.UPDATE_MEAL:
			id = action.payload.id;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.meal.id === id);
			item.quantity += quantity;
			return { ...state, cart: [...state.cart] };

		case actions.ELIMINAR_PRENDA:

            id = action.payload.id;

            quantity = action.payload.quantity;

            item = state.cart.filter((c) => c.meal.id !== id);

            item.id = null;

            return { ...state,

                cart: item};

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
