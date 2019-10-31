import React, { Component, Fragment } from "react";
import axios from 'axios';
import { InfoUserList } from "./List";


// const getUsers = async () => {
//   return await axios.get(`http://localhost:3000/api/users`);
// }
const getUsers = () => {
  return axios.get(`http://localhost:3000/api/users`).then(({data}) => data);
}

export class UserList extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    (async () => {
      const users = (await getUsers());
      this.setState({users});
      console.log(users)
    })()
  }
  public render(): JSX.Element {

    return (
      <Fragment>
        <div className="main">
          <h1>User List</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => {
                const _user: any = user;
                return (
                  <InfoUserList key={_user._id} user={_user} />
                )
              })}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}
