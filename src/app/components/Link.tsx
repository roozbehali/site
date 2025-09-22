import type { ReactNode } from "react";

interface LinkProps {
	href: string;
	children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="text-zinc-500 underline decoration-1 underline-offset-2 decoration-dashed 
				hover:text-orange-200 transition-all duration-300
				relative group inline-block"
		>
			<span
				className="pointer-events-none absolute -inset-0.5 opacity-0 
				border border-dotted border-orange-200
				group-hover:opacity-100 transition-all duration-300
				bg-transparent block"
			/>
			<span className="uppercase font-mono">{children}</span>
		</a>
	);
};

export default Link;
