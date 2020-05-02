<template>
    <header>
        <a class="menu-icon jiji">
            <span></span>
        </a>
        <nav class="menu visuallyhidden">
            <ul>
                <li v-for="item in navList" :key="item.id"><a :href="`${ item.link }`">{{ item.text }}</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'my-header',
    data() {
        return {
            navList: [
                { id: 1, link: '#home', text: '首页' },
                { id: 2, link: '#about', text: '关于我' },
                { id: 3, link: '#work', text: '我的工作' },
                { id: 4, link: '#contact', text: '联系我'}
            ]
        }
    },
    methods: {
        
    }
};
</script>
<style lang="css" scope>

</style>