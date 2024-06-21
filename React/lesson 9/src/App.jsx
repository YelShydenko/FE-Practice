import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { MdClose } from "react-icons/md";
import { createNote, removeNote } from "./store/features/noteSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState("");
  const { data } = useSelector((state) => state.notes);

  const handleAddNote = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let noteData = Object.fromEntries(formData);

    dispatch(
      createNote({
        id: uuidv4(),
        ...noteData,
        tags: [],
      })
    );
  };

  const handleDeleteNote = (noteId) => {
    dispatch(removeNote(noteId));
  };

  const deleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <div className="todo">
      <div className="todo-aside">
        <div className="todo-aside__header">
          <div className="form-item">
            <label htmlFor="search">Search:</label>
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
                className="form-control"
                placeholder="Search by tag..."
              />
              <MdClose className="search-icon" />
            </div>
          </div>
        </div>
        <div className="todo-aside__content">
          <form className="form" onSubmit={handleAddNote}>
            <div className="form-item">
              <label htmlFor="label">Add Note:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add tags using # symbol"
                name="content"
                id="label"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button className="btn">ADD</button>
          </form>
        </div>
        <div className="todo-aside__footer">
          <button className="btn" onClick={deleteAll}>
            Delete all notes
          </button>
        </div>
      </div>
      <div className="todo-content">
        <h2>Notes List</h2>
        <div className="note-list">
          {data &&
            data.map((elem, index) => (
              <div className="item" key={elem.id}>
                <div className="item__header">
                  <p className="item__text">
                    <b>{index + 1}.</b> {elem.content}
                  </p>
                  {/* <textarea type="text" className='item__textarea'/>  */}
                  <div className="item__action">
                    <button className="btn">Edit</button>
                    <button
                      className="btn"
                      onClick={() => handleDeleteNote(elem.id)}
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="item__footer">
                  <ul className="tag">
                    <li className="tag__item">#web</li>
                    <li className="tag__item">#front</li>
                  </ul>
                  {/* <input 
                            type="text" 
                            className='tag-input'
                            placeholder='Use # symbol to add new tag'
                           /> */}
                  <div className="item__action">
                    <button className="btn">ADD</button>

                    {/* <button className="btn">Save</button> 
                          <button className="btn">Cancel</button>  */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
