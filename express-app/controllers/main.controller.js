import http from 'http'
api_de_gatos = 'https://cat-fact.herokuapp.com'

export const getOne = (req, res) => {
  try {
    // const [result] = "hello world"
    res.send("result")
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}