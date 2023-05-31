<template>
  <div class="form-group">
    <label :for="id">{{ label }}:</label>
    <input type="text" :id="id" :value="value" :placeholder="placeholder" @input="$emit('update:value', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
  color: black;
}

.form-group label {
  font-weight: bold;
  color: #ddd;
}

.form-group input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
