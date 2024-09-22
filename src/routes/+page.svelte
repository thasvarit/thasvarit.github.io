<script lang="ts">
	import resources from "$lib/list.json";
	import ExternalLinkIcon from "$lib/components/ExternalLinkIcon.svelte";

	export let data;
</script>

<div id="container">
	<header>
		<h1>Thasvarit Kruerklai (Note)</h1>
		<p>
			I share everything I think is useful on this page. Feel free to
			<a href="https://www.facebook.com/touchvaritnote/">DM</a> me if you'd
			like!
		</p>
		<h2>Useful Stuff (at least for myself)</h2>
		<p id="updated-at">
			Last Updated: {data.built_at.toLocaleDateString()}
		</p>
	</header>

	<ul id="list">
		{#each resources as resource}
			<li class="list-item">
				<a
					href={resource.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="title-box">
						<h3 class="title">
							{resource.title}
						</h3>
						<span class="link-icon">
							<ExternalLinkIcon />
						</span>
					</div>
					<p>
						{resource.desc}
					</p>
				</a>
			</li>
		{/each}
	</ul>

	<!-- badge example using https://forthebadge.com/ -->
	<!-- 
	<img
		src="https://forthebadge.com/images/badges/built-with-love.svg"
		alt=""
	/> -->
</div>

<style>
	#updated-at {
		margin-bottom: 1rem;
		color: #717171;
		font-size: small;
		font-style: italic;

		margin: 0;
		margin-top: 0.5rem;
		margin-bottom: 1.5rem;
	}
	#container {
		/* @apply container px-4 py-10 max-w-2xl; */
		margin: 0 auto;
		padding: 1rem;
		max-width: 42rem;

		font-family: ui-sans-serif, system-ui, sans-serif; /* comment this line if you want serif font */
	}

	a {
		text-decoration: none;
		color: #1d4ed8;
	}

	a:hover {
		text-decoration: underline;
	}

	h1 {
		line-height: 2.5rem;
		margin: 1.5rem 0;
	}

	h2 {
		line-height: 2rem;
		margin: 0;
		margin-top: 1.5rem;
	}

	h3,
	p {
		line-height: 1.5rem;
	}

	#list {
		/* @apply space-y-3 */
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.list-item {
		/* @apply bg-[#f4f4f4] p-3 rounded-md; */
		margin: 0.75rem 0;
		padding: 0.75rem;

		background-color: #f4f4f4;
		border-radius: 0.375rem;
	}

	.list-item .title-box {
		/* @apply flex justify-between items-start; */
		display: flex;
		justify-content: space-between;
		align-items: start;
	}

	.list-item .title-box h3 {
		/* @apply text-blue-700 font-semibold group-hover:underline; */
		font-size: medium;
		font-weight: 600;

		color: #1d4ed8;
		margin: 0;
	}

	.list-item a:hover {
		text-decoration: none;
	}

	.list-item a:hover h3 {
		text-decoration-line: underline;
	}

	.list-item p {
		/* @apply text-sm text-[#717171] mt-1; */
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #717171;
		margin: 0;
		margin-top: 0.25rem;
	}

	.link-icon {
		/* @apply text-sm flex items-center; */
		font-size: 0.875rem;
		line-height: 1.25rem;
		display: flex;
		align-items: center;

		color: black;
		margin-left: 0.25rem;
		width: 0.75rem;
		height: 0.75rem;
	}
</style>
