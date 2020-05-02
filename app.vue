<template>
    <div id="app">
        <my-header></my-header>
        <my-home></my-home>
        <my-about></my-about>
        <my-services></my-services>
        <my-work></my-work>
        <hr>
        <my-contact></my-contact>
        <my-footer></my-footer>
    </div>
</template>
<script>
import $ from 'jquery';
import myHeader from './components/my-header.vue'
import myHome from './components/my-home.vue'
import myAbout from './components/my-about.vue'
import myServices from './components/my-services.vue'
import myWork from './components/my-work.vue'
import myContact from './components/my-contact.vue'
import myFooter from './components/my-footer.vue'
export default {
    name: 'app',
    components: { myHeader, myHome, myAbout, myServices, myWork, myContact, myFooter }
}
</script>
<style lang="css">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>