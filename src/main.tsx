import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TranslatePage from './pages/TranslatePage.tsx'
import Error404Page from './pages/Error404Page.tsx'
import FavoritesPage from './pages/FavoritesPage.tsx'
import HistoryPage from './pages/HistoryPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TranslatePage />,
    errorElement: <Error404Page />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
