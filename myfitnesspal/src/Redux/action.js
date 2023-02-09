import { ADD_TO_BREAKFAST, ADD_TO_DINNER, ADD_TO_LUNCH, ADD_TO_SNACKS, REMOVE_FROM_BREAKFAST, REMOVE_FROM_DINNER, REMOVE_FROM_LUNCH, REMOVE_FROM_SNACKS } from "./actionTypes"

export const addFoodThunkActionCreator = (meal, item) => {
    return (dispatch, getState) => {
        let actionObj = {};
        switch (meal) {
            case "Breakfast": actionObj = {
                type: ADD_TO_BREAKFAST,
                payload: item,
            }
                break;
            case "Lunch": actionObj = {
                type: ADD_TO_LUNCH,
                payload: item,
            }
                break;
            case "Dinner": actionObj = {
                type: ADD_TO_DINNER,
                payload: item,
            }
                break;
            case "Snacks": actionObj = {
                type: ADD_TO_SNACKS,
                payload: item,
            }
                break;
        }
        dispatch(actionObj);
    }
}

export const removeFoodThunkActionCreator = (meal, id) => {
    return (dispatch, getState) => {
        let actionObj = {};
        switch (meal) {
            case "Breakfast": actionObj = {
                type: REMOVE_FROM_BREAKFAST,
                payload: id,
            }
                break;
            case "Lunch": actionObj = {
                type: REMOVE_FROM_LUNCH,
                payload: id,
            }
                break;
            case "Dinner": actionObj = {
                type: REMOVE_FROM_DINNER,
                payload: id,
            }
                break;
            case "Snacks": actionObj = {
                type: REMOVE_FROM_SNACKS,
                payload: id,
            }
                break;
        }
        dispatch(actionObj);
    }
}