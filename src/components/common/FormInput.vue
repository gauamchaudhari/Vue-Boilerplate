<template>
    <div class="mb-3">
      <label :for="id" class="form-label">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        v-model="modelValue"
        class="form-control"
        :placeholder="placeholder"
        :class="{ 'is-invalid': error }"
      />
      <div v-if="error" class="invalid-feedback">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: { type: String, required: true },
      label: { type: String, required: true },
      id: { type: String, required: true },
      placeholder: { type: String, default: '' },
      type: { type: String, default: 'text' },
      error: { type: String, default: null },
    },
    emits: ['update:modelValue'],
  };
  </script>
  
  <style scoped>
  .invalid-feedback {
    color: red;
  }
  </style>
  