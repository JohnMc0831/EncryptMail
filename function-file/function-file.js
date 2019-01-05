var config;
var btnEvent;
var item;

Office.initialize = function () {
    item = Office.context.mailbox.item;
    // Checks for the DOM to load using the jQuery ready function.
    $(document).ready(function () {
        // After the DOM is loaded, app-specific code can run.
        // Get the subject of the item being composed.
    });
}

// Add any ui-less function here

function statusUpdate(icon, text) {
    Office.context.mailbox.item.notificationMessages.replaceAsync("status", {
      type: "informationalMessage",
      icon: icon,
      message: text,
      persistent: false
    });
  }

 
  // Get the subject of the item that the user is composing.
  function encryptMessage() {
      item.subject.getAsync(
          function (asyncResult) {
              if (asyncResult.status == Office.AsyncResultStatus.Failed){
                item.body.setSelectedDataAsync("FOO: FAILED!", {coercionType: Office.CoercionType.Text});
              }
              else {
                  // Successfully got the subject, display it.
                  item.body.setSelectedDataAsync("FOO: " + asyncResult, {coercionType: Office.CoercionType.Text});
              }
          });
  }
  
  // Write to a div with id='message' on the page.
  function write(message){

  }  

  //function encryptMessage(event) {
    // var subject = Office.context.mailbox.item.subject.getAsync("Retrieving subject from compose window...", function(subject) {

    // //check to see if the string #SECURE is already present.
    //     // subject = subject.toUpperCase();
    //     // showError(subject);
    //     // if(subject.indexOf("#SECURE") !== -1) {
    //     //     //already there..do nothing
    //     //     showError("This email is already encrypted!");
    //     // } else {
    //     //     subject = "#SECURE " + subject;
    //     //     if(subject.length() > 255) {
    //     //         //too long...truncate from the end
    //     //         subject = subject.substring(0, 255);
    //     //     }
    //     //     Office.context.mailbox.item.subject.setAsync(subject, Office.CoercionType.Html);
    //     // }
    // });   

    
    // Office.context.mailbox.item.subject.getAsync(function(result) {
    //     subject = result.value;
    // });

   

    // Office.context.mailbox.item.subject.setAsync("Bot me baby!!!", { coercionType: Office.CoercionType.Text }, 
    //     function (asyncResult){
    //     if (asyncResult.status == Office.AsyncResultStatus.Succeeded) {
    //         statusUpdate(icon, "\"" + text + "\" inserted successfully.");
    //     }
    //     else {
    //         Office.context.mailbox.item.notificationMessages.addAsync("addTextError", {
    //         type: "errorMessage",
    //         message: "Failed to insert \"" + text + "\": " + asyncResult.error.message
    //         });
    //     }
    //     event.completed();
    //     });

//}

