import React from 'react';

const Button = ({ children, onClick, style, disabled = false }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007BFF', 
        color: '#FFF', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: disabled ? 'not-allowed' : 'pointer', 
        ...style 
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
