import React from "react";
import Image from "next/image";
import xmark from "../../../public/icons/xmark.svg";
import xmarkwhite from "../../../public/icons/xmarkwhite.svg";

type PopupProps = {
  title: string;
  answer: string;
  description?: string;
  images?: string[];
  width?: number;
  isDarkMode?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Custom popup component to avoid importing external packages and
 * to display the anwers to the example questions shown in the topics, 
 * some include images and a brief description, but all have a title 
 * and an answer.
 * 
 * @param title
 * @param answer
 * @param description
 * @param images
 * @param width
 * @param isDarkMode
 * @param isOpen
 * @param onClose
 * @returns Custom Popup component
 */
const Popup: React.FC<PopupProps> = ({
  title,
  answer,
  description,
  images,
  width,
  isDarkMode,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <button onClick={onClose} className="float-right hover:opacity-80">
          <div
            className="w-6 h-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "var(--close-icon)" }}
          ></div>
        </button>

        <h2 className="mt-9 text-xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mb-4"
          dangerouslySetInnerHTML={{ __html: answer }}
        />

        {description && (
          <p
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }text-gray-600 mb-4 preserve-whitespace`}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {description}
          </p>
        )}
        {images && images.length > 0 && (
          <div className="flex flex-col gap-2 overflow-auto items-center">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`popup-image-${index}`}
                width={width ? width : 80}
                height={80}
                className="object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
