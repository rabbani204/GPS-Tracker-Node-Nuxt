<template>
	<div>		
		<section class="download bg-primary text-center" id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-8 mx-auto">
					<h2 class="section-heading">Add New Bus Schedul</h2>
					<p>Add Today,s Schedul</p>
					</div>
				</div>
			</div>
		</section>
		<div class="container" id="bodyholder">
			<div class="formholder">
				<div class="container">
					<div class="formcontaner">
						<p v-if="errormsg" class="success">{{errormsg}}</p>
						<form @submit.prevent="addschedul">
							<div class="form-group">
								<label for="email">From:</label>
								<input type="text" class="form-control" v-model="bus.from" id="email" placeholder="Enter From">
							</div>
							<div class="form-group">
								<label for="pwd">To:</label>
								<input type="text" class="form-control" v-model="bus.to" id="pwd" placeholder="Enter To">
							</div>
							<div class="form-group">
								<label for="email">Time:</label>
								<input type="text" class="form-control" v-model="bus.time" id="email" placeholder="Enter Time">
							</div>
							<div class="form-group">
								<label for="pwd">Bus Name:</label>
								<input type="text" class="form-control" v-model="bus.name" id="pwd" placeholder="Enter Bus Name">
							</div>
							<button type="submit" class="btn btn-primary btn-lg">Add New</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'user',
	data: ()=>({
		bus: {},
		errormsg: ''
	}),
	mounted(){
        if( !localStorage.getItem('userinfo')){
			this.$router.push('/login')
		}
	},
	methods:{
        addschedul(){
			console.log(this.bus)
			this.$axios.$post('/api/stuff/addschedul', this.bus).then(res=>{
				console.log(res)
				if( res.success == 'true'){
					this.errormsg = "Added Success",
					setTimeout(() => {
						this.errormsg = ''
					}, 3000);				}
			})
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
.formcontaner{
	padding-left: 200px!important;
	padding-right: 200px!important;
}
.success{
	color: green;
}
</style>

