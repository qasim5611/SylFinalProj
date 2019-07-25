import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const styles = {
    root: {
      width: 500,
    },
  };
export class Footer extends Component {
    state = {
        value: 'recents',
      };

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <br/>
         <BottomNavigation style={{backgroundColor:"#e0e0e0"}} value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <Link to="/RetriveDataFromDb">
        <BottomNavigationAction label="DbData" value="nearby" icon={<LocationOnIcon />} />
        </Link>
        <Link to="/NewDashboard">
        <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
        </Link>
      </BottomNavigation>
      </div>
    )
  }
}

export default Footer
