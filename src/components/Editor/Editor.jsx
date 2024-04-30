import './Editor.css'

export const Editor = ({ text, handleChangeText }) => {
	return (
		<section className="editor-container">
			<div className="title-container">
				<h1 className="title">Editor Markdown (MD)</h1>
			</div>
			<textarea
				name="editor"
				id="text-editor"
				onChange={handleChangeText}
				value={text}
			></textarea>
		</section>
	)
}
