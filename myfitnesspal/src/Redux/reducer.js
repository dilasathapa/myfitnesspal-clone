const initialState = {
    Breakfast: [{
        "id": 1,
        "item": "Almonds",
        "calories": 164,
        "carbs": 6,
        "fat": 14,
        "protein": 6,
        "sodium": 0,
        "sugar": 1
    },
    {
        "id": 2,
        "item": "Apple",
        "calories": 104,
        "carbs": 28,
        "fat": 0,
        "protein": 1,
        "sodium": 2,
        "sugar": 21
    },
    {
        "id": 3,
        "item": "Banana",
        "calories": 105,
        "carbs": 27,
        "fat": 0,
        "protein": 1,
        "sodium": 1,
        "sugar": 14
    },
    {
        "id": 4,
        "item": "Poha",
        "calories": 330,
        "carbs": 69,
        "fat": 6,
        "protein": 7,
        "sodium": 420,
        "sugar": 2
    }],
    Lunch: [],
    Dinner: [],
    Snacks: [],
};

function reducer(state = initialState, action) {
    return state;
}

export { reducer };