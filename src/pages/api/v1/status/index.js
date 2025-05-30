import database from "src/infra/database";

async function status(request, response) {
  const result = await database.query("select 1 + 1 as sum;");

  console.log(result.rows);

  return response.status(200).send("Tudo certo");
}

export default status;
