<script>
  import Form from '../components/Form.vue';  

  export default{
    components: {
      Form
    }
  }
</script>

<template>
  <div class="edit-news">
    <h1>Edit Berita</h1>
    <Form/>
  </div>
</template>
  
<style>
  .edit-news {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .edit-news h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
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
  
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .save-button,
  .cancel-button {
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .save-button {
    background-color: darkgreen;
    color: #f8f8f8;
    margin-right: 10px;
  }
  
  .cancel-button {
    background-color: #ddd;
    color: #222222;
    text-decoration: none;
  }
</style>
  