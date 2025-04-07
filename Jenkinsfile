pipeline {
    agent any
    
    stages {
        stage("Install Dependencies") {
            steps {
                sh "cd frontend && npm install"
                sh "cd backend && npm install"
            }
        }
        
        stage("Run Tests") {
            steps {
                sh "cd frontend && npm test"
                sh "cd backend && npm test"
            }
        }
        
        stage("Build") {
            steps {
                sh "cd frontend && npm run build"
            }
        }
        
        stage("Deploy") {
            steps {
                echo "Deploying to production..."
                // Deployment steps will go here
            }
        }
    }
}