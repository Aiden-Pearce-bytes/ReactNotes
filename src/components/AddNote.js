import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 250;

  const handleChange = (event) => {
    // console.log(event.target.value);
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      //Remove the WhiteSpaces
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="new note">
      <textarea
        rows={8}
        cols={10}
        placeholder={"Type to Add a Note"}
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default AddNote;
