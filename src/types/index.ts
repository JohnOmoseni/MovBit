import { LinkProps } from "next/link";
import { IconType } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import React, { MouseEventHandler, ReactNode, SetStateAction } from "react";
import { Url } from "url";

export type NavLinkProps = React.PropsWithChildren<LinkProps> & {
	idx: number;
	name: string;
	exact?: boolean;
	onClick?: () => void;
};

export type TabsPanelProp = {
	activeTab: string;
	id: string;
	idx: number;
	children: React.ReactNode;
};

export type TabsProps = {
	activeTab: string;
	changeTab: (id: string) => void;
	tabIDs: string[];
};

export type TabProps = {
	id: string;
	activeTab: string;
	tab: string;
	changeTab: (id: string) => void;
	className?: string;
};

export type FeatureProps = {
	svg: string;
	title: string;
	body: string;
	idx: number;
};

export type RevealAnimateProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export type SocialLinksProps = {
	name: string;
	href: string | Url;
	src?: ReactNode;
	icon?: IconType;
}[];

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
