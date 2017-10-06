import React from 'react';
import './style.css';

export default function ({ onSelect, onClear }) {
  return (
    <nav className="navbar bg-secondary">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img
            src="https://vsmobile.gallerycdn.vsassets.io/extensions/vsmobile/vscode-react-native/0.4.2/1505715620264/Microsoft.VisualStudio.Services.Icons.Default"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="28"
            height="28"
          />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => onSelect('console')}>
            Streaming console
          </a>

          <a className="navbar-item" onClick={() => onSelect('module')}>
            Module details
          </a>

          <a className="navbar-item" onClick={() => onSelect('tree')}>
            Native Tree view
          </a>

          <a className="navbar-item" onClick={() => onSelect('improve')}>
            Improvements
          </a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item" onClick={onClear}>
            Clear data
          </a>
        </div>
      </div>
    </nav>
  );
}
