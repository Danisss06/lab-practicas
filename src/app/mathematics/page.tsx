// src/app/mathematics/page.tsx
import React from "react";
import MathematicsContent from "./MathematicsContent";

/**
 * The Mathematics page will render the MathematicsContent component
 * with the selected topic index.
 * 
 * @returns the Mathematics page content
 */
const MathematicsPage = () => {
  // For now, provide a placeholder for the selected index
  const selectedTopicIndex = 0; // Replace with the actual index from context or layout as needed

  return <MathematicsContent selectedTopicIndex={selectedTopicIndex} />;
};

export default MathematicsPage;
