<template>
    <div>
        <h2>Welcome {{user}}</h2>
        <p>
            <router-link :to="{name: 'invoices'}">Invoices</router-link>
        </p>
        <button @click="logOut" class="btn">Logout</button>
    </div>
</template>
<script>
import store from "@/store"
export default {
    data(){
        return{
            user:store.user
        }
    },
    methods:{
        logOut(){
        store.user=null;
        this.$router.push("/");
        }
    }
}
</script>>