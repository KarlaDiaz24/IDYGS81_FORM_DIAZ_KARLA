<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="nombre">Nombre: </label>
        <input v-model="nombre" id="nombre" maxlength="18" required />
      
        <label for="apellido">Apellido: </label>
        <input v-model="apellido" id="apellido" maxlength="18" required />
        
        <label for="edad">Edad: </label>
        <input v-model.number="edad" id="edad" min="0" max="60" type="number" required />
  <label for="telefono">Número telefónico: </label>
        <input v-model.number="telefono" id="telefono" maxlength="10" required />
        <label for="genero">Género: </label>
        <br />
        <select v-model="genero" id="genero" required>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { agregarUsuario, verificarNombreExistente } from '@/components/forms';
 
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        edad: null,
        genero: '',
        telefono: null
      };
    },
    methods: {
      submitForm() {
        if (verificarNombreExistente(this.nombre)) {
          alert('El nombre ya existe. Ingresa otro nombre.');
          return;
        }
  
        agregarUsuario({
          nombre: this.nombre,
          apellido: this.apellido,
          edad: 0,
          genero: this.genero,
          telefono: 0
        });
        alert('Formulario enviado.');
        console.log('Formulario enviado:', this.nombre);
        this.limpiarFormulario();
      },
      limpiarFormulario() {
        this.nombre = '';
        this.apellido = '';
        this.edad = null;
        this.genero = '';
        this.telefono = null;
      },
    }
  };
  </script>
  
  <style>
  * {
    font-size: inherit;
  }
  
  input {
    display: block;
    margin-bottom: 10px;
  }

  label {
    display: flexbox;
    text-align:justify;
    margin-bottom: 1px;
  }
  
  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }
  
  .buttons {
    clear: both;
  }
  
  button + button {
    margin-left: 5px;
  }
  </style>
  