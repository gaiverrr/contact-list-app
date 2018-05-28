import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/es/TextField/TextField';
import Button from '@material-ui/core/es/Button/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const CreateContactForm = ({onInputChange, onFormSubmit}) =>
  (
    <form className={styles.container} noValidate autoComplete="off">
      <TextField id="email" name="email" label="Email" type="email" className={styles.textField}
                 onChange={onInputChange} margin="normal" fullWidth={true}/>
      <br/>
      <TextField id="first" type="name" name="first" label="First Name" className={styles.textField}
                 onChange={onInputChange} margin="normal" fullWidth={true}/>
      <br/>
      <TextField id="last" type="name" name="last" label="Second Name" className={styles.textField}
                 onChange={onInputChange} margin="normal" fullWidth={true}/>
      <br/>
      <TextField id="phone" type="number" name="phone" label="Phone Number" className={styles.textField}
                 onChange={onInputChange} margin="normal" placeholder="+1 1234567890" fullWidth={true}/>
      <br/>
      <TextField id="address" type="text" name="address" label="Address" className={styles.textField}
                 onChange={onInputChange} margin="normal" fullWidth={true}/>
      <br/>
      <Button onClick={onFormSubmit} className={styles.button} variant="raised" color="primary">
        Create
      </Button>
    </form>
  );

export default withStyles(styles)(CreateContactForm);