<template>
    <div id="test">
    	<h1>Todo list:</h1>
    	<TodoList/>
    </div>
</template>

<script>
	import TodoList from '../component/TodoList'

	export default {
		components: {
			TodoList
		}
	}
</script>

<style>
#test{
    font-size:12px;
    color:green;
}
</style>