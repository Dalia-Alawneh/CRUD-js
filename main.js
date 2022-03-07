let CourseName =document.getElementById("CourseName");
let CourseCategory =document.getElementById("CourseCategory");
let CoursePrice =document.getElementById("CoursePrice");
let CourseDescription =document.getElementById("CourseDescription");
let data=document.getElementById("data");
let search=document.getElementById("search");
let inputs=document.getElementsByTagName("input");
let courses=[];
if(localStorage.getItem("alldata")!=null){
    courses = JSON.parse(localStorage.getItem("alldata"));
    displayData();
}else {
    courses =[];
}

function createCourse(){
    let course = {
        cName:CourseName.value,
        cCategory:CourseCategory.value,
        cPrice:CoursePrice.value,
        cDescription:CourseDescription.value
    }
    courses.push(course);
    localStorage.setItem("alldata",JSON.stringify(courses));
    displayData();
    clearInput();
}
function displayData(){
    let result=``;
    for(let i=0;i<courses.length;i++){
        result += `
        <tr>
            <td>${i}</td>
            <td>${courses[i].cName}</td>
            <td>${courses[i].cCategory}</td>
            <td>${courses[i].cPrice}</td>
            <td>${courses[i].cDescription}</td>
            <td><button onclick="updateCourse(${i})" class="btn btn-primary">edit</button></td>
            <td><button onclick="deleteCourse(${i})" class="btn btn-danger">delete</button></td>
        </tr>
        
        `;
        
        data.innerHTML=result;
    }
}
function updateCourse(id){
    CourseName.value=courses[id].cName;
    CourseCategory.value=courses[id].cCategory;
    CoursePrice.value=courses[id].cPrice;
    CourseDescription.value=courses[id].cDescription;
    // courses[id].cName=CourseName.value;
    // courses[id].cCategory=CourseCategory.value;
    // courses[id].cPrice=CoursePrice.value;
    // courses[id].cDescription=CourseDescription.value;
    localStorage.setItem("alldata",JSON.stringify(courses));
    displayData();
    clearInput();
}
function deleteCourse(id){
    courses.splice(id,1);
    localStorage.setItem("alldata",JSON.stringify(courses));
    displayData();
}
function clearInput(){
    for(let i=0;i<inputs.length;i++){
        inputs[i].value='';
    }
}
function searchCourse(){
    let searchValue= search.value;
    
        let result=``;
    for(let i=0;i<courses.length;i++){
        if(courses[i].cName.toLowerCase().includes(searchValue.toLowerCase())){
        result += `
        <tr>
            <td>${i}</td>
            <td>${courses[i].cName}</td>
            <td>${courses[i].cCategory}</td>
            <td>${courses[i].cPrice}</td>
            <td>${courses[i].cDescription}</td>
            <td><button onclick="updateCourse(${i})" class="btn btn-primary"><i class="far fa-edit"></i></button></td>
            <td><button onclick="deleteCourse(${i})" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
        
        `;
        
        data.innerHTML=result;
    }
}
}