<template>
    <div>
        This is homepage of training Vue's homework
    </div>

    <div>
        <ul>
            <li v-for="item in hwCount">
                <button>
                    <router-link :to="`/bai${item}`">Go to Bai {{ item }}</router-link>
                </button>
            </li>
            <hr/>
            <li>
                Input id param for bai6: <input type="text" v-model="value" /> <br/>
                <button>
                    <router-link :to="{
                        name: 'user',
                        params: {
                            id: value ? value : 1,
                        }
                    }">Go to Bai 6</router-link>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const hwCount = [3,5];
const value = ref();
</script>

<style scoped lang="scss">

li {
    list-style: none;
    button {
        margin: 10px;
        padding: 10px;
        background: black;
        border: solid 1px;
        color: white;
        &:hover {
            color: black;
            background: white;
            border: solid 1px;
        }
        a {
            font-weight: bolder;
            color: red;
            text-decoration: none;
        }
    }
}
</style>