<template>
	<div>		
		<section class="download bg-primary text-center" id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-8 mx-auto">
					<h2 class="section-heading">See The Scheduls And Add New</h2>
					<p>Add Today,s Schedul</p>
					</div>
				</div>
			</div>
		</section>
		<div class="container" id="bodyholder">
			<button type="button" class="btn btn-primary btn-lg" @click="addnew">Add New</button>
            <table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">From</th>
						<th scope="col">To</th>
						<th scope="col">Time</th>
						<th scope="col">Bus Num</th>
						<th scope="col">Added By</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(sc, i) in schedul" :key="i">
						<th scope="row">{{ i+=1}}</th>
						<td>{{sc.from}}</td>
						<td>{{sc.to}}</td>
						<td>{{sc.time}}</td>
						<td>{{sc.busname}}</td>
						<td>Stuff</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'user',
	data: ()=>({
        schedul : ''
	}),
	mounted(){
        this.$axios.$get('/api/stuff/schedul').then(v=>{
			this.schedul = v;
		})
	},
	methods:{
		addnew(){
			this.$router.push('/stuff/new')
		}
	}
}
</script>
<style scoped>
#bodyholder{
	margin-top: 30px;
	margin-bottom: 50px;
}
.btn-lg{
	background-color: #fdcc52;
	margin: 7px!important;
}
</style>


