import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
//import { sampleData } from '../../../app/api/sampleData';
import { useSelector } from 'react-redux';

export default function EventDashboard() {
    
    const { events } = useSelector(state => state.event)

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

    
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    )
}