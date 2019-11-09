<template>
  <section>
    <main>
      <div>
        <h1>Start your day with a random Quote</h1>
        <img src="/quote.jpg" alt />
        <nuxt-link to="/quotes/" class="quoteBtn">Get Quotes!</nuxt-link>
      </div>
    </main>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {},
  methods: {
    ...mapMutations({
      setQuotes: "quotes/SET_QUOTES"
    })
  },
  computed: {
    ...mapGetters({
      quotes: "quotes/quotes"
    })
  },
  created() {
    console.log("created called");
  }
};
</script>

<style>
main {
  margin-top: 56px;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
}

main div {
  flex-basis: 90%;
  text-align: center;
}

main img {
  height: 350px;
  /* max-width: 250px; */
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
main div h1 {
  font-size: 2rem;
  font-weight: lighter;
  margin: 20px 0;
}

main div .quoteBtn {
  background: rgb(51, 139, 255);
  border: none;
  padding: 1.2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: lighter;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: block;
  text-decoration: none;
  width: 200px;
  margin: 0px auto;
  position: relative;
  top: -10px;
}

main div .quoteBtn:hover {
  transform: scale(1.01);
}

@media (min-width: 600px) {
  main div h1 {
    font-size: 3rem;
  }
}
</style>
