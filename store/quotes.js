const API_KEY = "a02cffe2f506e8e2ce24e215e52cc4bd";

const state = () => {
  return {
    quotes: [],
    filter: "love"
  };
};

const getters = {
  quotes: state => state.quotes,
  filter: state => state.filter
};

const mutations = {
  SET_QUOTES: (state, quotes) => {
    state.quotes = quotes;
  },
  SET_FILTER: (state, filter) => {
    state.filter = filter;
  }
};

const actions = {
  async setQuotes(vuexContext) {
    console.log("setting quotes");
    this.$axios.setHeader("Authorization", `Token token=${API_KEY}`);
    this.$axios.setHeader("Content-Type", "application/json");
    const filter = vuexContext.getters["filter"];

    try {
      const response = await this.$axios.get(
        `quotes/?filter=${filter}&type=tag`
      );
      const quotes = response.data.quotes;
      vuexContext.commit("SET_QUOTES", quotes);
    } catch (error) {
      console.log("error:", error.message);
    }
  },
  setFilter: (vuexContext, filter) => {
    vuexContext.commit("SET_FILTER", filter);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
