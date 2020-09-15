import React from 'react'
import Bkg from '../images/octane.png'

function Home() {
    return(
        <div className='home'>
            <body>
            <iframe title='72pc vs NRG' width="560" height="315" src="https://www.youtube.com/embed/m1BeWEOwoeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>hello</p>
                <img src={Bkg} alt='background'></img>
            </body>
        </div>
    )
}

export default Home