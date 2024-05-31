import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TranslatePage from './pages/TranslatePage.tsx'
import Error404Page from './pages/Error404Page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TranslatePage />,
    errorElement: <Error404Page />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
