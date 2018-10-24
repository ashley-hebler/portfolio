<template>
	<div class="links-page">
		<h2 class="links-page__title">Links</h2>
		<section>
			<ol class="links-page__list">
				<li><a target="_blank" rel="noopener noreferrer" href="https://hackmd.io/1qdLBUzAQPKpp_bSAdpWvw#">Dev Planning</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="http://cmg-hive.surge.sh/">Design System</a></li>
				<li>Style rules: <a target="_blank" rel="noopener noreferrer" href="https://assets.brand.ai/cox-media-group/access-atlanta/style-data.json?exportFormat=list&key=r1Zid3_XE7">JSON</a>|<a target="_blank" rel="noopener noreferrer" href="https://assets.brand.ai/cox-media-group/access-atlanta/_style-params.scss?key=r1Zid3_XE7">SCSS</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://accessatlanta.wpengine.com/wp-json/cmg/v1/posts?count=5&offset=5">Custom API</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://new.accessatlanta.com/">React Single Page App</a></li>
			</ol>
		</section>
		<section
		class="links-page__code-block">
			<h2 class="links-page__title">Code Sample</h2>
			<iframe src="https://codesandbox.io/embed/2z85nvk10y?module=%2Fsrc%2FSearch.js" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
			 <a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/2z85nvk10y">Open in CodeSandbox</a>
		</section>
	</div>
</template>


<style lang="scss">
@import '~assets/scss/_variables.scss';
.links-page {
	padding: 3em 0;
	&__title {
		background-color: $primary-color;
		padding: .3em .5em;
		display: inline-block;
	}
	&__list {
		text-align: left;
		display: inline-block;
		li {
			margin-bottom: 1em;
		}
	}
	&__code-block {
		max-width: 1200px;
		margin: 0 auto;
	}
}
</style>
