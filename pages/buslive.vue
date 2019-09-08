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
								<li class="list-group-item">Location: Mirpur</li>
								<li class="list-group-item">Driver: Mr. Litton</li>
								<li class="list-group-item">Destinaton: Dhanmondis</li>
							</ul>
							<div class="currentposition">
		                        <Map />
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
// import Map from "~/components/combine/map";
export default {
	components:{ Multiselect },
	layout: 'user',
	data: ()=> ({
		value: null,
		options: ['Surjomukhi-23', 'Surjomukhi-24', 'Surjomukhi-25', 'AC-1', 'AC-2']
	})
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
#bodyholder{
	margin-top: 35px!important;
	margin-bottom: 50px!important;
}
</style>

