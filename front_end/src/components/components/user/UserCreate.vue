<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
      
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="First Name"
            placeholder="Jane"
            v-model="first_name"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Last Name"
            placeholder="Doe"
            v-model="last_name"
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
      first_name: "",
      last_name: "",
      submitted: false,
    };
  },
  methods: {
    createUser() {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
