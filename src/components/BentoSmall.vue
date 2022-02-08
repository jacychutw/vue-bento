<template>
  <img
    class="bento-small"
    alt="Bento Small"
    :src="require(`../assets/images/bags/${filename}.png`)"
  >
</template>

<script>
export default {
  data () {
    return {
      bags: ['blue','gray','orange','pink','purple','red','rose','white'],
    }
  },
  computed: {
    filename() {
      return this.bags[Math.floor(Math.random() * 8)]
    }
  }
}
</script>

<style>
.bento-small {
  height: 200px;
  width: 200px;
}
</style>
