import React from 'react';
import { useLocation } from 'react-router-dom';

const PageName = () => {
  const location = useLocation();
  const regex = location.pathname;

  const pathName = regex.replace(/[^\w\s]/gi, '');
  return (
    <div className="page-name">
      <div className="line" />
      <p className="path-name">{pathName}</p>
    </div>
  );
};
export default PageName;
