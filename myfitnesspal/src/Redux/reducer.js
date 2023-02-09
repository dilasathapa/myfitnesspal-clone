import { ADD_TO_BREAKFAST, ADD_TO_DINNER, ADD_TO_LUNCH, ADD_TO_SNACKS, REMOVE_FROM_BREAKFAST, REMOVE_FROM_DINNER, REMOVE_FROM_LUNCH, REMOVE_FROM_SNACKS } from "./actionTypes"

const initialState = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_BREAKFAST: return {
            ...state,
            Breakfast: [...state.Breakfast, payload],
        }
        case ADD_TO_LUNCH: return {
            ...state,
            Lunch: [...state.Lunch, payload],
        }
        case ADD_TO_DINNER: return {
            ...state,
            Dinner: [...state.Dinner, payload],
        }
        case ADD_TO_SNACKS: return {
            ...state,
            Snacks: [...state.Snacks, payload],
        }
        case REMOVE_FROM_BREAKFAST: return {
            ...state,
            Breakfast: state.Breakfast.filter((el) => {
                return el.id !== payload;
            })
        }
        case REMOVE_FROM_LUNCH: return {
            ...state,
            Lunch: state.Lunch.filter((el) => {
                return el.id !== payload;
            })
        }
        case REMOVE_FROM_DINNER: return {
            ...state,
            Dinner: state.Dinner.filter((el) => {
                return el.id !== payload;
            })
        }
        case REMOVE_FROM_SNACKS: return {
            ...state,
            Snacks: state.Snacks.filter((el) => {
                return el.id !== payload;
            })
        }
        default: return state;
    }

}

export { reducer };