import React from 'react';
import { markdownOptions } from '../utils/markdownOptions';
import './tooltip.scss';

export default function index({ formatText }) {
  return (
    <div className="tool-tip-container">
      {
        markdownOptions.map(({ markdownType, icon }) => (
          <button
            key={markdownType}
            className="tooltip-text"
            onClick={() => formatText(markdownType)}
          >
            {icon}
          </button>
        ))
      }
    </div>
  )
}
