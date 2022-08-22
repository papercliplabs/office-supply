import type { NextPage } from 'next'
import Head from 'next/head'


import styled from "styled-components";
import DvdAnimation from "../components/DVD";
import Navbar from '../components/Navbar';



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Office Supply</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
      </Navbar>
      <DvdAnimation>

      </DvdAnimation>
    </div>
  )
}

export default Home
