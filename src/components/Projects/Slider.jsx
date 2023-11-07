import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import quize from  "../Projects/projectimg/quiz-image.jpg";
import rockpaper from "../Projects/projectimg/rockpaper.jpg";
import ludo from "../Projects/projectimg/ludo.jpeg";
import gituser from "../Projects/projectimg/reactgitusers.JPG";
import accordian from "../Projects/projectimg/reactaccordian.png"
import guessnumber from "../Projects/projectimg/guessmynumber.jfif";
import jscalc from "../Projects/projectimg/jscalc.png";
import tipcalc from "../Projects/projectimg/tipcalcy.png";
import tictactoe from "../Projects/projectimg/tictactoe.jpg";
import expensetrack from "../Projects/projectimg/expensetrack.jpg";
import crud from "../Projects/projectimg/crud.jfif";
import mern from "../Projects/projectimg/mern.jpeg";
import reacttoure from"../Projects/projectimg/reacttoursite.JPG";
import googlereview from "../Projects/projectimg/reactgooglereview.JPG";
import siteview from "../Projects/projectimg/siteviewreact.JPG";
import joincourse from "../Projects/projectimg/joincourse.png";
import ecomweb from "../Projects/projectimg/ecomweb.JPG";
import erpstudent from "../Projects/projectimg/erpstudent.JPG";
import chatapp from "../Projects/projectimg/chatapp.JPG";

let data = [
  {
    img :googlereview,
    disc : "I have developed this application using html,css,javascript,react and npm click here for details!",
    demo:"https://react-review-project-one.netlify.app/"
  },
  {
    img :erpstudent,
    disc : "I have developed this application using MERN-STACK click here for details!",
    demo:"https://stellar-palmier-87aa38.netlify.app/"
  },
  {
    img :chatapp,
    disc : "I have developed this application using MERN-STACK click here for details!!",
    demo:"https://illustrious-dieffenbachia-d4b989.netlify.app/"
  },
    {
        img :quize,
        disc :"I have developed this application using html css and javascript click here for details!",
        demo:"https://quize-form.netlify.app/"
    },
    {
        img : rockpaper,
        disc : "I have developed this application using html css and javascript click here for details!",
        demo:"https://rock-paper-scissors-javascript-projec.netlify.app/"
    },
    {
        img : ludo,
        disc :  "I have developed this application using html css and javascript click here for details!",
        demo:"https://ludo-game-javascript.netlify.app/"
    },
    {
        img : gituser,
        disc :"I have developed this application using html,css,javascript,react and npm click here for details!",
        demo:"https://usersgit.netlify.app/"
    },
    {
        img :accordian,
        disc : "I have developed this application using html,css,javascript,react and npm click here for details!",
        demo:"https://react-accordian-site.netlify.app/"
    },
     {
        img :guessnumber,
        disc : "I have developed this application using html css and javascript click here for details!",
        demo:"https://nummberguess.netlify.app/"
    },
    {
      img :jscalc,
      disc :  "I have developed this application using html css and javascript click here for details!",
      demo:"https://normal-calculator-project.netlify.app/"
     }, 
     {  
      img :tipcalc,
      disc : "I have developed this application using html css and javascript click here for details!",
      demo:"https://tip-calculator-javascript-proj.netlify.app/"
     }  ,
     {
       img :tictactoe,
       disc : "I have developed this application using html css and javascript click here for details!",
       demo:"https://tic-tak-toe-javascript.netlify.app/"
     },
     {
       img :expensetrack,
       disc : "I have developed this application using html css and javascript click here for details!",
       demo:"https://exspencetracker-javascript.netlify.app/"
     },
     {
       img :crud,
       disc : "I have developed this application using html,css,javascript,react and npm click here for details!",
       demo:"https://crud-javascript-project.netlify.app/"
     },
     {
      img :reacttoure,
      disc : "I have developed this application using html,css,javascript,react and npm click here for details!",
      demo:"https://tourlistandkeys.netlify.app/"
    },
     {
      img :siteview,
      disc :"I have developed this application using html,css,javascript,react and npm click here for details!",
      demo:"https://site-overview-project.netlify.app/"
    },
    {
      img :joincourse,
      disc : "I have developed this application using html,css,javascript,react and npm click here for details!",
      demo:"https://joinmycourse.netlify.app/"
    },
    {
      img :mern,
      disc :"I have developed this application using MERN-STACK click here for details!",
      demo:"www.google.com"
    },
    {
      img :ecomweb,
      disc :"I have developed this application using MERN-STACK click here for details!",
      demo:"http://16.171.134.181:8000/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`