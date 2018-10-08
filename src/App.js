import React, { Component } from "react";
import "./App.css";
import styles from "./util/styles.js";
import CurrencyConverter from "./components/currencyConverter";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel, fab);

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <FontAwesomeIcon className={classes.leftIcon} icon={faGlobe} />
            <Typography variant="h6" color="inherit">
              Currency Exchange
            </Typography>
          </Toolbar>
        </AppBar>

        <CurrencyConverter />

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
