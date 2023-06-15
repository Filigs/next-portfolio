// components/EditItemModal.js
import React from "react";
import DynamicForm from "./DynamicForm";

const EditItemModal = ({
  itemType,
  itemData,
  onClose,
  onUpdate,
  fields = [],
  action,
  fetchOptions,
}) => {
  if (!itemData) return null;

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-6xl p-8 mx-4 my-8 border rounded-md shadow-md bg-neutral-900 border-primary-300">
        <h1 className="mt-4 text-xl">{`Edit ${itemType}`}</h1>
        <button
          onClick={onClose}
          className="absolute text-4xl text-gray-600 top-2 right-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div className="w-full h-[calc(100vh-8rem)] mt-4 overflow-auto bg-neutral-900">
          <DynamicForm
            fields={fields}
            itemData={itemData}
            onClose={onClose}
            onUpdate={onUpdate}
            action={action}
            fetchOptions={fetchOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
