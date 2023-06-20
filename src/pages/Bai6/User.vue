

<template>
    <Header hwCount="6"/>
    <div>
        id param :  {{ id }} <br/> <br/>
        <router-link :to="{
            name: 'detail',
            query: {
                name: 'abcd',
                age: '18',
            }
        }" > 
            Go to detail
        </router-link>
        <br/> <br />
        <br/>
        <button @click="toTest">
            <div>To test route</div>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import Header from '@/components/Header.vue';

export default defineComponent({
    setup() {
        const route = useRoute();
        const id = route.params.id;
        return {
            route,
            id
        }
    },
    components: {
        Header,
    },
    // data() {
    //     return {
    //         route: useRoute(),
    //         id: this.route.params.id
    //     }
    // },
    methods: {
        toTest() {
            this.$router.push({name: 'test'})
        }
    }
})
</script>

<style lang="scss" scoped>

</style>