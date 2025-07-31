import { Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import QuotationTable from "./QuotationTable";

// JSON of products with code, name, and price
const products = [
  { code: "p001", name: "Product A", price: 100 },
  { code: "p002", name: "Product B", price: 200 },
  { code: "p003", name: "Product C", price: 150 },
  { code: "p004", name: "Product D", price: 250 },
];

function App() {
  const [dataItems, setDataItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(products[0].code);
  const [ppu, setPpu] = useState(products[0].price);
  const [qty, setQty] = useState(1);
  const [discount, setDiscount] = useState(0);

  // Function to add an item to the dataItems array
  const addItem = () => {
    let item = products.find((v) => v.code === selectedProduct);
    const quantity = parseInt(qty) || 1;
    const price = parseFloat(ppu) || 0;
    const discountAmount = parseFloat(discount) || 0;

    // Function to check if the item already exists in the dataItems array
    const existingItemIndex = dataItems.findIndex(
      (existingItem) => 
        existingItem.item.toLowerCase() === item.name.toLowerCase() && 
        parseFloat(existingItem.ppu) === price
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...dataItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        qty: parseInt(updatedItems[existingItemIndex].qty) + quantity,
        discount: parseFloat(updatedItems[existingItemIndex].discount || 0) + discountAmount
      };
      setDataItems(updatedItems);
    } else {
      // Add new item
      const newItem = {
        item: item.name,
        ppu: price,
        qty: quantity,
        discount: discountAmount
      };
      setDataItems([...dataItems, newItem]);
    }

    setQty(1);
    setDiscount(0);
  };

  // Function to delete an item 
  const deleteByIndex = (index) => {
    let newDataItems = [...dataItems];
    newDataItems.splice(index, 1);
    setDataItems(newDataItems);
  };
  
  // Function to clear all items
  const clearAll = () => {
    setDataItems([]);
  };
  
  // Function to handle the product change
  const productChange = (event) => {
    const productCode = event.target.value;
    setSelectedProduct(productCode);
    let item = products.find((v) => v.code === productCode);
    setPpu(item.price);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div style={{ backgroundColor: "#e4e4e4", padding: "16px", borderRadius: "4px" }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Item</InputLabel>
              <Select
                value={selectedProduct}
                onChange={productChange}
                label="Item"
              >
                {products.map((p) => (
                  <MenuItem key={p.code} value={p.code}>
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Price Per Unit"
              type="number"
              value={ppu}
              onChange={(e) => setPpu(e.target.value)}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Quantity"
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              margin="normal"
              inputProps={{ min: 1 }}
            />

            <TextField
              fullWidth
              label="Discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              margin="normal"
              inputProps={{ min: 0 }}
            />

            <Divider sx={{ my: 2 }} />
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={addItem}
              sx={{ mt: 1 }}
            >
              Add
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <QuotationTable
            data={dataItems}
            deleteByIndex={deleteByIndex}
            clearAll={clearAll}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
