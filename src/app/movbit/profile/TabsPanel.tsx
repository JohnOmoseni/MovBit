"use client";

import { TabsPanelProp } from "@/types";
import { motion } from "framer-motion";

function TabsPanel({ activeTab, id, idx, children }: TabsPanelProp) {
	return activeTab === id ? (
		<motion.div
			// variants={tabContentVariant}
			initial="hidden"
			whileInView="animate"
			viewport={{ amount: 0.2, once: true }}
			role="tabpanel"
			tabIndex={idx}
			aria-labelledby={id}
			aria-hidden={activeTab === id ? "false" : "true"}
			className={`${activeTab === id ? "active" : ""} h-full`}
		>
			{children}
		</motion.div>
	) : null;
}

export default TabsPanel;
