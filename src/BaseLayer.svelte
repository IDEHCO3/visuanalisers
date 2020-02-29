<script>
	import TileLayer from 'ol/layer/Tile'
	import { XYZ, TileImage } from 'ol/source'
	import Dialog, {Title, Content, Actions} from '@smui/dialog';
	import Button, {Label} from '@smui/button';
	import {map, currentBaseLayer } from './store.js';
	  
	let camadaEscolhida = null;
    export let dialog = null;

	export function nullBaseLayer() {
		return null
	};

	//returns a OSM TileLayer as baselayer
	export function osmBaseLayer() {
		return new TileLayer({ source: new XYZ({url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'}), zIndex: 0 })
	};

	//returns a google TileLayer as baselayer
	export function googleBaseLayer() {
		return new TileLayer({source: new XYZ({url: 'http://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'}), zIndex: 0})
	};

	//returns a google satelite TileLayer as baselayer
	export function sateliteBaseLayer() {
		return new TileLayer({source: new TileImage({ url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'}), zIndex: 0})
	};

	//returns a water TileLayer as baselayer
	export function watercolorBaseLayer() {
		return new TileLayer({source: new XYZ({url: 'http://{a-c}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'}), zIndex: 0})
	};

	//returns wikimedia TileLayer as baselayer
	export function wikimediaBaseLayer() {
		return new TileLayer({source: new XYZ({url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'}), zIndex: 0})
	};
	function closeHandler() {};
	function selectBaseLayer() {
		
		$map.removeLayer($currentBaseLayer);
		if (camadaEscolhida()== null) 
			return;
		$currentBaseLayer = camadaEscolhida();	
		$map.addLayer($currentBaseLayer);	
	};
</script>
<Dialog bind:this={dialog}  aria-labelledby="dialog-title"  aria-describedby="dialog-content"  on:MDCDialog:closed={closeHandler}>
  <Title id="dialog-title">Escolha uma camada base</Title>
  <Content id="dialog-content" >
  <div class="radioleft">
    
  	<label >
		<input type=radio bind:group={camadaEscolhida} value={nullBaseLayer}>
		Sem camada base
	</label>
    <label >
		<input type=radio bind:group={camadaEscolhida} value={osmBaseLayer}>
		Camada base Openstreetmap
	</label>
	<label >
		<input type=radio bind:group={camadaEscolhida} value={googleBaseLayer}>
		Camada base Google maps
	</label>
	<label >
		<input type=radio bind:group={camadaEscolhida} value={sateliteBaseLayer}>
		Camada base Satélite
	</label>
	<label >
		<input  type=radio bind:group={camadaEscolhida} value={watercolorBaseLayer}>
		Camada base Water Color 
	</label>
	<label >
		<input  type=radio bind:group={camadaEscolhida} value={wikimediaBaseLayer}>
		Camada base Wiki Media 
	</label>
	</div>
  </Content>
  <Actions>
    <Button on:click={selectBaseLayer}>
      <Label>Ok</Label>
    </Button>
    
  </Actions>
</Dialog>
<style>
	.flexy {
		display: flex;
		flex-direction: column;
	}
	.radioleft {
		text-align:left;
	}
</style>