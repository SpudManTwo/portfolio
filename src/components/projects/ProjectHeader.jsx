import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';
import { useTranslation } from 'react-i18next';

const ProjectSpotlightHeader = () => {

	const { i18n } = useTranslation();
	const { t } = useTranslation();

	const {	spotlightProjectData } = useContext(ProjectsContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{spotlightProjectData.title[i18n.language]}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{spotlightProjectData.date[i18n.language]}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{spotlightProjectData.tags.map(tag => t(tag)).join(', ')}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSpotlightHeader;
