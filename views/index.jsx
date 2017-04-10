import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    const hello = 'Hello, world!'
    return (
      <div className="todoBox">
        {hello}
      </div>
    )
  }
}
