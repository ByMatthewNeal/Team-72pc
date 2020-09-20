import React from 'react'
import '../styles/app.scss'
import '../styles/events.scss'

import omelette from '../images/Omelette.png'
import peeps from '../images/peeps.png'
import rogue from '../images/rogue.png'
import logo from '../images/ssg.png'

function Events() {
    return(
        <div className='events-list'>
            <div className='divider'></div>
            <div className='matches-list'>
                        <ul className='ul'>
                            <li>Oct 5 | 7:15pm PST <p>vs</p> <img src= {omelette} alt=""/></li>
                            <li>Oct 13 | 9:45pm PST <p>vs</p> <img src= {peeps} alt=""/></li>
                            <li>Oct 21 | 6:30pm PST <p>vs</p> <img src= {rogue} alt=""/></li>
                            <li>Oct 31 | 8:00pm PST <p>vs</p> <img src= {logo} alt=""/></li>
                        </ul>
                    </div>
                </div>
    )
}

export default Events