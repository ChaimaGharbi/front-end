import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function AddPicture(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      const url ="/images/" + selectedImage.name;
      setImageURL(url);
      props.onImageURLUpdate(url);
    }
  }, [selectedImage]);
  return (
    <>
      {imageURL && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageURL} alt={selectedImage.name} height="200px" />
        </Box>
      )}
      <Box textAlign="center">
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image" className="mt-2">
          <Button variant="contained" color="primary" component="span" style={{'border-radius': '50%', width:'15px', height: '50px'}}>
          <i className={`fas fa-camera`} ></i>
          </Button>
        </label>
      </Box>
    </>
  );
}
