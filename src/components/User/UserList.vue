<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="offset-md-2 col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <img 
                                        src="../../assets/img/pic1.jpg" 
                                        alt="pic1" 
                                        width="50" 
                                        height="50" 
                                        class="rounded-circle"
                                    />
                                </td>
                                <td>Juliemar</td>
                                <td>Añonuevo</td>
                                <td>mr.juliemar.anonuevo@gmail.com</td>
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
                            <tr>
                                <th scope="row">2</th>
                                <td>
                                    <img 
                                        src="../../assets/img/pic1.jpg" 
                                        alt="pic1" 
                                        width="50" 
                                        height="50" 
                                        class="rounded-circle"
                                    />
                                </td>
                                <td>Juliemar</td>
                                <td>Añonuevo</td>
                                <td>mr.juliemar.anonuevo@gmail.com</td>
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
                            <tr>
                                <th scope="row">3</th>
                                <td>
                                    <img 
                                        src="../../assets/img/pic1.jpg" 
                                        alt="pic1" 
                                        width="50" 
                                        height="50" 
                                        class="rounded-circle"
                                    />
                                </td>
                                <td>Juliemar</td>
                                <td>Añonuevo</td>
                                <td>mr.juliemar.anonuevo@gmail.com</td>
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
                <div class="row">
                    <div class="col-md-3">
                        <router-link 
                            class="btn btn-light btn-md btn-block mb-2" 
                            to="/users"
                        > 
                            Prev
                        </router-link>
                    </div>
                    <div class="col-md-6"></div>
                    <div class="col-md-3 text-right">
                        <router-link 
                            class="btn btn-light btn-md btn-block mb-2" 
                            to="/users"
                        > 
                            Next 
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserList"
}
</script>

<style>

</style>