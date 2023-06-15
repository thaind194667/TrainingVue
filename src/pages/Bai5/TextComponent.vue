<template>
    <h2>Form:</h2>
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder="FirstName" aria-label="FirstName"
            aria-describedby="addon-wrapping" v-model="first" />
    </div>
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder="LastName" aria-label="LastName"
            aria-describedby="addon-wrapping" v-model="second" />
    </div>
    <div class="messageError" v-if="message === 'error'">
        Input field cannot be empty!
    </div>
    <div class="messageSuccess" v-if="message === 'success'">
        Add successfully!
    </div>

    <br />


    <div ml-2>
        <ButtonComponent type="add" value="Add" @click="sendInput"/>
    </div>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({

    name: "TextComponent",
    components: {
        ButtonComponent,  
    },
    data() {
        return {
            first: "",
            second: "",
            message: "",
        }
    },
    methods: {
        sendInput() {
            if(!this.first || !this.second) this.message = "error";
            else {
                this.$emit('confirmAdd', {
                    firstName: this.first,
                    lastName: this.second,
                })
                this.first = "";
                this.second = "";
                this.message = "success";
            }
        },
    },
    watch: {
        first() {
            if( ! (this.message === "success" && !this.first ) )
                this.message = ""
        },
        second() {
            if( ! (this.message === "success" && !this.second ))
                this.message = ""
        },
    }
});
</script>

<style scoped></style>
