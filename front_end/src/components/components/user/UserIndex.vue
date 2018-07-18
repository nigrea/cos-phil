<template>
  <div>
      <span v-for="user in users" :key="user.id">{{user.first_name}} {{user.last_name}}</span>
  </div>
</template>

<script>
export default {
  name: "UserCreate",
  props: {},
  data() {
    return {
      users: []
    };
  },
  methods: {
    loadUsers() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
