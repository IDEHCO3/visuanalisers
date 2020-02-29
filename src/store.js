import { writable } from 'svelte/store';
import { transform } from 'ol/proj';
import Map from 'ol/Map';    
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source'
export let currentBaseLayer = writable(new TileLayer({ source: new XYZ({url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'}), zIndex: 0 }));
export let map = writable(null);
