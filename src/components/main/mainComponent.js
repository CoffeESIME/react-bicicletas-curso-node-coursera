import React from 'react';
import axios from 'axios';
import Bicis from './bicicletas/bicicletasComponent';

export default class PersonList extends React.Component {
  state = {
    bicicletas: []
  }

  componentDidMount() {
    axios.get(`http://192.168.1.70:3300/bicicletas`)
      .then(res => {
        const bicicletas= res.data;
        this.setState({ bicicletas });
      })
  }

  render() {
    return (
        <div>
      
        <Bicis bicis={this.state.bicicletas}></Bicis>
      
      </div>
    )
  }
}