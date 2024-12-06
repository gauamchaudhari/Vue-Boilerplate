<template>
  <div class="form-group">
   
    <input
      :type="type"
      :id="id"
      v-bind="$attrs"
      v-model="inputValue"
      class="form-control"
      :class="{ 'is-invalid': error }"
    />
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: String,
    type: { type: String, default: "text" },
    error: String,
    modelValue: [String, Number],
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
