
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "arav@example1.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Login API",
        "taskDescription": "Develop and test the login API with JWT authentication.",
        "taskDate": "2024-12-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Project Documentation",
        "taskDescription": "Revise the README.md to include setup instructions.",
        "taskDate": "2024-12-10",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Navbar Responsiveness",
        "taskDescription": "Resolve issues with the navbar layout on smaller screens.",
        "taskDate": "2024-12-12",
        "category": "Design"
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "jane.smith@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Test Cases",
        "taskDescription": "Write test cases for the user registration module.",
        "taskDate": "2024-12-15",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Refactor slow queries to improve performance.",
        "taskDate": "2024-12-11",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Create Wireframe for Dashboard",
        "taskDescription": "Design a low-fidelity wireframe for the admin dashboard.",
        "taskDate": "2024-12-13",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Setup CI/CD Pipeline",
        "taskDescription": "Configure Jenkins for continuous integration and delivery.",
        "taskDate": "2024-12-16",
        "category": "DevOps"
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "robert.jones@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the codebase for module X and provide feedback.",
        "taskDate": "2024-12-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update CI Scripts",
        "taskDescription": "Make changes to the build scripts to handle new dependencies.",
        "taskDate": "2024-12-11",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "UX Research",
        "taskDescription": "Gather feedback from users on the recent dashboard update.",
        "taskDate": "2024-12-12",
        "category": "Research"
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Aanya",
    "email": "emily.brown@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Material",
        "taskDescription": "Design promotional materials for the upcoming product launch.",
        "taskDate": "2024-12-14",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Payment Gateway Issues",
        "taskDescription": "Debug and resolve errors in the payment gateway integration.",
        "taskDate": "2024-12-10",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare Release Notes",
        "taskDescription": "Draft release notes for version 2.1 of the product.",
        "taskDate": "2024-12-12",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve website SEO to increase organic traffic.",
        "taskDate": "2024-12-16",
        "category": "Marketing"
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Kian",
    "email": "michael.wilson@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Codebase",
        "taskDescription": "Perform a comprehensive refactoring of the core library.",
        "taskDate": "2024-12-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Draft New Policies",
        "taskDescription": "Create initial drafts for the updated security policies.",
        "taskDate": "2024-12-11",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Build Analytics Dashboard",
        "taskDescription": "Develop a dashboard to visualize key business metrics.",
        "taskDate": "2024-12-12",
        "category": "Design"
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];

  

const admins = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    },
]


export const  setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admins));
};


export const  getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin};
};