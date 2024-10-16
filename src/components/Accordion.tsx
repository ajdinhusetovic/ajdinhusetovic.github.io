import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [children]);

  return (
    <div
      className={`border border-gray-200 ${
        isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <button
        className="w-full py-4 px-6 text-left font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? contentHeight : "0px", // Dynamically set height
        }}
      >
        <div className="p-6 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
