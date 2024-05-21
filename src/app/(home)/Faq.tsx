"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants";

const FAQ = () => {
	return (
		<div className="flex-column">
			<h2 className="w-full text-center">
				Your questions, <span className="gradient-text">answered!</span>
			</h2>
			<div className="faq self-center w-[90%] max-w-[600px] sm:w-[60%] pt-4 px-6 sm:p-8 sm:pb-2 border border-border rounded-xl shadow-sm mt-16">
				{faq.map((item, idx) => (
					<Accordion type="single" collapsible className="py-6" key={idx}>
						<AccordionItem value={`item-${idx}`} className="border-slate-600">
							<AccordionTrigger className="truncate">
								{item?.trigger}
							</AccordionTrigger>
							<AccordionContent>
								<p>{item.body1}</p>
								<p className="mt-2">{item.body2}</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	);
};

export default FAQ;
