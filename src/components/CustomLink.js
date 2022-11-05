import React from 'react'
import styled from 'styled-components';


const CustomLink = ({link_name, link_address, linkID}) => {
  return (
    <LinkTag id={linkID} href={link_address} alt={link_name}>{link_name}</LinkTag>
  )
}

const LinkTag = styled.a`
    background: #EAECF0;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    display: block;
    margin-bottom: 24px;
    padding: 24px 25px;
    text-decoration: none;
    text-align: center;
    color: #101828;

    &:hover {
      background: #D0D5DD;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
`
export default CustomLink