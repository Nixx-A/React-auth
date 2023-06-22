/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton (): JSX.Element {
  const { logout } = useAuth0()

  return (
    <button className="bg-yellow-400 rounded-md py-1 px-2" onClick={() => logout()}>Logout</button>
  )
}
