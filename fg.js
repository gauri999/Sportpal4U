/* Events fired on the drag target */
var x = 0;
var count = 0;


document.addEventListener("dragstart", function(event) {
  // The dataTransfer.setData() method sets the data type and the value of the dragged data
  event.dataTransfer.setData("Text", event.target.id);

  
  // Output some text when starting to drag the p element
  // document.getElementById("demo").innerHTML = "Started to drag the p element.";
  
  // Change the opacity of the draggable element
  event.target.style.opacity = "0.4";
});

// While dragging the p element, change the color of the output text

// document.addEventListener("drag", function(event) {
//   document.getElementById("demo").style.color = "red";
// });

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function(event) {

if(count < 5){

    if(event.target.id == "dragtarget"){
        // document.getElementById("demo").innerHTML = "<img src='fatt.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget').setAttribute('draggable',false);
        x = x + 10;
        count++;

    } else if (event.target.id == "dragtarget2"){
        // document.getElementById("demo").innerHTML = "<img src='fatt.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget2').setAttribute('draggable',false);
        count++;
        x = x + 10;

    }else if(event.target.id == "dragtarget3"){
        // document.getElementById("demo").innerHTML = "<img src='fatt.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget3').setAttribute('draggable',false);
        count++;
        x = x + 10;

    }else if(event.target.id == "dragtarget5"){
        // document.getElementById("demo").innerHTML = "<img src='fatt.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget5').setAttribute('draggable',false);
        count++;
        x = x + 10;

    }else if(event.target.id == "dragtarget7"){
        // document.getElementById("demo").innerHTML = "<img src='fatt.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget7').setAttribute('draggable',false);
        count++;
        x = x + 10;

    }else if(event.target.id == "dragtarget1"){
        // document.getElementById("demo").innerHTML = "<img src='healthy.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget1').setAttribute('draggable',false);
        x = x + 1;
        count++;

    }else if(event.target.id == "dragtarget4"){
        // document.getElementById("demo").innerHTML = "<img src='healthy.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget4').setAttribute('draggable',false);
        x = x + 1;
        count++;

    }else if(event.target.id == "dragtarget6"){
        // document.getElementById("demo").innerHTML = "<img src='healthy.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget6').setAttribute('draggable',false);
        x = x + 1;
        count++;

    }else if(event.target.id == "dragtarget8"){
        // document.getElementById("demo").innerHTML = "<img src='healthy.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget8').setAttribute('draggable',false);
        x = x + 1;
        count++;

    }else if(event.target.id == "dragtarget9"){
        // document.getElementById("demo").innerHTML = "<img src='healthy.jpg' width=\'200px\' height=\'300px\'>";
        document.getElementById('dragtarget9').setAttribute('draggable',false);
        x = x + 1;
        count++;

    }

    if(count == 5 && (9 >= x && x >= 0))
    {
        document.getElementById("demo").innerHTML = " <img src='img/100.png' width=\'300px\' height=\'300px\'> <br><span style='color: red; font-size:30px; background-color:yellow;'>Keep it up! You are eating 100% healthy food..</span>";

    }else if(count == 5 && (21 >= x && x >= 9))
    {
      document.getElementById("demo").innerHTML = "<img src='img/80.png' width=\'300px\' height=\'300px\'><br> <span style='color: red; font-size:30px; background-color:yellow;'>Good Choice! You are eating balanced diet..</span>";
    }else if(count == 5 && (31 >= x && x >= 21))
    {
      console.log(count);
      document.getElementById("demo").innerHTML = "<img src='img/60.png' width=\'300px\' height=\'300px\'><br> <span style='color: red; font-size:30px; background-color:yellow; '>Beware!! Do not eat lots of junk food..</span>";
    }else if(count == 5 && (40 >= x && x >= 31))
    {
      console.log(count);
      document.getElementById("demo").innerHTML = "<img src='img/40.png' width=\'300px\' height=\'300px\'> <br><span style='color: red; font-size:30px; background-color:yellow;'>Damnnnn!! Take care of your diet..</span>";
    }else if(count == 5 && (51 >= x && x >= 41))
    {
      console.log(count);
      document.getElementById("demo").innerHTML = "<img src='img/dangerr.png' width=\'300px\' height=\'300px\'> <br><span style='color: red; font-size:30px; background-color:yellow;'>Danger! Your health is in danger..</span>";
    }
}

  

  event.target.style.opacity = "5";
});

/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style

document.addEventListener("dragenter", function(event) {
  if ( event.target.className == "droptarget" ) {
    // event.target.style.border = "3px dotted red";
  }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style

document.addEventListener("dragleave", function(event) {
  if ( event.target.className == "droptarget" ) {
    event.target.style.border = "";
  }
});


/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
   Reset the color of the output text and DIV's border color
   Get the dragged data with the dataTransfer.getData() method
   The dragged data is the id of the dragged element ("drag1")
   Append the dragged element into the drop element
*/
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if(count < 5){
  if ( event.target.className == "droptarget" ) {
    document.getElementById("demo").style.color = "";
    event.target.style.border = "";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
}
});
