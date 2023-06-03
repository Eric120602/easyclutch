const APIUrl = "http://localhost:5000"
export default async function handler(method, url, body = {}) {
  let request = {
    method: method,
    headers:{
      "user-type":"trainer",
      "Authorization":localStorage.getItem("auth-token")
    }
  }
console.log("Ethiyeeee")

  if(method === "POST" || method === "PUT") {
    request.headers['Content-Type'] = 'application/json' 
    request.body = JSON.stringify(body)
  }
  const response = await fetch(APIUrl+url, request);
  if (!response.ok) {
    const error = await response.json()
    throw  new Error(error.errorMessage);
  }
  return response.json();
}