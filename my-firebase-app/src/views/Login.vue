<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        const auth = getAuth();  
        const router = useRouter(); 
  
        try {
          
          await signInWithEmailAndPassword(auth, this.email, this.password);
          
          router.push("/home");
        } catch (error) {
          console.error("Error de login:", error.message);
          alert("Error de inicio de sesión. Por favor, revisa tus credenciales.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  