<template>
	<div>
		<h1>Dashboard</h1>
		
		<ul style="display: flex;justify-content: center;">
      <li>
        <router-link to="/dashboard">Introduction</router-link>
      </li>
			<li>
				<router-link to="/dashboard/world-map">World Map</router-link>
			</li>

      <li>
        <router-link to="/dashboard/pie">Pie</router-link>
      </li>
		</ul>
    
    <div style="margin-top: 5rem;text-align: center;">
      <router-view/>
    </div>
    
	</div>
</template>

<script>
	export default {
}
</script>

<style lang="scss">
  li{
    list-style: none;
    margin: 0 2rem;
    color: #000;

    a{
      color: #000;
      text-decoration: none;
    }
  }

  ul{
    padding: 0;
  }
</style>