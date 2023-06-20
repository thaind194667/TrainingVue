<template>
    <Header hwCount="6"/>
    <div>
        ---detail--- <br/>
        name: {{ name }} <br/>
        age : {{ age }} <br/>
    </div> <br/>
    <button @click="toTest">
        <div>To test route</div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';

export default defineComponent({
    setup() {
        const route = useRoute();
        const name = route.query.name;
        const age = route.query.age;
        return {    
            route,
            name, 
            age,
        }
    },
    components: {
        Header,
    },
    methods: {
        toTest() {
            this.$router.push({name: 'test'})
        }
    }
})
</script>

<style scoped lang="scss">

</style>