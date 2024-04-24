
async function fetchEvents() {
    const response = await fetch('https://api.smarkets.com/v3/events/?state=upcoming&type=mma_match&type_domain=mma&type_scope=single_event&sort=id&limit=20');
    const data = await response.json();
    const filteredEvents = data.events.map(event => ({
      bet_allowed: event.bet_allowed,
      bettable: event.bettable,
      created: event.created,
      description: event.description,
      full_slug: event.full_slug,
      hidden: event.hidden,
      id: event.id,
      inplay_enabled: event.inplay_enabled,
      name: event.name,
      parent_id: event.parent_id,
      short_name: event.short_name,
      slug: event.slug,
      special_rules: event.special_rules,
      start_date: event.start_date,
      start_datetime: event.start_datetime,
      state: event.state,
      type: event.type
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