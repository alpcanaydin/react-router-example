/* @flow */

import React, { Component, Element } from 'react';
import { Link, browserHistory } from 'react-router';

type UsersStateType = {
  data: Array<string>,
};

type UsersPropsType = {
  location: Object
};

class Users extends Component {
  state: UsersStateType;
  handleHomeNavigation: Function;
  handlePageChange: Function;

  constructor(props: UsersPropsType) {
    super(props);

    this.state = {
      data: [
        'alpcan',
        'adem',
        'burak'
      ]
    };

    this.handleHomeNavigation = this.handleHomeNavigation.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleHomeNavigation(event: any) {
    event.preventDefault();
    browserHistory.push('/react-router-example');
  }

  handlePageChange(event: any) {
    event.preventDefault();
    const { page = 1 } = this.props.location.query;
    const { location } = this.props;

    browserHistory.push({
      ...location,
      query: { page: parseInt(page, 10) + 1 }
    });
  }

  render(): Element<*> {
    const { data } = this.state;
    const { page = 1 } = this.props.location.query;

    return (
      <div>
        <h1>Kullanıcılar</h1>
        <hr />
        <strong>Sayfa: </strong> {page}

        <ul>
          {data.map((user: string): Element<*> =>
            <li key={user}>
              <Link to={`/react-router-example/user/${user}`}>{user}</Link>
            </li>
          )}
        </ul>
        <button onClick={this.handlePageChange}>Sayfayı Arrtır</button>
        <button onClick={this.handleHomeNavigation}>Anasayfaya git</button>
      </div>
    );
  }
}

export default Users;
