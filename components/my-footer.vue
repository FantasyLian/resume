<template>
   <footer id="footer" class="row">
        <div class="footer-content page">
            <div class="col f1">
                <p> &copy; &nbsp; <span>{{ year }}</span> &nbsp; LIAN JUN.&nbsp; All Rights Reserved. &nbsp;</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'my-footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>