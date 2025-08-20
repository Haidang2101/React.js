import React, { Component } from "react";

interface state {
  name: string;
}

export default class Exercises01 extends Component<{},state> {
  constructor(props : {}) {
    super(props);
    this.state = {
      name: "Nguyễn Hải Đăng"
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Họ và tên: {name}</h1>
      </div>
    );
  }
}

