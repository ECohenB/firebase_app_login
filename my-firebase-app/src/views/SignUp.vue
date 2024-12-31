<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { app } from "../firebaseConfig"; // Asumiendo que tienes la configuración de Firebase exportada
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async handleSignUp() {
        const auth = getAuth(app);
        this.errorMessage = ""; // Limpiar cualquier error previo
  
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/home"); // Redirige al usuario a la página de inicio después de registrarse
        } catch (error) {
          // Mostrar el error si ocurre
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    padding: 0 0 5px 0;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #8a968b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #5e685e;
  }
  
  .error-message {
    color: red;
    text-align: center;
  }
  </style>
  