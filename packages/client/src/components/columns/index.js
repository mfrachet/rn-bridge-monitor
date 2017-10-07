import React from 'react';

export default function ({ children, multiline }) {
  const style = multiline && 'is-multiline';
  return <div className={`columns ${style}`}>{children}</div>;
}
