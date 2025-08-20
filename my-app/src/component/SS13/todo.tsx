import { Component } from "react";

export default class Todo extends Component<todoProps> {
  render() {
    return (
      <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" />
      
      <span className="todo-text">Học HTML và CSS</span>
      <div className="todo-actions">
        <button className="delete-btn">🗑️ Xóa</button>
      </div>
    </div>
    );
  }
}

export default Todo;
