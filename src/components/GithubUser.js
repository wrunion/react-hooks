import React from 'react';
import axios from 'axios';

class GithubUser extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        imgUrl: ''
      };
  }

  async componentDidMount() {
    const user = this.props.user;
    const url = `https://api.github.com/users/${user}`;

    const response = await axios.get(url);

    this.setState({name: response.data.name, imgUrl: response.data.avatar_url});
  }

  render() {
    return (
      <React.Fragment>
        <h4>Github User {this.state.name}</h4>
        <img src={this.state.imgUrl} alt={`Github user ${this.state.name}`} />
      </React.Fragment>
    )
  }
}

export default GithubUser;