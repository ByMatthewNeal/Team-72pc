import React from 'react'
import Media from './Media'

function About() {
    return(
        <div className='about'>
           
            <div className='title'>
                <h1>About 72PC</h1>
                <Media />
                    <p>In 2007 the initial iteration of 72 Pin Connector was born. Originally, we started as a few college buddies and a podcast discussing retro games however 
                    the podcast quickly died down. Then came Rocket League. Adam was playing Rocket League with Josh and some dudes in the "Casual Gaming" discord. 
                    Adam bridged the gap initally between Causal Gaming and 72PC. Over time there was a lot of cross polination between Casual Gaming and 72PC. Josh, RS, and 
                    Adam decided to play RL kind of competitively so they played with the banner of 72PC. As that was going on, Josh also joined the podcasting group. 
                    A few months after this point the 72PC discord and Casual gaming discords came together. A few months later, Josh, RS, and Adam decided to step back from 
                    RL and Josh decided to try coaching the team of BP, DiDi, and Vanr. This was when we really started to take our current form. 
                    There have been roster shifts, another merge (with Dauntless), and some other small things. But that's how we got started and today we compete in RLCS X as 
                    well as other major tournaments in Rocket League and have a discord community of over 1,000 members.</p>
            </div>
        </div>
    )
}

export default About