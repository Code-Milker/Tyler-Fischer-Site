<script lang="ts">
	export let title: string = '';
</script>

<!-- desktop -->
<div class="hidden lg:block px-8 max-w-[1048px] mx-auto bg-secondary">
	<h2 class="text-center text-xl font-bold p-2 text-quaterary min-h-[45px]">
		{title}
	</h2>
	<div class="rounded-lg bg-primary p-8">
		<slot name="desktop" />
	</div>
</div>

<!-- mobile -->
<div class="block lg:hidden bg-secondary">
	<div class="border-text">
		<h2 class="text-xl font-bold bg-border text-center">
			{title}
		</h2>
	</div>
	<div class="bg-primary p-2">
		<slot name="mobile" />
	</div>
</div>
