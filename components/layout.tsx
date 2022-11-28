import Head from "next/head";
import Navbar from "./navigation/Navbar";
import ProgressBar from "./navigation/ProgressBar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<title>Apou&apos;s Films</title>
				<meta name="description" content="Apou&apos;s Films" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="h-screen overflow-hidden">
				<Navbar />
				<ProgressBar />
				<div className="container flex flex-col pt-4 mx-auto">
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}