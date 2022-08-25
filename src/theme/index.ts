import React from "react";
import styled, { css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import { Colors } from "@theme/styled";

interface MediaSize {
	small: number;
	large: number;
}

// Media queries
export const mediaQuerySizes: MediaSize = {
	small: 640,
	large: 1800,
};

const mediaQueries: { [width in keyof typeof mediaQuerySizes]: typeof css } = Object.keys(mediaQuerySizes).reduce(
	(accumulator, size) => {
		(accumulator as any)[size] = (a: any, b: any, c: any) => css`
			@media (max-width: ${(mediaQuerySizes as any)[size]}px) {
				${css(a, b, c)}
			}
		`;
		return accumulator;
	},
	{}
) as any;

// General theme
export function theme(): DefaultTheme {
	return {
		color: {
			white: "#FFFFFF",
			black: "#000000",

			bg0: "#060606",
			bg1: "#1C1C1E",

			card0: "rgba(255, 255, 255, 0.05)",
			card1: "rgba(255, 255, 255, 0.10)",
			card2: "rgba(255, 255, 255, 0.15)",

			text1: "#F5F5F5",
			text2: "rgba(245, 245, 245, 0.7)",
			text3: "rgba(245, 245, 245, 0.5)",
			text5: "rgba(245, 245, 245, 0.7)",

			paperclipGradient: "linear-gradient(197.26deg, #43EF44 -1.74%, #ECFF0C 102.63%)",
			twitter: "#088AE1",

		},

		radius: {
			sm: "8px",
			md: "20px",
			lg: "24px",
			xl: "32px",
		},

		mediaWidth: mediaQueries,
		mediaQuerySizes: mediaQuerySizes,

		spacing: {
			none: "none",
			xxs: "4px",
			xs: "8px",
			sm: "12px",
			md: "16px",
			lg: "24px",
			xl: "40px",
			xxl: "64px",
		},

		shadow: {
			none: "none",
			card: "0px 10px 10px rgba(0, 0, 0, 0.1), inset 0px 1px 6px rgba(255, 255, 255, 0.05);",
		},
	};
}

// Typography theme
const StyledText = styled.div<{
	family: string;
	color: keyof Colors;
	align?: string;
	opacity?: number;
	fontSize: MediaSize;
	fontWeight: MediaSize;
	lineHeight: MediaSize;
	letterSpacing: MediaSize;
}>`
	font-family: ${({ family }) => family ?? "inherit"};
	color: ${({ color, theme }) => color ?? theme.color["text1"]};
	text-align: ${({ align }) => align ?? "left"};
	opacity: ${({ opacity }) => opacity ?? 1};
	font-size: ${({ fontSize }) => fontSize.large}px;
	font-weight: ${({ fontWeight }) => fontWeight.large};
	line-height: ${({ lineHeight }) => lineHeight.large + "px"};
	letter-spacing: ${({ letterSpacing }) => letterSpacing.large ?? 0.0}em;

	${({ theme, fontSize, fontWeight, lineHeight, letterSpacing }) => theme.mediaWidth.small`
	`}
`;

// Everything that is child of theme, gets theme as its props, so it can be used everywhere
// export default function Theme({ children }: { children: any }) {
// 	return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
// }

// Import fonts in public/index.html
export const GlobalStyle = createGlobalStyle`
	html, body, #root, #__next {
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		background-repeat: no-repeat;
		color-scheme: dark;
		scroll-behavior: smooth;
		--scroll-behavior: smooth;
		background-color: #EEEEEE;
		
	}

	div {
		scrollbar-width: thin;

		::-webkit-scrollbar {
			width: 8px;
			background-color: transparent;
		}
	
		::-webkit-scrollbar-track {
			background-color: transparent;
		}
	
		::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
	}

	* {
		box-sizing: border-box;
	}
`;
