import { signIn } from "next-auth/react";

export default function LoginPage() {

  return (
    <div>
      <button onClick={() => {signIn()}}>SignIn with Github</button>
    </div>
  )
}
