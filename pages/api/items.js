// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let arr = req.url.split('/')
  let response = await fetch(`${process.env.REACT_APP_API_LINK}/${arr[arr.length-1]}`);
  let json = await response.json();
  
  res.status(200).json(json)
}
