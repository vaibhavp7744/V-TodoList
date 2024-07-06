import React from 'react';

const About = () => {
  const containerStyle = {
    background: 'linear-gradient(45deg, #f0f8ff, #e6e6fa)',
    margin: '5%',
    padding: '5%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#4b0082'
  };

  const paragraphStyle = {
    lineHeight: '1.6'
  };

  const listStyle = {
    marginLeft: '20px'
  };

  const listItemStyle = {
    marginBottom: '10px'
  };

  const lastParagraphStyle = {
    textAlign: 'center',
    marginTop: '30px',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About My Todos List</h2>
      <p style={paragraphStyle}>Welcome to My Todos List!</p>
      <p style={paragraphStyle}>
        My Todos List is a simple yet powerful task management application designed to help you keep track of your daily tasks and to-dos. Built with React.js and styled using the Bootstrap framework, this application aims to provide a user-friendly interface and efficient task management features.
      </p>
      <h3 style={headingStyle}>Key Features:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}><b>Easy Task Management:</b> Add, delete, and manage your tasks with ease. Each task can have a title and description to provide more details about what needs to be done.</li>
        <li style={listItemStyle}><b>Responsive Design:</b> The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.</li>
        <li style={listItemStyle}><b>Real-Time Updates:</b> The task list updates in real-time, so you can see the changes immediately as you add or remove tasks.</li>
        <li style={listItemStyle}><b>Intuitive Interface:</b> The clean and straightforward interface makes it easy for anyone to start managing their tasks without any learning curve.</li>
      </ul>
      <h3 style={headingStyle}>Technologies Used:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}><b>React.js:</b> A popular JavaScript library for building user interfaces, React allows for the creation of dynamic and interactive web applications.</li>
        <li style={listItemStyle}><b>Bootstrap:</b> A powerful front-end framework that helps in designing responsive and mobile-first websites quickly and easily.</li>
        <li style={listItemStyle}><b>JavaScript:</b> The core scripting language used to implement the logic and interactivity of the application.</li>
      </ul>
      <h3 style={headingStyle}>How to Use:</h3>
      <ol style={listStyle}>
        <li style={listItemStyle}><b>Add Tasks:</b> Click on the 'Add Task' button and fill in the task title and description to add a new task to your list.</li>
        <li style={listItemStyle}><b>View Tasks:</b> All your tasks will be displayed on the main screen, allowing you to see what needs to be done at a glance.</li>
        <li style={listItemStyle}><b>Delete Tasks:</b> Click the 'Delete' button next to any task to remove it from your list.</li>
      </ol>
      <h3 style={headingStyle}>Future Enhancements:</h3>
      <p style={paragraphStyle}>We are constantly looking to improve My Todos List and plan to add the following features in the future:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><b>Task Editing:</b> Ability to edit existing tasks.</li>
        <li style={listItemStyle}><b>Task Prioritization:</b> Assign priority levels to tasks to better organize your workflow.</li>
        <li style={listItemStyle}><b>Due Dates and Reminders:</b> Set due dates for tasks and receive reminders.</li>
      </ul>
      <p style={lastParagraphStyle}>Thank you for using My Todos List! We hope it helps you stay organized and productive.</p>
      <p style={lastParagraphStyle}>If you have any feedback or suggestions, feel free to reach out to us. Happy task managing!</p>
    </div>
  );
}

export default About;
