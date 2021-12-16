import { Link } from "next/link"
import { Image } from "next/image"
function Navigation() {
	return (
		<div>
			<nav className="bg-white dark:bg-gray-800  shadow ">
				<div className="max-w-7xl mx-auto px-8">
					<div className="flex items-center justify-between h-16">
						<div className="w-full justify-between flex items-center">
							<Link href="/"><a className="flex-shrink-0">
								<Image className="h-12 w-12" src="../assets/Logo.png" alt="Online Spaces" />
							</a></Link>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href="/"><a className="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Home
                            </a></Link>
									<Link href="/Pricing"><a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Pricing
                            </a></Link>
									<Link href="/contact"><a className="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Contact
                            </a></Link>
									<Link href="/aboutus"><a className="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										About Us
                            </a></Link>
									<Link href="/signup"><a className="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										<button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
											Try One Free Meeting!
                                </button>
									</a></Link>
								</div>
							</div>
						</div>
						<div className="block">
							<div className="ml-4 flex items-center md:ml-6">
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>

	)
}
export default Navigation;