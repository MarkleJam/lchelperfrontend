import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import config from '../../config/dbconfig.js';

const axios = require('axios');
var options = {
    method:'get',
    url:config.ip + '/history' + '',    
}

export default class HistoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            id:this.props.id,
            history:null
        }
    }

    toggle = () => {
        this.setState(preState => ({
            modal: !preState.modal
        }))
    }

    async componentDidMount() {
        options.url = (config.ip + '/history/' + this.state.id);
        let ret = await axios(options);
        this.setState({history:ret.data});
    }

    render() {
        if(this.state.history === null) return null;                            
        let clsBtn = <Button onClick={this.toggle}>&times;</Button>;
        let triggerBtn = <Button color='success' onClick={this.toggle} size='sm'>History</Button>
        return (<div>
            {triggerBtn}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader close = {clsBtn}>History</ModalHeader>
                    <ModalBody>
                        <div>{this.state.history.map(item => {
                            return (<p key={item.date + item.id}>{item.date.substring(0,10)}</p>);
                        })}</div>
                    </ModalBody>
            </Modal>
        </div>);
    }
}