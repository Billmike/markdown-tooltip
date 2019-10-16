import React, { useState } from 'react';
import MarkDown from 'react-markdown';
import ToolTip from './components/tooltip';
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
   * @param {String} formattedFullText The formatted full text with the markdown
   *
   * @returns {void}
   */
  const formatText = (formattedFullText) => {
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
        selectedText={selectedTextState.selectedText}
        originalFullText={selectedTextState.originalFullText}
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
