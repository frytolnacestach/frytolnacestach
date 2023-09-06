<template>
    <div class="o-chart-pie">
        <div class="o-chart-pie__outher">
            <div class="o-chart-pie__inner">
                <h2 class="o-chart-pie__headline">{{ title }}</h2>

                <ul :class="'pieID legend hidden ' + chartID">
                    <li v-for="(item, index) in data" :key="index">
                        <em>{{ item.name }}</em>
                        <span>{{ typeof item.value === 'string' && item.value.includes('%') ? item.value.replace('%', '').replace(/\s/g, '').replace(',', '.') : item.value }}</span>
                    </li>
                </ul>
                
                <div class="o-chart-pie__container">
                    <div :class="'o-chart-pie__pie pieID pie ' + chartID"></div>

                    <div class="o-chart-pie__legend">
                        <ul class="o-chart-pie__legend-items">
                            <li class="o-chart-pie__legend-item" v-for="(item, index) in data" :key="index" :style="{ borderColor: getColor(index) }">
                                <em class="o-chart-pie__legend-name">{{ item.name }}</em>
                                <span class="o-chart-pie__legend-value">{{ typeof item.value === 'string' && item.value.includes('%') ? item.value.replace('%', '').replace(/\s/g, '').replace(',', '.') : item.value }} %</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoChartPieComponent',

        props: {
            data: {
                type: Array,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            chartID: {
                type: String,
                required: true,
            }
        },
        
        data(){
            return {
                color: [
                    "cornflowerblue",
                    "olivedrab",
                    "orange",
                    "tomato",
                    "crimson",
                    "purple",
                    "turquoise",
                    "forestgreen",
                    "navy",
                    "gray",
                    "pink",
                    "yellow",
                    "black",
                    "aquamarine",
                    "brown",
                    "cornflowerblue",
                    "darkcyan"
                ]
            }
        },

        mounted() {
            this.createPie('.pieID.legend.' + this.chartID, '.pieID.pie.' + this.chartID)
        },

        methods: {
            sliceSize(dataNum, dataTotal) {
                return (dataNum / dataTotal) * 360
            },

            addSlice(sliceSize, pieElement, offset, sliceID, color) {
                // Implementace přidání slici do DOMu ve Vue/Nuxt
                const slice = document.createElement("div")
                slice.className = "slice " + sliceID
                const span = document.createElement("span")
                slice.appendChild(span)
                document.querySelector(pieElement).appendChild(slice)

                offset = offset - 1
                const sizeRotation = -179 + sliceSize

                const sliceElement = document.querySelector("." + sliceID)
                sliceElement.style.transform = `rotate(${offset}deg) translate3d(0,0,0)`

                const spanElement = sliceElement.querySelector("span")
                spanElement.style.transform = `rotate(${sizeRotation}deg) translate3d(0,0,0)`
                spanElement.style.backgroundColor = color
            },

            iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
                const sliceID = this.chartID + "-s" + dataCount + "-" + sliceCount;
                const maxSize = 179;
                if (sliceSize <= maxSize) {
                    this.addSlice(sliceSize, pieElement, offset, sliceID, color)
                } else {
                    this.addSlice(maxSize, pieElement, offset, sliceID, color)
                    this.iterateSlices(
                        sliceSize - maxSize,
                        pieElement,
                        offset + maxSize,
                        dataCount,
                        sliceCount + 1,
                        color
                    )
                }
            },

            createPie(dataElement, pieElement) {
                const listData = [];
                const dataSpans = this.$el.querySelectorAll(dataElement + " span");
                dataSpans.forEach((span) => {
                    listData.push(Number(span.innerHTML))
                })

                let listTotal = 0;
                listData.forEach((data) => {
                    listTotal += data
                })

                let offset = 0

                listData.forEach((data, i) => {
                    const size = this.sliceSize(data, listTotal)
                    this.iterateSlices(size, pieElement, offset, i, 0, this.color[i])
                    this.$el
                        .querySelector(dataElement + " li:nth-child(" + (i + 1) + ")")
                        .style.borderColor = this.color[i]
                        offset += size
                })
            },
            
            getColor(index) {
                return this.color[index % this.color.length]
            }
        }
    }
</script>