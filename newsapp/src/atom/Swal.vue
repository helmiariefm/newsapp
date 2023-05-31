<template>
  <div></div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js';

export default {
  mounted() {
    Swal.fire({
      title: this.title,
      text: this.text,
      icon: this.icon,
      confirmButtonText: this.confirmButtonText,
    }).then(() => {
      this.$emit('confirmed');
    });
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    confirmButtonText: {
      type: String,
      required: true,
    },
  },
};
</script>
