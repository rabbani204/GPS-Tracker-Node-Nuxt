<template>
  <div>
    <GmapMap
      ref="myMap"
      :center="{ lat: 23.777176,lng:90.399452}"
      :zoom="17"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
      @click="onClick"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    <GmapAutocomplete @place_changed="setPlace" class="input-res" :value="address">{{address}}</GmapAutocomplete>
  </div>
</template>

<script>
export default {
  props: ["location", "order_location"],
  data() {
    return {
      address: this.location,
      markers: [{ position: { lat: 23.777176, lng: 90.399452 } }]
    };
  },

  mounted() {
    this.$refs.myMap.$mapPromise.then(map => {
      console.log("Props: ", this.location);
      // if (this.location) {
      //   this.getGeocodeLatLng();
      // }
      map.setCenter(this.markers[0].position);
      map.setZoom(17);
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);

      var request = {
        origin: this.location,
        destination: this.order_location,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        provideRouteAlternatives: true,
      };

      directionsService.route(request, function(response, status) {
        if (status == "OK") {
          console.log("response: ",response)
          directionsDisplay.setDirections(response);
        }
      });
    });
  },
  methods: {
    onClick(event) {
      this.addMarker(event.latLng);
    },

    addMarker(coords) {
      this.markers[0].position = coords;
      this.getGeocodeFormattedAddress(coords);
    },

    getGeocodeFormattedAddress(latLng) {
      let $this = this;
      var geocoder = new google.maps.Geocoder();
      var latlng = {
        lat: parseFloat(latLng.lat()),
        lng: parseFloat(latLng.lng())
      };
      var geocoderRequest = {
        location: latlng
      };
      geocoder.geocode(geocoderRequest, function(results, status) {
        //do your result related activities here, maybe push the coordinates to the backend for later use, etc.
        if (status === google.maps.GeocoderStatus.OK) {
          $this.address = results[0].formatted_address;
          // $this.$emit("coordinates", $this.address);
        }
      });
    },

    getGeocodeLatLng() {
      let $this = this;
      var geocoder = new google.maps.Geocoder();

      var geocoderRequest = {
        address: $this.location
      };
      geocoder.geocode(geocoderRequest, function(results, status) {
        //do your result related activities here, maybe push the coordinates to the backend for later use, etc.
        if (status === google.maps.GeocoderStatus.OK) {
          $this.addMarker(results[0].geometry.location);
          $this.$refs.myMap.$mapPromise.then(map => {
            map.setCenter(results[0].geometry.location);
            map.setZoom(17);
          });
        }
      });
    },

    setPlace(place) {
      this.address = place.formatted_address;
      this.$refs.myMap.$mapPromise.then(map => {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
        this.markers[0].position = place.geometry.location;
        // this.$emit("coordinates", place.formatted_address);
      });
    },

    getDirection() {}
  }
};
</script>

<style scoped>
.input-res {
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  height: 3rem;
}
</style>