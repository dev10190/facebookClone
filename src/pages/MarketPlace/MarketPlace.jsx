import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MarketPlace = () => {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
    return (
      <>
       <div>
      <input type="file" onChange={handlePhotoChange} />
      {preview && <img src={preview} alt="Photo preview" style={{ width: '200px' }} />}
    </div>
      </>
    );
};

export default MarketPlace;
