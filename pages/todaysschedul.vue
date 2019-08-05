<template>
	<div>
		<section class="download bg-primary text-center" id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-8 mx-auto">
					<h2 class="section-heading">Today,s Bus Schedul</h2>
					<p>31/1/199 Bus Schedul</p>
					</div>
				</div>
			</div>
		</section>
		<div class="container" id="tablehol">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">From</th>
						<th scope="col">To</th>
						<th scope="col">Time</th>
						<th scope="col">Bus Num</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(sc, i) in schedul" :key="i">
						<th scope="row">{{ i+=1}}</th>
						<td>{{sc.from}}</td>
						<td>{{sc.to}}</td>
						<td>{{sc.time}}</td>
						<td>{{sc.busname}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'user',
	data: ()=> ({
        schedul: ''
	}),
	mounted(){
		this.$axios.$get('/api/stuff/schedul').then(v=>{
			this.schedul = v;
		})
    },
}
</script>
<style scoped>
#tablehol{
	margin-top: 35px!important;
	margin-bottom: 50px;
}
</style>


