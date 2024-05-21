import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
	return <div className="py-8 px-3 sm:py-[4em] sm:px-[4%]">{children}</div>;
};

export default SectionWrapper;
