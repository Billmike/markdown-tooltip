import React, { useState } from 'react';
import MarkDown from 'react-markdown';
import ToolTip from './tooltip';
import './App.css';

function App() {
  const [selectedTextState, setSelectedTextState] = useState({
    selectedText: '',
    formattedFullText: '',
    originalFullText: '',
    value: ''
  });

  /**
   * onSelect to listen for a select event
   *
   * @param {Object} event The event object passed to the input field
   *
   * @returns {void}
   */
  const onSelect = (event) => {
    const selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if (selectedText.length >= 1) {
      setSelectedTextState({ ...selectedTextState, selectedText, originalFullText: event.target.value });
    }
  }

  /**
   * Format text
   * @param {String} formatType The markdown format type (Bold, italic, quotes, etc)
   *
   * @returns {void}
   */
  const formatText = (formatType) => {
    let formattedString;
    let formattedFullText;
    switch (formatType) {
      case 'bold':
        formattedString = `**${selectedTextState.selectedText}**`;
        break;
      case 'italic':
        formattedString = `*${selectedTextState.selectedText}*`;
        break;
      default:
        break;
    }
    formattedFullText = selectedTextState.originalFullText.replace(selectedTextState.selectedText, formattedString);
    setSelectedTextState({ ...selectedTextState, formattedFullText, value: formattedFullText });
  }

  /**
   * onChange to listen for a change event on the input field
   *
   * @param {Object} event The event object
   *
   * @returns {void}
   */
  const onChange = (event) => {
    const { value } = event.target;
    setSelectedTextState({ ...setSelectedTextState, value });
  }

  return (
    <div>
      <input
        placeholder="Enter text"
        type="text"
        id="selectText"
        value={selectedTextState.value}
        onChange={onChange}
        onSelect={onSelect}
      />
      {selectedTextState.selectedText && <ToolTip
        formatText={formatText}
      />}
      {
        selectedTextState.formattedFullText && <MarkDown
          source={selectedTextState.formattedFullText}
        />
      }
    </div>
  );
}

export default App;
