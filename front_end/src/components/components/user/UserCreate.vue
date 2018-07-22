<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
      
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Username"            
            v-model="username"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
        </v-flex>    

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-flex>  

        <v-btn @click.native="createUser" color="success">Submit</v-btn>

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
      username: "",
      email: "",
      password: "",
      submitted: false,
      responseBody: null
    };
  },
  methods: {
    createUser() {
      this.$http
        .post(this.baseUrl + "/user", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(
          response => {
            this.responseBody = response.body;
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
