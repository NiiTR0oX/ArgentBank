import { useState } from "react";
import './home.scss'
import Hero from "./../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx";
import iconeChat from "./../../assets/images/icon-chat.png";

function Home (){
  
  const [data, setData] = useState(null);
  return (
    <div>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features 
            image={iconeChat} 
            title={"You are our #1 priority"} 
            text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} /> 
            {/* Le faire Features à la ligne 20 et 37 */}
        <div className="feature-item">
          <img
            src="./img/icon-money.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img
            src="./img/icon-security.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home;