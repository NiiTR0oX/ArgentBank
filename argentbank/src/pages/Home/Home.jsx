import { useState } from "react";
import "./home.scss";
import Hero from "./../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx";
import iconeChat from "./../../assets/images/icon-chat.png";
import iconMoney from "./../../assets/images/icon-money.png";
import iconSecurity from "./../../assets/images/icon-security.png";


function Home() {
  const [data, setData] = useState(null);

  return (
    <div>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {/* Première fonctionnalité */}
        <Features
          image={iconeChat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        {/* Deuxième fonctionnalité */}
        <Features
          image={iconMoney}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        {/* Troisième fonctionnalité */}
        <Features
          image={iconSecurity}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </div>
  );
}

export default Home;