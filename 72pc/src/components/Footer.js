import React from 'react'
import Media from './Media'
import '../styles/app.scss'

function Footer() {
    return(
        <div className='footer'>
            <div className='foot-elem'>
                <div className='copyright'>
                    <h2>72 Pin Connector</h2>
                    <p>2020 | 72PC</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className='company'>
                    <h2>Company</h2>
                    <p>LinkedIn</p>
                    <p>Contact</p>
                    <p>Careers</p>
                </div>
                <div className='press'>
                    <h2>Press</h2>
                    <p>Media Assets</p>
                    <p>Terms + Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='connect'>
                    <h2>Connect</h2>
                    <Media />
                </div>
            </div>
        </div>
    )
}

export default Footer