# GrabNGo 🍕🍔🍟
## Cafeteria Management System for UNT 

### Product Vision:
FOR students and teachers WHO want a hassle-free way to order meals and skip long cafeteria lines, THE GrabNGo system is an innovative cafeteria management platform THAT enables users to browse menus, customize orders, and schedule pickup times with ease, ensuring their meals are freshly prepared and ready upon arrival. UNLIKE UberEats or similar third-party delivery services, GrabNGo focuses on maximizing convenience and minimizing wait times by allowing users to place, modify, or cancel orders through a user-friendly online interface and receive instant notifications when their food is ready. OUR solution optimizes meal pickup, reduces crowding, and enhances the overall dining experience for a busy academic environment.

## Technologies Used  
- **Backend:** Laravel, PHP, MySQL  
- **Frontend:** HTML, CSS, JavaScript, React  
- **Deployment:** Heroku  

## User Interface

<div align="center">
    <img src="/UI screens/Picture1.png" alt="Image 1" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
    <img src="/UI screens/Picture2.png" alt="Image 2" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
    <img src="/UI screens/Picture3.png" alt="Image 3" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
    <img src="/UI screens/Picture6.png" alt="Image 4" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
    <img src="/UI screens/Picture7.png" alt="Image 5" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
    <img src="/UI screens/Picture8.png" alt="Image 6" style="width: 90%; height: auto; display: block;">
</div>


## Software Architecture – Layered Architecture

The Main Database that we’ve used for our project is MYSQL. We use the Laravel PHP framework which facilitates robust web application development with built-in tools for database and a few templates. We mainly focused on User Authentication, creating a secure payment portal, creating a user-friendly UI for ordering online, and sending email notifications to users.

<div align="center">
    <img src="/UI screens/software architecture.png" alt="Image 1" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
</div>

## Cloud Infrastructure

<div align="center">
    <img src="/UI screens/cloud.png" alt="Image 1" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
</div>

## CICD Pipeline
### CI
The CI Pipeline runs automatically during every pull request. The migrations and tests run, and the output indicates whether they were successful or unsuccessful.

### CD
Link your Heroku app to a GitHub repo in the Heroku dashboard under the Deploy tab, select the branch you want to deploy from (master), and enable Automatic Deploys, so each push to the branch triggers a deployment.
These are the steps used for continuous deployment using Heruko once the code gets updated the pipeline gets triggered.
<div align="center">
    <img src="/UI screens/cicd.png" alt="Image 1" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
</div>

## DevOps Metrics Trends Chart:

 1. **Deployment Frequency:** A deployment rate of one deployment each week (There was a deployment of defects during the previous week), demonstrating our dedication to being agile and responsive in promptly addressing stakeholder feedback.
 2. **Percentage of Failed Deployments:** Of the 5 deployments within the month, none failed, leading to a failure rate of 0. This underscores the success of our testing methodologies and deployment automation, even on a smaller scale.
3. **Lead Time from Development to Deployment:** The typical time taken from integrating code changes to their deployment on our development server is 15 minutes, demonstrating our capability to advance changes through the deployment pipeline quickly.
4. **Change Volume:** In the last month, our team has recorded an average of 35 commits and 20 pull requests on GitHub, demonstrating steady development engagement and teamwork among members.
5. **Mean Time to Recovery (MTTR):** In case of an incident, our team can restore service in about 17 minutes, reducing any interruptions to the project development and guaranteeing a prompt resolution of any issues.

<div align="center">
    <img src="/UI screens/devops.png" alt="Image 1" style="width: 90%; height: auto; display: block; margin-bottom: 20px;">
</div>
