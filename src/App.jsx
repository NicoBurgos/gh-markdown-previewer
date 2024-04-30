import './App.css'
import { Editor } from './components/Editor/Editor'
import { Previewer } from './components/Previewer/Previewer'
import { useText } from './hooks/useText'

function App() {
	const { text, handleChangeText } = useText()

	return (
		<main className="container">
			<Editor handleChangeText={handleChangeText} text={text}></Editor>
			<Previewer text={text}></Previewer>
		</main>
	)
}

export default App
