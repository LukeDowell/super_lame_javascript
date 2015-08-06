#Heroku Link

https://still-hollows-2350.herokuapp.com/

#Writeup

###CLIENT
Our client, after the document is ready, will fire off an AJAX request to /data. The response should contain three seperate JSON files that we will store inside of three arrays. We will attach an event handler to a button on the document that, when clicked, will pull a random value from each of the three arrays and concatenate them. We will remove any prior generated strings from the DOM and then append our new one.


###SERVER

Our server will be listening for incoming requests. There will be a wildcard listener and a /data listener. The wildcard listener will present a web page to the user that has a button on it upon receiving a request. The data listener will send off three seperate JSON files upon receiving a request. The JSON files contain modifying adjectives, normal adjectives and topics we have covered.

#SUPER LAME JAVASCRIPT

Or, maybe "Random Prime Venting Generator"?
Ok, so what you will need to do. Create a button on the DOM that reads "Generate".
When the page loads, you will need to send to the client three different JSON files. The generate button should not work until all three pieces of JSON received from the server.

List 1 should be a 'Modifying Adjective", examples : "Super", "Really" 
List 2 should be an Adjective, example "Lame", "Boring"
List 3 should be any of the topics we have covered, "Arrays", "Objects", "Build Automation"

Once the generate button is clicked, pick a random spot on each of the arrays and construct a string that is then appended to the DOM. If the generate button is clicked again, the old string should be removed and a new one should take its place.
Post the whole application to Heroku. Note: No Hard or Pro mode. Once you are complete, you are clear to upgrade your application however you wish OR help other groups that might be having a difficult time.
HOWEVER,
Before you get started, you and your pair need to talk through how to build the whole application. Talk through each of the logic points and complete a write of up each. Try to describe how you will build and implement each of the pieces of functionality in the application.
Once you are done with the write up, let Joel or I know and we will 'approve' you to begin writing code.
Good Luck!