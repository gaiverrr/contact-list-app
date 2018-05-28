import React, {PureComponent} from 'react';
import TextField from '@material-ui/core/es/TextField/TextField';

class Search extends PureComponent {

  handleChange = event => this.props.onSearch(event.target.value);

  render() {
    return (
      <TextField
        id="search"
        label="Search field"
        type="search"
        margin="normal"
        fullWidth={true}
        onChange={event => this.handleChange(event)}
      />
    );
  }
}

export default Search;