//Tables
var t1 ={n1: {name: "Biology", grade: "A"},
        n2: {name: "English", grade : "C"},
        n3: {name: "Math", grade : "B-"}
};

var t2 ={n1: {name: "English", grade: "A"},
        n2: {name: "Geology", grade : "A-"},
        n3: {name: "Psychology", grade : "B-"}
};

var t3 ={n1: {name: "History", grade: "B"},
        n2: {name: "Spanish", grade : "B+"},
        n3: {name: "Psychology", grade : "A"}
};

var t4 ={n1: {name: "Art", grade: "C+"},
        n2: {name: "French", grade : "A"},
        n3: {name: "P.E.", grade : "A"}
};

//Students
var p1 = {first:"Brian",
          last:"Nguyen",
          courses: t1
};

var p2 = {first:"Scott",
          last: "Tran",
          courses: t2
};

var p3 = {first:"Jasmine",
          last: "Tran",
          courses:t3
};

var p4 = {first:"Jimmy",
          last: "Gonzalez",
          courses:t4
};

//holds names matching the ones typed in
var mNames = [];
//student name array
var nArray = [p1, p2, p3, p4];

//function that returns array of matched names, otherwise displays an error
// if no names are found
function searchArray (userInput, nameArray) {
  var matches = [];
  var name;
    for (var i = 0; i < nameArray.length; ++i) {
      var lName = nameArray[i].last;
        if (lName.toUpperCase() == userInput.toUpperCase()){
        name = nameArray[i];
        matches.push(name);
      }
      if (i == (nameArray.length - 1)){
        if(matches.length == 0)
        alert("No matches found");
        else
       return matches;
     }
    }
  }

//listening for click on "search" button
$(document).on("click","#searchBtn", function(){
$("#matchedNames").empty();
$("#dTable").empty();

//saves userinput
var userInput = $('#q').val();
//calls function that returns array of matching names
mNames = searchArray(userInput, nArray);

//creates/formats the list of matching names
$("div#matchedNames").append('<ul>');
var list = $("div#matchedNames > ul");
var url = "index.html";
for (var i = 0; i < mNames.length; ++i){
list.append("<li id =stu"+i+" style='list-style-type: none;'><a><button> "+ mNames[i].first + ' ' +mNames[i].last +" </button></a></li>");
$('#matchedNames').css("margin-left", "22%");
}
});

//listens for clicks on first name displayed, then creates/formats
//corresponding table
$(document).on("click","#stu0", function(){
  $("#dTable").empty();
  $('#dTable').append('<table/>');
  $('#dTable').append( '<tr><td>' + 'Grades for: ' + mNames[0].first + ' ' + mNames[0].last+'</td></tr>' );
  $('#dTable').append( '<tr><td>' + 'Courses:' + '</td> <td>' + 'Grades:' + '</td></tr>' );
  $('#dTable').append( '<tr><td>' + mNames[0].courses.n1.name + '</td> <td>' + mNames[0].courses.n1.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[0].courses.n2.name + '</td> <td>' + mNames[0].courses.n2.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[0].courses.n3.name + '</td> <td>' + mNames[0].courses.n3.grade + '</td></tr>' )
  $('#dTable').css("margin-left", "15%");
});

//listens for clicks on second name displayed(if any), then creates/formats
//corresponding table
$(document).on("click","#stu1", function(){
  $("#dTable").empty();
  $('#dTable').append('<table/>');
  $('#dTable').append( '<tr><td>' + 'Grades for: ' + mNames[1].first + ' ' + mNames[1].last+'</td></tr>' );
  $('#dTable').append( '<tr><td>' + 'Courses:' + '</td> <td>' + 'Grades:' + '</td></tr>' );
  $('#dTable').append( '<tr><td>' + mNames[1].courses.n1.name + '</td> <td>' + mNames[1].courses.n1.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[1].courses.n2.name + '</td> <td>' + mNames[1].courses.n2.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[1].courses.n3.name + '</td> <td>' + mNames[1].courses.n3.grade + '</td></tr>' )
  $('#dTable').css("margin-left", "15%");
});

//listens for clicks on third name displayed(if any), then creates/formats
//corresponding table
$(document).on("click","#stu2", function(){
  $("#dTable").empty();
  $('#dTable').append('<table/>');
  $('#dTable').append( '<tr><td>' + 'Grades for: ' + mNames[2].first + ' ' + mNames[2].last+'</td></tr>' );
  $('#dTable').append( '<tr><td>' + 'Courses:' + '</td> <td>' + 'Grades:' + '</td></tr>' );
  $('#dTable').append( '<tr><td>' + mNames[2].courses.n1.name + '</td> <td>' + mNames[2].courses.n1.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[2].courses.n2.name + '</td> <td>' + mNames[2].courses.n2.grade + '</td></tr>' )
  $('#dTable').append( '<tr><td>' + mNames[2].courses.n3.name + '</td> <td>' + mNames[2].courses.n3.grade + '</td></tr>' )
  $('#dTable').css("margin-left", "15%");
});
