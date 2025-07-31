
import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import PropTypes from 'prop-types';
import { BsFillTrashFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { MdClear } from "react-icons/md";

function QuotationTable({ data, deleteByIndex, clearAll }) {

  if (!data || data.length === 0) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Quotation
        </Typography>
        <Typography variant="body1">
          <CiShoppingCart style={{ marginRight: 8 }} />
          No items
        </Typography>
      </Container>
    );
  }

  // Calculate the total amount of the items
  const total = data.reduce((acc, v) => {
    const itemTotal = v.qty * v.ppu;
    const discount = v.discount || 0;
    return acc + Math.max(0, itemTotal - discount);
  }, 0);

  // Calculate the total discount of the items
  const totalDiscount = data.reduce((acc, v) => acc + (v.discount || 0), 0);

  // Function to delete an item
  const handleDelete = (index) => {
    deleteByIndex(index);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Quotation
      </Typography>
      
      <Button 
        variant="outlined" 
        color="error"
        startIcon={<MdClear />}
        onClick={clearAll}
        sx={{ mb: 2 }}
        disabled={data.length === 0}
      >
        Clear
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Price/Unit</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((v, i) => {
              const itemTotal = v.qty * v.ppu;
              const discount = v.discount || 0;
              const amount = Math.max(0, itemTotal - discount);
              return (
                <TableRow key={i}>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(i)} color="error" size="small">
                      <BsFillTrashFill />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">{v.qty}</TableCell>
                  <TableCell>{v.item}</TableCell>
                  <TableCell align="center">{v.ppu}</TableCell>
                  <TableCell align="center">{discount > 0 ? discount : '-'}</TableCell>
                  <TableCell align="right">{amount.toFixed(2)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <strong>Total Discount:</strong>
              </TableCell>
              <TableCell align="right">
                <strong>{totalDiscount.toFixed(2)}</strong>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="right">
                <strong>Total:</strong>
              </TableCell>
              <TableCell align="right">
                <strong>{total.toFixed(2)}</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}

QuotationTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    ppu: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    discount: PropTypes.number
  })).isRequired,
  deleteByIndex: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired
};

export default QuotationTable;
