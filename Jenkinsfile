pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('frontend') {
                    bat 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment stage (customize this as needed)'
            }
        }
    }
}
