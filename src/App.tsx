import React, {useState} from 'react';
import './App.css';
import UserList from "./components/UserList";
import PostList from "./components/PostList";


function App(): JSX.Element {
  return (
    <div className="App">
      <UserList/>
        <PostList/>
    </div>
  );
}

export default App;
