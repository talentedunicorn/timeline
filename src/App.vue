<template>

  <main>
    <header>
      <h1>Your Timeline</h1>
    </header>

    <section>
      <h2>Add your event</h2>
      <form @submit.prevent="submitNewEvent">
        <h3>Date</h3>
        <input name="date" type="date" v-model="newEvent.date">
        <h3>Event title</h3>
        <input name="title" type="text" v-model="newEvent.title">
        <h3>Event desc</h3>
        <input name="details" type="text-area" v-model="newEvent.details">
        <input type="submit">
      </form>

    </section>

    <section>
      <ol v-if="events.length > 0">
        <li v-for="event, index in events" :key="index">
          <h2><time v-text="formatDate(event.date)"/></h2>
          <h3 v-text="event.title"/>
          <p v-text="event.details"/>
        </li>
      </ol>
      <p v-else>You gots nothing :(</p>
    </section>

  </main>

</template>

<script>
export default {
  data() {
    return {
      events: [],
      newEvent: {
        date: "",
        title: "",
        details: ""
      }
    }
  },
  methods: {
    submitNewEvent() {
      this.newEvent.date = new Date(this.newEvent.date)
      this.events.push(this.newEvent)
    },
    formatDate(eventDate) {
      let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      return eventDate.toLocaleDateString('en-GB',options)
    }
  }
}
</script>

