import { useAuth0 } from '@auth0/auth0-react'

export default function Profile (): JSX.Element {
  const { user } = useAuth0()

  return (
    <div className="text-white flex justify-center items-center flex-col flex-wrap overflow-hidden">
      <p>Profile</p>
      {user?.email === 'nicolas.ayan18@gmail.com'
        ? <div>

          <img className='rounded-full w-16 h-16' src={user?.picture} alt="" />
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p className='w-5/6 break-words'>{JSON.stringify(user)}</p>
        </div>
        : <p>No sos nico, sali de aca</p>
      }
    </div>
  )
}
