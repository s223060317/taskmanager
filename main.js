const Home = {
    template: `
      <div>
        <h2>Welcome to the Task Manager Application!</h2>
        <p>Stay organized, stay productive! Manage your tasks and projects effortlessly with our intuitive Task Manager. Create, track, and complete tasks with ease. Organize your work life and boost your productivity today!</p>
      </div>
    `,
  };
  
  const Tasks = {
    template: `
        <div>
            <h2>Tasks</h2>
            <form @submit.prevent="addTask">
                <input type="text" placeholder="Task name" v-model="newTaskName">
                <button type="submit">Add Task</button>
            </form>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
            <div v-if="successMessage" class="success">{{ successMessage }}</div>
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    <input type="checkbox" v-model="task.completed"> {{ task.name }}
                    <button @click="deleteTask(index)">Delete</button>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            tasks: [],
            newTaskName: '',
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        addTask() {
            if (this.newTaskName.trim() !== '') {
                this.tasks.push({ name: this.newTaskName, completed: false });
                this.newTaskName = '';
                this.successMessage = 'Task added successfully!';
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Task name cannot be empty!';
                this.successMessage = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
};
const Projects = {
    template: `
        <div>
            <h2>Projects</h2>
            <form class="project-form" @submit.prevent="addProject">
                <input type="text" placeholder="Project name" v-model="newProjectName">
                <button type="submit">Add Project</button>
            </form>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
            <div v-if="successMessage" class="success">{{ successMessage }}</div>
            <ul>
                <li v-for="(project, index) in projects" :key="index">
                    {{ project.name }}
                    <button @click="deleteProject(index)">Delete</button>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            projects: [],
            newProjectName: '',
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        addProject() {
            if (this.newProjectName.trim() !== '') {
                this.projects.push({ name: this.newProjectName });
                this.newProjectName = '';
                this.successMessage = 'Project added successfully!';
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Project name cannot be empty!';
                this.successMessage = '';
            }
        },
        deleteProject(index) {
            this.projects.splice(index, 1);
        }
    }
};

const routes = [
    { path: '/home', component: Home },
    { path: '/tasks', component: Tasks },
    { path: '/projects', component: Projects }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
});



