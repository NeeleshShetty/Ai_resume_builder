import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SigninPage from './auth/sign-in.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
	
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth/sign-in',
		element: <SigninPage />,
	},
]);

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
     
      <RouterProvider router={router} />
      </ClerkProvider>
  </StrictMode>,
)
