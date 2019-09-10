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
            	<multiselect v-model="value" :options="options" @select="onSelect"></multiselect>
			<br>
            <div class="container" v-if="value">
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-6">
						<div class="card" style="width: 18rem;">
							<div class="card-header">
								{{value}}
							</div>
						</div><br>
							<div class="currentposition">
								<div>
									<GmapMap
									ref="myMap"
									:center="{ lat: 23.8718795,lng:90.320803}"
									:zoom="17"
									map-type-id="terrain"
									style="width: 900px; height: 500px"
									>
									<GmapMarker
										:key="index"
										v-for="(m, index) in markers"
										:position="m.position"
										:draggable="true"
									/>
									</GmapMap>
								</div>
							</div>
					</div>
					<div class="col-md-3">
					</div>
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
		 markers: [{ position: { lat: 23.8718795, lng: 90.320803 } }]
	}),

	mounted(){
	},
	methods:{
		getlocation(){
		setInterval(() => {
			let res = this.$axios.$get('/api/stuff/location').then(v=>{
			const lat = parseFloat(v[1].location.substring(5, 16))
			const lang = parseFloat(v[1].location.substring(23, 33))
			console.log(lat, lang)
			console.log(lat, typeof(lang))
			let obj = {
				"lat": lat,
				"lng": lang
			}

			let mrker = {}

			mrker.position = obj;
			console.log(mrker)
			
			// const mrker = {position: { "lat": 23, "lng": 90 }};
			// console.log(mrker)
			this.markers.push(mrker);
			console.log(this.markers)
		})
		}, 10000);
		},
		onSelect(){
			console.log('selected')
			this.getlocation()
		}
	}
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
#bodyholder{
	margin-top: 35px!important;
	margin-bottom: 50px!important;
}
</style>

