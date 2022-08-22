import React from "react";
import styled, { useTheme, keyframes } from "styled-components";
import Image from "next/image";


const BackgroundCover = styled.div`
	height: 100%;
	width: 100%;
    z-index: -1;
	perspective: 1px;
	filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.3));
    background-color: #EEEEEE;
`;