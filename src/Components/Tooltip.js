import React, { useState } from 'react';
import './Tooltip.css'; // Ajuste o caminho conforme necessário

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="container"
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}>
      {children}
      {showTooltip && <div className="info">{text}</div>}
    </div>
  );
};

export default Tooltip;
