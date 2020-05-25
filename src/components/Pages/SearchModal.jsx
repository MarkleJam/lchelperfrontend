import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import config from '../../config/dbconfig.js';
import { Redirect } from "react-router-dom";

var axios = require('axios');

export default class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name:null,
            diff:null,
            type1:null,
            type2:null,
            type3:null,
            grasp:null,
            modal:false,
        }
    }  

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    options = {
        method:"get",
        url: config.ip + '/item/search',
        params:{
            id: null,
            name: null,
            diff: null,
            type1: null,
            type2: null,
            type3: null,
            grasp: null,
            redirect: false            
        }    
      }         

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    submit = async e =>  {
        e.preventDefault();
        let newItem = {id:this.state.id, name:this.state.name, diff:this.state.diff,
            type1:this.state.type1, type2:this.state.type2, type3:this.state.type3,
            grasp:this.state.grasp
            //, last:this.state.last
        }        
        this.toggle();
        this.state.redirect = true;
        console.log("I am in the submit function of search modal");
        
        window.location.href = '/item/search'
         + '?id=' + [this.state.id]
         + '&name=' + [this.state.name]
         + '&diff=' + [this.state.diff]
         + '&type1=' + [this.state.type1]
         + '&type2=' + [this.state.type2]
         + '&type3=' + [this.state.type3]
         + '&grasp=' + [this.state.grasp]         
    }

    render() {       
        let button = <Button color = 'success' onClick={this.toggle} size='sm'>Search</Button>
        let clsButton = <Button onClick={this.toggle}>&times;</Button>
        return (
            <div>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader close = {clsButton}>Search</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label>Problem ID</Label>
                            <Input type='text' name='id' onChange={this.onChange} value={this.state.id} readOnly={this.props.buttonLabel === 'Edit'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type='text' name='name' onChange={this.onChange} value={this.state.name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Diff</Label>
                            <Input type='text' name='diff' onChange={this.onChange} value={this.state.diff} placeholder='easy, medium, hard'/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Type1:</Label>
                            <Input type='text' name='type1' onChange={this.onChange} value={this.state.type1}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Type2:</Label>
                            <Input type='text' name='type2' onChange={this.onChange} value={this.state.type2}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Type3:</Label>
                            <Input type='text' name='type3' onChange={this.onChange} value={this.state.type3}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Grasp:</Label>
                            <Input type='text' name='grasp' onChange={this.onChange} value={this.state.grasp}/>
                        </FormGroup>
                        <Button color='success'>Submit</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

