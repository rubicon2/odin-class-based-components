import { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h4>Total: {this.props.value}</h4>;
  }
}
