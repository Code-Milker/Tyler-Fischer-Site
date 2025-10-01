import { readable } from 'svelte/store';

export const isDesktop = readable(true, (set) => {
	const checkWidth = () => {
		set(window.innerWidth >= 1024);
	};

	checkWidth(); // Initial check

	window.addEventListener('resize', checkWidth);

	// Cleanup on store unsubscribe
	return () => {
		window.removeEventListener('resize', checkWidth);
	};
});
