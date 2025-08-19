async function gupshup(request, response) {
  console.log("request", request.body);

  return response.status(200).json(request.body);
}

export default gupshup;
