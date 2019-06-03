import { DELETE_COMMENT, ADD_COMMENT } from '../actions/commentActions';

const initialState = {
  '5cef3501ef6005a77cd4fd17': ['cool', 'rad']
};

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case DELETE_COMMENT:
      return { ...state, [action.payload.id]: state[action.payload.id].filter((comment, i) => i !== action.payload.index) };
    case ADD_COMMENT:
      return { ...state, [action.payload.id]: [...state[action.payload.id], action.payload.comment] };
    default:
      return state;
  }
}
