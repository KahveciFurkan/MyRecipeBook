import Home from "./Components/home/Home";
import NavigationBar from "./Components/navigationbar/NavigationBar";
import "./App.css";
import { RecipeProvider } from "./Context/RecipeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AddNewRecipePage } from "./pages/AddNewRecipePage/AddNewRecipePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./services/PrivateRoute";
import  {AuthProvider}  from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RecipeProvider>
          <NavigationBar />
          <Home />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/InputRecipe"
                element={<PrivateRoute element={<AddNewRecipePage />} />}
              />
              <Route path="/Login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </RecipeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
