import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { LeftMenu } from '../components/LeftMenu';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tjournal Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
        </div>
        <div className="rightSide"></div>
      </div>
    </div>
  );
};

export default Home;
