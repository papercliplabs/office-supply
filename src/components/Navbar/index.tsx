import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

import Image from "next/image";
import NavImg from '../Navbar/navbaricon.svg';

 export const PEAK_HEIGHT = "102px";

const HeaderCanvas = styled.div`
    position: fixed;
    width: 100%;
    height: ${PEAK_HEIGHT};
    z-index: 999;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-family: 'Office Times Round';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.035em;

    color: #2E2E2E;
    
`;

// const Header = styled.div`
    
//     display: block;
//     width: 100px;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     background: rgba(161, 161, 161, 0.2);
//     backdrop-filter: blur(50px);
//     /* Note: backdrop-filter has minimal browser support */

// border-radius: 0px 0px 50px 50px;
// `

export default function Navbar(props: any){

    return(
        <HeaderCanvas>
            Office Supply
                {/* <Image 
                src={NavImg} 
                alt="Navigation Bar Image"  
                max-width="100%"
                max-height="100%"/> */}
        </HeaderCanvas>
    );
}