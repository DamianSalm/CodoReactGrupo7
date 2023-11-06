import http from 'http'

// Get
export const getAll = async (req, res) => {
  try {
    res.send(`all the data in the world`)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

// Get/:id   -> por ahora devuelve 'result hello world'
export const getOne = async (req, res) => {
  try {
    // const dato = base_de_datos.query(`select * from datos where id == ${req.params.id}`)
    const dato = "hello world"
    res.send(`result ${dato}`)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

// Post
export const postOne = async (req, res) => {
  try {

  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

// Put/:id
export const editOne = async (req, res) => {
  try {

  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

// Delete/:id
export const deleteOne = async (req, res) => {
  try {

  } catch (error){
    return res.status(500).json({message: error.message})
  }
}


