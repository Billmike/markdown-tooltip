import React from 'react';
import { markdownOptions } from '../utils/markdownOptions';
import './tooltip.scss';

export default function index({ formatText, selectedText, originalFullText }) {
  /**
   * 
   * @param {String} markdownType The markdown type. Could be any of Bold, italics,
   * quotes, etc
   */
  const markdownFormat = (markdownType) => {
    let formattedString;
    let formattedFullText;

    switch (markdownType) {
      case 'bold':
        formattedString = `**${selectedText}**`;
        break;
      case 'italics':
        formattedString = `*${selectedText}*`;
        break;
      case 'quotes':
        formattedString = `>${selectedText}`;
        break;
      default:
        break;
    }
    formattedFullText = originalFullText.replace(selectedText, formattedString);
    formatText(formattedFullText)
  }

  return (
    <div className="tool-tip-container">
      {
        markdownOptions.map(({ markdownType, icon }) => (
          <button
            key={markdownType}
            className="tooltip-text"
            onClick={() => markdownFormat(markdownType)}
          >
            {icon}
          </button>
        ))
      }
    </div>
  )
}
