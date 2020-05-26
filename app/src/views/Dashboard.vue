<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1 class="m-0">Dashboard</h1>
            </div>
        </div>

        <hr>

        <div class="row mt-5">
            <div class="col-12">
                <div class="border d3-container">
                    <router-link class="text-white" to="/dashboard">Introduction</router-link>
                    <router-link class="text-white" to="/dashboard/world-map">World Map</router-link>
                    <router-link class="text-white" to="/dashboard/pie">Pie</router-link>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 text-center">
                <transition name="fade">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>