import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './SelectPhoto.css';

function SelectPhoto(props) {
    const { onSelectImg : handleSelect } = props;

    const fileRef = useRef();
    
    const handleChange = (event) => {
        handleSelect(fileRef);
        event.target.value = null;
    }

    return (
        <div className='select-photo'>
            <input type="file" className='select-photo-input' ref={fileRef} onChange={handleChange}/>
            <div className='select-photo-wrapper'>
                Click to select
            </div>
        </div>
    )
}

SelectPhoto.propTypes = {
    onSelectImg: PropTypes.func.isRequired,
};

export default SelectPhoto;

