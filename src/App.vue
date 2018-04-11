<template>
  <main>
    <header>
      <h1>Your Timeline</h1>
    </header>

    <section>
      <h2>Add your event</h2>
      <form @submit.prevent="submitNewEvent">
        <h3>Date</h3>
        <input name="date" type="date" v-model="eventDate">
        <h3>Event title</h3>
        <input name="title" type="text" v-model="eventTitle">
        <h3>Event desc</h3>
        <input name="details" type="text-area" v-model="eventDetails">
        <button>Submit</button>
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
      eventDate:'',
      eventTitle:'',
      eventDetails:'',
    }
  },
  methods: {
    submitNewEvent() {

      let event = {
        date: new Date(this.eventDate),
        title: this.eventTitle,
        details: this.eventDetails
      }

      this.events.push(event)
      this.clearInputs()
    },
    clearInputs() {
      this.eventDate = this.eventTitle = this.eventDetails = ""
    },
    formatDate(eventDate) {
      let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      return eventDate.toLocaleDateString('en-GB',options)
    }
  }
}
</script>

