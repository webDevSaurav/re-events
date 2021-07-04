import React from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
const EventForm = ({ setFormOpen }) => {
  return (
    <Segment clearing>
      <Header>Event Form</Header>
      <Form>
        <Form.Field>
          <input type="text" placeholder="Enter name" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="date" />
        </Form.Field>
        <Button positive content="Submit" floated="right" />
        <Button
          type="submit"
          content="Cancel"
          floated="right"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
