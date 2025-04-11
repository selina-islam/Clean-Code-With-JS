// CREATE A FUNCTION TO DISPLAY THE CURRENT DATE & TIME IN A USER-FRIENDLY FORMAT:

function dispalyDateTime() {
  const now = new Date();

  // get individual parts of the date & time
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const hours = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();

  // formate the date & time
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours};${minute}:${seconds}`;

  console.log(`Todays date is: ${formattedDate}`); // Todays date is: 11/3/2025
  console.log(`Today time is: ${formattedTime}`); // Today time is: 12;14:12
}

dispalyDateTime()