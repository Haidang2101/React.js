import React, { Component } from "react";
import Parent_Comp from "./b4/Parent_Comp";



interface State {
  myName: string;
}

export default class BTT4 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      myName: "A"
    };
  }

  render() {
    return (
      <div>
        <h2>Đây là component Cha: {this.state.myName}</h2>
        <Parent_Comp name="Đăng"></Parent_Comp>

      </div>
    );
  }
}