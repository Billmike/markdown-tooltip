import React, { useState } from 'react';
import MarkDown from 'react-markdown';
import ToolTip from './tooltip';
import './App.css';

function App() {
  const [selectedTextState, setSelectedTextState] = useState({
    selectedText: '',
    inputText: '',
    fullText: '',
    value: ''
  });

  const onSelect = (event) => {
    const selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if (selectedText.length >= 1) {
      setSelectedTextState({ ...selectedTextState, selectedText, fullText: event.target.value });
    }
  }

  const setBold = () => {
    const formattedString = `**${selectedTextState.selectedText}**`;
    const inputText = selectedTextState.fullText.replace(selectedTextState.selectedText, formattedString);
    setSelectedTextState({ ...selectedTextState, inputText, value: inputText });
  }

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
        setBold={setBold}
      />}
      {
        selectedTextState.inputText && <MarkDown
          source={selectedTextState.inputText}
        />
      }
    </div>
  );
}

export default App;
