import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Divider } from '@material-ui/core';
import SvgSite from './SvgSites';

const StyledDialog = withStyles(theme => ({
    paper: {
        background: '#2B2B2D',
        borderRadius:'10px'
    },
}))(Dialog)


const styles = {
};

const StyledDivider = withStyles({
    middle: {
        marginLeft: '16px',
        marginRight: '16px',
        backgroundColor: ' rgb(0, 183, 255)'
    },
})(Divider);

class SimpleDialog extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <StyledDialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title"><h1 style={{ fontSize: '20px', color: 'white', marginBottom: '0px', marginTop: '0px', }}>Other Sites</h1></DialogTitle>
                <StyledDivider variant="middle"/>
                <div>
                    <List>
                        <a href='https://www.vgpro.gg/' target="_blank"><ListItem >
                            <img style={{height:'30px'}} src={require("./../images/Pro.png")} />
                            <ListItem button>VGPRO</ListItem>
                            </ListItem></a>
                    </List>
                </div>
            </StyledDialog>
        );
    }
}

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

const StyledButton = withStyles({
    root: {
        position: 'absolute',
        left: '25px',
        color: 'white',
        padding: '0px',
        fontSize: '12px',
        minWidth: '0px',
        boxSizing: 'border-box',
        minHeight: '0px',
        transition: 'background-color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, box - shadow 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms',
        fontWeight: 800,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
        borderRadius: '4px',
},
    label: {
        textTransform: 'capitalize',
    },
})(Button);

class SimpleDialogDemo extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        return (
            <div>
                <StyledButton onClick={this.handleClickOpen}>
                    <SvgSite style={{ marginTop: '-12px', marginLeft: '-19px'}}></SvgSite>
        </StyledButton>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

export default SimpleDialogDemo;