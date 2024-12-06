<template>
    <button @click="showAlert" class="btn btn-primary">
      {{ label }}
    </button>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    props: {
      label: { type: String, default: 'Click Me' },
    },
    methods: {
      showAlert() {
        Swal.fire({
          title: 'Alert!',
          text: 'This is a SweetAlert2 alert',
          icon: 'info',
          confirmButtonText: 'OK',
        });
      },
    },
  };
  </script>
  