import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import PostsList from './components/PostsList';
import SinglePost from './components/SinglePost'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={PostsList} />
      <Route path="/post/:id" component={SinglePost} />
    </div>
  );
}

export default App;
