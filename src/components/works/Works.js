// import WorkList from './WorkList';
import React, { useState } from "react";
import Workcover from './img/work-cover.png';
import FrontWorkItem from './FrontWorkItem';
import UxWorkItem from './UxWorkItem';
import './Work.css';
const Work_Data = [
  {
    category: 'frontend',
    id: 'w1',
    title: 'OFA Hinomaru Taxi',
    image:'Web1.png',
    weblink:'http://ofa-support.com/taxi_department/',
    description:
      'Designed and developed the website for Hinomaru Taxi. They operates with the concept of safety, security and community-based. They also carry out staff training aimed at kindness and politeness.  ',
  },
  {
    category: 'frontend',
    id: 'w2',
    title: 'Miyadora Gassyuku Plan',
    image: 'Web2.png',
    weblink:'http://www.miyadora.jp/gasshuku/gasshuku_plan.html',
    description:
      'Designed and developed the website for Miyadora Gassyuku. They are a driving training provider for the students who wants to get a job outiside of the prefecture.',
  },
  {
    category: 'frontend',
    id: 'w3',
    title: 'Miyadora Luxury Plan',
    image:'Web3.png',
    weblink:'http://www.miyadora.jp/luxury/luxury_plan.html',
    description:
      'Designed and developed the website for Miyadora Luxury. They are affiliated with the finest resort accommodations where you can fully enjoy the nature of Miyazaki, and you can obtain a drivers license as if you were traveling or sightseeing.',
  },
  {
    category: 'frontend',
    id: 'w4',
    title: 'OFA Support BASEBALL ACADEMY Miyazaki Supported by Yomiuri GIANTS',
    image:'Web4.png',
    weblink:'https://ofa-baseball-miyazaki.com/',
    description:
      'OFA Support BASEBALL ACADEMY Miyazaki Supported by Yomiuri GIANTS in collaboration with the Yomiuri Giants Academy, we aim to foster the healthy development of children through baseball and expand the baseball world. The target is from infants to elementary school students, and we have prepared a wide range of contents from practice that even beginners can enjoy without difficulty to technical guidance aiming at a higher level.',
  },
  {
    category: 'ux',
    id: 'w5',
    title: 'Inductive Bible Study',
    image:'Ux1.png',
    weblink:'https://play.google.com/store/apps/details?id=com.inductivebiblestudyapp&hl=en&gl=US',
    description:
      'The Inductive Bible Study app inspires people to spend time with God everyday. It is a beautiful, easy to use, full featured Bible app with amazing videos and multiple translations designed for quick navigation, easy notes taking and powerful Bible study.',
  },
  {
    category: 'ux',
    id: 'w6',
    title: 'International Recipes by Gustavo Pasquini',
    image:'Ux2.png',
    weblink:'',
    description:
      'To bring exquisite recipes to your fine dining table for special ocacsions.',
  },
];

function Works() {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
<section >
  <img src={Workcover} style={{ width: '-webkit-fill-available' }} alt="Cover"/>
  <div className="container">       
    <div className="Tabs"> 
  
      <ul className="nav"> 
      <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1} >Frontend</li> 
      <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2} >UI/UX Design</li> 
      </ul> 
      <div > 
   
      {activeTab === "tab1" ? ( <FrontWorkItem workslists={Work_Data} /> ) : ( <UxWorkItem workslists={Work_Data} /> )
      } 
      </div> 
    </div>
  </div>
</section>

  );
}

export default Works;