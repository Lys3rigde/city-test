import React, { Component } from 'react';


export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.sorted = {name: true };
    }
    sort(type) {
        const { update, data } = this.props;
 

        const isSorted = this.sorted[type];

        let direction = isSorted ? -1 : 1;

        const sorted = [].slice.call(data).sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        });
        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });
    }

    render() {
        return (
            <button className='table__button table__text' onClick={() => this.sort('name')} >Марка и модель</button>
        )
    }
}