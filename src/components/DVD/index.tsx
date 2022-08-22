import React from "react";
import styled, { keyframes } from "styled-components";
import Image from 'next/image'
import Link from 'next/link'

import CursorImg from '../Cursor/defaultcursor.svg';
import DvdImg from '../DVD/dvdanimationimage.svg';
import DvdCanvasImg from '../DVD/dvdcanvasimg.svg';

const moveX = keyframes`
from { 
    left: 0%; 
  } 
  to { 
    left: calc(1320px - 210px);
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
  width: 210px;
  max-height: 100%;
  display: block;
  border-radius: 50%;
  position: absolute;

  animation: ${moveX} 3s linear 0s infinite alternate, ${moveY} 7.4s linear 0s infinite alternate;

  :hover{
    cursor: url(https://raw.githubusercontent.com/papercliplabs/office-supply/f7c91aa423ee71d5a86faddf6ad3bbe365ed897a/src/components/Cursor/onhovercursor.svg), auto;
    animation-play-state: paused;
  }
`;

const Dvdbox = styled.div`
  position: relative;
  width: 1344px;
  height: 658px;
  margin: auto;
  top: 102px;
  overflow:hidden;
  background: #2E2E2E;
  box-shadow: inset 0px 0px 0px 12px #161616;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Dvdboks=styled.div`
  position: fixed;
  width: 1315px;
  height: 636px;
  margin: auto;
  overflow:hidden;

  background: #2E2E2E;
  box-shadow: inset 0px 0px 0px 12px #161616;
  border-radius: 32px;
`;

export default function DvdAnimation(props: any) {
	return (
  <Dvdbox>
  <Dvdboks>
    <Image src={DvdCanvasImg} alt={"DvdCanvasImg"} layout="responsive"/>
    <Dvd>
      <Link href ="https://twitter.com/OfficeSply">
        <Image src={DvdImg} alt={"DvdImg"} min-height="129px" min-width="77px"/>
      </Link>
    </Dvd>
  </Dvdboks>
  </Dvdbox>
	);
}
