/**
 * Wires the "Download another …" control after results HTML is injected.
 * Clears results, resets status, focuses the URL field, and scrolls back to the tool.
 */
export function setupDownloadAnotherButton(
	resultsContainer: Element | null,
	urlInput: Element | null,
	statusEl: Element | null,
): void {
	if (!resultsContainer || !(resultsContainer instanceof HTMLElement)) return;
	if (!urlInput || !(urlInput instanceof HTMLInputElement)) return;

	const btn = resultsContainer.querySelector<HTMLButtonElement>("[data-download-another]");
	if (!btn) return;

	btn.addEventListener("click", () => {
		resultsContainer.innerHTML = "";
		if (statusEl instanceof HTMLElement) {
			statusEl.textContent = "";
		}
		urlInput.value = "";
		urlInput.focus();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		urlInput.scrollIntoView({
			behavior: reduceMotion ? "auto" : "smooth",
			block: "center",
		});
	});
}
