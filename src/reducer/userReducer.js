export default function userReducer(state, action) {
  switch (action.type) {
    case 'updateName':
      state[0].name = 'Bekir'
      return [...state]
    default:
      return state
  }
}
