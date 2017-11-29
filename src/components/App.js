import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Radium from 'radium'
import Layout from './Layout'
import RootPage from './RootPage'
import PostDetailPage from './PostDetailPage'
import CategoryPage from './CategoryPage'

const styles = {
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Layout>
              <Route exact path="/" component={RootPage} />
              <Route exact path="/:category" component={CategoryPage} />
              <Route exact path="/:category/:postID" component={PostDetailPage} />
          </Layout>
        </div>
        </Router>

      </div>
    );
  }
}

export default Radium(App);
