## Jenkins CI/CD Pipeline Project

This project demonstrates a Jenkins-based CI/CD pipeline for a containerized Node.js application using Jenkins Pipeline as Code.

The pipeline automates application build, basic testing, Docker image creation, image push to DockerHub, and deployment on a Linux server.

---

## Architecture Diagram

Developer Commit
|
v
GitHub Repository
|
v
Jenkins Pipeline
├── Checkout Code
├── Install Dependencies (Node.js)
├── Run Tests
├── Build Docker Image
├── Push Image to DockerHub
└── Deploy Container
|
v
Docker Container Running on Linux Server

---

## Pipeline Flow

GitHub → Jenkins → Docker Build → DockerHub → Deployment

---

## Tools Used

- Jenkins (Pipeline as Code)
- Docker
- GitHub
- Node.js
- Linux
- DockerHub

---

## Key Learnings

- Implemented CI/CD using Jenkins Pipeline as Code (`Jenkinsfile`)
- Understood the importance of build environment configuration
- Secure handling of credentials using Jenkins credentials store
- Automated Docker image lifecycle (build, tag, push, deploy)
- Improved troubleshooting skills by debugging real pipeline failures

---

## Issues Faced and Fixes

### Issue 1: `npm: command not found`

**Problem:**  
The Jenkins pipeline failed during the dependency installation stage with the error:

npm: command not found

**Root Cause:**  
Node.js was not available in the Jenkins build environment by default.

**Solution:**  
Configured the Jenkins pipeline to use a Node.js tool by defining it in the `tools` section of the Jenkinsfile, ensuring Node.js and npm were available during pipeline execution.

---

### Issue 2: Docker Permission Denied

**Problem:**  
Docker commands failed with permission errors on the Jenkins agent.

**Solution:**  
Added the Jenkins user to the Docker group and restarted the Jenkins service to allow Docker command execution.

---

## Screenshots

### Jenkins Pipeline Execution
*(Add screenshot of successful Jenkins pipeline run here)*

### Docker Image in DockerHub
*(Add screenshot of pushed Docker image with build number tag)*

### Running Application
*(Add screenshot of application running on port 3000 in browser)*

---

## Conclusion

This project provided hands-on experience with real-world CI/CD workflows, common pipeline failures, and practical fixes. It closely simulates how DevOps engineers build, debug, and maintain deployment pipelines in production environments.

