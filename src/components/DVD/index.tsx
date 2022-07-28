import React from "react";
import styled, { keyframes } from "styled-components";


const moveX = keyframes`
from { 
    left: 0; 
  } 
  to { 
    left: 100%;
  }
`;

const moveY = keyframes`
from { 
    top: 0; 
  } 
  to { 
    top: 100%;
  }
`;

const DvdAnimation= styled.div`
    animation: ${moveX} 2s linear 0s infinite alternate, ${moveY} 3.4s linear 0s infinite alternate;
    
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #999999;
    box-shadow: inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04);
    position: absolute;
    }
`;

export default DvdAnimation;