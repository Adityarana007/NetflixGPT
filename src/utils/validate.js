export const checkValidData = (email, password) => {
  console.log("email", email);
  console.log("password", password);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  // const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const isPasswordValid = /^.{4,60}$/.test(password);
  console.log("isEmailValid:", isEmailValid);
  console.log("isPasswordValid:", isPasswordValid);

  if (email?.trim() == "") {
    return "Please enter email address";
  } else if (!isEmailValid)
    return "Please enter a valid email address or phone number.";
  else if (password?.trim() === "") {
    return "Please enter password";
  } else if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters.";
  else return null;
};
