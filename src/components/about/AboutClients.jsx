import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import { useTranslation } from 'react-i18next';

const AboutClients = () => {
	const { clientsData } = useContext(AboutMeContext);
	const { t } = useTranslation();

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{t('Some of the companies using code I\'ve written')}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 mt-10 sm:mt-14 gap-2">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
