import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import AddMenu from "../pages/AddMenu";
import EditMenu from "../pages/EditMenu";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addmenu",
    element: (
      <ProtectedRoute>
        <AddMenu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editmenu",
    element: (
      <ProtectedRoute>
        <EditMenu />
      </ProtectedRoute>
    ),
  },

];
