import { getAddresses } from "./services/addressService";
import React, { Component } from "react";
import Suggestion from "./components/suggestions";

class App extends Component {
  state = {
    query: "",
    addresses: []
  };

  async componentDidMount() {
    const addresses = await getAddresses();
    this.setState({ addresses });
  }

  handleChange = e => {
    const query = e.currentTarget.value;
    this.setState({ query });
  };

  handlePick = place => {
    this.setState({ query: place });
  };

  render() {
    const { query, addresses } = this.state;
    const { handleChange, handlePick } = this;

    let results = !query.length
      ? []
      : addresses.filter(address =>
          address.place_name.toLowerCase().startsWith(query.toLowerCase())
        );

    return (
      <div className="app">
        <div className="app__container">
          <h1 className="app__container--text">Location Autosuggestion</h1>
          <div className="app__searchboxContainer">
            <input
              value={query}
              onChange={handleChange}
              type="text"
              className="searchboxContainer__input"
              placeholder="Enter place"
            />
            <Suggestion results={results} query={query} onPick={handlePick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
