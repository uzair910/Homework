# SETUP

## Prerequisites

1. Node.js (version 14 or higher) installed on your machine
2. npm (version 6 or higher) installed on your machine
3. [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) (version 3.1 or higher) installed on your machine
   (Optional: A code editor or IDE of your choice)

## Setup and Run using shell scripts..

### Step 1: Run Setup Script

1. Open a terminal or PowerShell in the root folder (make sure you have admin rights).
2. Execute the `setup.sh` script and wait for it to complete.
   For MacOS, you can run the command by typing `./setup.sh`
3. Once the setup script has finished successfully, all dependencies for the three projects ('HOMEWORK.API', 'API.TESTS', and 'UI') will be installed.

### Step 2: Run the Projects

1. To save time, you can run the `run.sh` script, which will:
   a. Run unit tests
   b. Deploy the backend API
   c. Run the React app

## Setup environments manually:

### Setting up Homework.UI

1. Open a terminal or command prompt on your machine.
2. Navigate to Homework.UI direcotry (/Homework/Homework.UI)
3. Run `npm install` to install all the dependencies.
4. To build the app, run the command: `npm run build`
5. Run the app by `npm run start`
6. Open your web browser and navigate to http://localhost:5173 to access the application.

#### Optional:

7. You may change the port/address where you want to deploy the react app by changing port property in /Homework/Homework.UI/vite.config.js
8. You would need to configure your API to grant access to incoming requests from your new address. In order to do that:
   a. Browse to /Homework/Homework.API/Program.cs
   b. Make change to "AllowLocalhost5173" policy and update the url in the origin.
   (additionally you can change the policy name if you want. But then make sure update it below where you provide access to the CORS.)

### Setting up Homework.API:

1. Open a terminal or command prompt on your machine.
2. Navigate to Homework.API direcotry (/Homework/Homework.API)
3. Inorder to install/restore missing dependencies, run the command: `dotnet restore`
4. Then build the application by using the command `dotnet build`
5. In the end we run/deploy the application by using the following command: dotnet run
6. Your backend is deployed and running at ttp://localhost:5034

#### Optional:

7. INCASE you would like to deploy backend in a different port, you may browse to '/Homework/Homework.API/Properties/launchSettings.json and change the "applicationUrl" to the desired address.
8. You will have to update the settings in frontend /Homework.UI to point to new port. You can do that by:
   a. Opening /Homework/Homework.UI/vite.config.js
   b. Changing the target to poin to the address you set.

### Setting up Homework.API:TESTS:

1. Open a terminal or command prompt on your machine.
2. Navigate to Homework.API direcotry (/Homework/Homework.API.Tests)
3. Inorder to install/restore missing dependencies, run the command: `dotnet restore`
4. Run the following command to run tests: `dotnet test`

#### Troubleshooting:

1. If you encounter any issues during the setup process, check the terminal output for error messages.
2. If you're having trouble, try deleting the bin and obj directories and running dotnet restore and dotnet test again.

## Happy Reviewing! :)
