<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div class="container">
				<a class="navbar-brand js-scroll-trigger" href="#page-top">Diu Bus Tracker</a>
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
					<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#download">Download</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#features">Features</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="/login">Stuff</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="/buslive">Bus Live</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="/todaysschedul">Today Schedul</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" v-if="islogin" @click="logout"><span style="color: black; cursor: pointer">Logout</span></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	data:()=>({
        islogin:''
	}),
	mounted(){
        this.islogin = localStorage.getItem('userinfo')
	},
	methods:{
		logout(){
		  localStorage.removeItem('userinfo')
		  this.$router.push('/')
		  this.islogin = ''
		}
	}
}
</script>
