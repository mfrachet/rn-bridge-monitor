import React from 'react';
import './style.css';
import Section from './../section';

export default function ({ children }) {
  return (
    <div className="console little-size">
      <Section>{children}</Section>
    </div>
  );
}
