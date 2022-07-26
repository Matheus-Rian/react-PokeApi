import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button 
      type='button' 
      className={styles.button} 
      onClick={() => window.alert('Funcionalidade não implementada')}
    >
      { children }
    </button>
  )
}