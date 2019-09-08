<template>
	<div>
		<section class="download bg-primary text-center" id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-8 mx-auto">
					<h2 class="section-heading">See Live Bus Location</h2>
					<p>Live Bus Location</p>
					</div>
				</div>
			</div>
		</section>
		<div class="container" id="bodyholder">
			<br>
            	<multiselect v-model="value" :options="options"></multiselect>
			<br>
            <div class="container" v-if="value">
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-6">
						<div class="card" style="width: 18rem;">
							<div class="card-header">
								{{value}}
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">Driver: Mr. Litton</li>
								<li class="list-group-item">Destinaton: Dhanmondis</li>
								<li class="list-group-item">
								</li>
							</ul>
							<div class="currentposition">
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
							</div>
							</div>
						</div>
					</div>
					<div class="col-md-3"></div>
				</div>
				<br>
			</div>
		</div>
	</div>
</template>
<script>
import Multiselect from 'vue-multiselect'
// import Map from "~/components/combine/Map";
export default {
	components:{ Multiselect},
	layout: 'user',
	data: ()=> ({
		value: null,
		options: ['Surjomukhi-12'],
		markers: [{ position: { lat: 23.777176, lng: 90.399452 } }]
	}),

	mounted(){
		let res = this.$axios.$get('/api/stuff/location').then(v=>{
			let lat = v[1].location.substring(5, 16)
			let lang = v[1].location.substring(23, 33)
			let mrker = [{ position: { lat:parseFloat(v[1].location.substring(5, 16)), lng: parseFloat(v[1].location.substring(23, 33)) } }]
			this.markers = mrker;
			console.log(this.markers)
		})
	}
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
#bodyholder{
	margin-top: 35px!important;
	margin-bottom: 50px!important;
}
</style>

