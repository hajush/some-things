import React from 'react';

export default class ShowThings extends React.Component {
  render() {
    let things = this.props.things.map(thing => (
      <li key={thing._id}>{thing.name} - {thing.weight} lbs </li>
    ));
    return (
      <ul>
        {things}
      </ul>
    );
  }
}

ShowThings.propTypes = {things: React.PropTypes.array};
