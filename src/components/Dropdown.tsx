"use client";

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type DropdownProps = {
	list: string[];
	menuBtn?: () => React.ReactNode;
	onClick?: () => void;
};

export default function Dropdown({ list, menuBtn, onClick }: DropdownProps) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex items-center w-full rounded-sm transition my-2 text-sm hover:shadow-sm">
					{menuBtn ? (
						menuBtn()
					) : (
						<BsThreeDotsVertical
							size={18}
							className="cursor-pointer"
							color="black"
						/>
					)}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute -right-[11px] z-10 w-20 origin-top-right divide-y divide-gray-100 rounded-br-md rounded-bl-md bg-[#161D29] shadow-blue-light ring-1 ring-[#111] ring-opacity-5 focus:outline-none overflow-hidden">
					{list?.length > 0 &&
						list?.map((item, idx) => {
							return (
								<div className="" key={idx}>
									<Menu.Item>
										{({ active }) => (
											<div
												className={classNames(
													active ? " bg-[#243147]" : "text-foreground",
													"block px-3 py-2 text-sm"
												)}
												onClick={onClick}
											>
												{item}
											</div>
										)}
									</Menu.Item>
								</div>
							);
						})}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
