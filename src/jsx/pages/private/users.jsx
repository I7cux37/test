import React, {Component} from 'react';
import axios from 'axios';
import MessageService from "../../services/message-service";


class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: ''
    };
  }

  componentDidMount() {
    MessageService.getUsers((err, data) => {
      if (err) {
        this.setState({message: '', error: err});
      } else {
        this.setState({users: data, error: ''});
      }
    });
  }


  render() {
    return (
      <div>
        <h1>users</h1>
        {this.state.users.map((v, i) => {
          return <div key={i} style={{display: 'flex'}}>
            <div style={{marginRight: '15px'}}>{v.name}</div>
            <div style={{marginRight: '15px'}}>{v.email}</div>
          </div>

        })}
      </div>
    );
  }
}

export default Users;
