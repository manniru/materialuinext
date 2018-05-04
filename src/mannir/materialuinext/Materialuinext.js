import React, { Component } from 'react';
import RaisedButtons from './demos/RaisedButtons'
import DashboardPage from './containers/DashboardPage'
//import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

//import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import {cyan600, pink600, purple600, orange600} from 'material-ui/colors';


export default class Materialuinext extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <DashboardPage />
      </div>
    );
  }
}
