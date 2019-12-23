import React, { Component } from "react";
import IconCard from "./components/IconCard";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton";



import faces from "./data/faces.json.js";
import vehicles from "./data/vehicles.json.js";
import brands from "./data/brands.json.js";


import "./App.css";


class App extends Component {
  state = {
    cards: faces,
    currentScore: 0,
    topScore: 0,
    clickedIcons: [],
    modalShow: false
  };
  iconChange = iconType => {
    let cards = this.state.cards;
    if (iconType === "vehicles") {
      cards = vehicles;
    }
    if (iconType === "faces") {
      cards = faces;
    }
    if (iconType === "brands") {
      cards = brands;
    }

    this.setState({ cards });
    this.resetGame();

    alert("Starting a new game with your new Icons!");
  };

  shuffle = () => {

    const cards = [].concat(this.state.cards);
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({ cards });
  };

  showModal = () => {
    this.setState({ ModalShow: true });
    console.log("show");
  };

  hideModal = () => {
    this.setState({ ModalShow: false });
  };
  resetGame = () => {
    this.setState({
      currentScore: 0,
      clickedIcons: []
    });
  };

  iconClick = clickedId => {
    const { currentScore, topScore, clickedIcons } = this.state;
    const usedIcons = this.state.clickedIcons.indexOf(clickedId) > -1;
    console.log(clickedId);
    console.log("usedIcons =" + usedIcons);

    if (usedIcons) {
      console.log("Clicked Too Many Times");

      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      this.shuffle();
      this.resetGame();
      alert("you lost!");
    } else if (currentScore < 11) {
      this.shuffle();
      console.log("CLICKED Once");
      const newClickedIcons = [].concat(clickedIcons, clickedId);
      this.setState({
        currentScore: currentScore + 1,
        clickedIcons: newClickedIcons
      });
    } else {
      alert("YOU WON!");
      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      this.shuffle();
      this.resetGame();
    }
  };

  render() {
    return (
      <div>
        <div className="App-header App">
          <h1 className="display-1">Icon Clicky Game</h1>
          <h3 className="scores">Correct Guesses: {this.state.currentScore}</h3>
          <h3 className="scores">Top Score: {this.state.topScore}</h3>
          <IconButton iconType="vehicles" iconChange={this.iconChange}>
            <i className="fas fa-car" /> Vehicles
          </IconButton>
          <IconButton iconType="faces" iconChange={this.iconChange}>
            <i className="fas fa-smile" /> Faces
          </IconButton>
          <IconButton iconType="brands" iconChange={this.iconChange}>
            <i className="fab fa-apple" /> Brands
          </IconButton>
        </div>
        <div className="container gameWrapper">
          {this.state.cards.map(cards => (
            <IconCard
              id={cards.id}
              key={cards.id}
              icon={cards.icon}
              iconClick={this.iconClick}
              picked={cards.picked}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
