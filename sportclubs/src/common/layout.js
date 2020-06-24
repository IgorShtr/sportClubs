import React from 'react';
import styled from 'styled-components';

import { Header } from '../components/header';
import { Footer } from '../components/footer'

export const Layout = props => {
  return (
    <MainLayout>
      <Header />
      <main className="content">{props.children}</main>
      <Footer />
    </MainLayout>
  )
}

const MainLayout = styled.div`
display:flex;
flex-direction: column;
min-height: 100%
width: 100vw;
height: 100%;
& .content {
  flex-grow:1;
  margin-top: 50px;
}
`;