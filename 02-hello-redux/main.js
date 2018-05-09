'use strict'

const counter = (state, action) => {
	switch (action.type) {
		case 'INCREMENT': return state + 1
		case 'DECREMENT': return state - 1
	}
	if (typeof state === 'undefined') {
		return 0
	}
	return state
}

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() => {
	console.log('disparou uma ação!', store.getState())
})
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
