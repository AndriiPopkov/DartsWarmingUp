const defaultState = [
    { id: 1, title: "T20", count: 0 },
    { id: 2, title: "D20", count: 0 },
    { id: 3, title: "T19", count: 0 },
    { id: 4, title: "D19", count: 0 },
    { id: 5, title: "T18", count: 0 },
    { id: 6, title: "D18", count: 0 },
    { id: 7, title: "Bull", count: 0 },
  ];

const CHANGE_COUNT = 'CHANGE_COUNT'
const CHANGE_MINUS = 'CHANGE_MINUS'

export const changeCountAction = (id) => ({
    type: CHANGE_COUNT,
    payload: id
})

export const changeCountMinusAction = (id) => ({
    type: CHANGE_MINUS,
    payload: id
})

export const counterReducer = (state = defaultState, action) => {
    if (action.type === CHANGE_COUNT) {
        return state.map(el => (el.id === action.payload ? {...el, count: el.count + 1} : el))
    }

    if (action.type === CHANGE_MINUS) {
        return state.map(el => (el.id === action.payload ? {...el, count: el.count - 1} : el))
    }
    return state
}