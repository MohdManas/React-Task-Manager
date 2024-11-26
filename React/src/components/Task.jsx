import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


// import {TaskBtn,ListItem} from './Styles'
import {TaskBtn,ListItem} from '../components/Styles'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <ListItem>
      <span>{task.title}</span>
      <div>
        <TaskBtn
          onClick={() => removeTask(task.id)}
          className="btn-delete"
          title="Delete Task"
        >
          {/* <i className="fa fa-trash"></i> */}
          <FontAwesomeIcon icon={faTrash} style={{ color: "white" }}/>
        </TaskBtn>
        <TaskBtn
          onClick={() => findItem(task.id)}
          className="btn-edit"
          title="Edit Task"
        >
          {/* <i className="fa fa-pencil"></i> */}
          <FontAwesomeIcon icon={faPencilAlt} style={{ color: "white" }}/>
        </TaskBtn>
      </div>
    </ListItem>
  );
};

export default Task;