<template>
  <section id="quote">
    <div v-if="selectedQuote" class="quote">
      <div class="quote-detail">
        <h1 v-html="selectedQuote.body"></h1>

        <h3>-{{selectedQuote.author}}</h3>
      </div>

      <div class="tags">
        <ul>
          <li v-for="(tag,index) in selectedQuote.tags" :key="index">
            <button @click="onClick(tag)" :class="{highlight:selectedTag===tag}">{{tag}}</button>
          </li>
        </ul>
      </div>
      <nuxt-link class="btn" to="/quotes">Back to Quotes</nuxt-link>
      <a
        class="btn"
        :href="`https://wa.me/13218052616?text=${selectedQuote.body}`"
        target="_blank"
      >Share via Whatsapp</a>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.selectedQuote.author}`
    };
  },
  data() {
    return {};
  },

  computed: {
    selectedTag() {
      return this.$route.query.tag;
    },
    selectedQuote() {
      const quoteId = this.$route.params.id;
      const quotes = this.$store.getters["quotes/quotes"];
      const quote = quotes.find(q => q.id.toString() === quoteId);
      return quote;
    }
  },
  methods: {
    onClick(tag) {
      console.log("tag: ", tag);
      this.$store.dispatch("quotes/setFilter", tag);
      this.$router.push("/quotes");
    }
  }
};
</script>

<style>
section#quote {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
}
.quote-detail {
  background: #2b2626;
  color: #ffff;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #333333;
}
.quote {
  max-width: 1080px;
  padding: 0 3rem;
}
.quote h1,
h3 {
  margin-bottom: 1.2rem;
}

.quote h1,
h2,
h3 {
  font-weight: lighter;
}
.quote ul {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.quote ul li {
  list-style: none;
  margin-bottom: 0.6rem;
}

.quote button {
  background: #555555;
  color: white;
  border: none;
  border-radius: 20px;
  margin-right: 0.5rem;
  padding: 5px 15px;
  font-size: 1rem;
}

.quote .btn {
  background: #222222;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 0.5rem;
  padding: 15px;
  font-size: 1rem;
  margin: 1rem auto;
  display: block;
  width: 150px;
  text-align: center;
}
.tags {
  margin: 0 auto;
}

button.highlight {
  background: #888888;
  color: #eee;
}

@media (min-width: 768px) {
  .quote h1 {
    font-size: 2.5rem;
  }

  .quote ul {
    flex-direction: row;
  }
}
</style>