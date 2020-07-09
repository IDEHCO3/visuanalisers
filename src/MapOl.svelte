<script>
  import { onMount } from "svelte";
  import Map from "ol/Map";
  import { toStringHDMS } from "ol/coordinate";
  import { transform } from "ol/proj";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import { XYZ } from "ol/source";
  import { map, currentBaseLayer } from "./store.js";

  let idmap = "idmap";
  onMount(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/css/ol.css";

    link.onload = () => {
      let view = new View({
        center: [-4331024.58685793, -1976355.8033415168],
        zoom: 4
      });
      $map = new Map({ target: "idmap", controls: [] });
      $map.setView(view);
      $map.addLayer($currentBaseLayer);
      //$map.getView().getZoom();
    };
    document.head.appendChild(link);
  });
</script>

<style>
  .mapol {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>

<div id="idmap" class="mapol">
  {#if $map}
    <slot />
  {/if}
</div>
