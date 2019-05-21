pipeline {
    agent {
        docker { image 'node:current-alpine' }
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '10', daysToKeepStr: '10'))
        ansiColor('xterm')
        timestamps()
    }
    environment {
        HOME="."
    }
    stages {
        stage ('Build') {
            steps {
                sh label: 'NPM install', script: "npm install"
            }
        }
        stage('Test') {
            steps {
                sh label: 'NPM test', script: "echo need local Redis to run npm test"
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'coverage/*', fingerprint: false
        }
    }
} 