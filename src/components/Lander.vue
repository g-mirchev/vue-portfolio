<template>
    <div>
        <section class="section">
            <div class="container-fluid">
                <img id='picofme' alt="Picture of Georgi" class="rounded-circle" src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/60347534_2423246807720363_5530170401084145664_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Hh-JDsLzP3cAX-cf4x1&_nc_ht=scontent-lht6-1.xx&oh=b748b5f418a07017d48ab39dc2404a3b&oe=5E8D169A">
                <h1>Georgi Mirchev</h1>
                <h2>Software Developer</h2>
                <p>Built with Vue.js and Bootstrap</p>
                <button type="button" class="btn btn-primary btn-lg">
                    Contact
                </button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Lander'
}
</script>
<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }
    #picofme{
        width: 250px;
    }
</style>