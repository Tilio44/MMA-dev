
async function fetchEvents() {
    const response = await fetch('https://api.smarkets.com/v3/events/?state=upcoming&type=mma_match&type_domain=mma&type_scope=single_event&sort=id&limit=20');
    const data = await response.json();
    const filteredEvents = data.events.map(event => ({
      bet_allowed: event.bet_allowed,
      bettable: event.bettable,
      id: event.id,
      name: event.name,
      start_datetime: event.start_datetime,
      state: event.state,
      type: event.type,
      odds: event.odds
    }));
    return filteredEvents;
}

async function displayEvents() {
    const events = await fetchEvents();
    const eventsList = document.getElementById('events-list');

    events.forEach(event => {
      const listItem = document.createElement('li');
      listItem.textContent = event.name;
      eventsList.appendChild(listItem);
    });
}

displayEvents();