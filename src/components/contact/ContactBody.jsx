import { useTranslation } from "react-i18next";

const ContactBody = () => {
	const { t } = useTranslation()

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-xl"
					key="contactRestrictions"
					>
						{t('ContactRestrictions')}
				</p>
			</div>
			<div className="leading-loose">
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-xl"
					key="pullRequestInfo"
					>
						{t('pullRequestInfo')}
				</p>
			</div>
		</div>
	);
};

export default ContactBody;