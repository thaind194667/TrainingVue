<template>
    <div>
        <RouterLink to="/" style="position: absolute;">Back home</RouterLink>
        <h1 class="text-center">Homework {{ hwCount }}</h1>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        hwCount: Number,
    },
    components: {
        RouterLink,
    }
})
</script>

<style scoped>

</style>