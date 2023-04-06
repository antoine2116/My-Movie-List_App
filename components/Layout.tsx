import Head from "next/head";
import Navbar from "./navigation/Navbar";
import ProgressBar from "./navigation/ProgressBar";
import Sidebar from "./navigation/Sidebar";
import Modal from "./utils/Modal";
import LoginForm from "./authentication/LoginForm";
import RegisterForm from "./authentication/RegisterForm";
import { useUI } from "./UIContext";
import Toast from "./utils/Toast";
import SearchPalette from "./search/SearchPalette";
import VideoPlayer from "./utils/VideoPlayer";

function Layout({ children }: { children: React.ReactNode }) {

	const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
		modalView,
		closeModal,
	}) => {
		return (
			<Modal onClose={closeModal}>
				{modalView === 'LOGIN_VIEW' && <LoginForm />}
				{modalView === 'REGISTER_VIEW' && <RegisterForm />}
				{modalView === 'SEARCH_VIEW' && <SearchPalette />}
				{modalView === 'VIDEO_VIEW' && <VideoPlayer />}
			</Modal>
		)
	}

	const ModalUI: React.FC = () => {
		const { closeModal, modalView } = useUI()
		return (
			<ModalView modalView={modalView} closeModal={closeModal} />
		)
	}

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

				<ModalUI />
				<Toast />
			</div>
		</>
	)
}

export default Layout;