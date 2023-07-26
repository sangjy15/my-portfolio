// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Next 사랑On 시스템 구축',
		date: '2022.10 ~ 2023.07',
		img: require('@/assets/images/project1.png'),
	},
	{
		id: 2,
		title: '보험금찾기 시스템 구축',
		date: '2022.02~ 2022.09',
		img: require('@/assets/images/project2.png'),
	},
	{
		id: 3,
		title: '비대면화상상담 및 디지털 리크루팅',
		date: '2021.06 ~ 2021.10',
		img: require('@/assets/images/project4.png'),
	},
	{
		id: 4,
		title: '모바일청약시스템 구축',
		date: '2020.05 ~ 2021.05',
		img: require('@/assets/images/project6.png'),
	},
	{
		id: 5,
		title: '모바일 영업지원시스템 통합개발',
		date: '2019.08 ~ 2020.03',
		img: require('@/assets/images/project3.png'),
	},
];

export default projects;
