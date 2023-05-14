import React from "react";

function Popup({ open, onClose, children }) {
  return (
    // backdrop
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-20 ${
        open ? "visible bg-black/20" : "invisible bg-transparent"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow transition-all overflow-hidden ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 rounded-lg text-white bg-error"
        >
          x
        </button>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}

export default Popup;
