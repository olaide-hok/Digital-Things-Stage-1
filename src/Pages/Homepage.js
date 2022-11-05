import React from 'react'
import CustomLink from '../components/CustomLink'
import Profile from '../components/Profile'
import Slack from '../assets/slack.svg';
import {FaGithub} from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="section">
        <Profile/>
        <CustomLink link_address={'https://twitter.com/olaide_hok'} link_name={'Twitter Link'} linkID={'twitter'}/>
        <CustomLink link_address={'https://training.zuri.team'} link_name={'Zuri Team'} linkID={'btn__zuri'}/>
        <CustomLink link_address={'http://books.zuri.team '} link_name={'Zuri Books'} linkID={'books'}/>
        <CustomLink link_address={'https://books.zuri.team/python-for-beginners?ref_id=Habeeb'} link_name={'Python Books'} linkID={'book__python'}/>
        <CustomLink link_address={'https://background.zuri.team'} link_name={'Background Check for Coders'} linkID={'pitch'}/>
        <CustomLink link_address={'https://books.zuri.team/design-rules'} link_name={'Design Books'} linkID={'book__design'}/>
        <CustomLink link_address={'/contact'} link_name={'Contact'} linkID={'contact'}/>

        <div className='social_section'>
          <a href='https://slack.com'>
            <img src={Slack} alt="slack" className='slack' />
          </a>
          <a href="https://github.com/olaide-hok">
            <FaGithub className='github'/>
          </a>
        </div>
      </div>
  )
}

export default Homepage