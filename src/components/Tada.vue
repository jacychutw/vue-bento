<template>
  <img
    class="final-item"
    alt="Bento Small"
    :src="require(`../assets/images/items/${tada}.png`)"
  >
</template>

<script>
export default {
  data () {
    let itemList = [];
    for(let i =1; i<67;i++) {
      itemList.push(i)
    }
    return {
      items: itemList,
    }
  },
  computed: {
    tada() {
      return this.items[Math.floor(Math.random() * 66)]
    }
  }
}
</script>

<style>
.final-item {
  height: 200px;
  width: 200px;
}
</style>