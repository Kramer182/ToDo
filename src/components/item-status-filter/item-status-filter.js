import React from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    render() {
        return (
            <div className='btn-group'>
                <button type="button" 
                        className='btn btn-info'> All</button>
                <button type="button btn-outline-second" className='btn'>Active</button>
                <button type="button btn-outline-second" className='btn'>Done</button>
    
            </div>
        );
    };
};
