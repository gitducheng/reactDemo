const defaultState = {
    inputValue: 'input-redux-data',
    listData: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
      ]
}

const state = (state = defaultState, action) => {
    if(action.type === "changeInput") {
        let newState = {...state}
        newState.inputValue = action.value
        return newState
    }

    if(action.type === "addList") {
        let newState = {...state}
        newState.listData.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }

    if(action.type === "delList") {
        let newState = {...state}
        newState.listData.splice(action.index, 1)
        return newState
    }

    return state
}

export default state