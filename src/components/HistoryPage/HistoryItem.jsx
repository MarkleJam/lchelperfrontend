import React, {Component} from 'react';
import DeleteModel from '../Pages/deleteModal.jsx';
export default class HistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            comment: this.props.comment,
            id:this.props.id
        }
    }

    render() {
        return <div>
            <h3>{this.state.date}</h3>
            <p>{this.state.comment}</p>
            <DeleteModel id={this.state.id} table="history"></DeleteModel>                
            <hr/>
        </div>
    }
}