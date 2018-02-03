
import {

  IMPORT_RESET,
  IMPORT_CHANGE_MAPPING,
  IMPORT_CHANGE_DATA,

} from './types';



const importReducer = (previousState = { data: {}, mappings: {} }, payload) => {

  switch (payload.type)
  {

    case IMPORT_CHANGE_MAPPING:
      return {
        ...previousState,
        mappings: { ...previousState.mappings, [payload.index]: payload.value }
      };
      break;

    case IMPORT_RESET:
      return { ...previousState, mappings: {}, data : {}};
      break;

    case IMPORT_CHANGE_DATA:
      return {...previousState, data: payload.data, mappings: {} };
      break;

    default:
      return previousState;
  }
};


export {importReducer};
