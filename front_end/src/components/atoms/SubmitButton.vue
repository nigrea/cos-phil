<template>
  <i @click.stop="clicked($event)" class="btn btn-primary">
    {{text}}
  </i>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    text: {
      type: String,
      default: " "
    }
  },
  methods: {
    clicked(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
