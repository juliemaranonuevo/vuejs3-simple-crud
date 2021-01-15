<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="offset-md-3 col-md-6">
                <div class="card">
                    <div class="card card-header">
                        Add New User
                    </div>
                    <div class="card card-body">
                        <form>
                            <div class="row form-group">
                                <div class="col">
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
                                    >
                                </div>
                                <div class="col">
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
                                    >
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col">
                                    <label 
                                        for="firstName">
                                        Email 
                                        <span class="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="firstName" 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="Email"
                                        required
                                    >
                                </div>
                                <div class="col">
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
                                            value="option1" 
                                            checked
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
                                            value="option2" 
                                            checked
                                        >
                                        <label 
                                            class="form-check-label" 
                                            for="exampleRadios2"
                                        >
                                            Male
                                        </label>
                                    </div>
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
export default {
    name: "AddUser"
}
</script>

<style>

</style>