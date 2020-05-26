<template>
	<nav>
		<ul>
			<li>
				<router-link to="/">Dashboard</router-link>	
			</li>

			<li>
				<router-link to="team">Team</router-link>	
			</li>

			<li>
				<router-link to="video">Video</router-link>	
			</li>
		</ul>
	</nav>
</template>


<style lang="scss">
nav{
	background: lightgray;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: center;

    ul{
		display: flex;
		padding: 0;

		li{
			list-style: none;
			margin-right: 2rem;
			margin-left: 2rem;
			font-size: 1.5rem;
			a{
				text-decoration: none;
				color: #000;
			}
		}
    }
}
</style>