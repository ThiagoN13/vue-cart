<template>
  <div class="notify" :class="{ success: success }">
		<span>{{ message }}</span>
  </div>
</template>

<script>
export default {
	name: 'Notify',
	props: {
		success: {
			type: Boolean
		},

		message: {
			type: String
		}
	}
}
</script>

<style scoped>
	.notify {
    text-align: center;
	}

	.notify.success span {
    background-color: #bdffac;
    display: inline-block;
    padding: 7px 12px;
		border-radius: 20px;
    color: #3da749;
	}
</style>