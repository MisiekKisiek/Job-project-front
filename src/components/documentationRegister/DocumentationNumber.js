import React from "react";

const DocumentationNumber = ({ code, name }) => {
  return (
    <div className="documentation-register__code">
      <div className="documentation-register__code-name">{name}</div>
      <div className="documentation-register__code-code">{code}</div>
    </div>
  );
};

export default DocumentationNumber;
