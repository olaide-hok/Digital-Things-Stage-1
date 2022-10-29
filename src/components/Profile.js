import React from 'react'
import styled from 'styled-components';
import RiShareForwardLine from 'react-icons/ri';
import ProfileImg from '../assets/profile__img.svg'


const Profile = () => {
  return (
    <ProfileWrapper>
        <div>
            <img src={ProfileImg} alt='avatar' />
            <p>Annette Black</p>
        </div>
        {/* <RiShareForwardLine/> */}
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default Profile