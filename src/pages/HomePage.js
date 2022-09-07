import React, { useEffect, useState } from 'react';
import '../HomePage.css';
import { db } from '../services/firebase';

const HomePage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    db.child('contacts').on('value', (snap) => {
      if (snap.val() !== null) {
        setData({ ...snap.val() })
      } else {
        setData({})
      }
    })
    return () => {
      setData({})
    }
  }, [])

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id) => {
            return (
              <tr>
                <td> <strong>-</strong> </td>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td> <button>X</button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;