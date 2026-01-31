pipeline {
    agent any

    tools{
	nodejs 'node-20'
    }

    environment {
        DOCKER_IMAGE = "sanketdesai09/jenkins-cicd-demo"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                      echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                      docker push $DOCKER_IMAGE:$BUILD_NUMBER
                    '''
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                  docker rm -f demo-app || true
                  docker run -d -p 3000:3000 --name demo-app $DOCKER_IMAGE:$BUILD_NUMBER
                '''
            }
        }
    }
}
