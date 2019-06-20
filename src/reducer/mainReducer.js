export default function mainReducer(state, action) {
  switch (action.type) {
    case 'updateIndex':
      return { ...state, index: action.val };
    case 'resetStyle':
      return { ...state, style: { transform: 'translateX(100%)', opacity: 0 } };
    case 'outStyle':
      return { ...state, style: { transform: 'translateX(-100%)', opacity: 0 } };
    case 'inStyle':
      return { ...state, style: { transform: 'translateX(0)', opacity: 1 } };
    default:
      return state
  }
}
