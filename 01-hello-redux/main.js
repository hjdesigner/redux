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

console.assert(
	counter(0, { type: 'INCREMENT' }) === 1
)
console.assert(
	counter(1, { type: 'INCREMENT' }) === 2
)
console.assert(
	counter(2, { type: 'DECREMENT' }) === 1
)
console.assert(
	counter(5, { type: 'DECREMENT' }) === 4
)
console.assert(
	counter(3, { type: 'SOMETHING' }) === 3
)
console.assert(
	counter(undefined, {}) === 0
)
