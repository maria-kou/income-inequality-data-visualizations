<template>
    <div id="arc"></div>
</template>

<script>
    export default {
        data() {
            return {
                gdp: [
                    {country: "USA", value: 20.5},
                    {country: "China", value: 13.4},
                    {country: "Germany", value: 4.0},
                    {country: "Japan", value: 4.9},
                    {country: "France", value: 2.8}
                ]
            };
        },
        mounted() {
            this.generateArc();
        },
        methods: {
            generateArc() {
                const w = 500;
                const h = 500;

                const svg = window.d3
                    .select("#arc")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

                const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));
                const color = window.d3.scaleOrdinal(window.d3.schemeDark2);

                const max_gdp = window.d3.max(sortedGDP, o => o.value);

                const angleScale = window.d3
                    .scaleLinear()
                    .domain([0, max_gdp])
                    .range([0, 1.5 * Math.PI]);

                const arc = window.d3
                    .arc()
                    .innerRadius((d, i) => (i + 1) * 25)
                    .outerRadius((d, i) => (i + 2) * 25)
                    .startAngle(angleScale(0))
                    .endAngle(d => angleScale(d.value));

                const g = svg.append("g");

                g.selectAll("path")
                    .data(sortedGDP)
                    .enter()
                    .append("path")
                    .attr("d", arc)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "#FFF")
                    .attr("stroke-width", "1px")
                    .on("mouseenter", function () {
                        window.d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("opacity", 0.5);
                    })
                    .on("mouseout", function () {
                        window.d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("opacity", 1);
                    });

                g.selectAll("text")
                    .data(this.gdp)
                    .enter()
                    .append("text")
                    .text(d => `${d.country} -  ${d.value} Trillion`)
                    .attr("x", -150)
                    .attr("dy", -8)
                    .attr("y", (d, i) => -(i + 1) * 25);

                g.attr("transform", "translate(200,150)");
            }
        }
    }
</script>