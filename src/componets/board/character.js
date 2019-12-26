import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';

export default class Character extends Component {

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
    }

    render(){ return(
        <FadeIn
            delay="1.5s"
            duration={500}>
            <div className="character">
                <img 
                    src={this.props.character.img} 
                    alt="character" 
                    className="profile-pic"
                    onClick={this.handleClick}/>
            </div>
        </FadeIn>
    )
    }
}