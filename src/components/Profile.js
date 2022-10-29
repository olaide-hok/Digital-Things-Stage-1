import React from 'react'
import styled from 'styled-components';
import ProfileImg from '../assets/profile__img.svg'
import ShareIcon from '../assets/share_icon.svg'
import ShareIconMobile from '../assets/share_mobile.svg'


const Profile = () => {
  return (
    <ProfileWrapper>
        <div>
            <img src={ProfileImg} alt='avatar' />
            <p>Annette Black</p>
        </div>
        <img src={ShareIcon} alt="share icon" className='share' />
        <img src={ShareIconMobile} alt="share icon" className='shareMobile' />

    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 56px;
`
export default Profile