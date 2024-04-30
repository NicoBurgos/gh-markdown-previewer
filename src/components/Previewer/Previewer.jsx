import './Previewer.css'
import { marked } from 'marked'
import { useLightMode } from '../../hooks/useLightMode'

export const Previewer = ({ text }) => {
	const markdown = marked(text)
	marked.setOptions({
		breaks: true,
	})
	const { lightMode, toggleMode } = useLightMode()

	return (
		<section className="previewer-container">
			<div className="title-container">
				<h1 className="title">Previewer (GitHub)</h1>
				<button
					className="toggleMode"
					onClick={() => toggleMode({ lightMode })}
				>
					{!lightMode ? (
						<span className="material-symbols-outlined">light_mode</span>
					) : (
						<span className="material-symbols-outlined">dark_mode</span>
					)}
				</button>
			</div>
			<div
				className="previewer"
				dangerouslySetInnerHTML={{ __html: markdown }}
			></div>
		</section>
	)
}
