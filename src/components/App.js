import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import AddContactPages from "../pages/AddContactPages";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addContact' element={<ProtectedRoutes>
          <AddContactPages />
        </ProtectedRoutes>} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
