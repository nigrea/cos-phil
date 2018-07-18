<template>
  <div>
      <span>First Name:</span><StandardInputField v-model="first_name"></StandardInputField>
      <span>Last Name:</span><StandardInputField v-model="last_name"></StandardInputField>
      <SubmitButton text="test" @click="createUser"></SubmitButton>
  </div>
</template>

<script>
export default {
  name: "UserCreate",
  props: {},
  data() {
    return {
      first_name: "",
      last_name: ""
    };
  },
  methods: {
    createUser() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
