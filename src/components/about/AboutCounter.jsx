import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { useTranslation } from 'react-i18next';

const AboutCounter = () => {
	const { t } = useTranslation();

	useCountUp({ ref: 'experienceCounter', end: Math.floor((Date.now() - (new Date("2018-08-01"))) / 31536000000), duration: 2 });
	useCountUp({ ref: 'clients', end: 20, duration: 2 });
	useCountUp({ ref: 'skillCounter', end: 130, duration: 2 });
	useCountUp({ ref: 'solutionsCounter', end: 35, duration: 2 });


	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title={t('Years of experience')}
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title={t('Skills')}
					counter={<span id="skillCounter" />}
					measurement="+"
				/>

				<CounterItem
					title={t('Clients')}
					counter={<span id="clients" />}
					measurement=""
				/>

				<CounterItem
					title={t('Solutions')}
					counter={<span id="solutionsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
