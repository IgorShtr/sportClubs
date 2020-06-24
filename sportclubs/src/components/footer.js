import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
  return (
    <FooterContent>
      <FontAwesomeIcon icon={faCheck} />
      <div>        
        Instasport – спортхаб онлайн!
      </div>
    </FooterContent>
  )
}

const FooterContent = styled.div`
height: 50px;
width: 85%;
margin: 10px auto;
border-top: solid 0.5px darkgrey;
display: flex;
justify-content: center;
align-items: center;
>div{
  width: fit-content;
}
`