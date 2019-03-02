import {createReducer} from "common/utils/reducerUtils";

import orm from "app/orm";
const defaulrEditingEntities = orm.getEmptyState();

export default createReducer(defaulrEditingEntities, {

});
