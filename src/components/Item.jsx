import React, { Component } from 'react';
import { Button, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModelForm from './Modal.jsx'
import config from '../config/dbconfig.js';

const axios = require('axios');

export default class Item extends Component{
    constructor(props) {
        super(props);        
        this.state = {
            id: this.props.id,
            name: this.props.name,
            diff: this.props.diff,
            type1: this.props.type1,
            type2: this.props.type2,
            type3: this.props.type3,
            grasp: this.props.grasp,
            last: (this.props.lastaccessed).substring(0,10),
            modal: false,
        }
    }

    options = {
        method:'post',
        url: config.ip + '/doDelete',
        data:{
            id:this.props.id
        }
    }

    toggle = () => {
        console.log("In the toggle: id is: " + this.state.id);        
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    submitDelete = async (e) => {
        e.preventDefault();                
        await axios(this.options);
        this.toggle();
        window.location.href = '/';                                        
    }

    render() {
        let clsButton = <Button onClick={this.toggle}>&times;</Button>
        let deleteButton = <Button color='danger' onClick={this.toggle} size='sm' >Delete</Button>;
        return( <tr>
            <td>{this.state.id}</td>
            <td>{this.state.name}</td>
            <td>{this.state.diff}</td>
            <td>{this.state.type1}</td>
            <td>{this.state.type2}</td>
            <td>{this.state.type3}</td>
            <td>{this.state.grasp}</td>
            <td>{this.state.last}</td>
            <td>
                <Row>
                    <ModelForm buttonLabel='Edit' editState={this.state}></ModelForm>
                    <div>
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
                </Row>
            </td>
        </tr>)
    }    
}