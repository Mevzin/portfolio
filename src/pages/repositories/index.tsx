import { useEffect, useState } from "react";
import { CardRepositories } from "../../components/CardRepositories";
import { RepositoriesList } from "../../models/repositories.model";
import { githubApi } from "../../services/githubApi";

export function Repositories(){
  const [repositories, setRepositories] = useState<RepositoriesList>((Object));

  useEffect(() => {
    async function loadRepositories() {
      await githubApi.get('/users/Mevzin/repos')
        .then((res: { data: RepositoriesList; }) => {
          setRepositories(res.data)
        })
    }
    loadRepositories();
// eslint-disable-next-line
  }, [])

  return(
    
    <>
      <CardRepositories repositories={repositories}/>
    </>
  );
}