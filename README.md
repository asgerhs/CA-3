[![Build Status](https://travis-ci.org/asgerhs/CA-3.svg?branch=master)](https://travis-ci.org/asgerhs/CA-3)

# CA-3

#### Asignment: [CA3 QuickStart Project](https://github.com/asgerhs/CA-3/blob/Developer/CA3-QuickStart-project.pdf)

#### Members
- Andreas Zoega Vesterborg Vikke
- Asger Hermind Sørensen
- Emil Jogvan Bruun
- Martin Eli Frederiksen


## Getting Started

### Initial Setup
- Clone Project
- Remove `.git` folder and init project with `git init`
- Create a new repository and commit / push the code to this repository
- Do to *travis-ci.com* and Active the new repository
- Create two new local databases (replace xxx with a name that makes sense for the project)
	- `xxx`
	- `xxx_test`
- Create a remote database on the deployment server, with the same name as the first one above (`xxx`)
- Open the file `.travis.yml` and change the script `CREATE DATABASE startcode_test;` to use the same name as the local test-database (`xxx_test`)
- In a terminal in the root of the project run `mvn test` and fix any errors, if any

### Setup the deployment server (Only first time)
- Locate the file `pom.xml` the the root of the Backend folder. Change the value of `remote.server` to the url for your own deployment server.
- ssh into your deployment and run the command `sudo nano /opt/tomcat/bin/setenv.sh`
- Add these lines to the files, but replace with your own values
	- `export DEPLOYED="DEV_ON_DIGITAL_OCEAN"`
	- `export USER="<YOUR_DB_USER>"`
	- `export PW="<YOUR_DB_PASSWORD>"`
	- `export CONNECTION_STR="jdbc:mysql://localhost:3306/"`
- Save the file and run this command to restart tomcat `sudo systemctl restart tomcat`

### Setup CI-control (Let Maven deploy when BUILD and TESTS are GREEN &#x1F49A;)
- Go to travis-ci.com, and select the new repository in the dashboard
- Click `More options` and select `settings`
- Create two `Environment Variables`:
	- `REMOTE_PW` : Password for *script_user*
	- `REMOTE_USER` : *script_user*
- **Test the CI pipeline:**
	- Make a small change index.html, so we can see the change after deployment
	- Run `mvn clean test` in the project as we wont commit to master without testing.
	- If no errors, commit and push the changes to master branch
	- Verify that the build started under the `Branches` section at travis-ci.com
	- Verify after a few minutes that travis have deployed the war file on your deployment server.