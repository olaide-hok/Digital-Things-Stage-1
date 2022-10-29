import React from 'react'
import styled from 'styled-components';
import I4G from '../assets/I4G.svg';
import ZURILOGO from '../assets/Vector.svg';

const Footer = () => {
  return (
    <FooterWrapper>
        <div className='footer'>
            <img src={ZURILOGO} alt="Zuri Logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="I4G Logo" />
        </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    .footer {
        @media screen and (min-width: 900px) {
            border-top: 1px solid #EAECF0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`
export default Footer