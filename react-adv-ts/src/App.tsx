import './App.css'
import Button from './Components/Button'
import Input from './Components/Input'

function App() {

  return (
    <>
      <main>
        <Input id="name" text='Enter your name' type='text' />
        <p>
          <Button el='button' type='submit'>Click Me</Button>
        </p>
        <p>
          <Button el='a' type='button'>I am an achor</Button>
        </p>
      </main>
    </>
  )
}

export default App
