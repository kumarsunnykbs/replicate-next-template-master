"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import Logo from "../public/starmorph-wide.png";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
	CommandLineIcon,
	CreditCardIcon,
	ChatBubbleLeftIcon,
	PhotoIcon,
	CalendarIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
	{
		name: "NextJs 13  Bot",
		description: "Langchain Trained Bot",
		href: "https://docsbot.starmorph.com",
		icon: CommandLineIcon,
	},
	{
		name: "Stripe API Programmer",
		description: "write Stripe code with english",
		href: "https://stripe.starmorph.com",
		icon: CreditCardIcon,
	},
	{
		name: "GPT-3 Chatbot",
		description: "A GPT-3 General Chatbot",
		href: "https://chat.starmorph.com",
		icon: ChatBubbleLeftIcon,
	},
	{
		name: "GPT-3 Image Editor",
		description: "Edit images with Text",
		href: "https://textpaint.starmorph.com",
		icon: PhotoIcon,
	},
];
const callsToAction = [
	{
		name: "Watch Demo",
		href: "https://youtu.be/xY1OkOIAT3Q",
		icon: PlayCircleIcon,
	},
	{
		name: "Get Quote",
		href: "https://calendly.com/dylanboudro/starmorph-intro-call?month=2023-02",
		icon: CalendarIcon,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export function SMHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="https://starmorph.com" aria-label="Home">
						<Image src={Logo} alt="logo" className="h-10 w-auto" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						{/* <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Free GPT-3 Tools
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button> */}

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="p-4">
									{products.map((item) => (
										<div
											key={item.name}
											className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<item.icon
													className="h-6 w-6 text-gray-600 group-hover:text-green-600"
													aria-hidden="true"
												/>
											</div>
											<div className="flex-auto">
												<a
													href={item.href}
													className="block font-semibold text-gray-900"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-gray-600">{item.description}</p>
											</div>
										</div>
									))}
								</div>
								<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
										>
											<item.icon
												className="h-5 w-5 flex-none text-gray-400"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
					<a
						href="https://gpt4.starmorph.com"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						GPT-4 Bot
					</a>
					<a
						href="https://code.chat"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						AI Coder
					</a>
					<a
						href="https://texttoimage.starmorph.com"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
							Alpha
						</span>{" "}
						Image Creator
					</a>
					<a
						href="https://blog.starmorph.com"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Blog
					</a>
					<a
						href="https://cal.com/starmorphai/consultingcall"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Consulting Call
					</a>
				</Popover.Group>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{/* <Button href="/sign-in" color="blue">
              <span>
                Alpha Sign Up 
              </span>
            </Button> */}
					<div className="align-middle mt-2 ml-2">
					

							{/* Signed out users get sign in button */}
							<Button href="/sign-in"> Alpha Sign Up </Button>
					
					</div>
				</div>
			</nav>



			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="https://starmorph.com" className="-m-1.5 p-1.5">
							<span className="sr-only">Starmorph</span>
							<Image className="h-8 w-auto" src={Logo} alt="Starmorph Logo" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								
								
								
								
									{/* Signed out users get sign in button */}
									<Button href="/sign-in"> Alpha Sign Up </Button>
								
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
												Free GPT-3 Tools
												<ChevronDownIcon
													className={classNames(
														open ? "rotate-180" : "",
														"h-5 w-5 flex-none",
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[...products, ...callsToAction].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>

								<a
									href="https://gpt4.starmorph.com"
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									GPT-4 Chatbot
								</a>
								<a
									href="https://code.chat"
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									AI Coder
								</a>

								<a
									href="https://youtube.com/@starmorph"
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Youtube
								</a>
								<a
									href="https://blog.starmorph.com"
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Blog
								</a>
								<a
									href="https://cal.com/starmorphai/consultingcall"
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Consulting Call
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}