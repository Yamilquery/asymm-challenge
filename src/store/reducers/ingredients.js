import { CHANGE_SEARCH } from '../actions/ingredients';

const initState = {
  search: ""
}

export default function ingredients(state = initState, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.search
      }
    default:
      return state;
  }
}