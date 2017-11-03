import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import RootPage from './RootPage'
import PostDetailPage from './PostDetailPage'
import CategoryPage from './CategoryPage'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={RootPage} />
            <Route exact path="/:category" component={CategoryPage} />
            <Route exact path="/:category/:postID" component={PostDetailPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
