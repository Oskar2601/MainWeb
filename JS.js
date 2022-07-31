function SendMessage() {
   var textBox = document.getElementById("TextBox");
   var placeHolderDiv = document.getElementById("TextPlaceHolder")
   if(textBox.value == "")
      return 0;

   
   var textPlaceHolder = document.createElement("div");
   placeHolderDiv.appendChild(textPlaceHolder)
   textPlaceHolder.setAttribute("class", "MessageDiv")
   
   var authorName = document.createElement("text");
   var authorText = document.createElement("span");

   textPlaceHolder.appendChild(authorName);
   textPlaceHolder.appendChild(authorText);
   authorName.setAttribute("class", "MessageAuthor");
   authorText.setAttribute("class", "Message");
   authorName.appendChild(document.createTextNode("Local User:"));
   authorText.appendChild(document.createTextNode(textBox.value));
   textBox.value = "";
}