//Overview

Creating a rating submission web application.

//Functions

-Responsive
-Logs user submission
-Changes state after user submission

//Work Flow Path

1. Build html (provided by challenge package).
2. Learn Javascript (lol, still not sure I've figured it out)
3. Build submit button functionality.
4. Build state change functionality (ended up using style.display none vs flex).
5. Format using css.

*Steps 4 and 5 were performed simultaneously, with most formatting being done prior to state change functionality being ironed out.

//Design/Development Perogatives

-Respond if the web application is incorrectly used (user accountability)
	-In this case, pretty much just pressing submit without actually selecting a rating
-Main background should be consistent between display states
	-This way the user can have the initial submission request state open and not have to adjust zoom or screen when the state changes to thank you state.
-Build everything relatively by font-size
	-This looks like excessive use of var(--font-size) and calc(var(--font-size) etc.)

//Self-assessment

I'll admit, learning javascript made this relatively simple project take almost 10 hours. I almost became impatient at the end and did not streamline my CSS (there is a lot of redundancy and broadsword work).
I'd give the product a 6/10 with significant room for improvement, but ground work for future projects. Would not consider this a specific example or good practice (code-wise), but a good basis for interacting with js.