<template>
  <div>{{hello}}, {{user.name}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { User } from './user'

@Component
export default class App extends Vue {
  
  user: User = new User('John Smith', 'jdohsmithc@email.com');
 
  hello: string = 'Hello'

}
</script>

<style>

</style>
