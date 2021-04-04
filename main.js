var name_of_the_student_array=[];
var display_name_array=[];
var display_name_array_sorting=[];
function submit(){
for(var y=1;y<=4;y++){
name_of_the_student=document.getElementById("name_of_the_student_"+y).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
length_of_array=name_of_the_student_array.length;
console.log(length_of_array);
for(var a=0;a<length_of_array;a++){
display_name_array.push("<h4>Name-"+name_of_the_student_array[a]+"</h4>");
}
console.log(display_name_array);
document.getElementById("display_name_with_commas").innerHTML=display_name_array;
remove_comma=display_name_array.join("")
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
name_of_the_student_array.sort();
console.log(name_of_the_student_array);
length_of_array_sort=name_of_the_student_array.length;
console.log(length_of_array_sort);
for(var i=0;i<length_of_array_sort;i++){
display_name_array_sorting.push("<h4>Name-"+name_of_the_student_array[i]+"</h4>"); 
}
console.log(display_name_array_sorting);
document.getElementById("display_name_with_commas").innerHTML=display_name_array_sorting;
remove_comma=display_name_array_sorting.join("");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}