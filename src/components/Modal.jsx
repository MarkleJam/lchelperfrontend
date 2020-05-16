import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import AddForm from './Form.jsx'

export default class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        let label = this.props.buttonLabel;
        let button = <Button color='success' onClick={this.toggle}>{label}</Button>
        let clsButton = <Button onClick={this.toggle}>&times;</Button>
        return (
            <div>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle} close = {clsButton}>Add New Item</ModalHeader>
                    <ModalBody>
                        <AddForm addItemToState={this.props.addItemToState} toggle={this.toggle}></AddForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

