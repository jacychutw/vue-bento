<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="logo py-1 my-4 mt-16 d-flex justify-center">
        <BentoSmall />
      </div>
        <h1 class="d-flex justify-center">
          There's a smaller bag inside!
        </h1>
        <div class="d-flex justify-center mt-16">
          <v-btn
            color="#9eada1"
            width="240px"
            @click="toTada"
          >
            Unbox
          </v-btn>
        </div>
    </v-col>
  </v-row>
</template>

<script>
  import BentoSmall from '../components/BentoSmall'

  export default {
    name: 'SecondBag',
    components: {
      BentoSmall,
    },
    methods: {
      toTada() {
        this.$router.push({ name: 'Tada' });
      },
    },
  }
</script>