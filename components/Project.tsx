import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

type Props = {};

const Project = (props: Props) => {
	return (
		<div className="max-w-[1024px] mx-auto py-12 space-y-8 bg-yellow-200">
			<div className="flex gap-8 items-center justify-between w-full">
				<div className="flex gap-8 items-center">
					<h3 className="text-5xl font-semibold ">MyPocket</h3>
					<div className="px-8 py-4 rounded-full border-2 border-gray-300">
						Web App
					</div>
				</div>
				<div>
					<ArrowLongRightIcon className="w-16 h-16 text-black" />
				</div>
			</div>
			<div>
				<p>
					MyPocket is an intuitive and user-friendly web application
					built with React, empowering individuals to take control of
					their finances effortlessly. It offers a seamless platform
					for users to input their daily expenses and incomes,
					providing valuable insights into their financial habits and
					helping them make informed decisions for a secure financial
					future.
				</p>
			</div>
			<div className="w-full rounded-xl shadow-md h-96 bg-slate-200"></div>
		</div>
	);
};

export default Project;
