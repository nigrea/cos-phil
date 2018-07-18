<template>
  <input class="form-control" :type="type" :placeholder="placeholder" :value="value" @input="input">
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "Text"
    }
  },
  methods: {
    input(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
