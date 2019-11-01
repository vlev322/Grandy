import React, { Component, Fragment } from "react";
import axios from "axios";
import { InfoUserList } from "./List";
import { communicator } from "../../../modules/communicator/index";

export class UserList extends Component {
	state = {
		users: []
	};
	componentDidMount() {
		communicator.getUsers().then(({ data }) => {
			this.setState({ users: data });
		});
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
							{this.state.users.map(user => {
								const _user: any = user;
								return <InfoUserList key={_user._id} user={_user} />;
							})}
						</tbody>
					</table>
				</div>
			</Fragment>
		);
	}
}
