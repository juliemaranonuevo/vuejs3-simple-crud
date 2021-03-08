<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="offset-md-2 col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <form class="form-inline my-2 my-lg-0">
                            <input 
                                @input="search" 
                                class="form-control mr-sm-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                            >
                        </form>
                    </div>
                    <div class="col-md-6 text-right">
                        <router-link 
                            class="btn btn-success btn-md mb-2" 
                            to="/users/create"
                        > 
                            Add New User 
                        </router-link>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="state.users.total === 0">
                                <td colspan="6" class="text-center">
                                    <strong>
                                        No Item Found
                                    </strong>
                                </td>
                            </tr>
                            <tr 
                                v-else 
                                v-for="(user, index) in state.users.data" 
                                :key="index"
                            >
                                <th scope="row">{{ index + 1 }}</th>
                                <td>
                                    <img 
                                        :src="user.avatar" 
                                        alt="pic1" 
                                        width="50" 
                                        height="50" 
                                        class="rounded-circle"
                                    />
                                </td>
                                <td>{{ user.firstName }}</td>
                                <td>{{ user.lastName }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <button class="btn btn-danger btn-sm mr-1">
                                        Del
                                    </button>
                                    <button class="btn btn-warning btn-sm mr-1">
                                        Edit
                                    </button>
                                    <button class="btn btn-info btn-sm">
                                        View
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row pb-5">
                    <div class="col-md-3">
                        <button
                            class="btn btn-light btn-md btn-block p-3 mb-5" 
                            @click="prev(state.users.page)"
                            :disabled="state.users.page === 1"
                        > 
                            Prev
                        </button>
                    </div>
                    <div class="col-md-6"></div>
                    <div class="col-md-3 text-right">
                        <button 
                            class="btn btn-light btn-md btn-block p-3 mb-5" 
                            @click="next(state.users.page)"
                            :disabled="state.users.page === state.users.lastPage"
                        > 
                            Next 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import myApi from '../../plugins/axios';

export default {
    name: "UserList",
    setup() {
        const state = reactive({
            users: {
                data: [],
                total: '',
                page: '',
                lastPage: ''
            },
            
        });

        onMounted(async () => {
            const {data} = await myApi.get(`/`);
            passData(data)
        })

        async function next(page) {
            const {data} = await myApi.get(`?page=${+page + 1}`);
            passData(data)
        }

        async function prev(page) {
            const {data} = await myApi.get(`?page=${+page - 1}`);
            passData(data)
        }

        async function search(event) {
            let keyword = event.target.value;
            if (keyword != '') {

                const {data} = await myApi.get(`/search?query=${keyword}`);
                if (data.data != '') {

                    passData(data)

                } else {

                    state.users.total = 0;

                }

            } else {

                const {data} = await myApi.get(`/`);
                passData(data)
                
            }
        }

        function passData(data) {
            state.users.data = data.data;
            state.users.total = data.total;
            state.users.page = data.currentPage;
            state.users.lastPage = data.lastPage;
        }

        return {
            state,
            next,
            prev,
            search
        }
    }
}
</script>

<style>

</style>