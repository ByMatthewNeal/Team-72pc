import React from 'react'
import '../styles/app.scss'
import '../styles/team.scss'

import Josh from '../images/joshrl.jpg'
import Jacob from '../images/jacobrl.jpg'
import Wonder from '../images/wonderrl.jpg'
import Ty from '../images/tyrl.jpg'
import Kai from '../images/kairl.jpg'

function Team() {
    return(
        <div className='team'>
            <div className='divider'></div>
            <div className='margin'>
            <div className='coach-team'>
                <h1>Coach</h1>
                <img src={Josh} alt="josh"/>
                {/* <h3>Josh</h3> */}
                {/* <p>Hello</p> */}
            </div>
            <div className='roster-team'>
                <div className='starters'>
                    <h1>Starting Lineup</h1>
                    <div className='jacob'>
                            <img src={Jacob} alt=""/>
                            <h3>Jacob</h3>
                            {/* <p></p> */}
                        </div>
                        <div className='wonder'>
                            <img src={Wonder} alt=""/>
                            <h3>Wonder</h3>
                            {/* <p></p> */}
                        </div>
                        <div className='Ty'>
                            <img src={Ty} alt=""/>
                            <h3>TyNotTyler</h3>
                            {/* <p></p> */}
                        </div>
                </div>
                <div className='subs'>
                    <h1>Substitute</h1>
                        <img src={Kai} alt=""/>
                        <h3>Kai99jr</h3>
                        {/* <p></p> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Team