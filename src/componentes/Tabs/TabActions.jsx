export function TabSelecionada(tabId) {
    return {
        type: 'TAB_SELECIONADA',
        payload: tabId
    }
}

export function TabsVisiveis(...tabIds) {
    const tabsVisiveis = {}
    tabIds.forEach(e => tabsVisiveis[e] = true)
    return {
        type: 'TAB_VISIVEL',
        payload: tabsVisiveis
    }
}