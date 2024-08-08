export const thunkMiddleware = (state) => (next) => (action) => {
    if(action.type === 'function') {
        action(state.dispatch, state.getState)
    }
    next(action)
}