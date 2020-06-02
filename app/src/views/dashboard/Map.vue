<template>
    <div>
        <div id="vizContainer" style="width:100%; height:700px;"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            if (!this.map) {
                this.initViz();
                this.$store.commit('map');
            }
        },
        computed: {
            map() {
                return this.$store.getters.map;
            }
        },
        methods: {
            initViz() {
                var containerDiv = document.getElementById("vizContainer"),
                    url = "https://public.tableau.com/views/map_15911247586250/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link",
                    options = {
                        hideTabs: true,
                        onFirstInteractive: function () {
                            console.log("Run this code when the viz has finished loading.");
                        }
                    };

                var viz = new window.tableau.Viz(containerDiv, url, options);
                console.log(viz)
            }
        }
    }
</script>