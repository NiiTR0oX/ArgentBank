import { useState } from "react";
import './home.scss'
import Hero from "./../../components/Hero/Hero.jsx";

function Home (){
  
  const [data, setData] = useState(null);
  return (
    <div>
      <Hero /> 
    </div>
  )
}

export default Home;