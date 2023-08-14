import { useTranslation } from 'react-i18next';


function AppFooterCopyright() {
	const { t } = useTranslation();

	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				<div
					className="ml-1 duration-500"
				>
					{t('This portfolio was made using React and TailwindCSS.')}
				</div>
				<div
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase ml-1 duration-500"
				>
					&copy; {new Date().getFullYear()}
					<span className='ml-2'>Kaufman</span>
				</div>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
