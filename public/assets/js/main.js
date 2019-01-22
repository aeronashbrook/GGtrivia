var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n === (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    $("#nextBtn").attr("id", "qSubmit");
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n === 1 && !validateForm()) {
    return false;
  }
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value === "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

//saving data

//on mouseup, grabs data
$(document).on("mouseup", "#qSubmit", function(){
  dataGrabber();
});

//empty qObj variable
var qObj = {
  question: null,
  option1: null,
  option2: null,
  option3: null,
  option4: null,
  correctAnswer: null,
  category: 'misc.'
};

var dataGrabber= function(){
  //captures values
  var q = $('#question').val();
  var o4 = $('#option4').val();
  var o1 = $('#option1').val();
  var o2 = $('#option2').val();
  var o3 = $('#option3').val();
  // var randomizer = Math.floor(Math.random() * 3);
  console.log('q = ', q);
  console.log('o4 = ', o4);
  console.log('o1 = ', o1);
  console.log('o2 = ', o2);
  console.log('o3 = ', o3);
  qObj.question = q;
  qObj.option4 = o4;
  qObj.correctAnswer = o4;
  qObj.option1 = o1;
  qObj.option2 = o2;
  qObj.option3 = o3;
  //qObj is now ready for POSTing
  $.post("/api/post/questions", qObj, function(data, status){
    console.log(data);
    console.log(status);
  }, "json").then(function(){
    window.location.replace('/')
  })
}
=======
$("#regForm").on("Submit", function() {
  handleSubmit();
});

function handleSubmit() {
  var questionInput = $("#question");
  var question = questionInput.val().trim();
  var caInput = $("#correctAnswer");
  var correctAnswer = caInput.val().trim();
  var o1Input = $("#o1");
  var o1 = o1Input.val().trim();
  var o2Input = $("#o2");
  var o2 = o2Input.val().trim();
  var o3Input = $("#o3");
  var o3 = o3Input.val().trim();

  insertQuestion({
    question: question,
    correctAnswer: correctAnswer,
    option1: o1,
    option2: o2,
    option3: o3
  });
  
}

function insertQuestion(questionData) {
  console.log(questionData);


  $.post("/api/post/question", questionData, function(data, status){
    console.log(data);
    console.log(status);
    // alert("location should change!");
    // document.location.href = url;
  }, "json").then(function(){
    alert("You're question has been added to a pool of submitted questions.");
  });
}