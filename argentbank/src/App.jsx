import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User.jsx";


const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        
        <Route path="/sign-in" element={ <SignIn/>}/>

        <Route path="/user" element={<User/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
