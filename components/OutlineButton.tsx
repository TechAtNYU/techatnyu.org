import React from "react";

interface Props {
    title?: React.ReactNode;
    href: string;
}

const OutlineButton: React.FC<Props> = ({title, href}) => { 
  return (
    <div className="outline-button">
      <a href={href}>
          <button>
          {title}
          <span></span>
          </button>
      </a>
    </div>
  );
}

export default OutlineButton;