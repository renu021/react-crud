import React from 'react';
import './App.css';
import { onFormSubmit, readFormData, insertNewRecord, resetForm, onEdit, onDelete } from './crud/crud'; // Import the necessary functions

function App() {
  return (
    <div className="container">
      <form onSubmit={onFormSubmit} autoComplete='off'>
        <table>
          <tbody>
            <tr>
              <td colSpan="2"><h1>Employee Details</h1></td>
            </tr>

            <tr>
              <td><label htmlFor="emp_code">EMP Code :</label></td>
              <td><input type="text" id="emp_code" name="emp_code" /></td>
            </tr>

            <tr>
              <td><label htmlFor="emp_name">Employee Name :</label></td>
              <td><input type="text" id="emp_name" name="emp_name" /></td>
            </tr>

            <tr>
              <td><label htmlFor="salary">Employee Salary :</label></td>
              <td><input type="number" id="salary" name="salary" /></td>
            </tr>

            <tr className="form-action-btn">
              <td colSpan="2"><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>

      <table className="List" id="employeeList">
        <thead>
          <tr>
            <th>EMP_Code </th>
            <th>Employee Name </th>
            <th>Employee Salary</th>
            <th>
                
            </th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default App;
