import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TaskInput } from "../components/taskInput";
import { addTask, deleteTask, updateTask } from "../redux/slice";
import "../styles.css";

const Task = () => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState(0);
  const [isEdit, setEdit] = useState(false);

  const list = useSelector((state) => state.tasks.taskList);

  const onEdit = (data) => {
    setTime(data.time);
    setUser(data.user);
    setDate(data.date);
    setDesc(data.description);
    setEdit(true);
    setExpanded(!expanded);
    setSelected(data.id);
  };
  const onDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };
  const clearUser = () => {
    setTime("");
    setUser("");
    setDate("");
    setDesc("");
  };
  return (
    <div className="container m-2">
      <div className="row">
        <div className="col-lg-8 border mb-2">
          <div className="row bg-secondary">
            <div className="col">
              <span className="text-white">TASKS {list.length}</span>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                className="btn text-white "
                onClick={() => {
                  setExpanded(!expanded);
                  clearUser();
                }}
              >
                {expanded ? (
                  <i className="bi bi-dash-lg"></i>
                ) : (
                  <i className="bi bi-plus-lg"></i>
                )}
              </button>
            </div>
          </div>
          {!expanded &&
            list.map((item) => {
              return (
                <TaskInput
                  data={item}
                  expanded={expanded}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              );
            })}

          {expanded && (
            <div>
              <div className="mb-3">
                <label className="form-label">Task Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Select User</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={user}
                  onChange={(event) => setUser(event.target.value)}
                >
                  <option>Select user</option>
                  <option value="1">user 1</option>
                  <option value="2">user 2</option>
                  <option value="3">user 3</option>
                </select>
              </div>
              <div className="row">
                <div className="col-lg-8"></div>
                <div className="col-lg-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setExpanded(!expanded)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-lg-2">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      if (isEdit) {
                        dispatch(
                          updateTask({
                            task: {
                              description: desc,
                              date: date,
                              time: time,
                              user: user,
                            },
                            id: selected,
                          })
                        );
                        setEdit(false);
                      } else {
                        dispatch(
                          addTask({
                            description: desc,
                            date: date,
                            time: time,
                            user: user,
                          })
                        );
                      }

                      clearUser();
                      setExpanded(!expanded);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Task;
