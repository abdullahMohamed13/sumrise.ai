import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-context.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import Home from './pages/Home.tsx'
import ChatBot from './components/custom/ChatBot.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Layout from '@/components/custom/LayOut.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'chat',
        element: <ChatBot />
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
