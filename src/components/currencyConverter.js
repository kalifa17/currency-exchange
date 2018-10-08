import React from "react";
import { connect } from "react-redux";
import { fetchRates } from "../actions/rateAction";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import _ from 'lodash';
import NumberFormatCustom from "./numberFormatCustom.js";
import styles from "../util/styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUSD: "",
      inputEU: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchRates());
  // }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClick = event => {
    this.props.dispatch(fetchRates());
  }

  getValueInEU = () => {
    const { rates } = this.props;
    console.log('getValueInEU');
    console.log(this.state);
    if (!_.isEmpty(rates)){
      return parseFloat(this.state.inputUSD) / parseFloat(rates.rates.USD);
    }
    return '';
  }

  render() {
    const { classes } = this.props;
    const valueInEU = this.getValueInEU();

    return (
      <Grid container spacing={24} alignItems="center" className={classes.main}>
        <Grid item xs={6}>
          <TextField
            id="outlined-adornment-amount"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="USD"
            value={this.state.inputUSD}
            onChange={this.handleChange("inputUSD")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              inputComponent: NumberFormatCustom,
            }}
          />
        </Grid>
        <Grid item justify="center" xs={6}>
          <TextField
            id="outlined-adornment-amount"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="EU"
            disabled={true}
            value={valueInEU}
            onChange={this.handleChange("inputEU")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              inputComponent: NumberFormatCustom,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleClick}
            size="large"
          >
            Calculate
            <FontAwesomeIcon
              className={classes.rightIcon}
              icon={faExchangeAlt}
            />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates.items,
  loading: state.rates.loading,
  error: state.rates.error
});

export default connect(mapStateToProps)(withStyles(styles)(CurrencyConverter));
