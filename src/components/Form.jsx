import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import config from '../config/dbconfig.js';
const axios = require('axios');

export default class AddForm extends Component{
    constructor() {
        super();
        this.state = {
            id:0,
            name:" ",
            diff:" ",
            type1:" ",
            type2:" ",
            type3:" ",
            grasp:" ",
            last:" ",
        }
    }

    options = {
        method:'post',
        url:config.ip + '/doAdd',
        data:{
            item:this.state
        }    
      }         

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitFormAdd = async e =>  {
        e.preventDefault();
        let newItem = {id:this.state.id, name:this.state.name, diff:this.state.diff,
            type1:this.state.type1, type2:this.state.type2, type3:this.state.type3,
            grasp:this.state.grasp, last:this.state.last
        }
        this.options.data = newItem;

        let ret = await axios(this.options);                                        
        this.props.toggle();
        window.location.href = '/';
    }

    render() {
        return (            
            <Form onSubmit={this.submitFormAdd}>
                <FormGroup>
                    <Label>Problem ID</Label>
                    <Input type='text' name='id' onChange={this.onChange} value={this.state.id}/>
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
                <FormGroup>
                    <Label>LastAccessed:</Label>
                    <Input type='date' name='last' onChange={this.onChange} value={this.state.last}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}