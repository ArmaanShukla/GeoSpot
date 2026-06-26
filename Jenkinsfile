pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ArmaanShukla/GeoSpot.git'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r index.html style.css script.js README.md Jenkinsfile /var/www/html/
                sudo systemctl restart nginx
                '''
            }
        }
    }

    post {
        success {
            echo 'GeoSpot deployed successfully to EC2 Nginx server.'
        }
        failure {
            echo 'GeoSpot deployment failed.'
        }
    }
}
