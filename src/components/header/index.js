import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'


export default function Header() {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {

    if(!usernameForSearch) return;

    return getUser(usernameForSearch)

  }

  return (
    <S.Wrapper>
      <input type='text' placeholder='Digite o nome da usuário...' onChange={(event) => setUsernameForSearch(event.target.value)}></input>
      <button onClick={submitGetUser}>
        <span>Buscar</span>
      </button>
    </S.Wrapper>
  )
}
