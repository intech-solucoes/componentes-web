import { combineReducers } from 'redux'

import TabReducer from '../componentes/Tabs/TabReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
})

export default rootReducer