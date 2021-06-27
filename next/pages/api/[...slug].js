// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { headlessApiRequest } from "../../api/silverstripe"

export default async function handler(req, res) {
  const ss_url = req.url.replace('/api', '')
  try {
    const json = await headlessApiRequest(ss_url)
    res.status(200).json({ json })
  }
  catch (error) {
    res.status(404).json({message: 'not found'})
  }
}
