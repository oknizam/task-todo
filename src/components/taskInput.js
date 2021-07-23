import React, { useState, useEffect } from "react";

export const TaskInput = ({ data, onEdit, onDelete }) => {
  console.log(data);
  useEffect(() => {});

  return (
    <div className="row border-bottom mt-4">
      <div className="col-4">
        <div className="row">
          <div className="col-4">
            <img src="../../profile.png" style={{ width: 40, height: 40 }} />
          </div>
          <div className="col-8">
            <div>{data.description}</div>
            <div>{data.date}</div>
          </div>
        </div>
      </div>
      <div className="col-2 ">
        <i className="bi bi-pencil border p-2" onClick={() => onEdit(data)}></i>
      </div>
      <div className="col-2 ">
        <i className="bi bi-bell-fill border p-2"></i>
      </div>
      <div className="col-2">
        <i className="bi bi-check-lg border p-2"></i>
      </div>
      <div className="col-2">
        <i
          className="bi bi-trash-fill  border p-2"
          onClick={() => onDelete(data.id)}
        ></i>
      </div>
    </div>
  );
};
