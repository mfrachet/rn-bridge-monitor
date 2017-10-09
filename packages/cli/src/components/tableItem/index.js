import React from 'react';

export default function ({ text }) {
  const toDisplay = text instanceof Object ? JSON.stringify(text) : text;
  return <div>{toDisplay}</div>;
}
