name_of_the_student_array=[];
function submit(){
    var display_array=[];
    for(var i=1; i<=4; i++)
    {
        var student_name=document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name);
        name_of_the_student_array.push(student_name);

    }
    console.log(name_of_the_student_array);
    var length_of_array=name_of_the_student_array.length;
    console.log(length_of_array);
    for(var k=0; k<length_of_array; k++)
    {
        display_array.push("<h4>NAME "+name_of_the_student_array[k]+"</h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_sorting=[];
    var length_of_array=name_of_the_student_array.length;
    console.log(length_of_array);
    for(var k=0; k<length_of_array; k++)
    {
        display_sorting.push("<h4>NAME "+name_of_the_student_array[k]+"</h4>");
        console.log(display_sorting);
    }
    var remove_commas=display_sorting.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}