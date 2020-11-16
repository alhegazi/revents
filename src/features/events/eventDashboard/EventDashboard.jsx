import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
//import { sampleData } from '../../../app/api/sampleData';
import { useSelector } from 'react-redux';
//import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  //const [events, setEvents] = useState(sampleData);

  /*function handleCreateEvent(event) {
        setEvents([...events, event]);
    }

    function handleUpdateEvent(updatedEvent) {
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
        selectEvent(null);
    }*/

  /*function handleDeleteEvent(eventId){
       // setEvents(events.filter(evt => evt.id !== eventId));
    }*/

  //if (loading) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
