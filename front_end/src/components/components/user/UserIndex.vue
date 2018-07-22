<template>
  <div>
      <p v-for="user in users" :key="user.id">{{user.firstName}} {{user.lastName}}</p>
  </div>
</template>

<script>
export default {
  name: "UserIndex",
  props: {},
  data() {
    return {
      users: [],
      responseBody: null
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      this.$http.get(this.baseUrl + "/user").then(
        response => {
          this.users = response.body;
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
