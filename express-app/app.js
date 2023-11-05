import express from 'express'

const app = express();

// MIDDLEWARE
app.use(express.json())


// BASIC REQ-RES
app.get("/", (req, res)=>{
  const html = ReactDOM.renderToString(<Home />);
  res.send(html);
});


// ITEMS
const items = [{
  id: 1,
  content: 'Item 1'
}]

// GET /items
app.get('/items', (req, res)=> {
  return res.json(items)
})

// GET /items/:id
app.get('/items/:id', (req, res)=> {
  const { itemId } = req.params
  const itemFound = items.findIndex(item => item.id == Number(itemId))
})

// POST /items
app.post('/items', (req, res)=> {
  const { content } = req.body
  const newId = items.lenght +1
  const newItem = {id: newId, content: content}
  items.push(newItem)
  return res.json(newItem)
})

// PUT /items/:id
app.put('/items/:id', (req, res)=> {
  const { id: itemId } = req.params
  const { data } = req.body
  const itemFound = items.findIndex(item => item.id == Number(itemId))
  itemFound.data = data
  return res.json(itemFound)
})

// DELETE /items/:id
app.delete('/items/:id', (req, res)=> {
  const { itemId } = req.params
  const itemIndex = items.findIndex(item => item.id == Number(itemId))
  items.splice(itemIndex, 1)
  return res.status(200).json()
})





app.listen(process.env.PORT ?? 3000);

