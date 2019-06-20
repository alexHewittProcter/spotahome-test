import React, {Component} from 'react';
import './HomeCard.css';

/**
 * The HomeCard class shows the individual homecards, providing buttons to the URL along with an image and small amount of details.
 */
class HomeCard extends Component {
    render() {
        return (
            <div className='card'>
                <div className='cardImage'>
                    <img src={this.props.card.mainPhotoUrl} alt='The first image for the property.'/>
                </div>
                <div className='cardDetails'>
                    <div className='cardTitle'>{this.props.card.title}</div>
                    <p className='cardPrice'>{this.props.card.pricePerMonth + this.props.card.currencySymbol}</p>
                    <a href={'https://www.spotahome.com' + this.props.card.url}>
                    <div className='cardButtons'>
                        <button className='cardButton secondaryButton'>
                            More details
                        </button>
                        <button className='cardButton primaryButton'>
                            Book now!
                        </button>
                    </div>
                    </a>
                </div>
                <div className='breaker'></div> 
            </div>
        );
    }
}

export default HomeCard;