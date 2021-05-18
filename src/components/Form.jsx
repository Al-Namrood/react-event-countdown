import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Form = (props) => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      event: event,
      date: date,
    });

    setEvent("");
    setDate("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <TextField
          type="text"
          name="event"
          placeholder="Go to Mars"
          id="event"
          value={event}
          required
          variant="outlined"
          onChange={(e) => setEvent(e.target.value)}
        />
      </div>

      <div>
        <TextField
          type="date"
          name="date"
          placeholder="14/12/2024..."
          id="date"
          value={date}
          required
          variant="outlined"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <Button
          type="submit"
          value="Save event"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
