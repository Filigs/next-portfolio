// components\DynamicForm.js
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { uploadImage } from "../lib/cloudinary";
import { generateSlug } from "../utils/generateSlug";

const DynamicForm = ({
  onSubmit: onSubmitProp,
  fields,
  itemData,
  onClose,
  onUpdate,
  action,
  fetchOptions,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: itemData || {},
  });

  console.log("fields: ", fields);
  console.log("onSubmitProp: ", onSubmitProp);
  console.log("itemData: ", itemData);
  console.log("onClose: ", onClose);
  console.log("onUpdate: ", onUpdate);
  console.log("action: ", action);
  console.log("fetchOptions: ", fetchOptions);
  // console.log("initialValues: ", initialValues);

  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [fieldOptions, setFieldOptions] = useState({});

  const title = watch("title");

  const router = useRouter();

  // useEffect hooks
  useEffect(() => {
    if (fetchOptions) {
      const fetchData = async () => {
        try {
          const options = await fetchOptions();
          console.log("fetched options:", options);
          setFieldOptions(options);
        } catch (error) {
          console.error("Failed to fetch options:", error);
        }
      };

      fetchData();
    }
  }, [fetchOptions]);

  useEffect(() => {
    fields.forEach((field) => {
      if (field.type === "select") {
        register(field.name, { required: "Tag is required" });
        setValue(field.name, fieldOptions[field.name]);
      } else if (field.type !== "file" && field.type !== "cloudinaryImage") {
        register(field.name);
      }
    });
  }, [register, setValue, fieldOptions, fields]);

  useEffect(() => {
    if (title) {
      setValue("slug", generateSlug(title));
    }
  }, [title, setValue]);

  const renderInput = (field) => {
    const { name, type, placeholder, required } = field;
    console.log("field name:", name);
    // Add a case for file uploads
    if (type === "file") {
      return (
        <input
          type="file"
          name={name}
          id={name}
          className="form-input"
          {...(required ? { required } : {})}
        />
      );
    }

    // Add a case for Cloudinary image uploads
    if (type === "cloudinaryImage") {
      return (
        <div>
          {/* <label htmlFor={name} className="inputLabel">
            {label}:
          </label> */}
          <input
            type="file"
            accept="image/*"
            name={name}
            id={name}
            className="textInput"
            disabled={!!imageUrl}
            {...(required ? { required } : {})}
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                setUploading(true);
                try {
                  const uploadedImageUrl = await uploadImage(file);
                  setValue(name, uploadedImageUrl);
                  setImageUrl(uploadedImageUrl);
                  setSuccessMessage(
                    "Image has been uploaded to the cloud successfully!"
                  );
                } catch (err) {
                  console.error("Error while uploading image:", err);
                  setSuccessMessage(""); // reset the success message
                  // set an error message here
                }
                setUploading(false);
              }
            }}
          />
          <input type="hidden" {...register(name)} />
          {uploading && <p className="infoMessage">Uploading image...</p>}
          {successMessage && <p className="successMessage">{successMessage}</p>}
          {imageUrl && (
            <p className="uploadImageMessage">
              Cloudinary link: <a href={imageUrl}>{imageUrl}</a>
            </p>
          )}
        </div>
      );
    }

    // The existing code for other input types
    return (
      <input
        type={type}
        name={name}
        id={name}
        className="textInput"
        placeholder={placeholder || ""}
        {...(required ? { required } : {})}
        {...register(name)}
      />
    );
  };

  // onSubmit function
  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      let postData = { ...data };

      // If a tag is selected, replace the tag object with the _id of the tag
      if (postData.tag) {
        postData.categoryId = postData.tag._id;
        delete postData.tag;
      }
      if (typeof postData.content === "object") {
        postData.content = JSON.stringify(postData.content);
      }
      if (itemData) {
        if (typeof action.update === "function") {
          console.log("Updating item...");
          const response = await action.update(itemData._id, postData);
          console.log("Server response:", response);

          if (response.error) {
            setErrorMessage(response.error);
          } else {
            onUpdate(response);
            onClose();
          }
        } else {
          throw new Error("Update function is not available");
        }
      } else {
        if (typeof action.create === "function") {
          console.log("Creating item...");
          const response = await action.create(postData);
          console.log("Server response:", response);

          if (response.error) {
            setErrorMessage(response.error);
          } else {
            onUpdate(response);
            onClose();
          }
        } else {
          throw new Error("Create function is not available");
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {fields &&
        fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name} className="inputLabel">
              {field.label}:
            </label>
            {renderInput(field)}
            {errors[field.name] && (
              <p className="errorMessage">{errors[field.name].message}</p>
            )}
          </div>
        ))}

      <button type="submit" className="submitButton">
        {itemData ? "Update Item" : "Submit"}
      </button>
    </form>
  );
};

export default DynamicForm;
