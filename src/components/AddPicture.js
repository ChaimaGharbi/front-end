import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function AddPicture() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageURL("images/" + selectedImage.name);
    }
  }, [selectedImage]);
  return (
    <>
      {imageURL && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageURL} alt={selectedImage.name} height="100px" />
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
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
      </Box>
    </>
  );
}
