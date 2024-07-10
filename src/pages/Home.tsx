import ButtonDefault from '../components/button-default/ButtonDefault';
import { useEffect, useState } from 'react';
import DefaultPage from '../config/layout/DefaultPage';
import ArrayType from '../types/ArrayType';
import { v4 as uuid } from 'uuid';

function Home() {
  const [taskName, setTaskName] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');
  const [taskArray, setTaskArray] = useState<ArrayType[]>([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }, [taskArray]);

  function createTask() {
    if (taskName && taskDesc) {
      const task: ArrayType = {
        taskName,
        taskDesc,
        taskId: uuid(),
      };

      const newTask = [...taskArray, task];
      setTaskArray(newTask);

      clearInputs();
    }
  }

  function editTask(taskId: string) {
    const updatedTasks = taskArray.map(task => {
      if (task.taskId === taskId) {
        return {
          ...task,
          taskName,
          taskDesc,
        };
      }
      return task;
    });

    setTaskArray(updatedTasks);
    clearInputs();
  }

  function deleteTask(taskId: string) {
    const taskFilter = taskArray.filter(task => task.taskId !== taskId);
    setTaskArray(taskFilter);
  }

  function clearInputs() {
    setTaskName('');
    setTaskDesc('');
  }

  return (
    <>
      <DefaultPage>
        <h1>Lista de Tarefas</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '35%',
          }}
        >
          <label htmlFor="task">Nome da tarefa:</label>
          <input type="text" name="task" onChange={e => setTaskName(e.target.value)} value={taskName} />
          <label htmlFor="task">Descrição da tarefa:</label>
          <input type="text" name="task" onChange={e => setTaskDesc(e.target.value)} value={taskDesc} />
        </div>
        <ButtonDefault action={createTask} label="Salvar"></ButtonDefault>
        <div>
          {taskArray.map(item => (
            <div
              key={item.taskId}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '800px',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: '20px',
              }}
            >
              <h3>{item.taskName}</h3>
              <h3>{item.taskDesc}</h3>
              <ButtonDefault action={() => editTask(item.taskId)} label="Editar"></ButtonDefault>
              <ButtonDefault action={() => deleteTask(item.taskId)} label="Deletar"></ButtonDefault>
            </div>
          ))}
        </div>
      </DefaultPage>
    </>
  );
}

export default Home;
