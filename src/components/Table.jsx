import React, {Component} from 'react';
import Item from './Item.jsx';

export default class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: this.props.records
        }
        //console.log("The props:" + JSON.stringify(props));        
        //console.log("In the table constructor: " + JSON.stringify(this.state.records));            
    }

    render() {
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DIFF</th>
                    <th>TYPE1</th>
                    <th>TYPE2</th>
                    <th>TYPE3</th>
                    <th>GRASP</th>
                    <th>LAST</th>
                    <th>Opertion</th>
                </tr>
            </thead>
            <tbody>
                {this.state.records.map(item => {
                    return <Item {...item} key = {item.id}> </Item>
                })}
            </tbody>
        </table>
    }
}