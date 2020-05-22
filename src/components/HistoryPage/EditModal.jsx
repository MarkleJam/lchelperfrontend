import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup} from 'reactstrap';
import axios from 'axios';
import config from '../../config/dbconfig.js';

export default class Editmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:this.props.date,
            comment:this.props.comment,
            id:this.props.id,
            modal:false
        }
    }

    toggle = (e) => {
        this.setState((prevState)=>({
            modal : !prevState.modal
        }))
    }

    options = {
        method: "put",
        url:config.ip + "/history/doEdit",
        data:{            
            date: null,
            comment: null
        }
    }

    onChange = (e) => {
        console.log(e.target.name);
        
        this.setState({[e.target.name]:e.target.value})
    }
    
    submitToEdit = async (e) => {
        e.preventDefault();
        let newHistory = {id: this.state.id, date:this.state.date, comment:this.state.comment};
        this.options.data = newHistory;
        await axios(this.options);
        window.location.reload();
    }

    render() {
        let clsBtn = <Button onClick = {this.toggle}>&times;</Button>
        let editButton = <Button onClick = {this.toggle} color='primary' size='sm'>Edit</Button>
        return <div>
            {editButton}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader close={clsBtn}>Edit one history</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitToEdit}>                    
                            <FormGroup>
                                <Label>Date</Label>                     
                                <Input type='date' name='date' onChange={this.onChange} value={this.state.date}/>                
                            </FormGroup>
                            <FormGroup>
                                <Label>Comment</Label>                     
                                <Input type='textarea' name='comment' onChange={this.onChange} value={this.state.comment}/>                
                            </FormGroup>
                            <Button color='success' >Edit</Button>
                        </Form>
                    </ModalBody>
            </Modal>
        </div>;
    }
}