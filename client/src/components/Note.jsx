import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const priorityColors = {
    low: "#8DDFCB",
    medium: "#ECEE81",
    high: "#FF9B50",
  };

  const noteStyle = {
    backgroundColor: priorityColors[props.priority] || "transparent",
    textDecoration: props.status ? "line-through" : "none",
  };

  const statusTextStyle = {
    textDecoration: "none", // Ensure "Status" text is not strikethrough
  };

  function handleClick() {
    props.onDelete(props.id);
  }

  function toggleStatus() {
    props.onStatusToggle(props.id);
  }

  return (
    <div className="note" style={noteStyle}>
      <h1>{props.title}</h1>
      <p style={{ textDecoration: props.status ? "line-through" : "none" }}>
        {props.content}
      </p>
      {props.dueDate && (
        <p style={{ fontSize: "12px", color: "#888" }}>
          Due Date: {formatDueDate(props.dueDate)}
        </p>
      )}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <label className="status-checkbox">
        <input
          type="checkbox"
          checked={props.status}
          onChange={toggleStatus}
        />
        <span style={statusTextStyle}>Status</span>
      </label>
    </div>
  );
}

function formatDueDate(dueDate) {
  // You can use JavaScript Date methods to format the due date as needed
  const formattedDueDate = new Date(dueDate).toLocaleDateString();
  return formattedDueDate;
}

export default Note;
