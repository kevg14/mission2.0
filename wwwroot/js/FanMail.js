

$("#btnSend").click(function () {
    let assign = parseFloat($("#Assign").val())
    let groupproject = parseFloat($("#GroupProject").val())
    let quizzes = parseFloat($("#Quizzes").val())
    let exams = parseFloat($("#Exams").val())
    let intex = parseFloat($("#INTEX").val())

    let totalgrade = ((assign * .55) + (groupproject * .05) + (quizzes * .10) +
        (exams * .20) + (intex * .10)).toFixed(2)

  
  
    let alertgrade 

    //validating the input

    if ((assign > 100 || assign < 0) || (groupproject > 100 || groupproject < 0) || (quizzes > 100 || quizzes < 0) || (exams > 100 || exams < 0) ||
        (intex > 100 || intex < 0)) {
            alert("Input a number between 0-100")
    }
    else {
        if (totalgrade >= 94) {
            alertgrade = "A"
        }
        else if (totalgrade >= 90) {
            alertgrade = "A-"

        }
        else if (totalgrade >= 87) {
            alertgrade = "B+"

        }
        else if (totalgrade >= 84) {
            alertgrade = "B"

        }
        else if (totalgrade >= 80) {
            alertgrade = "B-"

        }
        else if (totalgrade >= 77) {
            alertgrade = "C+"

        }
        else if (totalgrade >= 74) {
            alertgrade = "C"

        }
        else if (totalgrade >= 70) {
            alertgrade = "C-"
        }

        else if (totalgrade >= 67) {
            alertgrade = "D+"

        }
        else if (totalgrade >= 64) {
            alertgrade = "D"

        }
        else if (totalgrade >= 60) {
            alertgrade = "D-"
        }

        else {
            alertgrade = "E"
        }
        alert("Your letter grade is:" + alertgrade + "! Your percentage is:"
            + totalgrade + "% !")
    }

        })


 //   alert("Assignments: " + $("#Assign").val() +
 //       ", Group Project: " + $("#GroupProject").val() +
 //       ", Quizzes: " + $("#Quizzes").val() +
 //       ", Exams: " + $("#Exams").val() +
 //       ", INTEX: " + $("#INTEX").val());

   // $("#picKev").fadeOut("slow");



//Grade weights(approximate):
//Assignments 55 Group Project 5 Quizzes 10 Exams 20 INTEX 10

//Total >= 94 %
