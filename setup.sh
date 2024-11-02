@echo off

:: Install dependencies for Homework.UI
echo Installing dependencies for Homework.UI...
cd Homework.UI
npm install
vite build
echo Homework.UI dependencies installed and built.

:: Install dependencies for Homework.API
echo Installing dependencies for Homework.API...
cd ..\Homework.API
dotnet restore
dotnet build
echo Homework.API dependencies installed.

:: Install dependencies for Homework.API.Tests
echo Installing dependencies for Homework.API.Tests...
cd ..\Homework.API.Tests
dotnet restore
dotnet build
echo Homework.API.Tests dependencies installed.

echo All dependencies installed. Setup complete!