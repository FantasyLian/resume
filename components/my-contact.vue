<template>
    <section id="contact" class="row">
        <div class="contact-content page">
            <div class="col contact-title">
                <h3 data-100="-webkit-transform: translateX(100px); opacity:0;" data-500="-webkit-transform: translateX(0px); opacity:1;">取得联系</h3>
            </div>
            <div class="col empty">&nbsp;</div>
            <div class="col contact-description">
                <a href="mailto:fantasy.lian@139.com" class="but">fantasy.lian@139.com</a>
            </div>
            <div class="col empty">&nbsp;</div>
            <div class="col span_12 social">
                <a :class="`${ item.icon }`" :title="`${ item.title }`" :href="`${ item.link }`" target="_blank" v-for="item in lists" :key="item.id"></a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'my-contact',
    data() {
        return {
            lists: [{
                id: 1,
                icon: 'icon-twitter',
                link: 'https://twitter.com/cat_lian/',
                title: '推特'
            }, {
                id: 2,
                icon: 'icon-github',
                link: 'https://github.com/FantasyLian/',
                title: 'GitHub'
            }, {
                id: 3,
                icon: 'icon-instagram',
                link: 'https://www.instagram.com/fantasy.lian/',
                title: 'Instagram'
            }, {
                id: 4,
                icon: 'icon-linkedin',
                link: 'https://www.linkedin.com/feed/?trk=nav_back_to_linkedin/',
                title: '领英'
            }]
        }
    }
}
</script>