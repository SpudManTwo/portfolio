import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { useTranslation } from 'react-i18next';


const AboutMeBio = () => {
	const { aboutMeBio, aboutMeTimeline, aboutMeSkills } = useContext(AboutMeContext);
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full text-ternary-dark dark:text-ternary-light sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-base font-bold underline"
					key="skillHeading"
					>
					{t('Skills')}
				</p>
				<span className='mb-4 text-ternary-dark dark:text-ternary-light text-base underline'>{t('Front-End')}: </span>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-sm italic"
					key="frontendSkills"
					>
						
						{aboutMeSkills.frontendSkills.join(', ')}
				</p>
				<span className='mb-4 text-ternary-dark dark:text-ternary-light text-base underline'>
					{t('Back-End')}:
				</span>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-sm italic"
					key="backendSkills"
					>
						{aboutMeSkills.backendSkills.join(', ')}
				</p>
				<span className='mb-4 text-ternary-dark dark:text-ternary-light text-base underline'>
					{t('Cloud')}:
				</span>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-sm italic"
					key="cloudSkills"
					>
						{aboutMeSkills.cloudSkills.join(', ')}
				</p>
				<span className='mb-4 text-ternary-dark dark:text-ternary-light text-base underline'>
					{t('Database')}:
				</span>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-sm italic"
					key="databaseSkills"
					>
						{aboutMeSkills.databaseSkills.join(', ')}
				</p>
				<span className='mb-4 text-ternary-dark dark:text-ternary-light text-base underline'>
					{t('Other Tools')}:
				</span>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-sm italic"
					key="otherTools"
					>
						{aboutMeSkills.other.join(', ')}
				</p>
				
			</div>		

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<u className='font-bold text-ternary-dark dark:text-ternary-light text-2xl'>{t("My Story")}</u>
				{aboutMeBio.map((bio) => (
					<p
						className="mt-8 text-ternary-dark dark:text-ternary-light text-xl"
						key={bio.id}
					>
						{bio.bio[i18n.language]}
					</p>
				))}

			</div>

			<div className="font-general-regular w-full sm:w-1/4 text-right">
				<u className='font-bold text-ternary-dark dark:text-ternary-light text-lg' key='projectTimelineHeader'>{t('Project Timeline')}</u>
				{aboutMeTimeline.map((yearData) => (
					<div
						className="mt-2 text-ternary-dark dark:text-ternary-light text-sm"
						key={yearData.year+"Heading"}
					>
						<span key={yearData.year+"Year"} className='font-bold'>
							{yearData.year}
						</span>
						{yearData.months.map((monthData) => (
							<div key={yearData.year+""+t(monthData.month)}>
								<u className='mb-0 text-ternary-dark dark:text-ternary-light text-xs' key={yearData.year+""+t(monthData.month)+"Heading"}>{t(monthData.month)}: </u>
								{monthData.projects.map((projectData) => (
									<p className="text-ternary-dark dark:text-ternary-light text-2xs" key={projectData.name_en}>
										- {projectData["name_"+i18n.language]}
									</p>
								))}
							</div>
						))}
						</div>
				))}
			</div>

		</div>
	);
};

export default AboutMeBio;
