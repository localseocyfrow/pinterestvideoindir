/**
 * Scrolls the live results region into view after options render.
 * Uses double rAF so layout (grid/video height) is settled before scrolling.
 */
export function scrollToDownloadResults(resultsElement: Element | null): void {
	if (!resultsElement || !(resultsElement instanceof HTMLElement) || !resultsElement.isConnected) return;

	const run = () => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		resultsElement.scrollIntoView({
			behavior: reduceMotion ? "auto" : "smooth",
			block: "start",
		});
	};

	requestAnimationFrame(() => {
		requestAnimationFrame(run);
	});
}
