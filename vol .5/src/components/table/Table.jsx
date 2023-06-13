import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      "id": "64876d34f14ce16cceb0c73f",
      "name": "Playground 1",
      "address": "address 1",
      
      "city": "Cairo",
      "pricePerHour": 100,
      "owner": "Ahmed",
  
      "rating": 4,
    },
    {
      "id": "64876d34f14ce16cceb0c740",
      "name": "Playground 2",
      "address": "address 2",
      "city": "Cairo",
      "pricePerHour": 300,
      "owner": "Mohamed",
      
      "rating": 4,
      
    },
    {
      "id": "64876d34f14ce16cceb0c741",
      "name": "Playground 3",
      "address": "address 3",
      "city": "Cairo",
      "pricePerHour": 200,
      "owner": "Omar",
      
      "rating": 3,
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">City</TableCell>
            <TableCell className="tableCell">Price Per Hour</TableCell>
            <TableCell className="tableCell">Owner</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                  {row.name}
              </TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">{row.city}</TableCell>
              <TableCell className="tableCell">{row.pricePerHour}</TableCell>
              <TableCell className="tableCell">{row.owner}</TableCell>
              <TableCell className="tableCell">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
