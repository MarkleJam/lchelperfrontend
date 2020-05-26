import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Form, Button, FormGroup, Label, Input} from "reactstrap";

export default class ReviewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval:null,
            modal:false
        }
    }

    toggle = (e) => {
        this.setState((prevState)=>({
            modal : !prevState.modal
        }))
    }

    onChange = (e) => {
        console.log(e.target.value);        
        this.setState({[e.target.name]:e.target.value})
    }

    submit = (e) => {
        e.preventDefault();        
        window.location.href="/item/review?interval=" + this.state.interval;      
    }


    render() {
        let clsBtn = <Button onClick = {this.toggle}>&times;</Button>
        let intervalButton = <Button onClick = {this.toggle} color='primary' size='sm'>Review</Button>;        
        return (<div>
            {intervalButton}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader close={clsBtn}> Input your days for review</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label>How many days before today</Label>
                            <Input type='text' name='interval' onChange={this.onChange}/>
                        </FormGroup>
                        <Button color='success'>submit</Button>
                    </Form>                    
                </ModalBody>
            </Modal>                       
        </div>);
    }
}