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
    },],
    Lunch: [],
    Dinner: [{
        "id": 8,
        "item": "Chapati",
        "calories": 72,
        "carbs": 15,
        "fat": 0,
        "protein": 3,
        "sodium": 190,
        "sugar": 0
    },
    {
        "id": 9,
        "item": "Paneer curry",
        "calories": 108,
        "carbs": 6,
        "fat": 7,
        "protein": 5,
        "sodium": 0,
        "sugar": 5
    },
    {
        "id": 10,
        "item": "Sweets",
        "calories": 340,
        "carbs": 61,
        "fat": 0,
        "protein": 4,
        "sodium": 0,
        "sugar": 0
    }],
    Snacks: [],
};

function reducer(state = initialState, action) {
    return state;
}

export { reducer };