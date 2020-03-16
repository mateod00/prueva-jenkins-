pipeline{
    agent {docker{image 'node:13'}}
    stages {
        stage('build'){
            steps{
                sh 'npm -- version'
                sh 'npm -i'
            }
        }
    }

}
