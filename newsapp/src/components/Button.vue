<template>
    <button :class="buttonClass" @click="handleClick">
      {{ buttonText }}
    </button>
</template>
  
<script>
  export default {
    props: {
      to: {
        type: String,
        required: true,
      },
      saveButton: {
        type: Boolean,
        default: false,
      },
      cancelButton: {
        type: Boolean,
        default: false,
      },
      buttonText: {
        type: String,
        required: true,
      }    
    },
    computed: {
      buttonClass() {
        return {
          'save-button': this.saveButton,
          'cancel-button': this.cancelButton,
        };
      },
    },
    methods: {
      handleClick() {
        this.$router.push(this.to);
      },
    },
  };
</script>
  
<style scoped>
  .button-link {    
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
  }
  
  .save-button {
    background-color: darkgreen;
    color: #f8f8f8;
    margin-right: 10px;
  }
  
  .cancel-button {
    background-color: #ddd;
    color: #222222;
  }
  
  .edit {
    background-color: darkgreen;
    text-decoration: none;
    color: #f8f8f8;
    border-radius: 4px;
    padding: 3px 7px;
  }
  
  .edit:hover {
    background-color: darkseagreen;
    color: #222222;
  }
</style>
  