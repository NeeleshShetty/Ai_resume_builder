import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SigninPage from './auth/sign-in.jsx'
import { Home } from 'lucide-react'
import Dashboard from './dashboard/dashboard.jsx'

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
	{
		path: '/auth/sign-in',
		element: <SigninPage />,
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
