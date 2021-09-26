import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem/PhotoItem';
import './PhotoList.css';

function PhotoList(props) {
    const { list, onDelete: handleDelete } = props;

    return (
        <ul className='photo-list'>
            {
                list.map(item => <PhotoItem key={item.id} item={item} onDelete={handleDelete}/>)
            }
        </ul>
    )
}

PhotoList.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PhotoList;

