# test first.
if ! dotnet test Homework.API.Tests; then
  echo -e "\033[31mFAILED TO EXECUTE TESTS\033[0m"
  exit 1
fi

# Run api at the background.
dotnet run --project Homework.API &

# Run Homework.UI
cd Homework.UI
PORT=$(sed -n 's/.*port: \(.*\),/\1/p' vite.config.js)
# Check if port is already occupied
if nc -z localhost $PORT; then
  echo -e "\033[31mError: Port $PORT is already occupied. Please choose a different port in Homework.UI/vite.config.js.\033[0m"
  exit 1
fi

npm run dev &

#Gotta free the port automatically
trap 'echo -e "\033[31mfreeing ports...\033[0m"; pkill -f "dotnet run --project Homework.API"; pkill -f "npm run dev"; exit' SIGINT

#lets ensure that the api is running before we deploy UI (othewise you might need to refresh the page)
sleep 2
# Open the default web browser to the deployed Homework.UI
if [[ "$OSTYPE" == "msys" ]]; then
  # Windows
  start http://localhost:$PORT
elif [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open http://localhost:$PORT
else
  # Linux or other OS
  echo "Please open your browser and navigate to http://localhost:$PORT"
fi

wait