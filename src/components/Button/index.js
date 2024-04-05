import React from 'react';
import { Link } from "react-router-dom";
import { ButtonElement } from './button.element';

const Button = ({ variant, to, onClick, type, children}) => {
  return (
    <>
      {variant === 'link' ? (
        <ButtonElement>
          <Link to={to} onClick={onClick} className='button-link'>{children}</Link>
        </ButtonElement>
      ) : (
        <ButtonElement onClick={onClick} type={type}>{children}</ButtonElement>
      )}
    </>
  )
};

export default Button 