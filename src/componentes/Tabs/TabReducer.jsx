const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECIONADA':
            return { ...state, selected: action.payload }
        case 'TAB_VISIVEL':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}