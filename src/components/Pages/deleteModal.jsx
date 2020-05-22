import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import config from '../../config/dbconfig.js';

const axios = require('axios');

export default class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false
        }
    }

    options = {
        method:'delete',
        url: config.ip  + '/' + this.props.table + '/' + this.props.id,
        data:{
            id:this.props.id
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    submitDelete = async (e) => {
        e.preventDefault();                
        await axios(this.options);
        this.toggle();
        // if(this.props.table === 'item') {
        //     window.location.href = '/';                                        
        // } else {

        // }  
        window.location.reload();      
    }

    render(){
        let clsButton = <Button onClick={this.toggle}>&times;</Button>
        let deleteButton = <Button color='danger' onClick={this.toggle} size='sm' >Delete</Button>;
        return <div>
            {deleteButton}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader close = {clsButton}>Delete Confirmation</ModalHeader>
                <ModalBody>
                    <div>Are you sure to delete the item?</div>
                    <br/>
                    <Button color='danger' onClick={this.submitDelete}>Delete the item</Button>
                </ModalBody>
            </Modal>
        </div>
    }

}