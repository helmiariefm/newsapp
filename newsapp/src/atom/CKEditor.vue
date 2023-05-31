<template>
  <div class="form-group">
    <label :for="id">{{ label }}:</label>
    <ckeditor :editor="editor" :config="editorConfig" :value="value" @input="$emit('update:value', $event)" :id="id"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
  components: {
    ckeditor: CKEditor.component,
  },
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
    editorConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editor: ClassicEditor,
    };
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
</style>
