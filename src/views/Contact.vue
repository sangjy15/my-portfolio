<script>
import feather from 'feather-icons';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: '경기도 부천시 오정구 성지로 16번길, 20-14',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'sangjy22@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '010-8492-0073',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
