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
    <p>selected boxs-</p> 
        <div className="box-grid "> 
            <a className="index" href="http://ofa-support.com/taxi_department/"> 
            <div className="img-box1"><img src={Web1} alt="OFA Hinomaru Taxi"/></div> 
            </a> 
            <Div className=" brf-box1" animate={show.itemOne} ref={oneRef}> 
                <p> Designed and developed the website for Hinomaru Taxi. 
                    They operates with the concept of safety, security and community-based. 
                    They also carry out staff training aimed at kindness and politeness.
                    </p> 
            </Div> 
        </div> 
    
        <div className="box-grid2 display-pc"> 
            <Div2 className=" brf-box2" animate={show.itemTwo} ref={secRef}> 
                <p> Designed and developed the website for Miyadora Gassyuku. 
                    They are a driving training provider for the students who wants 
                    to get a job outiside of the prefecture. 
                </p> 
            </Div2> 
            <div className="img-box2"><img src={Web2} alt="Miyadora Gassyuku Plan"/></div> 
        </div> 
        <div className="box-grid2 display-sp"> 
            <div className="img-box2"><img src={Web2} alt="Miyadora Gassyuku Plan"/></div> 
            <Div className=" brf-box2" animate={show.itemTwo} ref={secRef}> 
                <p> Designed and developed the website for Miyadora Gassyuku. 
                    They are a driving training provider for the students who wants 
                    to get a job outiside of the prefecture.
                </p> 
            </Div> 
        </div> 

        <div className="box-grid"> 
            <div className="img-box3"><img src={Web3} alt="Miyadora Luxury Plan"/></div> 
            <Div3 className="brf-box3" animate={show.itemThr} ref={thrRef}> 
                <p> Designed and developed the website for Miyadora Luxury. 
                    They are affiliated with the finest resort accommodations where 
                    you can fully enjoy the nature of Miyazaki, and 
                    you can obtain a driver's license as if you were traveling or sightseeing.
                </p> 
            </Div3> 
        </div> 

        <div><Link to={"./works"}>view other works-</Link></div>
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
    transform: translateX(${({ animate }) => (animate ? "0" : "-20vw")});
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: transform 1s ease, opacity 0.5s ease 0.3s;
  `;
export default SelectedWorks;
