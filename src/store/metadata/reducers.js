import { actionTypes } from './actions';
import * as _ from 'lodash';

export const metadataInitialState = {
  approved: [],
  rejected: [],
};

export function metadataReducer(state = metadataInitialState, action) {
  switch (action.type) {
    case actionTypes.SET_METADATA:
      return {
        ...action.payload,
      };
    case actionTypes.SET_APPROVED: {
      const approved = state.approved || [];

      const index = approved.findIndex(p => p.id === action.payload.id);
      if (index === -1) {
        approved.push(action.payload);
      }

      return {
        ...state,
        approved: approved,
      };
    }
    case actionTypes.SET_REJECTED: {
      const rejected = state.rejected || [];
      let approved = state.approved || [];

      const index = approved.findIndex(p => p.id === action.payload.id);

      if (index !== -1) {
        approved = _.remove(approved, n => {
          return n.id != action.payload.id;
        });
      }

      const indexRejected = rejected.findIndex(p => p.id === action.payload.id);
      if (index === -1) {
        rejected.push(action.payload);
      }

      return {
        ...state,
        approved: approved,
        rejected: rejected,
      };
    }
    default:
      return state;
  }
}
