@echo off

:: Install dependencies for Homework.UI
echo Installing dependencies for Homework.UI...
cd Homework.UI
npm install -g vite
npm install
vite build
if [ $? -ne 0 ]; then
  echo "\033[31mError: Failed to setup Homework.UI\033[0m"
  echo "\033[31mOperation aborted. Try setting up project manually. You may find the instructions in the README.md\033[0m"
  exit 1
fi
echo Homework.UI dependencies installed and built.

:: Install dependencies for Homework.API
echo Installing dependencies for Homework.API...
cd ../Homework.Api
dotnet restore
dotnet build
if [ $? -ne 0 ]; then
  echo "\033[31mError: Failed to setup Homework.API\033[0m"
  echo "\033[31mOperation aborted. Try setting up project manually. You may find the instructions in the README.md\033[0m"
  exit 1
fi
echo Homework.API dependencies installed.

:: Install dependencies for Homework.API.Tests
echo Installing dependencies for Homework.API.Tests...
cd ../Homework.Api.Tests
dotnet restore
dotnet build
if [ $? -ne 0 ]; then
  echo "\033[31mError: Failed to setup Homework.API.Tests\033[0m"
  echo "\033[31mOperation aborted. Try setting up project manually. You may find the instructions in the README.md\033[0m"
  exit 1
fi
echo Homework.API.Tests dependencies installed.

echo All dependencies installed. Setup complete!
