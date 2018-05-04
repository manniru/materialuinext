import React from 'react';
//import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import {cyan600, purple600} from 'material-ui/colors'
import purple from 'material-ui/colors/purple';
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';
import pink from 'material-ui/colors/pink';
import orange from 'material-ui/colors/orange';

import GuttersGrid from '../demos/GuttersGrid';
import FullWidthGrid from '../demos/FullWidthGrid'

//import Assessment from 'material-ui/svg-icons/action/assessment';
import Assessment from '@material-ui/icons/Assessment';
//import Face from 'material-ui/svg-icons/action/face';
import Face from '@material-ui/icons/Face';
//import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbUp from '@material-ui/icons/ThumbUp';
//import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

// import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Data from '../data';

import InfoBox from '../components/dashboard/InfoBox'

const pink600 = pink[600]; // #F44336
const orange600 = orange[600]; // #F44336
//const accent = purple['A200']; // #E040FB
//const accent2 = purple.A200;

var newOrders = [
  {pv: 2400},
  {pv: 1398},
  {pv: 9800},
  {pv: 3908},
  {pv: 4800},
  {pv: 3490},
  {pv: 4300}
]

const paper = {
  padding: 10,
  textAlign: 'center',
  color: 'green',
}

const DashboardPage = () => {

  //console.log('13131'+Data.dashBoardPage.newOrders)

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>



      <div>

    


      <Grid container spacing={24}>
        
        
        <Grid item xs={6} sm={3}>
        <InfoBox Icon={ShoppingCart}
                   color={pink600}
                   title="Total Profit"
                   value="1500k"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
        <InfoBox Icon={ThumbUp}
                   color='purple'
                   title="Likes"
                   value="4231"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
        <InfoBox Icon={Assessment}
                   color='red'
                   title="Sales"
                   value="460"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
        <InfoBox Icon={Face}
                   color={orange600}
                   title="New Members"
                   value="248"
          />
        </Grid>
      </Grid>



<div style={{flexGrow: 1}}>
      <Grid container spacing={24}>
        
        <Grid item xs={12} sm={6}>
        <NewOrders data={newOrders}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </Grid>
        
        
      </Grid>
    </div>


    <div style={{flexGrow: 1}}>
      <Grid container spacing={24}>
        
        <Grid item xs={12} sm={6}>
        {'<RecentlyProducts data={Data.dashBoardPage.recentProducts}/>'}
        </Grid>
        <Grid item xs={12} sm={6}>
        
        <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
        </Grid>
        
        
      </Grid>
    </div>

        
      </div>

    </div>
  );
};

export default DashboardPage;
