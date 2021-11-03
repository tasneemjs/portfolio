import "./Work.css";
import Web1 from './img/Web1.png';
import Web2 from './img/Web2.png';
import Web3 from './img/Web3.png';
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
            <Div2 className=" brf-box2" animate={show.itemTwo} ref={secRef}> 
            <h4>Miyadora Gassyuku Plan</h4>
                <p> Designed and developed the website for Miyadora Gassyuku. 
                    They are a driving training provider for the students who wants 
                    to get a job outiside of the prefecture. 
                </p> 
                <a className="index" href="http://www.miyadora.jp/gasshuku/gasshuku_plan.html" target="_blank" rel="noreferrer">View Website</a>
            </Div2> 
            <div className="img-box2"><img src={Web2} alt="Miyadora Gassyuku Plan"/></div> 
        </div> 
        <div className="box-grid2 display-sp"> 
            <div className="img-box2"><img src={Web2} alt="Miyadora Gassyuku Plan"/></div> 
            <Div className=" brf-box2" animate={show.itemTwo} ref={secRef}> 
            <h4>Miyadora Gassyuku Plan</h4>
                <p> Designed and developed the website for Miyadora Gassyuku. 
                    They are a driving training provider for the students who wants 
                    to get a job outiside of the prefecture.
                </p> 
                <a className="index" href="http://www.miyadora.jp/gasshuku/gasshuku_plan.html" target="_blank" rel="noreferrer">View Website</a>
            </Div> 
        </div> 

        <div className="box-grid"> 
            <div className="img-box3"><img src={Web3} alt="Miyadora Luxury Plan"/></div> 
            <Div3 className="brf-box3" animate={show.itemThr} ref={thrRef}> 
            <h4>Miyadora Luxury Plan</h4>
                <p> Designed and developed the website for Miyadora Luxury. 
                    They are affiliated with the finest resort accommodations where 
                    you can fully enjoy the nature of Miyazaki, and 
                    you can obtain a driver's license as if you were traveling or sightseeing.
                </p> 
                <a className="index" href="http://www.miyadora.jp/luxury/luxury_plan.html" target="_blank" rel="noreferrer">View Website</a>
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
