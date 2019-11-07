import React from 'react';
import PropTypes from 'prop-types';
import { markdownOptions } from '../../utils/markdownOptions';
import './tooltip.scss';

export default function ToolTip({ formatText, selectedText, originalFullText }) {
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
      case 'largeText':
        formattedString = `# ${selectedText}`;
        break;
      case 'smallText':
        formattedString = `### ${selectedText}`;
        break;
      case 'code':
        formattedString = `\`\`\`${selectedText}\`\`\``;
        break;
      default:
        break;
    }
    formattedFullText = originalFullText.replace(selectedText, formattedString);
    formatText(formattedFullText)
  }

  return (
    <div className="tooltip-container">
      {
        markdownOptions.map(({ markdownType, icon }) => (
          <div key={markdownType} className="tooltip-option">
            <button
              className={`tooltip-option-btn tooltip-option-btn-${markdownType}`}
              onClick={() => markdownFormat(markdownType)}
            >
            {icon}
            </button>
          </div>
        ))
      }
      <div className="tooltip-caret" />
    </div>
  )
}

ToolTip.propTypes = {
  formatText: PropTypes.func,
  selectedText: PropTypes.string,
  originalFullText: PropTypes.string
};
