<template>
	<div class="column is-2">
		<aside class="menu">
		  <p class="menu-label">
		  	Category
		  </p>
		  <ul class="menu-list" v-for='root in menu'>
		    <li>
		    	<a @click='selectRoot(root)' :class="{'is-active': isActiveRoot(root)}">
		    		{{ root.name }}
		    	</a>
		    	<ul v-show='showSecond(root)'>
		    	  <li v-for='second in root.children'>
		    	  	<a @click.stop='selectSecond(second)' :class="{'is-active': isActiveSecond(second)}">
		    	  		{{ second.name }}
		    	  	</a>
		    	  	<ul v-show='showThird(second)'>
		    	  	  <li v-for='third in second.children'>
		    	  	  	<a @click.stop='selectThird(third)' :class="{'is-active': isActiveThird(third)}">
		    	  	  	{{ third.name }}</a></li>
		    	  	</ul>
		    	  </li>
		    	</ul>
		    </li>
		  </ul>
		</aside>	
	</div>
</template>

<script>
import category from '../api/category'
export default {
	data () {
		return {
			menu: null,
			select: {
				root: {id: null},
				second: {id: null},
				third: {id: null},
			}
		}
	},
	created () {
		category.tree(data => this.menu = data)
	},
	methods: {
		selectRoot (root) {
			this.select = {
				root: root,
				second: {id:null},
				third: {id:null},
			}
		},
		selectSecond (second) {
			this.select.second = second
			this.select.third = {id:null}
			this.isSelected(second)
		},
		selectThird (third) {
			this.select.third = third
			this.isSelected(third)
		},
		isActiveRoot (root) {
			return this.select.root.id === root.id
		},
		isActiveSecond (second) {
			return this.select.second.id === second.id
		},
		isActiveThird (third) {
			return this.select.third.id === third.id
		},
		showSecond (root) {
			return this.select.root.id === root.id
		},
		showThird (second) {
			return this.select.second.id === second.id
		},
		isSelected (node) {
			if (node.children.length === 0) {
				this.$emit('categorySelected', node)
			}
		}
	}
}
</script>