import { ADD_TO_BREAKFAST, ADD_TO_DINNER, ADD_TO_LUNCH, ADD_TO_SNACKS, REMOVE_FROM_BREAKFAST, REMOVE_FROM_DINNER, REMOVE_FROM_LUNCH, REMOVE_FROM_SNACKS, ADD_WATER_CUPS, SAVE_FOOD_NOTES, ADD_TO_CARDIO, ADD_TO_STRENGTH_TRAINING, REMOVE_FROM_CARDIO, REMOVE_FROM_STRENGTH_TRAINING, SAVE_EXERCISE_NOTES, LOGIN_USER, LOGOUT_USER } from "./actionTypes"


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

export const addWaterThunkActionCreator = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_WATER_CUPS,
            payload,
        })
    }
}

export const saveNotesThunkActionCreator = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: SAVE_FOOD_NOTES,
            payload,
        })
    }
}

export const addExerciseThunkActionCreator = (type, data) => {
    return (dispatch, getState) => {
        let actionObj = {};
        switch (type) {
            case "cardio": actionObj = {
                type: ADD_TO_CARDIO,
                payload: data,
            }
                break;
            case "strength": actionObj = {
                type: ADD_TO_STRENGTH_TRAINING,
                payload: data,
            }
                break;
        }
        dispatch(actionObj);
    }
}

export const removeExerciseThunkActionCreator = (type, id) => {
    return (dispatch, getState) => {
        let actionObj = {};
        switch (type) {
            case "cardio": actionObj = {
                type: REMOVE_FROM_CARDIO,
                payload: id,
            }
                break;
            case "strength": actionObj = {
                type: REMOVE_FROM_STRENGTH_TRAINING,
                payload: id,
            }
                break;
        }
        dispatch(actionObj);
    }
}

export const saveExerciseNotesThunkActionCreator = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: SAVE_EXERCISE_NOTES,
            payload,
        })
    }
}

export const loginUserThunkActionCreator = (userDetails) => {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_USER,
            payload: userDetails,
        })
    }
}

export const logoutUserThunkActionCreator = ()=>{
    return (dispatch, getState) => {
        dispatch({
            type: LOGOUT_USER,
        })
    }
}
