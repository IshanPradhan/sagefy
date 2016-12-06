// TODO-2 try to load the state from local storage.
// BUT if there's no cookie, then act like local storage isn't there.
// Also, state changes `change` should update the data in local storage as well.

const recorder = require('./recorder')

const store = {
    data: typeof window === 'undefined' ? {} : window.preload || {},

    bind(fn) {
        store.callback = fn
        return fn
    },

    dispatch(action) {
        recorder.emit(action.message || action.type, action)
        store.data = store.reducer(store.data, action)
        store.change()
        if (store.callback) {
            return store.callback(store.data)
        }
    },

    setReducer(fn) {
        store.reducer = fn
    }
}

module.exports = store
