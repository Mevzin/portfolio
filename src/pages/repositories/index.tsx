import { useEffect, useState } from "react";
import { CardRepositories } from "../../components/CardRepositories";
import { RepositoriesList } from "../../models/repositories.model";
import { githubApi } from "../../services/githubApi";
import {Spinner} from "react-bootstrap";

export function Repositories(){
  const [repositories, setRepositories] = useState<RepositoriesList>((Object));
  const [loading, setLoading] = useState(1);
  
  useEffect(() => {
    async function loadRepositories() {
      await githubApi.get('/users/Mevzin/repos')
        .then((res: { data: RepositoriesList; }) => {
          setRepositories(res.data)
          setLoading(0)
        })
    }
    loadRepositories();
// eslint-disable-next-line
  }, [])

  return(
    
    <>
    {
      loading ? (
        <Spinner animation="border" variant="danger"/>
      ):(
      <CardRepositories repositories={repositories}/>
      )}
    </>
  );
}