import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Radium from 'radium'
import Layout from './Layout'
import RootPage from './RootPage'
import PostDetailPage from './PostDetailPage'
import CategoryPage from './CategoryPage'
import NewPostPage from './NewPostPage'

const styles = {
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={RootPage} />
              <Route exact path="/posts/new" component={NewPostPage} />
              <Route exact path="/:category" component={CategoryPage} />
              <Route exact path="/:category/:postID" component={PostDetailPage} />
            </Switch>
          </Layout>
        </Router>

      </div>
    );
  }
}

export default Radium(App);
