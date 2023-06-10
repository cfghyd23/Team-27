import React from "react";

const User = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto mt-3 d-flex flex-column d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center mt-5 p-4 gap-3 rounded"
          style={{width:"90%",border:"solid black"}}>

            <h3>Please Describe your Problem</h3>

            <select className="form-select" style={{ width: "75%" }}>
              <option selected>Select Category of Your Problem</option>
              <option value="1">Health</option>
              <option value="2">Financial </option>
              <option value="3">Educational </option>
              <option value="3">Faced Any violence </option>
              <option value="3">Others </option>
            </select>

            <div className="mb-3 mt-3" style={{width:"75%"}}>
              <label for="description" class="form-label">
                Describe Your Problem
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
              ></textarea>

              <button className="btn btn-primary mt-4 ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;


