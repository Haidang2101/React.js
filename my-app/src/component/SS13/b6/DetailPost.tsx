import React, { Component } from 'react'
interface Post{
    id: number;
    title: string;
    content: string;
    author:string
}
export default class DetailPost extends Component<Post> {
  render() {
    return (
        <div className="div">
            <p>ID: {this.props.id}</p>
            <p>Title: {this.props.title}</p>
            <p>Content: {this.props.content}</p>
            <p>Author: {this.props.author}</p>
      </div>
    )
  }
}