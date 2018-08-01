import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    background: `url(${"../wine-main.jpg"}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class FrontPage extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Header/>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Medium
                      </Typography>
                      <Typography gutterBottom>Some more description</Typography>
                      <Typography color="textSecondary">ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Medium
                      </Typography>
                      <Typography gutterBottom>Some more description</Typography>
                      <Typography color="textSecondary">ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Small
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Small
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Small
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={this.props.classes.image}>
                    <img className={this.props.classes.img} alt="complex" src="/wine-main.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        Small
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FrontPage);
