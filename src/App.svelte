<script>
    let dialog;
	import Fab, {Icon} from '@smui/fab';
	import MapOl from './MapOl.svelte';
	import BaseLayer from './BaseLayer.svelte';

</script>
<MapOl>	</MapOl>	
<main>
	<div class="flexy">
	  <BaseLayer bind:dialog={dialog}></BaseLayer>
      <Fab class="pos" mini={true} on:click={() => dialog.open()}><Icon class="material-icons">favorite</Icon></Fab>
	</div> 
      
</main>

<style>
	main {
		text-align: center;
		padding: 0px;
		max-width: 240px;
		margin: 0px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.flexy {
		display: flex;
		align-items: center;
	}
	.margins {
		margin: 0;
	}
	.pos {
		position: fixed;
		top: 20px;
		z-index: 1 ;

	}
</style>