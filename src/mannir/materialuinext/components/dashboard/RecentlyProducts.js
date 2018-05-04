import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
//import Subheader from 'material-ui/Subheader';
import Subheader from 'material-ui/List/ListSubheader'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
//import IconButton from '@material-ui/icons/IconButton';
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//import IconMenu from 'material-ui/IconMenu';
import IconMenu from '@material-ui/icons/Menu';
//import MenuItem from 'material-ui/MenuItem';
import Menu, { MenuItem } from 'material-ui/Menu';
//import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {grey400, cyan600, white} from 'material-ui/colors'
//import {typography} from 'material-ui/styles';
import typography from 'material-ui/Typography';
//import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import Wallpaper from '@material-ui/icons/Wallpaper';

const RecentlyProducts = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      color: white
    }
  };

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Recent Products</Subheader>
        {props.data.map(item =>
          <div key={item.title}>
            <ListItem
              leftAvatar={<Avatar icon={<Wallpaper />} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

RecentlyProducts.propTypes = {
  //data: PropTypes.array
};

export default RecentlyProducts;
