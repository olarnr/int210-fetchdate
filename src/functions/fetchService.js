export async function getService(url) {
    try {
      let response = await fetch(url, {mode:'cors'})
      let responseBody = await response.json()
      if (response.ok) {
        return {"body": responseBody, "code": response.status}
      } else {
        // console.log(response.error());
	      return {"body": {"error": response.status + " " + (responseBody?.error ?? "") + " " + (responseBody?.message ?? "")}, "code": response.status}
      }
    } catch (error) {
        return {"body": {"error": "Can not connect to " + url}, "code": 500}
    }
  }
