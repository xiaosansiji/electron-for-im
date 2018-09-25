import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overFlow: 'scroll',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
});

function generate(element) {
  return [0, 1, 2, 3, 5, 6, 7, 8, 9].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.demo}>
            <List>
            {generate(
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            test
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                        secondary={'Secondary text'}
                    />
                </ListItem>,
            )}
            </List>
        </div>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);