// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    if  (req.method === 'DELETE') {
      let arr = req.url.split('?')
      let response = await axios.delete(`${process.env.REACT_APP_API_LINK}/cart/${arr[arr.length-1]}`)
      return res.status(200).json({message: 'its okay'})
    }
    if (req.method === 'POST') {
      let response = await axios.post(`${process.env.REACT_APP_API_LINK}/cart`, req.body)
      return res.status(201).json({message: "its okay"})
    } else {
    let response = await fetch(`${process.env.REACT_APP_API_LINK}/cart`);
    let json = await response.json();
    
    return res.status(200).json(json)
    }
  }
  