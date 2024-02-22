<template>
    <div id="map" class="map"></div>
</template>

<script setup>

export default {
    name: "MapGoogle",

    data() {
        return {
            map: null
        }
    },

    mounted() {

        // This is the actual trigger that loads GM dynamically.
        // Here we run our global GM func: GM_load.
        // Side note; annoyance: As you see, using Vue mixin's, you have functions available from out-of-nowhere. Research alternative to mixin's, especially in Vue3/Nuxt3.
        this.GM_load()
            .then( () => {
                this.initMap()
            })

    },


    methods: {

        initMap() {

            this.map = new this.GM_instance.maps.Map(document.getElementById("map"), {
                center: { lat: 43.682284, lng: -79.401603 },
                zoom: 8,
            })

            this.GM_loadPlaceService(this.map)

            this.map.addListener("click", (e) => {
                this.processClick(e)
            })

        }
    },

    async processClick(e) {

        // If clicked target has a placeId, user has clicked a GM place
        if (e.placeId) {

            let placeRequest = {
                placeId: e.placeId,
                //fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
            }

            // Get place details
            let googlePlace = await this.GM_getPlaceDetails(placeRequest)
            console.log("googlePlace %O", googlePlace)
        }

    }
}
</script>

<style scoped>

</style>
