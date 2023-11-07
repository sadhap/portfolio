import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import dpPic from '../images/sadha2.png'

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Sadhasivam</h1>
          <h3>Fullstack-MERN-stack Developer</h3>
          <p>
          Hi, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from coimbatore(TamilNadu).
          I love working on new and exciting technologies emerging nowadays. 
          I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow. 
          </p>
          <a href="https://wa.me/+916369476957?text=Hello%2C%20this%20is%20a%20test%20message" target="_blank">
          <button>Let's talk</button>
          </a>

          <Social>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/mr_developer_sadha/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100028454282079">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/sadhasivam-m/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={dpPic}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;

    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border:none;
    color: #fff;
    font-weight: 500;
    border-radius: 15px 50px 30px;
    border-right: 20px dotted #282d3ce6;
    border-left: 20px dotted #282d3ce6;
    filter: drop-shadow(0px 10px 10px #282d3ce6);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color:#01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: red;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    background-color:red;
    width: 20rem;
  	border-radius 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphing 10s infinite ;
    overflow: hidden;
    &:hover:
    animation-play-state paused;
    margin-right:-50px;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @keyframes morphing {
      0% {
        border-radius:20% 50% 40% 30% / 30% 30% 50% 50%;
        box-shadow:15px 15px 50px rgba(0,0,0,0.2);
        background-color:white;
      }
      25% { 
        border-radius:58% 42% 75% 25% / 76% 46% 54% 24%;
        background-color:greey;
      }
      50% {
        border-radius:50% 50% 33% 67% / 55% 27% 73% 45%;
        box-shadow:-10px -5px 50px rgba(0,0,0,0.2);
        background-color: #01be9570;
      }
      75% {
        border-radius:33% 67% 58% 42% / 63% 68% 32% 37%;
        background-color:pink;	
      }
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
