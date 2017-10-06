import React from 'react';
import './style.css';

export default function ({ type, module, method, args = [] }) {
  const parsedArgs = args.map(arg => JSON.stringify(arg)).join(', ');
  const direction =
    type === 1 ? (
      <span className="toNative">[JS to Native]</span>
    ) : (
      <span className="toJS">[Native to JS]</span>
    );
  return (
    <div>
      {direction} {module}.<span className="method">{method}</span>({parsedArgs})
    </div>
  );
}
