<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import projectData from '../data/projectData.js'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: () => {
		return {
			projectData,
			singleProjectHeader: {
				singleProjectTitle: '',
				singleProjectDate: '',
				singleProjectTag: '',
			},
			projectImages: [],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [],
			},
		};
	},
	mounted() {
		let projectInfo = this.projectData.filter((item) => item.projectId === Number(this.$route.query.id) )
		this.singleProjectHeader = projectInfo[0].singleProjectHeader
		this.projectImages =[...projectInfo[0].projectImages]
		this.projectInfo = projectInfo[0].projectInfo
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

	</div>
</template>

<style scoped></style>
