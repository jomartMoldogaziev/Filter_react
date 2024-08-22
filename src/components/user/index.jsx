
import React from 'react';
import './User.css';

export const User = ({ el }) => {
  return (
    <div className={`user-card ${el.status === 'ADMINS' ? 'admins-background' : ''}`}>
      <div className="avatar">
        {el.image ? (
          <img src={el.image} alt={el.full_name} className="avatar-image" />
        ) : (
          <div 
            className="avatar-color" 
            style={el.color ? { backgroundColor: el.color } : {}}
          ></div>
        )}
      </div>
      <b>{el.full_name}</b>
    </div>
  );
}
