<template>
    <div id="map" class="map"></div>
</template>

<script setup>
import GM_load from

const map = ref(null);
const initMap = () => {

    this.map = new this.GM_instance.maps.Map(document.getElementById("map"), {
        center: { lat: 43.682284, lng: -79.401603 },
        zoom: 8,
    })

    this.GM_loadPlaceService(this.map)

    this.map.addListener("click", (e) => {
        this.processClick(e)
    })

};
const processClick = async (e) => {

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

};
this.GM_load()
    .then(() => {
        this.initMap()
    });
</script>

<style scoped>

</style>
