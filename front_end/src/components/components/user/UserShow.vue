<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
      
        {{username}}

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "UserCreate",
  props: {},
  data() {
    return {
      username: "Test",
      submitted: false,
      responseBody: null
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$http.get(this.baseUrl + "/user/show").then(
        response => {
          this.username = response.body.username;
        },
        response => {
          this.responseBody = response.body;
        }
      );
    }
  },
  computed: {
    baseUrl() {
      return this.$store.state.apiBaseRoute;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
