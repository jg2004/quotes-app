<template>
  <nav>
    <nuxt-link to="/">Quotify</nuxt-link>
  </nav>
</template>

<script>
</script>

<style>
nav {
  position: fixed;
  height: 56px;
  top: 0;
  left: 0;
  width: 100%;
  background: rgb(51, 139, 255);
  box-shadow: 0 3px 3px rgb(207, 230, 245);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: lighter;
}
</style>