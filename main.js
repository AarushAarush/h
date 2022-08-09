var StudentName = [];
function submit() {
    var displaystudent = [];
    for(var j = 1; j <= 4; j++){
        var student = document.getElementById("name_of_the_student_"+j).value;
        console.log(student);
        StudentName.push(student);
    }
    console.log(StudentName);
    for(var a = 0; a < StudentName.length; a++){
        displaystudent.push("<h4>NAME - "+ StudentName[a] + "</h4>");
        console.log(displaystudent);
    }
    console.log(displaystudent);
    var removecommas = displaystudent.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    StudentName.sort()
    console.log(StudentName);
    var displaystudentsort = [];
    for(var a = 0; a < StudentName.length; a++){
        displaystudentsort.push("<h4>NAME - "+ StudentName[a] + "</h4>");
        console.log(displaystudentsort);
    }
    var removecommas = displaystudentsort.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
}