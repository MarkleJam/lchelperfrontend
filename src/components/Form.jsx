import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import config from '../config/dbconfig.js';
const axios = require('axios');

export default class AddForm extends Component{
    constructor(props) {
        super(props);
        //console.log(this.props.editState);        
        this.state = {
            id: this.props.buttonLabel === 'Add' ? '' : this.props.editState.id,
            name:this.props.buttonLabel === 'Add' ? '' : this.props.editState.name,
            diff:this.props.buttonLabel === 'Add' ? '' : this.props.editState.diff,
            type1:this.props.buttonLabel === 'Add' ? '' : this.props.editState.type1,
            type2:this.props.buttonLabel === 'Add' ? '' : this.props.editState.type2,
            type3:this.props.buttonLabel === 'Add' ? '' : this.props.editState.type3,
            grasp:this.props.buttonLabel === 'Add' ? '' : this.props.editState.grasp,
            createAt:this.props.buttonLabel === 'Add' ? '' : this.props.editState.createAt,
            //last:this.props.buttonLabel === 'Add' ? '' : this.props.editState.last,
        }
    }

    options = {
        method:this.props.buttonLabel === 'Add' ? 'post' : 'put',
        url: config.ip + '/item' + (this.props.buttonLabel === 'Add' ? '/doAdd' : '/doEdit'),
        data:{
            item:this.state
        }    
      }

    AddInitHistoryOptions = {
        method: 'post',
        url: config.ip + '/history' + '/doAdd'
    }

    addHistory = async() => {
        let newHistory = {problemid:this.state.id, date:this.state.createAt, comment:"Created on this day"};
        this.AddInitHistoryOptions.data = newHistory;
        await axios(this.AddInitHistoryOptions);
    }

    submit = async e =>  {
        e.preventDefault();
        let newItem = {id:this.state.id, name:this.state.name, diff:this.state.diff,
            type1:this.state.type1, type2:this.state.type2, type3:this.state.type3,
            grasp:this.state.grasp,
            createAt: this.state.createAt
        }

        this.options.data = newItem;
        await axios(this.options);

        //Only add first history when creating an item.
        if(this.props.buttonLabel === "Add") {
            await this.addHistory();
        }

        this.props.toggle();
        window.location.href = '/';
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (            
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
                <FormGroup>
                    <Label>Create Date(Used to create first history)</Label>
                    <Input type='date' name='createAt' onChange={this.onChange} value={this.state.createAt} readOnly={this.props.buttonLabel === 'Edit'}/>
                </FormGroup>
                <Button color='success'>Submit</Button>
            </Form>
        )
    }
}