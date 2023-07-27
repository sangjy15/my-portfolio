// Projects data.
const projectData = [
    {
        projectId: 1,
        singleProjectHeader: {
            singleProjectTitle: 'Next 사랑On 시스템 구축',
            singleProjectDate: '2022.10 ~ 2023.07 (10 months)',
            singleProjectTag: 'Front-end developer',
        },
        projectImages: [
            {
                id: 1,
                title: 'Next 사랑On 시스템 구축',
                img: require('@/assets/images/pjt2.png'),
            },
            {
                id: 2,
                title: 'Next 사랑On 시스템 구축',
                img: require('@/assets/images/pjt7.png'),
            },
            {
                id: 3,
                title: 'Next 사랑On 시스템 구축',
                img: require('@/assets/images/pjt3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Project',
            companyInfos: [
                {
                    id: 1,
                    title: '시행사',
                    details: '삼성생명',
                },
                {
                    id: 2,
                    title: '업무 내용',
                    details: '공통팀, 디지털 프로필',
                }
            ],
            objectivesHeading: 'Contents',
            objectivesDetails:
                '기존 태블릿으로 수행하던 영업관리 시스템을 모바일 버전으로 구축',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'HTML',
                        'CSS',
                        'JAVA',
                        'Oracle',
                        'SVN',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        '컨설턴트 디지털 프로필, 영업관리 시스템 홈화면 <br />화면/서비스 개발',
                },
                {
                    id: 2,
                    details:
                        '디지털 프로필 내의 공유하기 기능, 연락처 저장 API 구현',
                },
                {
                    id: 3,
                    details:
                        '홈 화면 메뉴 조회를 위한 Query 작성 (Oracle)',
                },
                {
                    id: 4,
                    details:
                        '관련 기사 : <br />삼성생명, 이달 중 설계사 모바일 영업지원 플랫폼 구축<br /><a href="https://www.asiatoday.co.kr/view.php?key=20230705010002761">https://www.asiatoday.co.kr/view.php?key=20230705010002761</a>',
                }
            ]
        },
    },
    {
        projectId: 2,
        singleProjectHeader: {
            singleProjectTitle: '보험금찾기 시스템 구축',
            singleProjectDate: '2022.02 ~ 2022.09 (6 months)',
            singleProjectTag: 'Front-end developer',
        },
        projectImages: [
            {
                id: 1,
                title: '보험금찾기 시스템 구축',
                img: require('@/assets/images/pjt2.png'),
            },
            {
                id: 2,
                title: '보험금찾기 시스템 구축',
                img: require('@/assets/images/pjt1.png'),
            },
            {
                id: 3,
                title: '보험금찾기 시스템 구축',
                img: require('@/assets/images/pjt4.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Project',
            companyInfos: [
                {
                    id: 1,
                    title: '시행사',
                    details: '삼성생명',
                },
                {
                    id: 2,
                    title: '업무 내용',
                    details: '휴대폰, 카카오 인증 구현, 숨은보험금 찾기 화면/서비스 개발',
                }
            ],
            objectivesHeading: 'Contents',
            objectivesDetails:
                '고객의 치료 이력을 기반으로 청구 가능한 보험금과 미지급된 보험금을 통합 조회 시스템',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'HTML',
                        'CSS',
                        'JAVA',
                        'Oracle',
                        'SVN',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        '영업지원시스템(태블릿)의 프론트엔드 및 Legacy/ ERP 연계 API 호출을 위한  백엔드 개발(JAVA)',
                },
                {
                    id: 2,
                    details:
                        '카카오 인증, 수술 코드 검색( 외부 솔루션 ) API 연계',
                },
                {
                    id: 3,
                    details:
                        '관련 기사 :<br /> 삼성생명, 보험금 찾기 서비스 오픈 <br /><a href="https://www.getnews.co.kr/news/articleView.html?idxno=596709">https://www.getnews.co.kr/news/articleView.html?idxno=596709</a>',
                }
            ]
        },
    },
    {
        projectId: 3,
        singleProjectHeader: {
            singleProjectTitle: '비대면화상상담 및 디지털 리크루팅 시스템 구축 ',
            singleProjectDate: '2021.06 ~ 2021.10 (5 months)',
            singleProjectTag: 'Front-end developer',
        },
        projectImages: [
            {
                id: 1,
                title: '비대면화상상담',
                img: require('@/assets/images/pjt2.png'),
            },
            {
                id: 2,
                title: '비대면화상상담',
                img: require('@/assets/images/pjt1.png'),
            },
            {
                id: 3,
                title: '비대면화상상담',
                img: require('@/assets/images/pjt5.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Project',
            companyInfos: [
                {
                    id: 1,
                    title: '시행사',
                    details: '삼성생명',
                },
                {
                    id: 2,
                    title: '업무 내용',
                    details: '비대면 화상상담, 리크루팅 화면/서비스 개발',
                }
            ],
            objectivesHeading: 'Contents',
            objectivesDetails:
                '보험업계 최초로 고객과 보험 설계사가 비대면으로 할 수 있는 ‘화상상담 서비스’, 보험 설계사 모집을 위한 리크루팅 시스템 구축',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'HTML',
                        'CSS',
                        'JAVA',
                        'Oracle',
                        'SVN',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        '보험 영업 지원 시스템과 화상상담 솔루션(두손소프트) 시스템 연계',
                },
                {
                    id: 2,
                    details:
                        '보험 설계사를 위한 리크루팅 시스템 화면/ 서비스 개발',
                },
                {
                    id: 3,
                    details:
                        '화상 상담 자료 저장을 위한 DB TABLE 설계 참여 및 Query 작성',
                },
                {
                    id: 4,
                    details:
                        '관련 기사 : <br />두손소프트, 삼성생명 ‘화상상담 서비스’ 개시<br /><a href="https://www.econovill.com/news/articleView.html?idxno=552324">https://www.econovill.com/news/articleView.html?idxno=552324</a>',
                }
            ]
        },
    },
    {
        projectId: 4,
        singleProjectHeader: {
            singleProjectTitle: '모바일청약시스템 구축',
            singleProjectDate: '2020.05 ~ 2021.05 (12 months)',
            singleProjectTag: 'Front-end developer',
        },
        projectImages: [
            {
                id: 1,
                title: '모바일청약시스템 구축',
                img: require('@/assets/images/pjt2.png'),
            },
            {
                id: 2,
                title: '모바일청약시스템 구축',
                img: require('@/assets/images/pjt1.png'),
            },
            {
                id: 3,
                title: '모바일청약시스템 구축',
                img: require('@/assets/images/pjt6.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Project',
            companyInfos: [
                {
                    id: 1,
                    title: '시행사',
                    details: '삼성생명',
                },
                {
                    id: 2,
                    title: '업무 내용',
                    details: '보험 설계사 청약 화면 개발',
                }
            ],
            objectivesHeading: 'Contents',
            objectivesDetails:
                '보험 계약과정을 디지털화한 \'디지털 청약 프로세스\' 시스템',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'HTML',
                        'CSS',
                        'JAVA',
                        'Oracle',
                        'SVN',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        '보험 설계사를 위한 모바일청약 시스템 업무 프론트엔드(Vue.js) 개발',
                },
                {
                    id: 2,
                    details:
                        '관련 기사 :<br /> 삼성생명, 상담·계약·청구까지 모바일로 뚝딱<br /><a href="https://www.mk.co.kr/news/special-edition/10264511">https://www.mk.co.kr/news/special-edition/10264511</a>',
                }
            ]
        },
    },
    {
        projectId: 5,
        singleProjectHeader: {
            singleProjectTitle: '모바일 영업지원시스템 통합개발',
            singleProjectDate: '2019.08 ~ 2020.03 (8 months)',
            singleProjectTag: 'Front-end developer',
        },
        projectImages: [
            {
                id: 1,
                title: '모바일 영업지원시스템 통합개발',
                img: require('@/assets/images/pjt2.png'),
            },
            {
                id: 2,
                title: '모바일 영업지원시스템 통합개발',
                img: require('@/assets/images/pjt1.png'),
            },
            {
                id: 3,
                title: '모바일 영업지원시스템 통합개발',
                img: require('@/assets/images/pjt5.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Project',
            companyInfos: [
                {
                    id: 1,
                    title: '시행사',
                    details: '삼성생명',
                },
                {
                    id: 2,
                    title: '업무 내용',
                    details: '융자 업무 화면/서비스 개발',
                }
            ],
            objectivesHeading: 'Contents',
            objectivesDetails:
                '삼성생명 FC를 위해 제작한 갤럭시 탭. 전용으로 가입설계부터 전자청약까지 가능한 보험사 최초의 앱',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'HTML',
                        'CSS',
                        'JAVA',
                        'Oracle',
                        'SVN',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        '보험 설계사를 위한 영업지원 시스템(태블릿)업무 개발',
                },
                {
                    id: 2,
                    details:
                        '기존 flex(Adobe) 기반 프로그램을 Vue.js 기반 프로그램으로 개발',
                },
                {
                    id: 3,
                    details:
                        '융자 업무의 고객정보 조회, 등록, 수정 프론트엔드(Vue.js) 및<br /> Legacy/ ERP 연계 API 호출을 위한 백엔드 개발(JAVA)',
                }
            ]
        },
    }
]


export default projectData;