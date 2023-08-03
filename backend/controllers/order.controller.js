
const purchaseOrder = (req, res) => {
  console.log(req.body)

  res.json({ message: 'Order purchased successfully!'});
}

export default {
  purchaseOrder
}