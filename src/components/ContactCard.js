import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {capitalize} from '@material-ui/core/es/utils/helpers';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import WorkIcon from '@material-ui/icons/Work';
import moment from 'moment';
import blue from '@material-ui/core/es/colors/blue';
import ListItemText from '@material-ui/core/es/ListItemText/ListItemText';
import List from '@material-ui/core/es/List/List';
import ListItem from '@material-ui/core/es/ListItem/ListItem';
import Divider from '@material-ui/core/es/Divider/Divider';
import * as countryList from 'countries-list';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

class ContactCard extends PureComponent {
  state = {expanded: false};
  contact = {};

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.contact = props.contact;
    this.country = countryList.languagesAll[(this.contact.nat || '').toLowerCase()] !== undefined ? countryList.languagesAll[this.contact.nat.toLowerCase()].name : this.contact.nat;
  }

  sendEmail = () => window.location.assign(`mailto:${this.contact.email}`);

  call = () => window.location.assign(`tel:${this.contact.phone}`);

  expandClick = () => this.setState({expanded: !this.state.expanded});

  deleteContact = () => this.props.onDelete(this.contact);

  render() {
    const {classes} = this.props;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Avatar" src={this.contact.picture.thumbnail}/>
          }
          action={
            <IconButton onClick={this.deleteContact}>
              <DeleteIcon/>
            </IconButton>
          }
          title={capitalize(this.contact.name.title) + ' ' + capitalize(this.contact.name.first) + ' ' + capitalize(this.contact.name.last)}
          subheader={moment(this.contact.dob).format('MMMM Do YYYY')}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon/>
          </IconButton>
          <IconButton aria-label="Call" onClick={this.call}>
            <LocalPhoneIcon/>
          </IconButton>
          <IconButton aria-label="Email" onClick={this.sendEmail}>
            <EmailIcon/>
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.expandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardMedia
            className={classes.media}
            image={this.contact.picture.large}
            title="Contemplative Reptile"
          />
          <CardContent>
            <List>
              <ListItem>
                <Avatar>
                  <EmailIcon/>
                </Avatar>
                <ListItemText primary={this.contact.email}/>
              </ListItem>
              <li>
                <Divider inset/>
              </li>
              <ListItem>
                <Avatar>
                  <LocalPhoneIcon/>
                </Avatar>
                <ListItemText primary={this.contact.phone}/>
              </ListItem>
              <Divider inset component="li"/>
              <ListItem>
                <Avatar>
                  <WorkIcon/>
                </Avatar>
                <ListItemText primary={this.contact.cell}/>
              </ListItem>
              <Divider inset component="li"/>
              <ListItem>
                <Avatar>
                  <LanguageIcon/>
                </Avatar>
                <ListItemText primary={this.country}/>
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ContactCard);