const actions = {
  async nuxtServerInit(context) {
    console.log("nuxtServerInitCalled");
    await context.dispatch("quotes/setQuotes");
  }
};

export default {
  actions
};
