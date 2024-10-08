import App from './App.svelte';
import './tailwind.css';
import 'flowbite';
import 'flowbite-svelte';


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;