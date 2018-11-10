import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './ImageAvatar.css'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class ImageAvatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className='center'>
        <Avatar
          alt="Adelle Charles"
          src={this.props.avatar}
        />
      </div>
    )
  }
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);