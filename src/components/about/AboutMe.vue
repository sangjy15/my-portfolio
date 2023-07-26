<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'안녕하세요. 현재 두손 소프트에 재직중인 상진영 대리입니다. '
				},
				{
					id: 2,
					bio:
						'주요 경력 사항으로는 금융·보험사에서의 4개의 프로젝트 경험이 있습니다. 프로젝트에서 사용한 기술 스택은 Vue.js, java, SVN(형상)입니다.',
				},
				{
					id: 3,
					bio:
						'참여 프로젝트에서는 개발자로서 주로 Front-end 개발과 API 연계를 위한 Back-end 개발을 수행했습니다.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/my_profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
