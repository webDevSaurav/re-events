import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";
const EventDashboard = ({ formOpen, setFormOpen }) => {
  const [data, setData] = useState(sampleData);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={data} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
