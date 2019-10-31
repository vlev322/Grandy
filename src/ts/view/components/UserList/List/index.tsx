import React from "react";

interface IProps {
  user: {
    _id: string;
    age: number;
    name: string;
  }
}

export class InfoUserList extends React.Component<IProps> {
  public render(): JSX.Element {
    const { age, name, _id } = this.props.user
    return (
      <tr key={this.props.user._id}>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>Change</td>
        <td>Delete</td>
      </tr>
    )
  }
}
