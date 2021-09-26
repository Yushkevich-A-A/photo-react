import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import SelectPhoto from './SelectPhoto/SelectPhoto';
import PhotoList from './PhotoList/PhotoList';
import './PhotoManager.css';

function PhotoManager() {
    const [photoList, setPhotoList] = useState([]);

    const handleDelete = (id) => {
        setPhotoList(photoList.filter(item => item.id !== id));
    }

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
        
          fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
          });
          
          fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
          });
          
          fileReader.readAsDataURL(file);
        });
      }
      
      const handleSelect = async (evt) => {
          const files = [...evt.current.files];
          const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
          setPhotoList(
              prevState => [...prevState, ...urls.map( item => ({id: nanoid(), img: item}) )]
              );
      }

    return (
        <div className='photo-manager'>
            <SelectPhoto onSelectImg={handleSelect}/>
            <PhotoList list={photoList} onDelete={handleDelete}/> 
        </div>
    )
}

export default PhotoManager;

