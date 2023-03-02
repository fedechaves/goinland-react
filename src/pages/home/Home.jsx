import React from "react";
import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties />
        <EmailList />
        <Footer/>
      </div> 
    </div>
  )
}

export default Home
