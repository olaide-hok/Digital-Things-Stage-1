import Footer from './components/Footer';
import Link from './components/Link';
import Profile from './components/Profile';
import Slack from './assets/slack.svg';
import {FaGithub} from 'react-icons/fa';


function App() {
  return (
    <div className='main'>
      <div className="section">
        <Profile/>
        <Link link_address={'https://twitter.com/olaide_hok'} link_name={'Twitter Link'} linkID={'twitter'}/>
        <Link link_address={'https://training.zuri.team'} link_name={'Zuri Team'} linkID={'btn__zuri'}/>
        <Link link_address={'http://books.zuri.team '} link_name={'Zuri Books'} linkID={'books'}/>
        <Link link_address={'https://books.zuri.team/python-for-beginners?ref_id=Habeeb'} link_name={'Python Books'} linkID={'book__python'}/>
        <Link link_address={'https://background.zuri.team'} link_name={'Background Check for Coders'} linkID={'pitch'}/>
        <Link link_address={'https://books.zuri.team/design-rules'} link_name={'Design Books'} linkID={'book__design'}/>

        <div className='social_section'>
          <a href='https://slack.com'>
            <img src={Slack} alt="slack" className='slack' />
          </a>
          <a href="https://github.com/olaide-hok">
            <FaGithub className='github'/>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
