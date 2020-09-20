import React from 'react'
import '../styles/app.scss'
import '../styles/home.scss'

import Merch1 from '../images/jersey.jpg'
import Merch2 from '../images/hoodie.png'
import Merch3 from '../images/flag.png'
import logo from '../images/72pc.png'
import omelette from '../images/Omelette.png'
import peeps from '../images/peeps.png'
import rogue from '../images/rogue.png'
import Roster from '../images/roster.png'

function Home() {
    return(
        <div className='home'>
            <body>
            <div className='events'>
                    <div className='matches'>
                        <div className='match-one'>
                            <h2>Oct 5 | 7:15pm PST</h2>
                            <h3>Rocket League</h3>
                            <div className='match-imgs'>
                                <img src={logo} alt=""/>
                                <h4>vs</h4>
                                <img src={omelette} alt=""/>
                            </div>
                        </div>
                        <div className='match-two'>
                            <h2>Oct 13 | 9:45pm PST</h2>
                            <h3>Rocket League</h3>
                            <div className='match-imgs'>
                                <img src={logo} alt=""/>
                                <h4>vs</h4>
                                <img src={peeps} alt=""/>
                            </div>
                        </div>
                        <div className='match-three'>
                            <h2>Oct 21 | 6:30pm PST</h2>
                            <h3>Rocket League</h3>
                            <div className='match-imgs'>
                                <img src={logo} alt=""/>
                                <h4>vs</h4>
                                <img src={rogue} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
            <div className='boty'>
                <div className='empty'></div>
                <div className='divider'></div>
                <div className='news-home'>
                    <h1>About</h1>
                    <p>In 2007 the initial iteration of 72 Pin Connector was born. Originally, we started as a few college buddies and a podcast discussing retro games however 
                    the podcast quickly died down. Then came Rocket League. Adam was playing Rocket League with Josh and some dudes in the "Casual Gaming" discord. 
                    Adam bridged the gap initally between Causal Gaming and 72PC. Over time there was a lot of cross polination between Casual Gaming and 72PC. Josh, RS, and 
                    Adam decided to play RL kind of competitively so they played with the banner of 72PC. As that was going on, Josh also joined the podcasting group. 
                    A few months after this point the 72PC discord and Casual gaming discords came together. A few months later, Josh, RS, and Adam decided to step back from 
                    RL and Josh decided to try coaching the team of BP, DiDi, and Vanr. This was when we really started to take our current form. 
                    There have been roster shifts, another merge (with Dauntless), and some other small things. But that's how we got started and today we compete in RLCS X as 
                    well as other major tournaments in Rocket League and have a discord community of over 1,000 members.</p>
                </div>
                <div className='roster'>
                    <h1>Meet the Team</h1>
                        <div className='home-team'>
                            <img src={Roster} alt=""/>
                        </div>
                </div>
                <div className='divider'></div> 
                <div className='merch'>
                    <h1>Merchandise</h1>
                        <div className='home-merch'>
                            <img src={Merch1} alt=""/>
                            <img src={Merch3} alt=""/>
                            <img src={Merch2} alt=""/>
                        </div>
                </div>
                <div className='empty2'></div>
                </div>
            </body>
        </div>
    )
}

export default Home