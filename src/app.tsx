import { useState } from "react";
import { Logo } from "./components/logo";
import { Main } from "./components/main";
import { CreateForm } from "./components/createForm";
import { Container } from "./components/container";
import { LoggedIn } from "./components/actionsList";

export function App() {
  const [user, setUser] = useState<string | null>(null)

  return (
    <Main>
      <Logo />
      <Container>
        {!user && <CreateForm setUser={setUser} />}
        {user && <LoggedIn user={user} setUser={setUser} /> }
      </Container>
    </Main>
  )
}