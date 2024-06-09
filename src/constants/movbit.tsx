import line from "@svgs/line.svg";
import settings from "@svgs/settings.svg";
import wallet from "@svgs/wallet.svg";
import subscription from "@svgs/subscription.svg";
import clipboard from "@svgs/clipboard.svg";
import options from "@svgs/options.svg";
import notes from "@svgs/notes.svg";

import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";

const premium = [
  {
    tag: "yearly",
    desc: "1 week for free",
    price: 50,
    oldPrice: 60,
  },
  {
    tag: "monthly",
    desc: "1 week for free",
    price: 50,
    oldPrice: 60,
  },
];

const footer = [
  {
    title: "Home",
    icon: GoHome,
    iconFill: AiFillHome,
    href: "/movbit",
  },
  {
    title: "Wallet",
    icon: IoWalletOutline,
    iconFill: IoWallet,
    href: "/movbit/portfolio",
  },
  {
    title: "Profile",
    icon: FaCircleUser,
    iconFill: FaRegCircleUser,
    href: "/movbit/profile",
  },

  {
    title: "Settings",
    icon: IoSettingsOutline,
    iconFill: IoSettingsSharp,
    href: "/subscriptions",
  },
];

const benefits = [
  "Earn double TREDS for every 1k steps above your daily step minting cap",
  "Earn more TREDS with a higher minting cap: 6k steps will be converted into crypto",
  "Avoid the daily cap and earn unlimited TREDS",
  "Enjoy Premium Marketplace with special offers",
  "Get your TREDS for good donations doubled to us",
];

export {
  premium,
  benefits,
  line,
  settings,
  wallet,
  subscription,
  clipboard,
  footer,
  options,
  notes,
};
