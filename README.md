## Jenkins CI/CD Pipeline Project

This project demonstrates a Jenkins-based CI/CD pipeline for a containerized Node.js application using Jenkins Pipeline as Code.

The pipeline automates application build, basic testing, Docker image creation, image push to DockerHub, and deployment on a Linux server.

---

## Architecture Diagram

<img width="1236" height="924" alt="image" src="https://github.com/user-attachments/assets/3f93c0a5-857c-45d0-a47e-6d41b094d000" />

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
<img width="1857" height="304" alt="Screenshot 2026-01-31 114901" src="https://github.com/user-attachments/assets/9bf7e1ec-5ba1-42f6-b544-da904da25458" />

### Docker Image in DockerHub
<img width="945" height="537" alt="image" src="https://github.com/user-attachments/assets/a2a7205a-4de3-49c2-b537-6e5e61c993f2" />

### Running Application
<img width="480" height="135" alt="Screenshot 2026-01-31 114915" src="https://github.com/user-attachments/assets/eb4dfc03-473e-43a6-b745-b610bc10bc05" />

---

## Conclusion

This project provided hands-on experience with real-world CI/CD workflows, common pipeline failures, and practical fixes. It closely simulates how DevOps engineers build, debug, and maintain deployment pipelines in production environments.

