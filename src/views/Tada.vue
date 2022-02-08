<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="logo py-1 mt-16 my-4 d-flex justify-center">
        <TadaLa />
      </div>
        <h1 class="d-flex justify-center">
          TADA!<br>
          Do you like it?
        </h1>
        <div class="d-flex justify-center mt-16">
          <v-btn
            color="#9eada1"
            width="240px"
            @click="toHome"
          >
            Back
          </v-btn>
        </div>
    </v-col>
  </v-row>
</template>

<script>
  import TadaLa from '../components/Tada'

  export default {
    name: 'Tada',
    components: {
      TadaLa,
    },
    methods: {
      toHome() {
        this.$router.push({ name: 'Home' });
      },
    },
  }
</script>
