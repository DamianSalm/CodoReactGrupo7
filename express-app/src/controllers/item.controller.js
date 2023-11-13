import Item from '../models/item.model.js'
import { connectDB } from '../db.js'
import itemModel from '../models/item.model.js';


export const getAll = async (req, res) => {
  try {
    const items = Item.
    console.log(items);
    res.json(items)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

export const getOne = async (req, res) => {
  try {
    const id = req.params.id
    const itemFound = await Item.findOne(id)

    if (!itemFound) {return res.status(404).json({message: "Task not found."});}
    res.json(itemFound)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

export const postOne = async (req, res) => {
  try {
    const { iid, name, description } = req.body
    
    const newItem = new Item({
      iid, 
      name, 
      description, 
    })
    const itemSaved = await newItem.save()


  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

export const putOne = async (req, res) => {
  try {
    const [result] = await pool.query(
      'UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id])
    res.json(result)
  } catch (error){
      return res.status(500).json({message: error.message})
  }
}

export const deleteOne = async (req, res) => {
  try {
    const  [result] = await pool.query(
      'DELETE FROM tasks WHERE id = ?',
    [req.params.id])
    if (result.affectedRows == 0)
      return res.status(404).json({message : "Task not found."})

    return res.sendStatus(204)
  }  catch (error){
    return res.status(500).json({message: error.message})
  }
}