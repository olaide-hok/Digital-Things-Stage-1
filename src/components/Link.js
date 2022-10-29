import React from 'react'
import styled from 'styled-components';


const Link = ({link_name, link_address, linkID}) => {
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
`
export default Link