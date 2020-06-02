<template>
    <div>
        <div id="vizContainer" style="width:800px; height:700px;"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.initViz();
        },
        methods: {
            initViz() {
                var containerDiv = document.getElementById("vizContainer"),
                    url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms",
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