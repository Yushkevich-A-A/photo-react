import React from 'react';
import PropTypes from 'prop-types';
import './PhotoItem.css';

function PhotoItem(props) {
    const { item, onDelete: handleDelete } = props;

    return (
        <li className='photo-item'>
            <img className='photo-item-img' src={item.img} alt={item.id} />
            <button className='photo-item-delete' onClick={() => handleDelete(item.id)}></button>
        </li>
    )
}

PhotoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PhotoItem;

