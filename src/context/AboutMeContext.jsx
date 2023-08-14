import { useState, createContext } from 'react';
import { aboutMeBioData, aboutMeTimelineData, aboutMeSkillData, aboutMeClientData } from '../data/aboutMeData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMeBio, setAboutMeBio] = useState(aboutMeBioData);
	const [aboutMeTimeline, setAboutMeTimeline] = useState(aboutMeTimelineData);
	const [aboutMeSkills, setAboutMeSkills] = useState(aboutMeSkillData);

	const [clientsData, setClientsData] = useState(aboutMeClientData);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMeBio,
				setAboutMeBio,
				aboutMeTimeline,
				setAboutMeTimeline,
				aboutMeSkills,
				setAboutMeSkills,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
