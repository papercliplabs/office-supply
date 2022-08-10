import React from "react";
import styled, { keyframes } from "styled-components";
import Image from 'next/image'
import Link from 'next/link'
import DvdImg from '../public/images/dvd-img.png'


const cursorAnim = keyframes`
  0% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(5);
  }
  100% { 
    transform: scale(1);
    opacity: 0;
  }
`;

const cursor= styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    
    animation: cursorAnim .5s forwards;
    
    :after{
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        border: 2px solid blue;
        border-radius: 50%;
        opacity: .5;
        top: -8px;
        left: -8px;
    }
`;

export default function CustomCursor(){

    return(
        <div>
            
        </div>
    )
}