import http from 'http'

export const getOne = async (req, res) => {
  try {
    const dato = labasededatos.query(`select * from datos where id == ${req.params.id}`)
    res.send(`result ${dato}`)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}