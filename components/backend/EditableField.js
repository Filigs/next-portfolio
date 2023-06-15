// components/EditableField.js
import React, { useState } from "react";

const EditableField = ({ value, onUpdate, inputClassName = "", ...props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleUpdate = () => {
    setIsEditing(false);
    onUpdate(newValue);
  };

  return isEditing ? (
    <input
      {...props}
      value={newValue}
      onChange={(e) => setNewValue(e.target.value)}
      onBlur={handleUpdate}
      className={`focus:outline-none ${inputClassName}`}
      autoFocus
    />
  ) : (
    <span
      {...props}
      onClick={() => setIsEditing(true)}
      className="cursor-pointer"
    >
      {value}
    </span>
  );
};

export default EditableField;
