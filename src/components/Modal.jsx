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
        let btnColor = label === 'Add' ? 'success' : 'primary';
        let button = <Button color = {btnColor} onClick={this.toggle} size='sm'>{label}</Button>
        let clsButton = <Button onClick={this.toggle}>&times;</Button>
        return (
            <div>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader close = {clsButton}>{label}</ModalHeader>
                    <ModalBody>
                        <AddForm toggle={this.toggle} buttonLabel={this.props.buttonLabel} editState = {this.props.editState}></AddForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

