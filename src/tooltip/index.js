import React from 'react';
import './tooltip.scss';

export default function index({ setBold }) {
  return (
    <div className="tool-tip-container">
      <span onClick={() => setBold()} className="tooltip-text">B</span>
      <span className="tooltip-text">I</span>
    </div>
  )
}
