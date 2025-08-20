import React, { Component } from "react";

class Exercise02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "SV001",
      name: "Nguyễn Hải Đăng",
      birthday: "21/01/2003",
      address: "Quốc Oai, Hà Nội"
    };
  }

  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <p>ID: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
