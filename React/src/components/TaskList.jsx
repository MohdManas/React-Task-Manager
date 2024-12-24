import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

import { ListWrap, NoTaskWrap } from './Styles';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ListWrap>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ListWrap>
      ) : (
        <NoTaskWrap>No Task</NoTaskWrap>
      )}
    </div>
  );
};

export default TaskList;