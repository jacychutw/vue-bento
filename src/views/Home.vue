<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="logo py-1 my-4 d-flex justify-center">
        <BentoLarge />
      </div>
        <h1 class="d-flex justify-center">
          What's in the bag?
        </h1>
        <div class="d-flex justify-center mt-16">
          <v-btn
            color="#9eada1"
            width="240px"
            @click="toSecondBag"
          >
            Unbox
          </v-btn>
        </div>
    </v-col>
  </v-row>
</template>

<script>
  import BentoLarge from '../components/BentoLarge'

  export default {
    name: 'Home',
    components: {
      BentoLarge,
    },
    data () {
      return {
        bags: ['../assets/images/bags/blue.png','../assets/images/bags/gray.png','../assets/images/bags/orange.png','../assets/images/bags/pink.png','../assets/images/bags/purple.png','../assets/images/bags/red.png','../assets/images/bags/rose.png','../assets/images/bags/white.png']
      }
    },
    methods: {
      toSecondBag() {
        this.$router.push({ name: 'SecondBag' });
      },
    },
  }
</script>
