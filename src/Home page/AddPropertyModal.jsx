import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Modal,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Box,
} from "@mui/material";

const AddProperty = ({ open, onClose, onPropertyAdded }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    userEmail: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
  });
  const [errors, setErrors] = useState({});

  const steps = ["Property Details", "Facilities & Email", "Upload Image"];

  const validateInput = (data, step) => {
    const validationErrors = {};
    if (step === 0) {
      if (!data.title) validationErrors.title = "Title is required";
      if (!data.description)
        validationErrors.description = "Description is required";
      if (!data.price || data.price <= 0)
        validationErrors.price = "Price must be a positive number";
      if (!data.country) validationErrors.country = "Country is required";
      if (!data.city) validationErrors.city = "City is required";
      if (!data.address) validationErrors.address = "Address is required";
    } else if (step === 1) {
      if (!data.facilities.bedrooms && data.facilities.bedrooms !== 0)
        validationErrors.bedrooms = "Bedrooms is required";
      if (!data.facilities.parkings && data.facilities.parkings !== 0)
        validationErrors.parkings = "Parkings is required";
      if (!data.facilities.bathrooms && data.facilities.bathrooms !== 0)
        validationErrors.bathrooms = "Bathrooms is required";
      if (!data.userEmail)
        validationErrors.userEmail = "User Email is required";
    } else if (step === 2) {
      if (!data.image) validationErrors.image = "Image is required";
    }
    return validationErrors;
  };
  const notify = () => toast("Property Added succesfully");

  const handleNext = () => {
    const validationErrors = validateInput(propertyData, activeStep);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleFacilityChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      facilities: { ...propertyData.facilities, [name]: parseInt(value, 10) },
    });
  };

  const handleImageChange = (e) => {
    setPropertyData({ ...propertyData, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const validationErrors = validateInput(propertyData, activeStep);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const formData = new FormData();
        Object.keys(propertyData).forEach((key) => {
          if (key === "facilities") {
            formData.append(key, JSON.stringify(propertyData[key]));
          } else {
            formData.append(key, propertyData[key]);
          }
        });

        const response = await fetch(
          "http://localhost:8080/routes/Residency/add-residency",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
          }
        );

        if (response.ok) {
          onClose();
          onPropertyAdded();
          // Optional: Display a success toast notification
        } else {
          console.error("Failed to add property:", await response.json());
        }
      } catch (error) {
        console.error("Error adding property:", error);
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 600 }, // Responsive width
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Stepper activeStep={activeStep} sx={{ marginBottom: 2 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Title"
                name="title"
                value={propertyData.title}
                onChange={handleChange}
                fullWidth
                error={!!errors.title}
                helperText={errors.title}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Description"
                name="description"
                value={propertyData.description}
                onChange={handleChange}
                fullWidth
                error={!!errors.description}
                helperText={errors.description}
                sx={{ marginBottom: 2 }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Price"
                name="price"
                type="number"
                value={propertyData.price}
                onChange={handleChange}
                fullWidth
                error={!!errors.price}
                helperText={errors.price}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Country"
                name="country"
                value={propertyData.country}
                onChange={handleChange}
                fullWidth
                error={!!errors.country}
                helperText={errors.country}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="City"
                name="city"
                value={propertyData.city}
                onChange={handleChange}
                fullWidth
                error={!!errors.city}
                helperText={errors.city}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Address"
                name="address"
                value={propertyData.address}
                onChange={handleChange}
                fullWidth
                error={!!errors.address}
                helperText={errors.address}
                sx={{ marginBottom: 2 }}
              />
            </Box>
          </Box>
        )}
        {activeStep === 1 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Bedrooms"
              name="bedrooms"
              type="number"
              value={propertyData.facilities.bedrooms}
              onChange={handleFacilityChange}
              fullWidth
              error={!!errors.bedrooms}
              helperText={errors.bedrooms}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Parkings"
              name="parkings"
              type="number"
              value={propertyData.facilities.parkings}
              onChange={handleFacilityChange}
              fullWidth
              error={!!errors.parkings}
              helperText={errors.parkings}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Bathrooms"
              name="bathrooms"
              type="number"
              value={propertyData.facilities.bathrooms}
              onChange={handleFacilityChange}
              fullWidth
              error={!!errors.bathrooms}
              helperText={errors.bathrooms}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="User Email"
              name="userEmail"
              value={propertyData.userEmail}
              onChange={handleChange}
              fullWidth
              error={!!errors.userEmail}
              helperText={errors.userEmail}
              sx={{ marginBottom: 2 }}
            />
          </Box>
        )}
        {activeStep === 2 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input type="file" onChange={handleImageChange} />
            {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={() => {
                handleSubmit();
                notify();
              }}
            >
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
          <ToastContainer />
        </Box>
      </Box>
    </Modal>
  );
};

export default AddProperty;
