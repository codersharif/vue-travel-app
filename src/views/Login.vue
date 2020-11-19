<template>
  <div class="login">
    <h2>Login</h2>
    <div class="form">
      <label for="">Username</label>
      <input type="text" v-model="username" class="input" />
      <label for="">Password</label>
      <input type="password" v-model="password" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>
<script>
import store from "@/store"
export default {
    data(){
        return{
            username:null,
            password:null
        }
    },
    methods:{
        login(){
         store.user = this.username;
         const redirectPath =this.$route.query.redirect || '/';
         this.$router.push(redirectPath);

        }
    }
}
</script>
<style scoped>
 .form{
     display: flex;
     flex-direction: column;
     max-width: 400px;
     margin: 0 auto;
 }
</style>>