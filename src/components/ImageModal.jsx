import React from "react";

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="mt-12 fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close modal on backdrop click
    >
      <div
        className="border border-[#9aedb6] relative p-2 rounded-lg shadow-xl max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/modal content itself
      >
        <img
          src={src}
          alt={alt}
          className="object-contain w-full h-full max-h-[calc(90vh-40px)] rounded" // Max height to fit within viewport with padding
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 text-xl leading-none hover:bg-opacity-75"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
