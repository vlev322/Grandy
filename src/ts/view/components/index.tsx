import React, { Component, Fragment } from "react";
import { UserList } from "./UserList";

export class IndexComposition extends Component {
  public render(): JSX.Element {
    return (
      <Fragment>
        <UserList />
      </Fragment>
    )
  }
}
