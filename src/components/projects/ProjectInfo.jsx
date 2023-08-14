import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import { useTranslation } from 'react-i18next';

const ProjectInfo = () => {
	const { spotlightProjectData } = useContext(ProjectsContext);
	const { t } = useTranslation();
	const { i18n } = useTranslation();

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Client Details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{spotlightProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{spotlightProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{t(info.title)}: </span>
										<span>
											{t(info.details)}
										</span>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{t('Tools & Technologies')}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{spotlightProjectData.ProjectInfo.Technologies[0].techs.join(', ')}
					</p>
				</div>
			</div>

			{/*  Project Description*/}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{t("Project Description")}
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
					{spotlightProjectData.ProjectInfo.ProjectDetails[i18n.language]}
				</p>
				<ul className="leading-loose list-disc">
				{spotlightProjectData.ProjectInfo.ProjectHighlights[i18n.language].map((highlight) => {
					return (
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={highlight+"Highlight"}>
							- {highlight}
						</li>
					);
				})}
				</ul>
			</div>
		</div>
	);
};

export default ProjectInfo;
