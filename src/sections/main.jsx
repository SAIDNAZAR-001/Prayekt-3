import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Banner from "./components/Banner";
import '../style/main.css';
import Doctors from "./components/Doctors";
import Attending from "./components/Attending";
import Footer from "./components/footer";


ReactDOM.createRoot(document.querySelector('.wrapper'))
.render(
    <div className="wrapper-row">
        <Header/>
        <Banner/>
        <Doctors/>
        <Attending/>
        <Footer/>
    </div>
    
)
