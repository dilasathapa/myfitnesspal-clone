import { ADD_TO_BREAKFAST, ADD_TO_DINNER, ADD_TO_LUNCH, ADD_TO_SNACKS, REMOVE_FROM_BREAKFAST, REMOVE_FROM_DINNER, REMOVE_FROM_LUNCH, REMOVE_FROM_SNACKS, ADD_WATER_CUPS, SAVE_FOOD_NOTES, ADD_TO_CARDIO, ADD_TO_STRENGTH_TRAINING, REMOVE_FROM_CARDIO, REMOVE_FROM_STRENGTH_TRAINING, SAVE_EXERCISE_NOTES, LOGIN_USER, LOGOUT_USER } from "./actionTypes"

const initialState = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
    water_consumed: 0,
    food_notes: "",
    cardio: JSON.parse(localStorage.getItem("cardio"))||[],
    strength_training: JSON.parse(localStorage.getItem("strength"))||[],
    exercise_notes: "",
    auth: {
        isLogin: JSON.parse(localStorage.getItem("login")) || false,
        userDetails: {
            name: "",
            gender: "",
            email: "",
            password: "",
        },
    }
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
        case ADD_WATER_CUPS: return {
            ...state,
            water_consumed: state.water_consumed + payload,
        }
        case SAVE_FOOD_NOTES: return {
            ...state,
            food_notes: payload,
        }
        case SAVE_EXERCISE_NOTES: return {
            ...state,
            exercise_notes: payload,
        }
        case ADD_TO_CARDIO: return {
            ...state,
            cardio: [...state.cardio, payload],
        }
        case ADD_TO_STRENGTH_TRAINING: return {
            ...state,
            strength_training: [...state.strength_training, payload],
        }
        case REMOVE_FROM_CARDIO:
            return {
                ...state,
                cardio: state.cardio.filter((el) => {
                    return el.id !== payload;
                })
            }
        case REMOVE_FROM_STRENGTH_TRAINING:
            return {
                ...state,
                strength_training: state.strength_training.filter((el) => {
                    return el.id !== payload;
                })
            }
        case LOGIN_USER:
            return {
                ...state,
                auth: { isLogin: true, userDetails: payload },
            }
        case LOGOUT_USER:
            return {
                ...state,
                auth: { isLogin: false, userDetails: "" },
            }

        default: return state;
    }

}

export { reducer };