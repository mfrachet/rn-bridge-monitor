import React from 'react';

export default function ({ children, size }) {
  const style = size ? `column is-${size}` : 'column';
  return <div className={style}>{children}</div>;
}
