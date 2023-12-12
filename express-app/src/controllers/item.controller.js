import Item from "../models/item.model.js";

export const getAll = async (req, res) => {
  console.log("getting all");
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const itemFound = await Item.findById(id);

    if (!itemFound)
      return res.status(404).json({ message: "Item not found :(" });
    res.json(itemFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postOne = async (req, res) => {
  console.log("posting one");
  try {
    const { iid, sku, name, description, category, licence, price, stock, discout, dues } = req.body;
    const newItem = new Item({
      iid,
      name,
      description,
      category,
      licence,
      sku,
      price,
      stock,
      discout,
      dues,
    });
    const savedItem = await newItem.save();
     res.json(savedItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putOne = async (req, res) => {
  try {
    const id = req.params.id;
    const itemFound = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (!itemFound) return res.status(404).json({ message: "Item not found." });
    res.json(itemFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const itemFound = await Item.findByIdAndDelete(id);
    if (!itemFound) return res.status(404).json({ message: "Item not found." });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


