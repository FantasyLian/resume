<template>
    <section id="work" class="row">
        <div class="work-content page">
            <div class="col work-title">
                <h3 data-900="-webkit-transform: translateX(-100px); opacity:0;" data-1300="-webkit-transform: translateX(0px); opacity:1;">我最近的工作</h3>
            </div>
            <div class="col empty">&nbsp;</div>
            <div class="col work-description">
                <p data-900="opacity:0;" data-1300="opacity:1;">A selection of recent projects I've been working on: landing pages, websites, email marketing...</p>
            </div>
            <div class="col empty">&nbsp;</div>
        </div>
        <div class="work-examples page">
            <div class="col work-item" v-for="item in items" :key="item.id" data-1300="opacity:0;" data-1400="opacity:1;">
                <img src="../src/assets/img/works/1.jpg" alt="">
                <div class="work-item-inside">
                    <div class="work-item-inside-content">
                        <h4>{{ item.title }}</h4>
                        <a :href="`${ item.link }`" target="_blank" class="but">Click here</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'my-work',
    data() {
        return {
            items: [{
                id: 1,
                title: '人人聚财手机版',
                link: 'http://wap.rrjc.com/'
            }, {
                id: 2,
                title: '人人聚财PC版',
                link: 'https://www.rrjc.com/'
            }, {
                id: 3,
                title: '享哈',
                link: 'https://www.enjoyha.com/'
            },
            {
                id: 4,
                title: '绚铃H5',
                link: ''
            },{
                id: 5,
                title: '貔貅收款IOT小程序',
                link: ''
            },{
                id: 6,
                title: '商户后台管理系统',
                link: 'http://pay.oem.kaixuantx.com/web/merchant/index.html#/login/'
            }]
        }
    }
}
</script>
