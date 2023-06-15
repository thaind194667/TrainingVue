<template>
    <button type="button" :class="`btn ${type === 'add' ? 'btn-success' : 'btn-danger'}`">{{ value }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        value: String,
        type: String, 
    },

})
</script>

<style scoped>

</style>