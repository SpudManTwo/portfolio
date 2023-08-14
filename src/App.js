import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSpotlight = lazy(() => import('./pages/ProjectSpotlight.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition duration-300" style={{minHeight: '100vh'}}>
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/portfolio/projects" element={<Projects />} />
							<Route
								path="/portfolio/projects/single-project"
								element={<ProjectSpotlight />}
							/>

							<Route path="/portfolio/about" element={<About />} />
							<Route path="/portfolio/contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;