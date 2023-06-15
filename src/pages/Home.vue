<template>
    <div>
        This is homepage of training Vue's homework
    </div>

    <div>
        <ul>
            <li v-for="item in hwCount">
                <router-link :to="`/bai${item}`">Go to Bai {{ item }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const hwCount = [3,5];
</script>

<style scoped>

</style>