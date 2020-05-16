import React from 'react';

export default function Item(props) {
    return <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.diff}</td>
        <td>{props.type1}</td>
        <td>{props.type2}</td>
        <td>{props.type3}</td>
        <td>{props.grasp}</td>
        <td>{(props.lastaccessed).substring(0,10)}</td>
    </tr>
}