import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Allen Iverson',
        img: 'img/250x180/allen-iverson.png',
        clicked: false
    },
    {
        name: 'Blake Griffin',
        img: 'img/250x180/blake-griffin.png',
        clicked: false
    },
    {
        name: 'Carmelo Anthony',
        img: 'img/250x180/carmelo-anthony.png',
        clicked: false
    },
    {
        name: 'Colby Bryant',
        img: 'img/250x180/colby-bryant.png',
        clicked: false
    },
    {
        name: 'Demar Derozan',
        img: 'img/250x180/demar-derozan.png',
        clicked: false
    },
    {
        name: 'Derrick Rose',
        img: 'img/250x180/derrick-rose.png',
        clicked: false
    },
    {
        name: 'Devin Booker',
        img: 'img/250x180/devin-booker.png',
        clicked: false
    },
    {
        name: 'Draymond Green',
        img: 'img/250x180/draymond-green.png',
        clicked: false
    },
    {
        name: 'James Harden',
        img: 'img/250x180/james-harden.png',
        clicked: false
    },
    {
        name: 'Jeremy Lin',
        img: 'img/250x180/jeremy-lin.png',
        clicked: false
    },
    {
        name: 'Kevin Durant',
        img: 'img/250x180/kevin-durant.png',
        clicked: false
    },
    {
        name: 'Kyrie Irving',
        img: 'img/250x180/kyrie-irving.png',
        clicked: false
    },
    {
        name: 'Lebron James',
        img: 'img/250x180/lebron-james.png',
        clicked: false
    },
    {
        name: 'Lonzo-Ball',
        img: 'img/250x180/lonzo-ball.png',
        clicked: false
    },
    {
        name: 'Russell Westbrook',
        img: 'img/250x180/russell-westbrook.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NBA Player once. Once you click a player the grid will shuffle.<br/>Try not to click the same NBA Player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}