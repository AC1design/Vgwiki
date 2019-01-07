import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


const StyledDialog = withStyles(theme => ({
    paper: {
        background: '#2B2B2D',
        
    },
}))(Dialog)

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
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <div>
                    <List>
                            <ListItem button onClick={() => this.handleListItemClick()} >
                            <a href='https://www.vgpro.gg/'><ListItemText style={{ color: 'white'}}>VGPRO</ListItemText></a>
                            </ListItem>
                        <ListItem button onClick={() => this.handleListItemClick()} >
                            <a href='https://www.prime.vgpro.gg/'><ListItemText>VGPRIME</ListItemText></a>
                        </ListItem>
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

const SimpleDialogWrapped = withStyles(SimpleDialog);

const StyledButton = withStyles({
    root: {
        position: 'absolute',
        left: '10px',
        marginTop:'-12px',
        padding:'0px',
        minHeight:'20px',
        minWidth:'20px'
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
                <StyledButton variant="outlined" style={{ color: "white", fontWeight: '800', border:'2px solid white'}} onClick={this.handleClickOpen}>
                    S
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