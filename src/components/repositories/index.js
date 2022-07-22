import React, { useEffect, useState } from 'react'
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item'
import * as S from './styled'

export default function Repositories() {

  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);
  // eslint-disable-next-line
  const [hasUserForSearchStarred, setHasUserForSearchStarred] = useState(false);
 

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos();
    }

    setHasUserForSearchRepos(!!githubState.repositories);
    // eslint-disable-next-line
  }, [githubState.user])

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserStarred();
    }

    setHasUserForSearchStarred(!!githubState.starred);
    // eslint-disable-next-line
  }, [githubState.user])

  return (
    <>
      {hasUserForSearchRepos ? (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <S.WrapperList>
        
          {githubState.repositories.map((item) =>
            <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.html_url}
              fullName={item.full_name}
            />
          )}

        </S.WrapperList>
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <S.WrapperList>

          {githubState.starred.map((item) => 
            <RepositoryItem 
              key={item.id}
              name={item.name} 
              linkToRepo={item.html_url}
              fullName={item.full_name}
            />
          )}

        </S.WrapperList>
      </S.WrapperTabPanel>
    </S.WrapperTabs>
    ) : ( 
    <></> 
    )}
   </>
  )
}
