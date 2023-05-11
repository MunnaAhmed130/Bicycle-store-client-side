import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import "./AddAProduct.css";

const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data.value);
    axios.post("http://localhost:4000/products", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        setSuccess(true);
        reset();
      }
    });
  };

  return (
    <div className="add-product">
      <h2 className="my-4">Add a Product for admin</h2>
      {success && (
        <Alert severity="success">
          A New Product has been Successfully added
        </Alert>
      )}
      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Product Name" /> <br /> <br />
        <textarea
          type="text"
          {...register("description")}
          placeholder="Short description"
        />{" "}
        <br />
        <input type="number" {...register("price")} placeholder="price" />{" "}
        <br /> <br />
        <label htmlFor="upload-photo" className="file-label">
          Upload a Photo
        </label>
        <br /> <br />
        <input {...register("img")} type="file" id="upload-photo" /> <br />
        <Button type="submit" style={{ marginTop: "5px" }} variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddAProduct;
