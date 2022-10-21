import React from 'react';
import { Button } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import './image.css';

export const ImagePreview = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="imagePreview">
    <ImageUploading
    multiple
    value={images}
    onChange={onChange}
    maxNumber={maxNumber}
    dataURLKey="data_url"
  >
    {({
      imageList,
      onImageUpload,
      onImageRemoveAll,
      onImageUpdate,
      onImageRemove,
      isDragging,
      dragProps,
    }) => (

      <div className="upload__image-wrapper">
        <button
          style={isDragging ? { color: 'red' } : undefined}
          onClick={onImageUpload}
          {...dragProps}
        >
          Click or Drop here
        </button>
        &nbsp;
        <button onClick={onImageRemoveAll}>Remove all images</button>
        {imageList.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image['data_url']} alt="" width="100" />
            <div className="image-item__btn-wrapper">
              <Button className="btn-sm" variant="success" onClick={() => onImageUpdate(index)}>Update</Button>
              &nbsp;
              <Button className="btn-sm" variant="danger" onClick={() => onImageRemove(index)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>
    )}
  </ImageUploading>
    </div>
  )
}
