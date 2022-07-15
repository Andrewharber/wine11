var name = window.prompt("Please enter your name:")
var ageCheck = window.prompt("Please enter your age:")

if (ageCheck < 21) {
    window.alert("You submited that you are:" + ageCheck + ":years old," + name + ".");
    location.replace('https://www.thewiggles.com/');
}

    else if (ageCheck > 21 && ageCheck < 101) {

        window.alert("Welcome to Wine.11!")
    }

else {
    window.alert("You must be older than expected,Please be honest," + name + ".");
    location.replace('https://monopoly.fandom.com/wiki/Go_to_Jail_(space)');
}