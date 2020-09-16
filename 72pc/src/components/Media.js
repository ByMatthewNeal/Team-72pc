import React from 'react'
import '../styles/navbar.scss'
import Twitch from '../images/twitch.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'

function Media() {
    return(
        <div className='media'>
            <ul className='media-list'>
                <li><a href='https://www.twitch.tv/72pinconnector' target='blank'><img src={Twitch} alt='twitch' className='link-img'></img></a></li>
                <li><a href='https://twitter.com/72PC_Official' target='blank'><img src={Twitter} alt='twitter' className='link-img'></img></a></li>
                <li><a href='https://www.youtube.com/user/72pinconnector' target='blank'><img src={Youtube} alt='youtube' className='link-img'></img></a></li>
            </ul>
        </div>
    )
}

export default Media