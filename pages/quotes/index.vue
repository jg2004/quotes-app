<template>
  <section id="quotes">
    <div class="input">
      <label for="tag">Search Tag</label>
      <input id="tag" @change="onChange" type="text" v-model="filter" placeholder="Enter a tag..." />
    </div>

    <div id="quoteCard" v-for="quote in quotes" :key="quote.id">
      <nuxt-link :to="`/quotes/${quote.id}/?tag=${filter}`" v-html="quote.body"></nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `Quotes | ${this.filter}`
    };
  },

  data() {
    return {
      filter: ""
    };
  },

  async created() {
    console.log("created called");
    this.filter = this.$store.getters["quotes/filter"];
    await this.$store.dispatch("quotes/setQuotes");
  },

  methods: {
    async onChange(event) {
      this.$store.dispatch("quotes/setFilter", this.filter);
      await this.$store.dispatch("quotes/setQuotes");
    }
  },
  computed: {
    quotes() {
      return this.$store.getters["quotes/quotes"];
    }
  }
};
</script>

<style>
#quotes {
  margin-top: 4rem;
}
#quoteCard {
  width: 70%;
  border: 0.5px solid grey;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin: 1.5rem auto;
}

#quoteCard a {
  color: #1e1e1e;
  text-decoration: none;
  font-size: 1.2rem;
}

#quotes .input {
  text-align: center;
  margin: 2rem;
}
#quotes .input input {
  font-size: 1.4rem;
  padding: 0.8rem 1.3rem;
  max-width: 70%;
  margin-top: 1rem;
}
#quotes label {
  font-size: 1.4rem;
  margin: 1rem;
}
</style>