export default function mainReducer(state, action) {
  switch (action.type) {
    case 'updateIndex':
      return { ...state, index: action.val };
    case 'updateStyle':
      return { ...state, style: action.val };
    default:
      return state
  }
}
