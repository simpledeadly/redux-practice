import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()

// const playlist = (state = [], action) => {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state
// }
//
// const store = createStore(playlist)
//
// const addBtn = document.querySelectorAll('.btn')[0]
// const trackInput = document.querySelectorAll('.trackInput')[0].value
// const list = document.querySelectorAll('.list')[0]
//
// store.subscribe(() => {
//   list.innerHTML = ''
//   trackInput.value = ''
//   store.getState().forEach(track => {
//     const li = document.createElement('li')
//     li.textContent = track
//     list.appendChild(li)
//   })
// })
//
// addBtn.addEventListener('click', () => {
//   const trackName = trackInput.value
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName })
// })
