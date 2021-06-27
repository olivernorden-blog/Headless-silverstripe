export async function headlessApiRequest(url, req = null) {
  const Cookie = req && req.headers.cookie ? req.headers.cookie : ''
  const UserAgent = req && req.headers['user-agent'] ? req.headers['user-agent'] : ''
  try {
    const ss_response = await fetch(`http://silverstripe/headless-api/v1${url}`, {
      headers: {
        Cookie,
        'User-Agent': UserAgent
      }
    })
    return await ss_response.json()    
  } catch (error) {
    return null;
  }
}