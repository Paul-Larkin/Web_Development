let counter = 0;
calculate = function() {
    /* Student 1 */
    let resultsStudent1 = [ document.getElementById("assignmentOneS1").value*1,
                            document.getElementById("assignmentTwoS1").value*1,
                            document.getElementById("assignmentThreeS1").value*1,
                            document.getElementById("assignmentFourS1").value*1,
                            document.getElementById("assignmentFiveS1").value*1];

        let totalGradeStudent1 = 0;

        for(let i = 0; i<5; i++){
            totalGradeStudent1+=resultsStudent1[i];
            if(resultsStudent1[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent1[i];
            if(myVar<1){
                counter++;
            }
        }
         let averageStudent1 = Math.round(totalGradeStudent1/5);
            if(averageStudent1<40){
                document.getElementById("gradeS1").style.backgroundColor = "red";
                document.getElementById("gradeS1").style.color = "white";
            }else{
                document.getElementById("gradeS1").style.backgroundColor = "white";
                document.getElementById("gradeS1").style.color = "black";
            }
        document.getElementById("gradeS1").innerHTML = averageStudent1+"%";

    /* Student 2 */
    let resultsStudent2 = [ document.getElementById("assignmentOneS2").value*1,
                            document.getElementById("assignmentTwoS2").value*1,
                            document.getElementById("assignmentThreeS2").value*1,
                            document.getElementById("assignmentFourS2").value*1,
                            document.getElementById("assignmentFiveS2").value*1];

        let totalGradeStudent2 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent2+=resultsStudent2[i];
            if(resultsStudent2[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent2[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent2 = Math.round(totalGradeStudent2/5);
            if(averageStudent2<40){
                document.getElementById("gradeS2").style.backgroundColor = "red";
                document.getElementById("gradeS2").style.color = "white";
            }else{
                document.getElementById("gradeS2").style.backgroundColor = "white";
                document.getElementById("gradeS2").style.color = "black";
            }
        document.getElementById("gradeS2").innerHTML = averageStudent2+"%";

    /* Student 3 */
    let resultsStudent3 = [ document.getElementById("assignmentOneS3").value*1,
                            document.getElementById("assignmentTwoS3").value*1,
                            document.getElementById("assignmentThreeS3").value*1,
                            document.getElementById("assignmentFourS3").value*1,
                            document.getElementById("assignmentFiveS3").value*1];

        let totalGradeStudent3 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent3+=resultsStudent3[i];
            if(resultsStudent3[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent3[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent3 = Math.round(totalGradeStudent3/5);
            if(averageStudent3<40){
                document.getElementById("gradeS3").style.backgroundColor = "red";
                document.getElementById("gradeS3").style.color = "white";
            }else{
                document.getElementById("gradeS3").style.backgroundColor = "white";
                document.getElementById("gradeS3").style.color = "black";
            }
        document.getElementById("gradeS3").innerHTML = averageStudent3+"%";

    /* Student 4 */
    let resultsStudent4 = [ document.getElementById("assignmentOneS4").value*1,
                            document.getElementById("assignmentTwoS4").value*1,
                            document.getElementById("assignmentThreeS4").value*1,
                            document.getElementById("assignmentFourS4").value*1,
                            document.getElementById("assignmentFiveS4").value*1];

        let totalGradeStudent4 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent4+=resultsStudent4[i];
            if(resultsStudent4[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent4[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent4 = Math.round(totalGradeStudent4/5);
            if(averageStudent4<40){
                document.getElementById("gradeS4").style.backgroundColor = "red";
                document.getElementById("gradeS4").style.color = "white";
            }else{
                document.getElementById("gradeS4").style.backgroundColor = "white";
                document.getElementById("gradeS4").style.color = "black";
            }
        document.getElementById("gradeS4").innerHTML = averageStudent4+"%";

    /* Student 5 */
    let resultsStudent5 = [ document.getElementById("assignmentOneS5").value*1,
                            document.getElementById("assignmentTwoS5").value*1,
                            document.getElementById("assignmentThreeS5").value*1,
                            document.getElementById("assignmentFourS5").value*1,
                            document.getElementById("assignmentFiveS5").value*1];

        let totalGradeStudent5 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent5+=resultsStudent5[i];
            if(resultsStudent5[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent5[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent5 = Math.round(totalGradeStudent5/5);
            if(averageStudent5<40){
                document.getElementById("gradeS5").style.backgroundColor = "red";
                document.getElementById("gradeS5").style.color = "white";
            }else{
                document.getElementById("gradeS5").style.backgroundColor = "white";
                document.getElementById("gradeS5").style.color = "black";
            }
        document.getElementById("gradeS5").innerHTML = averageStudent5+"%";

    /* Student 6 */
    let resultsStudent6 = [ document.getElementById("assignmentOneS6").value*1,
                            document.getElementById("assignmentTwoS6").value*1,
                            document.getElementById("assignmentThreeS6").value*1,
                            document.getElementById("assignmentFourS6").value*1,
                            document.getElementById("assignmentFiveS6").value*1];

        let totalGradeStudent6 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent6+=resultsStudent6[i];
            if(resultsStudent6[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent6[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent6 = Math.round(totalGradeStudent6/5);
            if(averageStudent6<40){
                document.getElementById("gradeS6").style.backgroundColor = "red";
                document.getElementById("gradeS6").style.color = "white";
            }else{
                document.getElementById("gradeS6").style.backgroundColor = "white";
                document.getElementById("gradeS6").style.color = "black";
            }
        document.getElementById("gradeS6").innerHTML = averageStudent6+"%";

    /* Student 7 */
    let resultsStudent7 = [ document.getElementById("assignmentOneS7").value*1,
                            document.getElementById("assignmentTwoS7").value*1,
                            document.getElementById("assignmentThreeS7").value*1,
                            document.getElementById("assignmentFourS7").value*1,
                            document.getElementById("assignmentFiveS7").value*1];

        let totalGradeStudent7 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent7+=resultsStudent7[i];
            if(resultsStudent7[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent7[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent7 = Math.round(totalGradeStudent7/5);
            if(averageStudent7<40){
                document.getElementById("gradeS7").style.backgroundColor = "red";
                document.getElementById("gradeS7").style.color = "white";
            }else{
                document.getElementById("gradeS7").style.backgroundColor = "white";
                document.getElementById("gradeS7").style.color = "black";
            }
        document.getElementById("gradeS7").innerHTML = averageStudent7+"%";

    /* Student 8 */
    let resultsStudent8 = [ document.getElementById("assignmentOneS8").value*1,
                            document.getElementById("assignmentTwoS8").value*1,
                            document.getElementById("assignmentThreeS8").value*1,
                            document.getElementById("assignmentFourS8").value*1,
                            document.getElementById("assignmentFiveS8").value*1];

        let totalGradeStudent8 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent8+=resultsStudent8[i];
            if(resultsStudent8[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent8[i];
            if(myVar<1){
                counter++;
            }
        }
        let averageStudent8 = Math.round(totalGradeStudent8/5);
            if(averageStudent8<40){
                document.getElementById("gradeS8").style.backgroundColor = "red";
                document.getElementById("gradeS8").style.color = "white";
            }else{
                document.getElementById("gradeS8").style.backgroundColor = "white";
                document.getElementById("gradeS8").style.color = "black";
            }
        document.getElementById("gradeS8").innerHTML = averageStudent8+"%";

    /* Student 9 */
    let resultsStudent9 = [ document.getElementById("assignmentOneS9").value*1,
                            document.getElementById("assignmentTwoS9").value*1,
                            document.getElementById("assignmentThreeS9").value*1,
                            document.getElementById("assignmentFourS9").value*1,
                            document.getElementById("assignmentFiveS9").value*1];

        let totalGradeStudent9 = 0;
        for(i = 0; i<5; i++) {
            totalGradeStudent9 += resultsStudent9[i];
            if (resultsStudent9[i] > 100) {
                alert("Invalid Entry");
            }
            let myVar = resultsStudent9[i];
            if (myVar < 1) {
                counter++;
            }
        }
        let averageStudent9 = Math.round(totalGradeStudent9/5);

            if(averageStudent9<40){
                document.getElementById("gradeS9").style.backgroundColor = "red";
                document.getElementById("gradeS9").style.color = "white";
            }else{
                document.getElementById("gradeS9").style.backgroundColor = "white";
                document.getElementById("gradeS9").style.color = "black";
            }
        document.getElementById("gradeS9").innerHTML = averageStudent9+"%";

    /* Student 10 */
    let resultsStudent10 = [ document.getElementById("assignmentOneS10").value*1,
                            document.getElementById("assignmentTwoS10").value*1,
                            document.getElementById("assignmentThreeS10").value*1,
                            document.getElementById("assignmentFourS10").value*1,
                            document.getElementById("assignmentFiveS10").value*1];

        let totalGradeStudent10 = 0;
        for(i = 0; i<5; i++){
            totalGradeStudent10+=resultsStudent10[i];
            if(resultsStudent10[i]>100){
                alert("Invalid Entry");
            }
            let myVar = resultsStudent10[i];
            if(myVar<1){
                counter++;
            }
        }

        let averageStudent10 = Math.round(totalGradeStudent10/5);
            if(averageStudent10<40){
                document.getElementById("gradeS10").style.backgroundColor = "red";
                document.getElementById("gradeS10").style.color = "white";
            }else{
                document.getElementById("gradeS10").style.backgroundColor = "white";
                document.getElementById("gradeS10").style.color = "black";
            }
       document.getElementById("gradeS10").innerHTML = averageStudent10+"%";

    countUnsub(counter);
    counter = 0;
}

countUnsub = function(counter) {
    document.getElementById("unsubAssignments").innerHTML = counter + " un-submitted assignments <i>*note assignments with a zero count as un-submitted</i>";
}
