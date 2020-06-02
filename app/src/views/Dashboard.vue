<template>
    <div class="container mt-5 pb-5">
        <div class="row">
            <div class="col-12">
                <h1 class="m-0">Dashboard</h1>
            </div>
        </div>

        <hr>

        <div class="row mt-5">
            <div class="col-12">
                <div class="border d3-container">
                    <!-- <router-link class="text-white" to="/dashboard">Introduction</router-link>-->
                    <!-- <router-link class="text-white" to="/dashboard/world-map">World Map</router-link>-->
                    <!-- <router-link class="text-white" to="/dashboard/pie">Pie</router-link>-->
                    <button @click="show='intro'" style="width: 100px;" class="">Introduction</button>
                    <button @click="show='map'" style="width: 100px;" class="">Map</button>
                </div>
            </div>
        </div>

        <!-- <img v-if="loading" src="https://thumbs.gfycat.com/RewardingDisfiguredAnnelid-size_restricted.gif" alt="">-->

        <div class="row mt-5">
            <div id="vizContainer" style="width:100%; height:700px;padding-left: 15px;padding-right: 15px;">
                <!-- :class="{'nopacity': show!=='map'}">-->
            </div>
        </div>

        <div class="row mt-5" v-show="show==='intro'">
            <div class="col-6">
                <p>
                    Income inequality gains significance from its close relationship with social injustice, and it has
                    been the subject of research by philosophers, political scientists, sociologists and economists.
                    Classical economists were interested in the distribution of income among various sections of the
                    populations. This project concentrates on the study of personal income distribution utilizing data
                    sources and employing several statistics for the modeling of world income inequality. Specifically,
                    we
                    want to demonstrate the economic inequalities per country, using the GINI index and correlations to
                    other social vectors like gender inequalities, unemployment, crime and poverty. The project aims to
                    provide graphs and visualizations that depict these correlations as well as helping the reader lead
                    to
                    assumptions.
                </p>
            </div>
            <div class="col-6">
                <Pie></Pie>
            </div>
        </div>
    </div>
</template>

<script>
    import Pie from './dashboard/Pie'

    export default {
        components: {
            Pie
        },
        data() {
            return {
                loading: true,
                show: 'intro',
            }
        },
        mounted() {
            this.initViz();
        },
        methods: {
            initViz() {
                var containerDiv = document.getElementById("vizContainer"),
                    url = "https://public.tableau.com/views/INCOME-INEQUALITY/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link",
                    options = {
                        hideTabs: true,
                        width: '100%',
                        height: '600px',
                        onFirstInteractive: () => {
                            console.log("Run this code when the viz has finished loading.");
                            this.loading = false;
                            // this.showme = true;
                        }
                    };

                var viz = new window.tableau.Viz(containerDiv, url, options);
                console.log(viz)
            }
        }
    }
</script>

<style>
    .nopacity {
        opacity: 0;
    }
</style>