// src/pages/api/preview.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  res.setPreviewData({ id })
  res.redirect(`/?preview=true&id=${id}`)
}
