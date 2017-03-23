import React from 'react';
import ShowThings from './ShowThings';

class App extends React.Component {

  constructor() {
    super();
    this.state = {things: []};
  }

  componentDidMount() {
    fetch('api/things')
      .then(result => result.json())
      .then(things => this.setState({things: things}));
  }

  render() {
    return (
      <div>
        <ShowThings things={this.state.things}/>
      </div>
    );
  }
}

export default App;
