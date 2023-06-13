import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = (props) => {
  const [data, setData] = useState(OwnerRows);
  const [column, setColumn] = useState(OwnerColumns);
  const [dataSource, setDataSource] = useState(props.dataSource);
  const [inputSource, setInputSource] = useState(userInputs);

  useEffect(() => 
  {
    setDataSource(props.dataSource);
    if(dataSource == 'owners')
    {
      setData(OwnerRows);
      setColumn(OwnerColumns);
      setInputSource(userInputs);
    }
    else if(dataSource == 'playgrounds')
    {
      setData(PlaygroundRows);
      setColumn(PlaygroundColumns);
      setInputSource(playgroundInputs);
    }
  }, );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/owners/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {dataSource} 
        <Link to="/owners/new"  className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
