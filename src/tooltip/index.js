import React from 'react';
import './tooltip.scss';

export default function index({ formatText }) {
  return (
    <div className="tool-tip-container">
      <span onClick={() => formatText('bold')} className="tooltip-text">B</span>
      <span onClick={() => formatText('italic')} className="tooltip-text">I</span>
    </div>
  )
}
