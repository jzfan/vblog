<template>
	<div class="column is-10">
		<div class="content">
			<div class="box" v-for='blog in blogs'>
				{{ blog.content }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['blogs']
}
</script>