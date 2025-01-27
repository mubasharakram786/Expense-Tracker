import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Expenses from './pages/Expenses.jsx'
import Trips from './pages/Trips.jsx'
import Approvals from './pages/Approvals.jsx'
import Settings from './pages/Settings.jsx'
import Support from './pages/Support.jsx'
import NewExpense from './pages/NewExpense.jsx'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // AppLayout is the parent route layout
      children: [
        { path: "/", element: <Home /> },
        { path: "/new-expense", element: <NewExpense /> },
        { path: "/expenses", element: <Expenses /> },
        { path: "/trips", element: <Trips /> },
        { path: "/approvals", element: <Approvals /> },
        { path: "/settings", element: <Settings /> },
        { path: "/support", element: <Support /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
