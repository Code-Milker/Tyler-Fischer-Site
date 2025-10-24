<script lang="ts">
</script>

<!-- desktop -->
<div class="hidden lg:block h-full max-w-[1298px] mx-auto">
	<!-- <h2 class="text-center text-xl font-bold p-2 text-quaterary min-h-[45px]"> -->
	<!-- {title} -->
	<!-- </h2> -->
	<div
		class="bg-primary mx-auto max-w-[1098px] min-w-0 border-b-2 border-b-secondary h-full"
	>
		<slot name="desktop" />
	</div>
</div>

<!-- mobile -->
<div class="block lg:hidden bg-secondary h-full min-h-screen">
	<div class="border-text">
		<!-- <h2 class="text-xl font-bold bg-border text-center"> -->
		<!-- {title} -->
		<!-- </h2> -->
	</div>
	<div class="bg-primary h-full">
		<slot name="mobile" />
	</div>
</div>
