import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position={"static"} color={"primary"}>
          <ToolBar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.handleClick}>
              <MenuIcon/>
            </IconButton>
            <Typography
              component={Link}
              to={"/"}
              varian={"title"}
              color={"inherit"}
              className={classes.flex}
            >
              Home of wine
            </Typography>
            <Typography
              varian={"title"}
              color={"inherit"}
            >
              <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {this.props.auth.displayName ?
                this.props.auth.displayName : ''}
            </Typography>
            {this.props.auth.uid !== undefined ?
              <Button color="inherit" onClick={this.props.startLogout}>Logout</Button> :
              <Button color="inherit" onClick={this.props.startLogin}>Login</Button>
            }
          </ToolBar>
        </AppBar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            component={Link}
            to={"/profile"}
          >
            Profile
          </MenuItem>
          <MenuItem
            component={Link}
            to={"/create"}
          >
            Add new Item
          </MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          { this.props.auth.uid !== undefined ?
            <MenuItem onClick={this.props.startLogout}>Logout</MenuItem> :
            <MenuItem onClick={this.props.startLogin}>Login</MenuItem>
          }
        </Menu>
      </div>
    );
  }
}
const ConnectedNavBar =  connect((state) => {
  return {
    auth: state.auth
  }
})(NavBar);

export default withStyles(styles)(ConnectedNavBar);