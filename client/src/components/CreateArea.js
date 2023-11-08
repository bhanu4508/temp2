import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers, materialCells } from "@jsonforms/material-renderers";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in "YYYY-MM-DD" format

  const initialNote = {
    title: "",
    content: "",
    priority: "low",
    dueDate: currentDate, // Set the default value to the current date
  };

  const [note, setNote] = useState(initialNote);

  async function submitNote() {
    console.log(note);
    await props.onAdd(note);
    setNote(initialNote);
  }

  const jsonSchema = {
    type: "object",
    properties: {
      title: { type: "string" },
      content: { type: "string" },
      priority: { type: "string", enum: ["low", "medium", "high"] },
      dueDate: { type: "string", format: "date" },
    },
  };

  const uischema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/title",
      },
      {
        type: "Control",
        scope: "#/properties/content",
        options: {
          multi: true,
        },
      },
      {
        type: "Control",
        scope: "#/properties/priority",
        label: "Priority",
      },
      {
        type: "Control",
        scope: "#/properties/dueDate",
        label: "Due Date",
      },
    ],
  };

  // Update the note state for each form field individually
  const handleFormChange = (event) => {
    setNote(event.data);
  };

  return (
    <div>
      <form className="create-note">
        <JsonForms
          data={note}
          schema={jsonSchema}
          uischema={uischema}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={handleFormChange}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
