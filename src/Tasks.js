import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function Tasks() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set Kick-Off Meeting</td>
            <td>Alex B.</td>
            <td></td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Agree on Objectives</td>
            <td>Frank C.</td>
            <td>⭐️</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Detailed Requests</td>
            <td>Jacob S.</td>
            <td></td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Hardware Requests</td>
            <td>Jacob S.</td>
            <td>⭐️</td>
            <td>Overdue</td>
          </tr>
          <tr>
            <td>Final Resource Plan</td>
            <td>Jacob S.</td>
            <td></td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>Staffing</td>
            <td>Alex B.</td>
            <td>⭐️</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>Technical Requests</td>
            <td>Frank C.</td>
            <td></td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>Kennedy K.</td>
            <td>⭐️</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td>Dev. Complete</td>
            <td>Jacob S.</td>
            <td>⭐️</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td>Hardware Configuration</td>
            <td>Alex B.</td>
            <td></td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td> System Testing</td>
            <td>Kennedy K.</td>
            <td>⭐️</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td> Launch</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tasks;
