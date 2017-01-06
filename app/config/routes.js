var React = require('React');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
import { browserHistory } from 'react-router';


module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/theotran" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);