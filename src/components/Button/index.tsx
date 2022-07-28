import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export function Button({ 
  children, 
  handleClick = () => window.alert('Funcionalidade não implementada')
}: ButtonProps) {
  return (
    <button 
      type='button' 
      className={styles.button} 
      onClick={() => handleClick()}
    >
      { children }
    </button>
  )
}