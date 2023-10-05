import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import TarotCard from "../Components/Tarrot/TarotCard";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Assets/Css/Styles.css"
import Footer from "../Components/Footer/Footer"

function HomePage() {
  const [tarrot, settarrotData] = useState([]);
  // https://codepen.io/walpolea/pen/Baawevv
  const url = "https://mocki.io/v1/99633923-cf06-4314-a900-15b9b465a667";
  useEffect(() => {
    axios.get(url).then(
      (res) => {
        console.log(res.data.majorArcana);
        settarrotData(res.data.majorArcana);
      },
      [tarrot]
    );
  });
  
  
  return (
    <div>
      <Header />
      <div className=" container-fluid  ">
      <div className=" row  align-items-start pt-5" >
   
            {tarrot.map((key) => (
                <div className="col-6 col-sm-3 gap-0" >
             <Link to={`/carddetail/${key.id}`} className="text-decoration-none">
              
              <TarotCard
            
               className="  "
                key={key.id}
                name={key.name}
                image={key.image}
                description={key.description}
                
                
              />
           
              </Link>
              </div>
        
            ))}
                  </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
