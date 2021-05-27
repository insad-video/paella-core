import Paella from 'paella-core/js/Paella';
import Events, { bindEvent } from 'paella-core/js/core/Events';

let paella = new Paella('player-container')

bindEvent(paella, Events.BUTTON_PRESS, (params) => {
	console.log(params);
});

bindEvent(paella, Events.SHOW_POPUP, (params) => {
	console.log("Show popup");
	console.log(params);
});

bindEvent(paella, Events.HIDE_POPUP, (params) => {
	console.log("Hide popup");
	console.log(params);
});

paella.loadManifest()
	.then(() => console.log("done"))
	.catch(e => console.error(e));
