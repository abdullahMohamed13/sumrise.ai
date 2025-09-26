import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-context.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import Home from './pages/Home.tsx'
import ChatBot from './components/custom/chat/ChatBot.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Layout from '@/components/custom/Layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <main className='px-10 py-12 md:py-18'>
            <Home />
          </main>
      },
      {
        path: 'chat',
        element: <main className='p-3'>
          <ChatBot />
        </main>
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className=''>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  </StrictMode>,
)
