import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import { useTranslation } from 'react-i18next';
import ProjectSpotlight from './ProjectSpotlight';

const ProjectRelatedProjects = () => {
	const { projects, spotlightProject, setSpotlightProject, spotlightProjectData } = useContext( ProjectsContext);
	const { t } = useTranslation();
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{t('Related Projects')}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
				{spotlightProjectData.RelatedProjects.map((relatedProjectId) => {
					return (
						<ProjectSpotlight
								title={projects[relatedProjectId].title}
								client={projects[relatedProjectId].ProjectInfo.ClientName}
								image={projects[relatedProjectId].img}
								id={projects[relatedProjectId].id}
								key={projects[relatedProjectId].id}							
								currentSpotlight={spotlightProject}
								setSpotlightProject={setSpotlightProject}
							/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
