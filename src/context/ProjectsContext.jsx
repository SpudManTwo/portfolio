import { useState, createContext } from 'react';
import { projectsData, projectCategoryData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	
	const [projects, setProjects] = useState(projectsData);
	const projectCategories = useState(projectCategoryData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const [spotlightProject, setSpotlightProject] = useState(localStorage.spotlightProject);
	
	// Get Spotlight Project Data
	const spotlightProjectData = projects.find(project => project.id == spotlightProject);

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		const result = 
			(
				item.title.en
				.toLowerCase()
				.includes(searchProject.toLowerCase()) ||
				item.title.jp
				.toLowerCase()
				.includes(searchProject.toLowerCase())
			)
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				projectCategories,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
				spotlightProject,
				setSpotlightProject,
				spotlightProjectData
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
