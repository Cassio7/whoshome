<script>
	import * as Table from '$lib/components/ui/table/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	let { data } = $props();
	let persons = $state(data.persons);
</script>

<div class="flex flex-col gap-10 px-20 py-10">
	<h1 class="text-center text-2xl font-bold">Family Members</h1>
	<div class="px-20">
		{#if persons.length != 0}
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Id</Table.Head>
						<Table.Head>Name</Table.Head>
						<Table.Head>Surname</Table.Head>
						<Table.Head>Device</Table.Head>
						<Table.Head>At Home</Table.Head>
						<Table.Head class="text-rigth w-[100px]"></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each persons as person}
						<Table.Row>
							<Table.Cell class="font-medium">{person.id}</Table.Cell>
							<Table.Cell>{person.name}</Table.Cell>
							<Table.Cell>{person.surname}</Table.Cell>
							<Table.Cell>{person.device}</Table.Cell>
							<Table.Cell>{person.active ? '✅' : '❌'}</Table.Cell>
							<Table.Cell class="text-rigth">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										<Button variant="secondary">...</Button>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Group>
											<DropdownMenu.Label>Menu</DropdownMenu.Label>
											<DropdownMenu.Separator />
											<DropdownMenu.Item>Update</DropdownMenu.Item>
											<DropdownMenu.Item>Delete</DropdownMenu.Item>
										</DropdownMenu.Group>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		{:else}
			<p class="text-center text-xl">Start and add some family members!!</p>
		{/if}
	</div>
</div>
