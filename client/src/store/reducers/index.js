let initialState = {
  users: [],
  dataById: {},
  weapons: [],
  inventory: [],
  user: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'users/fetchSuccess':
      return { ...state, users: action.payload }
    case 'dataById/fetchSuccess':
      return { ...state, dataById: action.payload }
    case 'weapons/fetchSuccess':
      return { ...state, weapons: action.payload }
    case 'inventory/fetchSuccess':
      return { ...state, inventory: action.payload }
    case 'user/fetchSuccess':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default rootReducer

