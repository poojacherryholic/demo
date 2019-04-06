# giveindia

STARTING/RUNNING THE PROJECT:-
1)Goto Project directory giveindia and open command prompt there and enter npm i or npm install to install dependencies mentioned in package.json
2)Then after doing that run a command to start local static server using this command --->grunt run
  It will open your default browser with port 3333(check if the specific port is blocked by your firewall)
  

SCENARIOS FOR ADDING A NEW CAR:-
1)In left side you can see 100 slots with vertical scroller with cars available in slots and you can also see empty slots named with SLOTS AVAILABLE.
2)Now when you try to add a new car coming into the slot area you can add it in INCOMING CAR DETAILS section.
3)After adding the car details our application will fetch the nearest slot available and auto assigns our entered car number at #point2 to the nearest slot.

SCENARIOS FOR CHECKING CAR BASED ON COLOUR:-
1) Here we have a combo box/ dropdown with mentioned colors in gmail.(red,blue,black,white) if we select any of the color the application the app fetches
  information about all the cars having the selected color from the dropdown in a tabular structure.
  
SCENARIO FOR FINDING A CAR BY NUMBER:-
At right side we can enter the registration number to get the slot number of the parked car.
