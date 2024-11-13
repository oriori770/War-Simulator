import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Router/BrowserRouter'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'


function App() {
  

  return (
    <>
      <Provider store={store}>
          <div>app</div>
          <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
