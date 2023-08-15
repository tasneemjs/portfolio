import "./Work.css";
import Web1 from './img/Web1.png';
import Ui1 from './img/Ux1.png';
import Ui2 from './img/Ux2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

const SelectedWorks = () => { 
    const [show, doShow] = useState({ 
        itemOne: false, 
        itemTwo: false, 
        itemThr: false 
        
    }); 
    const oneRef = useRef(null), 
    secRef = useRef(null), 
    thrRef = useRef(null); 
    
    useLayoutEffect(() => { 
        const topPos = (element) => element.getBoundingClientRect().top; 
        const div1Pos = topPos(oneRef.current), 
        div2Pos = topPos(secRef.current), 
        div3Pos = topPos(thrRef.current); 
        
        const onScroll = () => { 
            const scrollPos = window.scrollY + window.innerHeight; 
             
            if (div1Pos < scrollPos) { 
                doShow((state) => ({ ...state, itemOne: true })); 
               
            } 

            if (div2Pos < scrollPos) { 
                doShow((state) => ({ ...state, itemTwo: true })); 
                 
            } 

            if (div3Pos < scrollPos) { 
                doShow((state) => ({ ...state,  itemThr: true })); 
                
            } 

        }; 
        
        window.addEventListener("scroll", onScroll); 
        return () => window.removeEventListener("scroll", onScroll); 
        
    }, []); 
    return ( 
    <section style={{ marginTop: 120 }}> 
    <p>selected works<span class="hypen1">—&nbsp;</span></p> 

        <div className="box-grid "> 
            
            <div className="img-box1"><img src={Web1} alt="OFA Hinomaru Taxi"/></div> 
            
            <Div className=" brf-box1" animate={show.itemOne} ref={oneRef}> 
            <h4>OFA Hinomaru Taxi</h4>
                <p> Designed and developed the website for Hinomaru Taxi. 
                    They operates with the concept of safety, security and community-based. 
                    They also carry out staff training aimed at kindness and politeness.
                    </p> 
                <a className="index" href="http://ofa-support.com/taxi_department/" target="_blank" rel="noreferrer">View Website</a> 
            </Div> 
        </div> 
    
        <div className="box-grid2 display-pc"> 
            <Div2 className="brf-box2" animate={show.itemTwo} ref={secRef}> 
            <h4>Inductive Bible Study</h4>
                <p> The Inductive Bible Study app inspires people to spend time with God everyday. 
                    It is a beautiful, easy to use, full featured Bible app with amazing videos and 
                    multiple translations designed for quick navigation, easy notes taking and 
                    powerful Bible study.
                </p> 
                <a className="index" href="https://play.google.com/store/apps/details?id=com.inductivebiblestudyapp&hl=en&gl=US" target="_blank" rel="noreferrer">View Website</a>
            </Div2> 
            <div className="img-box2"><img src={Ui1} alt="Inductive Bible Study"/></div> 
        </div> 
        <div className="box-grid2 display-sp"> 
            <div className="img-box2"><img src={Ui1} alt="Inductive Bible Study"/></div> 
            <Div className="brf-box2" animate={show.itemTwo} ref={secRef}> 
            <h4>Inductive Bible Study</h4>
            <p> The Inductive Bible Study app inspires people to spend time with God everyday. 
                    It is a beautiful, easy to use, full featured Bible app with amazing videos and 
                    multiple translations designed for quick navigation, easy notes taking and 
                    powerful Bible study.
                </p> 
                <a className="index" href="https://play.google.com/store/apps/details?id=com.inductivebiblestudyapp&hl=en&gl=US" target="_blank" rel="noreferrer">View Website</a>
            </Div> 
        </div> 

        <div className="box-grid"> 
            <div className="img-box3"><img src={Ui2} alt="International Recipes by Gustavo Pasquini"/></div> 
            <Div3 className="brf-box3" animate={show.itemThr} ref={thrRef}> 
            <h4>International Recipes by Gustavo Pasquini</h4>
                <p> To bring exquisite recipes to your fine dining table for special ocacsions.
                </p> 
                <a className="index" href="https://tasneemj.com/work_img/International_Recipes.png" target="_blank" rel="noreferrer">View Website</a>
            </Div3> 
        </div> 

        <div><Link to={"./works"} style={{color: '#233f4f'}}>view other works<span class="hypen2">—&nbsp;</span></Link></div>
    </section> 
        );
    };
  const Div = styled.div`
    transform: translateX(${({ animate }) => (animate ? "0" : "-80vw")});
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: transform 1.5s ease, opacity 0.5s ease 0.5s;
  `;
  const Div2 = styled.div`
    transform: translateX(${({ animate }) => (animate ? "0" : "50vw")});
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: transform 1.5s ease, opacity 0.5s ease 0.5s;
  `;
  const Div3 = styled.div`
    transform: translateX(${({ animate }) => (animate ? "0" : "-30vw")});
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: transform 1.4s ease, opacity 0.5s ease 0.4s;
  `;
export default SelectedWorks;
