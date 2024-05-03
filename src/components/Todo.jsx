import { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };
  }

  render() {
    return (
      <div className="list-item">
        {this.state.edit ? (
          <input
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.currentTarget.value)}
          />
        ) : (
          <li>{this.props.value}</li>
        )}

        <button
          type="button"
          onClick={() =>
            this.setState({ ...this.state, edit: !this.state.edit })
          }
        >
          {this.state.edit ? 'Resubmit' : 'Edit'}
        </button>
        <button type="button" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}
