import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile'

function App (): JSX.Element {
  return (
    <main className="h-screen w-screen bg-slate-800">
      <h1 className="text-yellow-400 text-3xl pt-3 text-center">Authorization and authentication</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  )
}

export default App
