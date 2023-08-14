// Import images
import Project1Image1 from '../images/project1/image1.png';
import Project1Image2 from '../images/project1/image2.png';
import Project1Image3 from '../images/project1/image3.png';
import Project2Image1 from '../images/project2/image1.png';
import Project2Image2 from '../images/project2/image2.png';
import Project2Image3 from '../images/project2/image3.png';
import Project3Image1 from '../images/project3/image1.png';
import Project3Image2 from '../images/project3/image2.png';
import Project3Image3 from '../images/project3/image3.png';
import Project4Image1 from '../images/project4/image1.png';
import Project4Image2 from '../images/project4/image2.png';
import Project4Image3 from '../images/project4/image3.png';
import Project5Image1 from '../images/project5/image1.png';
import Project5Image2 from '../images/project5/image2.png';
import Project5Image3 from '../images/project5/image3.png';
import Project6Image1 from '../images/project6/image1.png';
import Project6Image2 from '../images/project6/image2.png';
import Project6Image3 from '../images/project6/image3.png';
import Project7Image2 from '../images/project7/image2.png';
import Project8Image1 from '../images/project8/image1.png';
import Project8Image2 from '../images/project8/image2.png';
import Project8Image3 from '../images/project8/image3.png';
import Project9Image1 from '../images/project9/image1.png';
import Project9Image2 from '../images/project9/image2.png';
import Project9Image3 from '../images/project9/image3.png';
import Project10Image1 from '../images/project10/image1.png';
import Project10Image2 from '../images/project10/image2.png';
import Project10Image3 from '../images/project10/image3.png';
import Project11Image1 from '../images/project11/image1.png';
import Project11Image2 from '../images/project11/image2.png';
import Project11Image3 from '../images/project11/image3.png';
import Project12Image1 from '../images/project12/image1.png';
import Project12Image2 from '../images/project12/image2.png';
import Project12Image3 from '../images/project12/image3.png';
import Project13Image1 from '../images/project13/image1.png';
import Project13Image2 from '../images/project13/image2.png';
import Project13Image3 from '../images/project13/image3.png';
import Project14Image1 from '../images/project14/image1.png';
import Project14Image3 from '../images/project14/image3.png';
import Project16Image2 from '../images/project16/image2.png';
import Project16Image3 from '../images/project16/image3.png';
import Project17Image1 from '../images/project17/image1.png';
import Project17Image3 from '../images/project17/image3.png';
import Project18Image1 from '../images/project18/image1.png';
import Project18Image2 from '../images/project18/image2.png';
import Project18Image3 from '../images/project18/image3.png';

export const projectCategoryData = [
	'Robert Half',
	'Fi360',
	'Independent',
	'Kennametal',
	'Sol Press'
];

export const projectsData = [
	{
		id: 0,
		title:
		{
			en: 'Statistical Modeling',
			jp: '統計モデリング'
		},
		category: 'Robert Half',
		date:
		{
			en: 'May 2022 - September 2022',
			jp: '2022年5月 - 2022年9月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project1Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Milliman',
				img: Project1Image1,
			},
			{
				id: 2,
				title: 'World Bank',
				img: Project1Image2,
			},
			{
				id: 3,
				title: 'Machine Learning',
				img: Project1Image3,
			}
		],
		ProjectInfo: {
			ClientName: 'Milliman Inc.',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Milliman Inc.',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ChartJS',
						'Blazorise',
						'Blazor',
						'XUnit',
						'bUnit',
						'Bootstrap',
						'.NET 6',
						'.NET Core',
						'.NET Standard',
						'Azure CosmosDB',
						'Azure Blob Storage',
						'Azure Active Directory',
						'Identity Framework',
						'C#',
						'Automapper',
						'NLog'
					],
				},
			],
			ProjectDetails:
			{
				en: "Software designed for business executives to actively display risk/reward vectors of their business using actuarial science models, machine learning, derive current public opinions about topics, and determine correlations between seemingly unrelated sets of data.",
				jp: "経営者が保険数理科学モデルや機械学習を使用してビジネスのリスク/報酬ベクトルを積極的に表示し、トピックに関する現在の世論を導き出し、一見無関係なデータセット間の相関関係を判断できるように設計されたソフトウェア。",
			},
			ProjectHighlights:
			{
				en: [
					"Integrates a back-end API which communicates with other proprietary applications to perform real-time calculations on statistical models. Integrates a back-end API which communicates with other proprietary",
					"Azure Blob storage for persistence",
					"UI was built using Blazorise Components",
					"Unit testing suite for both UI components and service code"],
				jp: [
					"他の独自アプリケーションと通信して統計モデルのリアルタイム計算を実行するバックエンド API を統合します。 他の独自のAPIと通信するバックエンドAPIを統合します。",
					 "永続性のための Azure Blob ストレージ",
					 "UI は Blazorise コンポーネントを使用して構築されました",
					 "UIコンポーネントとサービスコードの両方の単体テストスイート"
					]
			}
		},
		RelatedProjects: [1],
	},
	{
		id: 1,
		title:
		{
			en: 'Fiduciary Focus Toolkit',
			jp: '受託者フォーカス ツールキット'
		},
		category: 'Fi360',
		date:
		{
			en: 'August 2018 - November 2019',
			jp: '2018年8月 - 2019年11月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project2Image3,
		ProjectImages: [
			{
				id: 1,
				title: 'Fi360',
				img: Project2Image1,
			},
			{
				id: 2,
				title: 'Wells Fargo',
				img: Project2Image2,
			},
			{
				id: 3,
				title: 'Fiduciary Focus Toolkit',
				img: Project2Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Fi360',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fi360',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer 1',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET 3',
						'JavaScript',
						'Automapper',
						'ASP.NET Core',
						'.NET Framework 4',
						'Entity Framework',
						'xUnit',
						'NPM',
						'Node.JS',
						'Vue.JS',
						'AngularJS',
						'Blazor',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'SQL',
						'Git',
						'Azure DevOps',
						'Postman',
						'Typescript',
						'jQuery',
						'Bootstrap',
						'OAuth2'
					],
				},
			],
			ProjectDetails:
			{
				en: "Combining Fi360's Prudent Practices, flexible advisor controls and elegant reporting, the Fiduciary Focus Toolkit™ drives superior client outcomes, enabling you to achieve better business results. Used by a number of institutions such as Wells Fargo, the Fiduciary Focus Toolkit™ is a class leading software tool for fiduciaries.",
				jp: "Fiduciary Focus Toolkit™ は、Fi360 の Prudent Practices、柔軟なアドバイザー制御、洗練されたレポートを組み合わせて、クライアントの優れた成果を推進し、より良いビジネス成果を達成できるようにします。",
			},
			ProjectHighlights:
			{
				en: [
					"Performed long term support and bug fixing for existing code base.",
					"Coordinates with other teams to assist in the development of new features.",
					"Unit testing suite for business logic and data logic.",
					"Entity Framework database flow that integrates with mainly Angular Front End"],
				jp: [
					"既存のコードベースの長期サポートとバグ修正を実行しました。",
					 "他のチームと連携して新機能の開発を支援します。永続性のための Azure Blob ストレージ",
					 "ビジネス ロジックとデータ ロジックの単体テスト スイート。",
					 "主に Angular フロントエンドと統合される Entity Framework データベース フロー"
					]
			}
		},
		RelatedProjects: [0,3],
	},
	{
		id: 2,
		title:
		{
			en: 'Real Time Notification System',
			jp: 'リアルタイム通知システム'
		},
		category: 'Robert Half',
		date:
		{
			en: 'February 2021 - September 2021',
			jp: '2021年2月 - 2021年9月'
		},
		tags: ['Back-End'],
		img: Project3Image2,
		ProjectImages: [
			{
				id: 1,
				title: 'Cadensoft',
				img: Project3Image1,
			},
			{
				id: 2,
				title: 'Sirva',
				img: Project3Image2,
			},
			{
				id: 3,
				title: 'Relocation',
				img: Project3Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Cadensoft',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Cadensoft',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'System Architect',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Azure Cosmos DB',
						'Change Feed Processor',
						'Azure Functions',
						'Azure Service Bus',
						'RabbitMQ',
						'NUnit',
						'MassTransit',
						'State Machines',
						'ServiceStack',
						'ASP.NET Core',
						'Twilio',
						'SendGrid',
						'.NET Standard',
						'MongoDB',
						'C#',
						'NLog'
					],
				},
			],
			ProjectDetails:
			{
				en: "New feature within an existing system that hooks into CosmosDBs with a Change Feed Processor to detect changes in a database, process the changes to see if certain data points on the objects have changed, and if they have, send out notifications to relevant users of the system via multiple channels including SMS, email, web push, and mobile push.",
				jp: "既存システム内の新機能は、変更フィード プロセッサーを使用して CosmosDB にフックし、データベース内の変更を検出し、変更を処理してオブジェクト上の特定のデータ ポイントが変更されたかどうかを確認し、変更されている場合は、システムの関連ユーザーに通知を送信します。 SMS、電子メール、Web プッシュ、モバイル プッシュなどの複数のチャネルを介してシステムに送信されます。",
			},
			ProjectHighlights:
			{
				en: [
					"Assist in a .NET upgrade from 2.2 to 3.1",
					"Set up Change Feed Processor for the existing Azure Cosmos DBs",
					"Designed, Implemented, and Deployed the notification system"],
				jp: [
					".NET 2.2 から 3.1 へのアップグレードを支援する",
					 "既存の Azure Cosmos DB の変更フィード プロセッサをセットアップする",
					 "通知システムの設計、実装、展開"
					]
			}
		},
		RelatedProjects: [],
	},
	{
		id: 3,
		title:
		{
			en: 'QLedgr',
			jp: 'QLEDGR'
		},
		category: 'Independent',
		date:
		{
			en: 'January 2022 - Now',
			jp: '2022年2月 - 現在'
		},
		tags: ['Back-End', 'Full-Stack'],
		img: Project4Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'QLedgr',
				img: Project4Image1,
			},
			{
				id: 2,
				title: 'Transactions',
				img: Project4Image2,
			},
			{
				id: 3,
				title: 'iraLogix',
				img: Project4Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'QLedgr',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'QLedgr',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Technical Lead',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C#',
						'.NET 6',
						'ASP.NET',
						'Entity Framework Core',
						'AWS Cognito',
						'AWS EC2',
						'AWS RDB',
						'SQL Server',
						'xUnit',
						'Docker',
						'NPM',
						'Node.JS',
						'React',
						'Svelte',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'Javascript',
						'SQL',
						'Git',
						'Postman',
						'Typescript',
						'Azure DevOps',
						'Jira',
						'Monday.com'
					],
				},
			],
			ProjectDetails:
			{
				en: "QLedgr is building a system that streamlines the process of getting your retirement account funds into your hands. Current lead times for getting access to most funds in IRAs, 401(k)s, 529 Plans, and other such tax advantaged accounts is days to weeks. QLedgr's system plans to integrate directly with IRA data providers such as iraLogix and with card processors to give you a card in your wallet that connects up to your investments and gives you direct access to your own money.",
				jp: "QLedgr は、退職金口座資金を受け取るプロセスを合理化するシステムを構築しています。 現在、IRA、401(k)、529 プラン、その他の税制優遇口座のほとんどの資金にアクセスするまでのリードタイムは数日から数週間です。 QLedgr のシステムは、iraLogix などの IRA データ プロバイダーやカード プロセッサと直接統合して、ウォレットにカードを入れて投資に接続し、自分のお金に直接アクセスできるようにする予定です。",
			},
			ProjectHighlights:
			{
				en: [
					"Serving as head technical lead for burgeoning financial technology start up",
					"Architecting technical solutions using microservices and software that integrates with major financial players",
					"Met with and addressed concerns with executive members for both QLedgr and its business partners",
					"Developing systems using in-depth knowledge of financial and legal systems and restrictions"],
				jp: [
					"急成長中の金融技術系新会社の主任技術者を務める。",
					 "大手金融機関と連携するソフトウェアの技術ソリューションの開発。",
					 "QLedgrとお取引先様双方の役員メンバーとのお悩み相談会",
					 "金融や法律の制度や制約を熟知した上で、システムを開発する。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 4,
		title:
		{
			en: 'Employee Scheduling System',
			jp: '従業員スケジュール管理システム'
		},
		category: 'Robert Half',
		date:
		{
			en: 'July 2020 - June 2021',
			jp: '2020年7月 - 2021年6月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project5Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'DNA',
				img: Project5Image1,
			},
			{
				id: 2,
				title: 'Calendar',
				img: Project5Image2,
			},
			{
				id: 3,
				title: 'Hospital',
				img: Project5Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Dedicated Nursing Associates',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Dedicated Nursing Associates',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'.NET 5',
						'Blazor',
						'Razor',
						'Identity Framework',
						'Azure Active Directory',
						'Blazorise',
						'bUnit',
						'xUnit',
						'SQL Server',
						'Selenium',
						'Entity Framework',
						'React Native',
						'Javascript',
						'Typescript',
						'Azure DevOps',
						'C#'
					],
				},
			],
			ProjectDetails:
			{
				en: "Entirely new application that helps coordinate the schedule of travel nurses with various employment opportunities, as well as maintain compliance, and tie into the existing payroll system.",
				jp: "出張看護師のスケジュールをさまざまな雇用機会と調整し、コンプライアンスを維持し、既存の給与システムと連携するのに役立つまったく新しいアプリケーションです。",
			},
			ProjectHighlights:
			{
				en: [
					"Serve as knowledge authority on Blazor systems as the project shifted from Razor Pages to Blazor to give the application more SPA features",
					"Help set up the Identity Framework solution",
					"Instruct and help junior members of the team as needed",
					"Interface with the BA to assist in story creation and ensuring that all of the details needed for development are included",
					"Occasionally leading smaller teams within the larger team when priorities demanded"],
				jp: [
					"プロジェクトが Razor Pages から Blazor に移行し、アプリケーションにさらに多くの SPA 機能を追加する際に、Blazor システムに関する知識権威として機能します。",
					 "Identity Framework ソリューションのセットアップを支援する",
					 "必要に応じてチームの後輩メンバーを指導し、支援する",
					 "BA とのインターフェースにより、ストーリーの作成を支援し、開発に必要な詳細がすべて含まれていることを確認します",
					 "優先順位が必要な場合には、大規模なチーム内で小規模なチームを率いることもあります"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 5,
		title:
		{
			en: 'Contact Import System',
			jp: '統計モデリング連絡先インポートシステム'
		},
		category: 'Robert Half',
		date:
		{
			en: 'January 2020 - May 2020',
			jp: '2020年1月 - 2020年5月'
		},
		tags: ['Back-End'],
		img: Project6Image3,
		ProjectImages: [
			{
				id: 1,
				title: 'Echo Gate',
				img: Project6Image1,
			},
			{
				id: 2,
				title: 'Contact',
				img: Project6Image2,
			},
			{
				id: 3,
				title: 'Boomtown',
				img: Project6Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Echo Gate Technology',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Echo Gate Technology',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Amazon AWS SQS',
						'Amazon AWS SNS',
						'MongoDB',
						'C#',
						'.NET Core',
						'GrayLog',
						'Akka',
						'JSON',
						'BSON',
						'Docker',
						'dotCover',
						'Scala'
					],
				},
			],
			ProjectDetails:
			{
				en: "Formerly Scala microservice worker that consumed messages from Amazon SQS and then performed processed contact data, imported contacts, connected to various databases, and various APIs, and kept a tracker log of all requests and results.",
				jp: "以前は Scala マイクロサービス ワーカーで、Amazon SQS からのメッセージを消費し、連絡先データの処理、連絡先のインポート、さまざまなデータベースおよびさまざまな API への接続を実行し、すべてのリクエストと結果のトラッカー ログを保持していました。",
			},
			ProjectHighlights:
			{
				en: [
					"Ported Scala microservice to .NET Core, microservice in a Docker container",
					"Ported all relevant Scala models to matching C# models",
					"Increased unit test coverage while optimizing code efficiency",
					"Kept connections to proxy services without any effect on dependents",
					"Created worker load distribution for batch processing",
					"Seamless integration with existing systems with zero bugs upon release"
				],
				jp: [
					"Scala マイクロサービスを .NET Core に移植、Docker コンテナー内のマイクロサービス",
					"関連するすべての Scala モデルを一致する C# モデルに移植しました",
					"コード効率を最適化しながら単体テストのカバレッジを向上",
					"依存関係に影響を与えずにプロキシ サービスへの接続を維持",
					"バッチ処理用に作成されたワーカー負荷分散",
					"リリース時にバグが発生しない既存システムとのシームレスな統合"
					]
			}
		},
		RelatedProjects: [6],
	},
	{
		id: 6,
		title:
		{
			en: 'Organization System',
			jp: '組織体制'
		},
		category: 'Robert Half',
		date:
		{
			en: 'January 2020 - May 2020',
			jp: '2020年1月 - 2020年5月'
		},
		tags: ['Back-End'],
		img: Project6Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Echo Gate',
				img: Project6Image1,
			},
			{
				id: 2,
				title: 'Organization',
				img: Project7Image2,
			},
			{
				id: 3,
				title: 'Boomtown',
				img: Project6Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Echo Gate Technology',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Echo Gate Technology',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Amazon AWS S3',
						'Dapper',
						'C#',
						'.NET Core',
						'Redis',
						'T-SQL',
						'GrayLog',
						'Akka',
						'JSON',
						'Docker',
						'dotCover',
						'Scala'
					],
				},
			],
			ProjectDetails:
			{
				en: "Formerly Scala Microservice API that consumes data from the various data sources and APIs, to then present a clean API with hierarchy schemas and proper permission checks.  Helped reduce the dependency of needing multiple connections to multiple APIs.",
				jp: "以前は、さまざまなデータ ソースおよび API からのデータを消費する Scala Microservice API でしたが、階層スキーマと適切な権限チェックを備えたクリーンな API を提供しました。 複数の API への複数の接続が必要になる依存関係を軽減するのに役立ちました。",
			},
			ProjectHighlights:
			{
				en: [
					"Ported Scala microservice to latest version of .NET Core microservice in a Docker container",
					"Ported all relevant Scala models to matching C# models",
					"Increased unit test coverage while optimizing code efficiency",
					"Kept connections to proxy services without any effect on dependents",
					"Seamless integration with existing systems with zero bugs upon release"
				],
				jp: [
					"Scala マイクロサービスを Docker コンテナー内の最新バージョンの .NET Core マイクロサービスに移植",
					"関連するすべての Scala モデルを一致する C# モデルに移植しました",
					"コード効率を最適化しながら単体テストのカバレッジを向上",
					"依存関係に影響を与えずにプロキシ サービスへの接続を維持",
					"リリース時にバグが発生しない既存システムとのシームレスな統合"
					]
			}
		},
		RelatedProjects: [5],
	},
	{
		id: 7,
		title:
		{
			en: '7Event Notification Publisher System',
			jp: '7イベント通知発行者システム'
		},
		category: 'Robert Half',
		date:
		{
			en: 'Septemeber 2021 - October 2022',
			jp: '2022年9月 - 2022年10月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project8Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'FleetResponse',
				img: Project8Image1,
			},
			{
				id: 2,
				title: 'Notifications',
				img: Project8Image2,
			},
			{
				id: 3,
				title: 'Update',
				img: Project8Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Fleet Response',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fleet Response',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'AWS SQS',
						'AWS SNS',
						'AWS S3',
						'AutoMapper',
						'Couchbase',
						'Log4Net',
						'MongoDB',
						'C#',
						'.NET Framework',
						'NewRelic Agent',
						'JSON',
						'SQL',
						'Topshelf',
						'F#',
						'NServiceBus'
					],
				},
			],
			ProjectDetails:
			{
				en: "Massive .NET standard repository that contains 192 projects, applications, services, web apps, etc. Responsible for more of the client's application base.",
				jp: "192 のプロジェクト、アプリケーション、サービス、Web アプリなどが含まれる大規模な .NET 標準リポジトリ。クライアントのアプリケーション ベースの多くを担当します。",
			},
			ProjectHighlights:
			{
				en: [
					"Upgraded from old NServiceBus Library to a new in-house messaging library, greatly reducing overhead and cost",
					"Maintained fallback methods, in the case of the new library failed to send messages, creating a seamless transition",
					"Connected new messaging library directly to Amazon AWS, rather than passing through multiple services unnecessarily",
					"Included logging for fallback methods"
				],
				jp: [
					"古い NServiceBus ライブラリから新しい社内メッセージング ライブラリにアップグレードされ、オーバーヘッドとコストが大幅に削減されました",
					"新しいライブラリがメッセージの送信に失敗した場合のフォールバック メソッドを維持し、シームレスな移行を実現",
					"新しいメッセージング ライブラリを不必要に複数のサービスを経由するのではなく、Amazon AWS に直接接続しました。",
					"フォールバックメソッドのロギングが含まれています"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 8,
		title:
		{
			en: 'Pro Sports Organization Payroll System',
			jp: 'プロスポーツ団体の給与制度'
		},
		category: 'Robert Half',
		date:
		{
			en: 'January 2022 - April 2022',
			jp: '2022年1月 - 2022年5月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project9Image2,
		ProjectImages: [
			{
				id: 1,
				title: 'Payroll',
				img: Project9Image1,
			},
			{
				id: 2,
				title: 'Pirates',
				img: Project9Image2,
			},
			{
				id: 3,
				title: 'EBIS',
				img: Project9Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Pittsburgh Associates',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Pittsburgh Associates',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ASP.NET Core',
						'HTML',
						'JavaScript',
						'CSS',
						'jQuery',
						'ASP.NET 6',
						'Azure DevOps',
						'SQL',
						'C#'
					],
				},
			],
			ProjectDetails:
			{
				en: "Various integrations and UI improvements that helped the user flow for a payroll system. This system integrates with a larger 3rd party API for updating and importing new data for employees and connects to their API that sends out payments.",
				jp: "給与システムのユーザー フローを支援するさまざまな統合と UI の改善。 このシステムは、従業員向けの新しいデータを更新およびインポートするために大規模なサードパーティ API と統合され、支払いを送金する API に接続されます。",
			},
			ProjectHighlights:
			{
				en: [
					"Upgraded multiple projects and solutions to .NET 6 as well as fixed/removed outdated .NET references back to various old framework and core versions.",
					"Removed multiple UI bugs that were hindering the user experience such as displaying employee names incorrectly.Azure Blob storage for persistence",
					"Added new screens to confirm user changes and enabled the user to add business rules and restrictions that prevented other users from accidentally entering bad data.",
					"Updated navigation routing so it would take users less clicks to get to common screens.",
					"Updated forms to pre-populate with data wherein appropriate."
				],
				jp: [
					"複数のプロジェクトとソリューションを .NET 6 にアップグレードし、古い .NET 参照を修正/削除してさまざまな古いフレームワークとコア バージョンに戻しました。",
					 "従業員名が正しく表示されないなど、ユーザー エクスペリエンスを妨げていた複数の UI バグを削除しました。",
					 "ユーザーの変更を確認するための新しい画面が追加され、他のユーザーが誤って間違ったデータを入力することを防ぐビジネス ルールと制限をユーザーが追加できるようになりました。",
					 "ナビゲーション ルーティングを更新したため、ユーザーが共通の画面にアクセスするまでのクリック数が減りました。",
					 "必要に応じてデータが事前に入力されるようにフォームを更新しました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 9,
		title:
		{
			en: 'Insurance Quoting System',
			jp: '保険見積りシステム'
		},
		category: 'Robert Half',
		date:
		{
			en: 'October 2022 - April 2023',
			jp: '2022年10月 - 2023年5月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project10Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Quinstreet',
				img: Project10Image1,
			},
			{
				id: 2,
				title: 'Progressive',
				img: Project10Image2,
			},
			{
				id: 3,
				title: 'Insurance',
				img: Project10Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Quinstreet',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Quinstreet',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Senior Software Engineer',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vue.JS',
						'.NET 6',
						'SQL Server',
						'Node.Js',
						'Babel',
						'Apache Ant',
						'JSON',
						'XML',
						'XSLT',
						'C#',
						'Okta',
						'Postman',
						'Perforce',
						'Git',
						'Azure DevOps',
						'Jira'
					],
				},
			],
			ProjectDetails:
			{
				en: "New integrations and bug fixes for a multi-tenancy software that can be interacted with via either an API or a front end that will enable the user to request a quote and begin the process of matching an applicant with a wide variety of configurable insurance companies.",
				jp: "API またはフロントエンドを介して操作できるマルチテナント ソフトウェアの新しい統合とバグ修正により、ユーザーは見積もりをリクエストし、申請者と構成可能なさまざまな保険会社をマッチングするプロセスを開始できるようになります。給与システムのユーザー フローを支援するさまざまな統合と UI の改善。 このシステムは、従業員向けの新しいデータを更新およびインポートするために大規模なサードパーティ API と統合され、支払いを送金する API に接続されます。",
			},
			ProjectHighlights:
			{
				en: [
					"Navigate the specific intricacies of a complex industry with rules that are constantly evolving and vary from locale to locale.",
					"Assisted in multiple new integrations of new insurance companies that applicants can now select from",
					"Coordinated with quality assurance team as well as other developers to assist in their work when they ran into roadblocks.",
					"Helped debug and diagnose new issues as well as discover previously unknown issues that were existing in productions."
				],
				jp: [
					"常に進化し、ロケールごとに異なるルールを使用して、複雑な業界特有の複雑な問題を解決します。",
					"申請者が選択できるようになった新しい保険会社の複数の新たな統合を支援",
					"障害に遭遇した場合は、品質保証チームや他の開発者と連携して作業を支援します。",
					"新しい問題のデバッグと診断だけでなく、本番環境に存在していたこれまで知られていなかった問題の発見にも役立ちました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 10,
		title:
		{
			en: 'Architecture Consultation',
			jp: 'ソフトウェア アーキテクチャに関するコンサルティング'
		},
		category: 'Robert Half',
		date:
		{
			en: 'May 2023 - July 2023',
			jp: '2023年5月 - 2023年7月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project11Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Went Inc',
				img: Project11Image1,
			},
			{
				id: 2,
				title: 'Consultant',
				img: Project11Image2,
			},
			{
				id: 3,
				title: 'InspectNTrack',
				img: Project11Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Went Inc',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Went Inc',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Architect',
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Angular',
						'.NET 6',
						'.NET Framework',
						'OAuth2',
						'SQL Server',
						'JSON',
						'XML',
						'C#',
						'Okta',
						'Ping Identity',
						'Postman',
						'Git'
					],
				},
			],
			ProjectDetails:
			{
				en: "Consulted and gave experienced feedback on the architecture of existing projects, assisted in the design and architecture of upcoming projects, and provided samples of possible upgrade paths and code cleanups.",
				jp: "既存のプロジェクトのアーキテクチャに関するコンサルティングと経験豊富なフィードバックを提供し、今後のプロジェクトの設計とアーキテクチャを支援し、可能なアップグレード パスとコードのクリーンアップのサンプルを提供しました。",
			},
			ProjectHighlights:
			{
				en: [
					"Consulted regarding the architecture of existing solutions and providing feedback on how to improve and update the code",
					"Assisted in the integration of new OAuth2 Identity Providers",
					'Updated existing codebases and brought them up to modern standards and runtimes'
				],
				jp: [
					"既存のソリューションのアーキテクチャに関するコンサルティングを行い、コードを改善および更新する方法についてフィードバックを提供します。",
					"新しい OAuth2 ID プロバイダーの統合を支援",
					"既存のコードベースを更新し、最新の標準とランタイムに対応させました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 11,
		title:
		{
			en: 'Centralized Fiduciary Software',
			jp: '集中管理された受託者ソフトウェア'
		},
		category: 'Fi360',
		date:
		{
			en: 'August 2018 - November 2019',
			jp: '2018年8月 - 2019年11月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project12Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'FirmPlus',
				img: Project12Image1,
			},
			{
				id: 2,
				title: 'UBS',
				img: Project12Image2,
			},
			{
				id: 3,
				title: 'LPL',
				img: Project12Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Fi360',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fi360',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer 1',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET Core',
						'Java',
						'JavaScript',
						'Selenium',
						'Oracle PL/SQL',
						'Automapper',
						'Hangfire',
						'.NET Framework 4',
						'Entity Framework',
						'xUnit',
						'Topshelf',
						'Razor',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'SQL',
						'Git',
						'Azure DevOps',
						'VSTS/TFS',
						'Postman',
						'Typescript',
						'jQuery',
						'Telerik',
						'Material Design',
						'Bootstrap',
						'OAuth2',
						"PDFSharp",
						"EvoPDF",
						"iTextSharp",
						"Identity Server 3"
					],
				},
			],
			ProjectDetails:
			{
				en: "Web application that allows fiduciaries to manage plans and RFPs, generate reports, perform certain compliance tasks, share data with their plan sponsors, and perform any other required tasks.",
				jp: "受託者が計画と RFP を管理し、レポートを生成し、特定のコンプライアンス タスクを実行し、計画スポンサーとデータを共有し、その他の必要なタスクを実行できるようにする Web アプリケーション。",
			},
			ProjectHighlights:
			{
				en: [
					"Assisted in the refractor and improvement of the automated systems, taking successful plan matching from 30% to above 70%.",
					"Integrated a single sign on user system.",
					"Assisted in research and replacement of outdated libraries with newer and less expensive equivalents.",
					"Updated security to modern standards including; hashing passwords, cross site scripting attack protections, etc.",
					"Developed a host of new features for large enterprise clients as needed."
					],
				jp: [
					"屈折装置と自動システムの改善を支援し、計画マッチングの成功率が 30% から 70% 以上に達しました。",
					"シングルサインオンユーザーシステムを統合。",
					"古いライブラリの調査と、より新しく安価な同等のライブラリへの置き換えを支援します。",
					"以下を含む最新の標準に合わせてセキュリティを更新しました。 パスワードのハッシュ化、クロスサイトスクリプティング攻撃からの保護など。",
					"必要に応じて、大企業クライアント向けに多数の新機能を開発しました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 12,
		title:
		{
			en: 'Stable Value Fund Software',
			jp: 'ステーブル・バリュー・ファンド・ソフトウェア'
		},
		category: 'Fi360',
		date:
		{
			en: 'August 2018 - November 2019',
			jp: '2018年8月 - 2019年11月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project13Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Stable Value Monitoring',
				img: Project13Image1,
			},
			{
				id: 2,
				title: 'CFFM',
				img: Project13Image2,
			},
			{
				id: 3,
				title: 'Blue Prairie Group',
				img: Project13Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Fi360',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fi360',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer 1',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET Core',
						'Java',
						'JavaScript',
						'Selenium',
						'Oracle PL/SQL',
						'Automapper',
						'Hangfire',
						'.NET Framework 4',
						'Entity Framework',
						'xUnit',
						'Topshelf',
						'Razor',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'SQL',
						'Git',
						'Azure DevOps',
						'VSTS/TFS',
						'Postman',
						'Typescript',
						'jQuery',
						'Telerik',
						'Material Design',
						'Bootstrap',
						'OAuth2',
						"PDFSharp",
						"EvoPDF",
						"iTextSharp",
						"Identity Server 3"
					],
				},
			],
			ProjectDetails:
			{
				en: "Optimized a web application that helped to create proposals, generate PDF reports, monitor, and make adjustments to stable value fiduciary plans.",
				jp: "提案書の作成、PDF レポートの生成、監視、安定した価値の受託者計画の調整を支援する Web アプリケーションを最適化しました。",
			},
			ProjectHighlights:
			{
				en: [
					"Improved application performance and page load by over 100%. Provided a significant increase in efficiency, Reduced page load from 33 seconds to 15 seconds.",
					"Improved API calls and reduced API Requests by over 100%.",
					"Created data verification and validation that also included error messaging and reporting.",
					"Assisted in migration from external contractors to internal environments and servers.",
					"Engaged in a complete product rebranding campaign."
					],
				jp: [
					"アプリケーションのパフォーマンスとページの読み込みが 100% 以上改善されました。 効率が大幅に向上し、ページの読み込み時間が 33 秒から 15 秒に短縮されました。",
					"API 呼び出しが改善され、API リクエストが 100% 以上削減されました。",
					"エラー メッセージとレポートも含まれるデータの検証と検証を作成しました。",
					"外部請負業者から内部環境およびサーバーへの移行を支援します。",
					"製品の完全なリブランディングキャンペーンに従事。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 13,
		title:
		{
			en: 'RFP Software',
			jp: '提案依頼ソフトウェア'
		},
		category: 'Fi360',
		date:
		{
			en: 'August 2018 - November 2019',
			jp: '2018年8月 - 2019年11月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project13Image2,
		ProjectImages: [
			{
				id: 1,
				title: 'RFP Director',
				img: Project14Image1,
			},
			{
				id: 2,
				title: 'CFFM',
				img: Project13Image2,
			},
			{
				id: 3,
				title: 'proposal',
				img: Project14Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Fi360',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fi360',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer 1',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET Core',
						'Java',
						'JavaScript',
						'Selenium',
						'Oracle PL/SQL',
						'Automapper',
						'Hangfire',
						'.NET Framework 4',
						'Entity Framework',
						'xUnit',
						'Topshelf',
						'Razor',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'SQL',
						'Git',
						'Azure DevOps',
						'VSTS/TFS',
						'Postman',
						'Typescript',
						'jQuery',
						'Telerik',
						'Material Design',
						'Bootstrap',
						'OAuth2',
						"PDFSharp",
						"EvoPDF",
						"iTextSharp",
						"Identity Server 3"
					],
				},
			],
			ProjectDetails:
			{
				en: "Web application for generating reports, monitoring RFPs, responding to RFPs, as well as perform other expected tasks.",
				jp: "既存のシングル サインオン システムと統合されたアプリケーション。",
			},
			ProjectHighlights:
			{
				en: [
					"Integrated application with existing single sign on system.",
					"Assist in migration into internal environments.",
					"Improved data validation and error messaging."
					],
				jp: [
					"既存のシングル サインオン システムと統合されたアプリケーション。",
					"社内環境への移行を支援します。",
					"データ検証とエラー メッセージングが改善されました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 14,
		title:
		{
			en: 'Fiduciary Reporting Wizard',
			jp: '受託者レポートウィザード'
		},
		category: 'Fi360',
		date:
		{
			en: 'August 2018 - November 2019',
			jp: '2018年8月 - 2019年11月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project14Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Fi360',
				img: Project2Image1,
			},
			{
				id: 2,
				title: 'CFFM',
				img: Project13Image2,
			},
			{
				id: 3,
				title: 'UBS',
				img: Project12Image2,
			},
		],
		ProjectInfo: {
			ClientName: 'Fi360',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Fi360',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer 1',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET Core',
						'Java',
						'JavaScript',
						'Selenium',
						'Oracle PL/SQL',
						'Automapper',
						'Hangfire',
						'.NET Framework 4',
						'Entity Framework',
						'xUnit',
						'Topshelf',
						'Razor',
						'Identity Framework',
						'XML',
						'Nuget',
						'JSON',
						'REST',
						'Moq',
						'HTML',
						'CSS',
						'SQL',
						'Git',
						'Azure DevOps',
						'VSTS/TFS',
						'Postman',
						'Typescript',
						'jQuery',
						'Telerik',
						'Material Design',
						'Bootstrap',
						'OAuth2',
						"PDFSharp",
						"EvoPDF",
						"iTextSharp",
						"Identity Server 3"
					],
				},
			],
			ProjectDetails:
			{
				en: "Web application that helps fiduciaries manage their various plans, quarterly reports, and perform various compliance tasks both automatically and with an easy to use wizard.",
				jp: "受託者がさまざまな計画や四半期報告書を管理し、さまざまなコンプライアンス タスクを自動および使いやすいウィザードで実行できるようにする Web アプリケーション。",
			},
			ProjectHighlights:
			{
				en: [
					"Assisted in migration from external contractors in internal environments and servers.",
					"Served as the subject matter expert on the application and was the lead consult for both technical and business team members",
					"Decentralized monolithic API and migrated into smaller APIs and application specific logic."
					],
				jp: [
					"外部請負業者からの内部環境およびサーバーへの移行を支援します。",
					"アプリケーションの対象分野の専門家を務め、技術チームとビジネス チームの両方のメンバーに対する主任コンサルティングを務めました",
					"モノリシック API を分散化し、より小さな API とアプリケーション固有のロジックに移行しました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 15,
		title:
		{
			en: 'Sharepoint Site Transition',
			jp: 'Sharepoint サイトの移行'
		},
		category: 'Kennametal',
		date:
		{
			en: 'May 2017 - August 2017',
			jp: '2017年5月 - 2019年8月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project8Image3,
		ProjectImages: [
			{
				id: 1,
				title: 'Update',
				img: Project8Image3,
			},
			{
				id: 2,
				title: 'Kennametal',
				img: Project16Image2,
			},
			{
				id: 3,
				title: 'Sharepoint',
				img: Project16Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Kennametal',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Kennametal',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer Intern',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						'ASP.NET Core',
						'Entity Framework',
						'Azure',
						'Javascript',
						'T-SQL',
						'Telerik',
						'HTML',
						'CSS',
						'Microsoft Sharepoint',
						'OAuth2'
					],
				},
			],
			ProjectDetails:
			{
				en: "Project Simple was used to make it easier for internal employees to work with data, interact with customers, and provide accurate information as needed for both internal and external entities.",
				jp: "Project Simple は、社内の従業員がデータを操作したり、顧客とやり取りしたり、社内と社外の組織の両方に必要に応じて正確な情報を提供したりすることを容易にするために使用されました。",
			},
			ProjectHighlights:
			{
				en: [
					"Implement OAuth 2.0",
					"Implement user persistent settings and filtering.",
					"Expand upon logs to create a more verbose and usable record for development and auditing purposes.",
					"Transition and convert SharePoint sites and applications to Azure."
					],
				jp: [
					"OAuth2の実装",
					"ユーザーの永続的な設定とフィルタリングを実装します。",
					"ログを拡張して、開発および監査の目的でより詳細で使用可能なレコードを作成します。",
					"SharePoint サイトとアプリケーションを Azure に移行および変換します。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 16,
		title:
		{
			en: 'CAD and Machinery Customizer',
			jp: 'CADおよび機械カスタマイザー'
		},
		category: 'Kennametal',
		date:
		{
			en: 'May 2017 - August 2017',
			jp: '2017年5月 - 2019年8月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project16Image2,
		ProjectImages: [
			{
				id: 1,
				title: 'Computer Assisted Machining',
				img: Project17Image1,
			},
			{
				id: 2,
				title: 'Kennametal',
				img: Project16Image2,
			},
			{
				id: 3,
				title: 'Robot Arm',
				img: Project17Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Kennametal',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Kennametal',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer Intern',
				}
			],
			Technologies: [
				{
					techs: [
						'C#',
						"C++",
						"Entity Framework",
						"XML",
						"T-SQL"
					],
				},
			],
			ProjectDetails:
			{
				en: "Project E2E was designed to streamline the process of manufacturing custom parts and ordering of metal parts. It would intake a CAD drawing and generate a product order.",
				jp: "プロジェクト E2E は、カスタム パーツの製造と金属パーツの注文のプロセスを合理化するように設計されました。 CAD 図面を取り込んで製品の注文を生成します。",
			},
			ProjectHighlights:
			{
				en: [
					"Assisted in general architecture of project",
					"Document entities with XML commentation",
					"Assisted in planning of various needs and database objects"
					],
				jp: [
					"プロジェクトのアーキテクチャ全般を支援",
					"XML コメントを含むドキュメント エンティティ",
					"さまざまなニーズとデータベース オブジェクトの計画を支援"
					]
			}
		},
		RelatedProjects: [0,1],
	},
	{
		id: 17,
		title:
		{
			en: 'Localized Goods Marketplace',
			jp: 'ローカライズされた商品マーケットプレイス'
		},
		category: 'Sol Press',
		date:
		{
			en: 'March 2018 - January 2019',
			jp: '2018年3月 - 2019年1月'
		},
		tags: ['UI', 'Front-End', 'Back-End', 'Full-Stack'],
		img: Project18Image1,
		ProjectImages: [
			{
				id: 1,
				title: 'Hyourin Logo',
				img: Project18Image1,
			},
			{
				id: 2,
				title: 'Sol Press',
				img: Project18Image2,
			},
			{
				id: 3,
				title: 'Translation',
				img: Project18Image3,
			},
		],
		ProjectInfo: {
			ClientName: 'Sol Press',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'Sol Press',
				},
				{
					id: 2,
					title: 'Roles',
					details: 'Software Engineer',
				}
			],
			Technologies: [
				{
					techs: [
						'Java',
						'C#',
						'Javascript',
						'JSON',
						'T-SQL',
						'Azure',
						'.NET',
						'Ruby'
					],
				},
			],
			ProjectDetails:
			{
				en: "Project Moon was originally designed as an all in one web-store and desktop application that would ensure the various contents being sold by the company would be insured with DRM while also being easily acceptable.",
				jp: "Project Moon はもともと、同社が販売するさまざまなコンテンツが確実に DRM で保証され、同時に簡単に受け入れられる、オールインワンの Web ストアおよびデスクトップ アプリケーションとして設計されました。",
			},
			ProjectHighlights:
			{
				en: [
					"Outlines architecture of project and lead team in designing first proofs of concept",
					"Created an encryption schema to protect file types against all forms of attacks and stream hijackings."
					],
				jp: [
					"プロジェクトのアーキテクチャの概要を説明し、最初の概念実証の設計でチームをリードします",
					"あらゆる形式の攻撃やストリームハイジャックからファイルタイプを保護するための暗号化スキーマを作成しました。"
					]
			}
		},
		RelatedProjects: [0,1],
	},
];
