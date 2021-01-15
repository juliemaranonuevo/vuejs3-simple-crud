<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="offset-md-3 col-md-6">
                <router-link 
                    class="btn btn-success btn-md mb-2" 
                    to="/users"
                > 
                Back
                </router-link>
                <div class="card">
                    <div class="card-header">
                        Add New User
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col form-group">
                                    <label 
                                        for="avatar"
                                    >
                                        Avatar
                                    </label>
                                    <div class="row">
                                        <div class="col-md-5 text-center">
                                            <img 
                                                :src="image" 
                                                class="img-fluid img-thumbnail mx-auto d-block mb-2" 
                                                height="220" 
                                                width="220"
                                            >
                                        </div>
                                        <div class="col-md-6 text-center">
                                            <input 
                                                type="file" 
                                                class="form-control-file" 
                                                id="avatar"
                                                accept="image/*"
                                                style="display: none;"
                                                @change="handleImageSelected"
                                                ref="selectedFile"
                                            >
                                        
                                            <button 
                                                class="btn btn-secondary"
                                                @click.prevent="$refs.selectedFile.click()"
                                            >
                                                Click to pick an image here!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label 
                                        for="firstName">
                                        First name 
                                        <span class="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="firstName" 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="First name"
                                        required
                                        v-model="state.form.firstName"
                                    >
                                </div>
                                <div class="col-md-6 form-group">
                                    <label 
                                        for="lastName">
                                        Last name 
                                        <span class="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="lastName" 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Last name" 
                                        required
                                        v-model="state.form.lastName"
                                    >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label 
                                        for="email">
                                        Email 
                                        <span class="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="Email"
                                        required
                                        v-model="state.form.email"
                                    >
                                </div>
                                <div class="col-md-6 form-group">
                                    <label 
                                        for="lastName">
                                        Gender 
                                        <span class="text-danger">*</span>
                                    </label>
                                    <div class="form-check">
                                        <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="exampleRadios" 
                                            id="exampleRadios1" 
                                            value="male" 
                                            checked
                                            v-model="state.form.gender"
                                        >
                                        <label 
                                            class="form-check-label mr-5" 
                                            for="exampleRadios1"
                                        >
                                            Male
                                        </label>

                                        <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="exampleRadios" 
                                            id="exampleRadios2" 
                                            value="female" 
                                            v-model="state.form.gender"
                                        >
                                        <label 
                                            class="form-check-label" 
                                            for="exampleRadios2"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-right">
                                    <button
                                        class="btn btn-light mr-2 text-danger" 
                                        @click.prevent="resetForm"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        class="btn btn-success"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useImageUpload } from '@/composables/useImageUpload.js';

export default {
    name: "AddUser",
    setup() {
        let {
            imageFile, 
            image, 
            imageUrl, 
            handleImageSelected
        } = useImageUpload();

        const state = reactive({
            form: {
                firstName: '',
                lastName: '',
                email: '',
                gender: 'male'
            }
        });

        async function submit() {
            const formData = new FormData();
            formData.append('avatar', imageFile.value, imageFile.value.name);
            formData.append('firstName', state.form.firstName);
            formData.append('lastName', state.form.lastName);
            formData.append('email', state.form.email);
            formData.append('gender', state.form.gender);

            for (var value of formData.values()) {
                console.log(value);
            }

            resetForm();
        }
        
        function resetForm() {
            Object.keys(state.form)
                .forEach(function(key) 
                {
                    if (state.form[key] != 'male' 
                        && state.form[key] != 'female') {
                        state.form[key] = '';
                    }
                }
            );

            imageUrl.value = "";
            imageFile.value = "";
        }

        return {
            handleImageSelected,
            submit,
            resetForm,
            state,
            image
        }
    }
}
</script>

<style>

</style>