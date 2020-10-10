if (typeof window !== "undefined") {
	if (window.Prism)
		console.warn(
			"Prism has already been initiated. Please ensure that svelte-prism is imported first."
		);

	window.Prism = window.Prism || ({} as any);
	(window.Prism as any).manual = true;
}

interface Window {
	Prism?: {
		manual?: boolean;
	};
}

export {};
