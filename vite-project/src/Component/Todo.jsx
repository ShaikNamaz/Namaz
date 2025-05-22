import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.page}>
      <div style={styles.browserFrame}>
        <div style={styles.browserHeader}>
          <span style={{ ...styles.dot, backgroundColor: 'red' }} />
          <span style={{ ...styles.dot, backgroundColor: 'gold' }} />
          <span style={{ ...styles.dot, backgroundColor: 'green' }} />
        </div>

        <div style={styles.container}>
          <h1 style={styles.heading}>📝 To-Do List</h1>
          <div style={styles.inputContainer}>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task..."
              style={styles.input}
            />
            <button onClick={addTask} style={styles.addButton}>
              Add
            </button>
          </div>

          <ul style={styles.list}>
            {tasks.map((t, index) => (
              <li key={index} style={styles.taskItem}>
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleComplete(index)}
                    style={styles.checkbox}
                  />
                  <span
                    style={{
                      ...styles.taskText,
                      textDecoration: t.completed ? 'line-through' : 'none',
                      color: t.completed ? '#888' : '#333',
                    }}
                  >
                    {t.text}
                  </span>
                </label>
                <button
                  onClick={() => deleteTask(index)}
                  style={styles.deleteButton}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: '#f0f2f5',
    minHeight: '100vh',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  browserFrame: {
    width: '420px',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  browserHeader: {
    height: '35px',
    background: '#eee',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    gap: '8px',
  },
  dot: {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
  },
  container: {
    padding: '20px',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    flex: 1,
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  },
  taskText: {
    fontSize: '16px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    color: '#d11a2a',
    cursor: 'pointer',
  },
};

export default App;
