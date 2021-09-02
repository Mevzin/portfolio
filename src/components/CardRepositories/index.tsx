import { RepositoriesList } from "../../models/repositories.model";
import { Card } from "./styles";

export function CardRepositories(props: any) {
  const repos = props.repositories;
  return (
    <>
      {repos?.map((rep: RepositoriesList) => (
        <Card>
          <h1>{rep.name}</h1>
        </Card>
      ))}
    </>
  );
}