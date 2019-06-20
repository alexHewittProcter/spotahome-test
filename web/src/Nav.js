import React, {Component} from 'react';
import './Nav.css';

/**
 * This class shows the navigation bar at the top of the screen. It shows both a left name of the website and a set of links on the right that disappear when in mobile.
 */
class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='leftNav'>
                    <p>Spotaroom</p>
                </div>
                <div className='rightNav'>
                    <p>The company - How we work - <a href='https://www.spotahome.com/about-us'>About us</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Nav;