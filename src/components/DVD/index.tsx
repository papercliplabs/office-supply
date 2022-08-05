import React from "react";
import styled, { keyframes } from "styled-components";

import DvdImage from "../images/dvd-image.png";

const moveX = keyframes`
from { 
    left: 0%; 
  } 
  to { 
    left: 100%;
    transform:translate(-100%,0);
  }
`;

const moveY = keyframes`
from { 
    top: 0%; 
  } 
  to { 
    top: 100%;
    transform:translate(0,-100%);
  }
`;

const Dvd= styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  background-color: white;
  white-space: normal;


  animation: ${moveX} 6s linear 0s infinite alternate, ${moveY} 7.4s linear 0s infinite alternate;
  }
`;

const Dvdbox = styled.div`
    overflow: hidden;
    background-color: #006699;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    box-shadow: inset 0 0 20px #155;
    border-radius: 0px;
    border: 1px solid #111;
`;

export default function DvdAnimation({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) {

	return (
    <Dvdbox>
		<Dvd>
      <img src="DvdImage"/>
		</Dvd>
    </Dvdbox>
	);
}
