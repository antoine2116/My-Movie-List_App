import Head from "next/head";
import Navbar from "./navigation/navbar";
import ProgressBar from "./navigation/ProgressBar";
import Sidebar from "./navigation/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<title>Apou&apos;s Films</title>
				<meta name="description" content="Apou&apos;s Films" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="antialiased text-black bg-white">
				<Navbar />
				<Sidebar />
				<div className="ml-64 p-4">
					<ProgressBar />
					<div className="container mx-auto">
						<main>{children}</main>
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout;