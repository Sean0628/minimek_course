import {combineReducers} from "redux";

import {reduceReducers} from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import editingEntitiesReducer from "./editingEntitiesReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";
import tabReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

import entitycrudReducer from "features/entities/entityReducer";

const combinedReducer = combineReducers({
  entities : entitiesReducer,
  editingEntities : editingEntitiesReducer,
  pilots : pilotsReducer,
  mechs : mechsReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer,
});


const rootReducer = reduceReducers(
  combinedReducer,
  entitycrudReducer
);

export default rootReducer;
