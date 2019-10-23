import {WELCOME} from '../../constants/action-types';
import {updateObject} from './utility';

const initialState = {
  loading: false,
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case WELCOME:
      return updateObject(state, {loading: false});
    default:
      return state;
  }
}
