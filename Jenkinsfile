pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'yarn'
            }
        }
        
        stage('yarn install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'yarn run cy:run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
