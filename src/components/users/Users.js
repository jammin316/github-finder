import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  // hardcode user db for initial setup
  state = {
    users: [
      {
        id: '1',
        login: 'mojumbo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://api.github.com/users/mojombo'
      },
      {
        id: '2',
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://api.github.com/users/defunkt'
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://api.github.com/users/pjhyett'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
