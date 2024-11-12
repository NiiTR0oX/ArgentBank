import Header from "./components/Header/Header.jsx";
import MainHome from "./components/MainHome/MainHome.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "./components/User/User.jsx";
import EditName from "./components/EditName/EditName.jsx";
import SecurityRoutes from "./SecurityRoutes.jsx";
import { useSelector } from "react-redux";


const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/ArgentBank/" : "/";

  const userProfil = useSelector(state =>state.login.userProfil)
  // Fonction pour effectuer la redirection si l'utilisateur est déjà connecté
  const redirectIfLoggedIn = () => {
    console.log("valeur du token " +  userProfil);
    if (userProfil) {
      return <Navigate to="/user"/>;
    }
    return null;
  };

  return (
    <BrowserRouter basename={basename}>
      <Header/>
      <Routes>
        <Route path="/" element={<MainHome/>} />
         <Route path="/sign-in" element={
            <>
              {redirectIfLoggedIn()}
              <SignIn/>
            </>
          }
        />
        <Route path="/user" element={
            <SecurityRoutes>
              <User/>
            </SecurityRoutes>
          }
        />
        <Route path="/editUser" element={
            <SecurityRoutes>
              <EditName/>
            </SecurityRoutes>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
