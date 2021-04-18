function Password()
{
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

    if (first.length < 8)
    {
        alert("The password needs to be at least 8 characters long.")
    }
    else if (first === second)
    {
        alert("Password has been validated!")
    }
    else
    {
        alert("The passwords don't match. Please try again.")
    }

}
