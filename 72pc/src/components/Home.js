import React from 'react'
import Bkg from '../images/heatseeker.jpg'
import Team1 from '../images/jacobrl.jpg'
import Team2 from '../images/wonderrl.jpg'
import Team3 from '../images/tyrl.jpg'
import Merch1 from '../images/jersey.jpg'
import Merch2 from '../images/hoodie.png'
import Merch3 from '../images/flag.png'

function Home() {
    return(
        <div className='home'>
            <body>
            <img src={Bkg} alt='background'></img>
            <iframe title='72pc vs NRG' width="560" height="315" src="https://www.youtube.com/embed/m1BeWEOwoeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='boty'>
                <div className='news'>
                    <h1>News</h1>
                </div>
                <div className='roster'>
                    <h1>Meet the Team</h1>
                        <div className='home-team'>
                            <img src={Team1} alt="" className='hello'/>
                            <img src={Team2} alt="" className='hello'/>
                            <img src={Team3} alt="" className='hello'/>
                        </div>
                </div>
                <div className='merch'>
                    <h1>Merch</h1>
                        <div className='home-merch'>
                            <img src={Merch1} alt=""/>
                            <img src={Merch2} alt=""/>
                            <img src={Merch3} alt=""/>
                        </div>
                </div>
                <div className='events'>
                    <h1>Upcoming Events</h1>
                </div>
                </div>
            </body>
        </div>
    )
}

export default Home