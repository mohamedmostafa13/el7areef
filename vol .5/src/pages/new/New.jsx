import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { userInputs } from "../../formSource";
import { useLocation } from "react-router-dom";
const New = ({ inputs, title }) => {
  
  // const location = useLocation();
  // const [inputs, setInputs] = useState(userInputs)
  // const [title, setTitle] = useState("Add New" + props.dataSource)
  // useEffect(() => {
  //   console.log(location.inputs)
  //   setInputs(location.inputs);
  //   setTitle(location.title);

  // }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{inputs.label}</label>
                  <input type={inputs.type} placeholder={inputs.placeholder} />
                </div>
              ))}
              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
