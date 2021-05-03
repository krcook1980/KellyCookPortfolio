import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Images = 
[
    {
       src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/ICS.JPG?raw=true",
       alt: "Innovative Construction Services", 
       text: "Innovative Construction Services is a start up company in need of a sleek website to help them get their name in the game. Using their assets and existing domain, as well as getting them set up with the Google Search Console, I was able to get them started with a successful web presence. I will continue to work with them to keep their website updated as their business grows.",
       link: "https://innovativeconst.net/",
       repo: "https://github.com/krcook1980/InnovativeConstruction",
       why: "Local Company"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/ssc.JPG?raw=true",
        alt: "Scott Schofield Construction",
        text: "Scott Schofield Construction was looking to update their website with a new modern feel that included information about their services and had a video. The current layout and design is approved, and once the final assets and wording are provided, I will help them get the page deployed on their existing domain. This site is responsive, and the layout changes for mobile viewers.",
        link: "https://krcook1980.github.io/Schofield-Construction/",
        repo: "https://github.com/krcook1980/Schofield-Construction",
        why: "Local Company"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/ICO.JPG?raw=true",
        alt: "Inventory Tracker",
        text: "This inventory location and notification utility was a group project created for a local company having issues with inventory organization. Using Google Maps, with a map overlay and smtpjs.com we created a simple and responsive tool to help them improve productivity, efficiency, and communication. This application won the class award 'Best Business Solution'.",
        link: "https://krcook1980.github.io/Inventory-Organization-Utility/",
        repo: "https://github.com/krcook1980/Inventory-Organization-Utility",
        why: "Group Project"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/BEA.JPG?raw=true",
        alt: "Burger Eater App",
        text: "This fun little application allows a user to view a burger menu and select a burger to eat. Clicking on 'Eat It' will move the burger to the eaten column. This app also allows a user to add a new burger to the uneaten column. Using Heroku, Handlebars, Express, ORM and MySql, this was an exercise in MVC.",
        link: "https://thawing-thicket-95813.herokuapp.com/",
        repo: "https://github.com/krcook1980/BurgerEater",
        why: "Practice Application"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/JES.JPG?raw=true",
        alt: "Jab Effects Survey",
        text: "For project 2, we created a survey form and MySql database to track Covid-19 vaccine side-effects entered by our users. The statistics page allows the user to select and see graphed demographics, and the password protected admin site allows access to the database from the front end, /login and /admin to access. This application won the class award 'Best Use of Technology'.",
        link: "https://jab-effects.herokuapp.com/",
        repo: "https://github.com/krcook1980/Jabs",
        why: "Group Project"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/WDA.JPG?raw=true",
        alt: "Weather Dashboard App",
        text: "This fun weather dashboard using OpenWeatherMap.org allows you to search for a desired city in the United States to receive current weather, humidity, wind speed, and uv index info as well as the 5 day forecast. To add my flare, the page background changes based on the current weather condition listed, and I found more appealing weather icons.",
        link: "https://krcook1980.github.io/Weather-Dashboard/",
        repo: "https://github.com/krcook1980/Weather-Dashboard",
        why: "Practice Application"
    },
    {
        src: "https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/WDA.JPG?raw=true",
        alt: "Weather Dashboard App",
        text: "This fun weather dashboard using OpenWeatherMap.org allows you to search for a desired city in the United States to receive current weather, humidity, wind speed, and uv index info as well as the 5 day forecast. To add my flare, the page background changes based on the current weather condition listed, and I found more appealing weather icons.",
        link: "https://krcook1980.github.io/Weather-Dashboard/",
        repo: "https://github.com/krcook1980/Weather-Dashboard",
        why: "Practice Application"
    },
    

]


function Portfolio (){
    return(
        <div className="container">
            <Nav />
            {/* row one - SSC & ICS */}
            <div className="row">
                <div className="col-md-6">
                    <Card card={Images[0]} />
                </div>
                <div className="col-md-6">
                    <Card card={Images[1]} />
                </div>
            </div>
            {/* row two - JES & IO */}
            <div className="row">
                <div className="col-md-6">
                    <Card card={Images[4]} />
                </div>
                <div className="col-md-6">
                    <Card card={Images[2]} />
                </div>
            </div>
            {/* row 3 - WDA &  BEA*/}
            <div className="row">
                <div className="col-md-6">
                    <Card card={Images[5]} />
                </div>
                <div className="col-md-6">
                    <Card card={Images[3]} />
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

 export default Portfolio;   
    