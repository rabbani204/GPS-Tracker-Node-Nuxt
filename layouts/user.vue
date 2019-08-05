<template>
	<div id="page-top">
		<Header/>
        <nuxt/>
		<Footer/>
	</div>
</template>
<script>
import Header from "~/components/user/Header";
// import SideMenu from "~/components/admin/SideMenu";
import Footer from "~/components/user/Footer";
export default {
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/user/vendor/bootstrap/css/bootstrap.min.css" },
		{ rel: "stylesheet", href: "/user/vendor/fontawesome-free/css/all.min.css" },
		{ rel: "stylesheet", href: "/user/vendor/simple-line-icons/css/simple-line-icons.css" },
		{
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Lato"
		},
		{
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900"
		},
		{
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Muli"
        },
		{ rel: "stylesheet", href: "/user/device-mockups/device-mockups.min.css" },
		{ rel: "stylesheet", href: "/user/css/new-age.min.css" }
      ],
      script: [
        // {
        //   src:
        //     "https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.js"
		// },
        { src: "/user/vendor/jquery/jquery.min.js" },
		{ src: "/user/vendor/bootstrap/js/bootstrap.bundle.min.js" },
		{ src: "/user/vendor/jquery-easing/jquery.easing.min.js" },
		{ src: "/user/js/new-age.min.js" }
      ]
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style>
body{
	font-family: 'Literata', serif;
	background: #fff;
}
p{
	font-size: 15px!important;
	font-family: 'Literata', serif;
}
</style>
