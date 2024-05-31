getEmployee();
async function getEmployee(){
    document.getElementById("employee-table").innerHTML="";
    const employee = await fetchEmployee();
    let limit = document.getElementById("limit-of-employee").value;
    let row = "";
    document.getElementById("total").innerHTML = `of ${employee.length}`;
    document.getElementById("total").value = employee.length;
    for(let i=0;i<limit;i++){
    if(employee[i]){
        row = "<tr class='tableitems'><th>#"+`${i+1}`+"</th><td class='img-nd-name'>" + `<img class="employee-img" src="./public/avatars/${employee[i].id}.jpg" alt=""` +`<p>${employee[i].salutation}. ${employee[i].firstName} ${employee[i].lastName}</p>`+ "</td><td>" +employee[i].email+ 
        "</td><td>" +employee[i].phone+ "</td><td>" +employee[i].gender+ "</td><td>" +employee[i].dob+ 
        "</td><td>" +employee[i].country+ "</td>" + `<td>   <div class="dropdown">
        <button class="actions-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="material-symbols-outlined">
        more_horiz
        </span>
        </button>
        <ul class="dropdown-menu p-2">
          <li><a class="detail-items" href="view.html" onclick="location.href=this.href+'?id='+'${employee[i].id}';return false;">
          <span class="material-symbols-outlined">
          visibility
          </span>
          <p>
          View Details
          </p>
          </a>
          </li>
          <li>
          <a class="detail-items" href="#" onclick="editEmployeePopup('${employee[i].id}')">
          <span class="material-symbols-outlined">
             edit
         </span>
         <p>
          Edit
          </p>
          </a>
          </li>
          <li>
          <a class="detail-items" href="#" onclick="deleteEmployeePopup('${employee[i].id}')">
          <span class="material-symbols-outlined">
            delete
            </span>
            <p>
          Delete
          </p>
          </a>
          </li>
        </ul>
      </div>` + "<tr>";
        $(row).appendTo(".table tbody");
    }else{
        break;
    } 
    }
    pagination(employee);
}
async function getLimitEmployee(employee,start,end){
    document.getElementById("employee-table").innerHTML="";
    document.getElementById("pagination-number").innerHTML = "";
    let row = "";
    document.getElementById("total").innerHTML = `of ${employee.length}`;
    document.getElementById("total").value = employee.length;
    for(let i=start;i<end;i++){
        if(employee[i]){
            row = "<tr class='tableitems'><th>#"+`${i+1}`+"</th><td class='img-nd-name'>" + `<img class="employee-img" src="./public/avatars/${employee[i].id}.jpg" alt=""` +`<p>${employee[i].salutation}. ${employee[i].firstName} ${employee[i].lastName}</p>`+ "</td><td>" +employee[i].email+ 
            "</td><td>" +employee[i].phone+ "</td><td>" +employee[i].gender+ "</td><td>" +employee[i].dob+ 
            "</td><td>" +employee[i].country+ "</td>" + `<td>   <div class="dropdown">
            <button class="actions-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="material-symbols-outlined">
            more_horiz
            </span>
            </button>
            <ul class="dropdown-menu p-2">
              <li><a class="detail-items" href="view.html" onclick="location.href=this.href+'?id='+'${employee[i].id}';return false;">
              <span class="material-symbols-outlined">
              visibility
              </span>
              <p>
              View Details
              </p>
              </a>
              </li>
              <li>
              <a class="detail-items" href="#" onclick="editEmployeePopup('${employee[i].id}')">
              <span class="material-symbols-outlined">
                 edit
             </span>
             <p>
              Edit
              </p>
              </a>
              </li>
              <li>
              <a class="detail-items" href="#" onclick="deleteEmployeePopup('${employee[i].id}')">
              <span class="material-symbols-outlined">
                delete
                </span>
                <p>
              Delete
              </p>
              </a>
              </li>
            </ul>
          </div>` + "<tr>";
            $(row).appendTo(".table tbody");   
        }
    }
    pagination(employee)
}
async function fetchEmployee(){
    const employeeList = await fetch("http://localhost:8080/employees");
    const employee = await employeeList.json();
    return employee;
}

document.getElementById("avatar").addEventListener("change",imageValidation);
document.getElementById("salutation").addEventListener("change",salutationValidation);
document.getElementById("firstname").addEventListener("change",firstNameValidation);
document.getElementById("firstname").addEventListener("keyup",firstNameValidation);
document.getElementById("lastname").addEventListener("change",lastNameValidation);
document.getElementById("lastname").addEventListener("keyup",lastNameValidation);
document.getElementById("email").addEventListener("change",emailValidation);
document.getElementById("email").addEventListener("keyup",emailValidation);
document.getElementById("mobile").addEventListener("change",mobileValidation);
document.getElementById("mobile").addEventListener("keyup",mobileValidation);
document.getElementById("dob").addEventListener("change",dobValidation);
document.querySelector("#Male").addEventListener("change",genderValidation);
document.querySelector("#Female").addEventListener("change",genderValidation);
document.getElementById("address").addEventListener("change",addressValidation);
document.getElementById("address").addEventListener("keyup",addressValidation);
document.getElementById("qualifications").addEventListener("keyup",qualificationsValidation);
document.getElementById("qualifications").addEventListener("change",qualificationsValidation);
document.getElementById("country").addEventListener("change",countryValidation);
document.getElementById("state").addEventListener("change",stateValidation);
document.getElementById("city").addEventListener("keyup",cityValidation);
document.getElementById("username").addEventListener("change",usernameValidation);
document.getElementById("username").addEventListener("keyup",usernameValidation);
document.getElementById("password").addEventListener("keyup",passwordValidation);
document.getElementById("editimg").addEventListener("change",editImageChange);
document.getElementById("limit-of-employee").addEventListener("change",limitEmployee);
document.getElementById("search").addEventListener("keyup",searchEmployee);
async function fetchEmployee(){
    const employeeList = await fetch("http://localhost:8080/employees");
    const employee = await employeeList.json();
    return employee;
}
function imageValidation(){
    let avatar = document.getElementById("avatar").value?document.getElementById("avatar").files[0]:"";
    document.getElementById("avatarPreview").style = "display:block";
    document.getElementById("preview").src = URL.createObjectURL(document.getElementById("avatar").files[0]);
    document.getElementById("avatarVal").style = "color:green";
    document.getElementById("avatarVal").innerHTML = "Good";
}
function salutationValidation(){
    let salutation = document.getElementById("salutation").value;
    if(salutation == "Select"){
        document.getElementById("salutationVal").style = "color:red";
        document.getElementById("salutationVal").innerHTML = "Salutation is required";
    }else{
        document.getElementById("salutationVal").style = "color:green";
        document.getElementById("salutationVal").innerHTML = "Good";
    }
}
function firstNameValidation(){
    const textRegex =  /^[A-Za-z]+$/;
    let firstName = document.getElementById("firstname").value;
    if(!firstName){
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(firstName)){
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Invalid firstname";
    }else{
        document.getElementById("firstnameVal").style = "color:green";
        document.getElementById("firstnameVal").innerHTML = "Good";
    }
}
function lastNameValidation(){
    const textRegex =  /^[A-Za-z]+$/;
    let lastName = document.getElementById("lastname").value;
    if(!lastName){
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(lastName)){
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Invalid lastname";
    }else{
        document.getElementById("lastnameVal").style = "color:green";
        document.getElementById("lastnameVal").innerHTML = "Good";
    }
}
function emailValidation(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email").value;
    if(!email){
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Email is required";
    }else if(!emailRegex.test(email)){
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Invalid email";
    }else{
        document.getElementById("emailVal").style = "color:green";
        document.getElementById("emailVal").innerHTML = "Good";
    }
}
function mobileValidation(){
    const phoneRegex = /^\d{10}$/;
    let mobile = document.getElementById("mobile").value;
    if(!mobile){
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Mobile is required";
    }else if(!phoneRegex.test(mobile)){
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Invalid mobile";
    }else{
        document.getElementById("mobileVal").style = "color:green";
        document.getElementById("mobileVal").innerHTML = "Good";
    }
}
function dobValidation(){
    let dob = document.getElementById("dob").value;
    if(!dob){
        document.getElementById("dobVal").style = "color:red";
        document.getElementById("dobVal").innerHTML = "DOB is required";
    }else{
        document.getElementById("dobVal").style = "color:green";
        document.getElementById("dobVal").innerHTML = "Good";
    }
}
function genderValidation(){
    let gender = document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').value:"";
    if(!gender){
        document.getElementById("genderVal").style = "color:red";
        document.getElementById("genderVal").innerHTML = "Gender is required";
    }else{
        document.getElementById("genderVal").style = "color:green";
        document.getElementById("genderVal").innerHTML = "Good";
    }
}
function addressValidation(){
    let address = document.getElementById("address").value;
    if(!address){
        document.getElementById("addressVal").style = "color:red";
        document.getElementById("addressVal").innerHTML = "Address required";
    }else{
        document.getElementById("addressVal").style = "color:green";
        document.getElementById("addressVal").innerHTML = "Good";
    }
}
function qualificationsValidation(){
    let qualifications = document.getElementById("qualifications").value;
    if(!qualifications){
        document.getElementById("qualificationsVal").style = "color:red";
        document.getElementById("qualificationsVal").innerHTML = "Qualifications are required";
    }else{
        document.getElementById("qualificationsVal").style = "color:green";
        document.getElementById("qualificationsVal").innerHTML = "Good";
    }
}
function countryValidation(){
    let country = document.getElementById("country").value;
    if(country == "Select"){
        document.getElementById("countryVal").style = "color:red";
        document.getElementById("countryVal").innerHTML = "Select Country";
    }else{
        document.getElementById("countryVal").style = "color:green";
        document.getElementById("countryVal").innerHTML = "Good";
    }
}
function stateValidation(){
    let state = document.getElementById("state").value;
    if(state == "Select"){
        document.getElementById("stateVal").style = "color:red";
        document.getElementById("stateVal").innerHTML = "Select State";
    }else{
        document.getElementById("stateVal").style = "color:green";
        document.getElementById("stateVal").innerHTML = "Good";
    }
}
function cityValidation(){
    let city = document.getElementById("city").value;
    if(!city){
        document.getElementById("cityVal").style = "color:red";
        document.getElementById("cityVal").innerHTML = "City is required";
    }else{
        document.getElementById("cityVal").style = "color:green";
        document.getElementById("cityVal").innerHTML = "Good";
    }
}
function usernameValidation(){
    let username = document.getElementById("username").value;
    if(!username){
        document.getElementById("usernameVal").style = "color:red";
        document.getElementById("usernameVal").innerHTML = "Username is required";
    }else{
        document.getElementById("usernameVal").style = "color:green";
        document.getElementById("usernameVal").innerHTML = "Good";
    }
}
function passwordValidation(){
    const passwordRegex = /^\d{6}$/;
    let password = document.getElementById("password").value;
    if(!password){
        document.getElementById("passwordVal").style = "color:red";
        document.getElementById("passwordVal").innerHTML = "Password is required";
    }else{
        document.getElementById("passwordVal").style = "color:green";
        document.getElementById("passwordVal").innerHTML = "Good";
    }
}
async function validate(id){
    let errors = [];
    let employee = {};
    let avatar = document.getElementById("avatar").value?document.getElementById("avatar").files[0]:"";
    employee.salutation = document.getElementById("salutation").value;
    employee.firstName = document.getElementById("firstname").value;
    employee.lastName = document.getElementById("lastname").value;
    employee.email = document.getElementById("email").value;
    employee.phone = document.getElementById("mobile").value;
    employee.dob = document.getElementById("dob").value?document.getElementById("dob").value.split("-").reverse().join("-"):"";
    employee.gender = document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').value:"";
    employee.address = document.getElementById("address").value;
    employee.qualifications = document.getElementById("qualifications").value;
    employee.country = document.getElementById("country").value;
    employee.state = document.getElementById("state").value;
    employee.city = document.getElementById("city").value;
    employee.username = document.getElementById("username").value;
    employee.password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const textRegex =  /^[A-Za-z]+$/;
    if(!avatar &&  !employee.avatar){
        document.getElementById("avatarVal").style = "color:red";
        document.getElementById("avatarVal").innerHTML = "Image is required";
    }else{
        console.log(avatar);
        employee.avatar = true;
        document.getElementById("avatarPreview").style = "display:block";
        document.getElementById("preview").src = URL.createObjectURL(document.getElementById("avatar").files[0]);
        document.getElementById("avatarVal").style = "color:green";
        document.getElementById("avatarVal").innerHTML = "Good";
    }
    if(employee.salutation == "Select"){
        errors.push(" ");
        document.getElementById("salutationVal").style = "color:red";
        document.getElementById("salutationVal").innerHTML = "Salutation is required";
    }else{
        document.getElementById("salutationVal").style = "color:green";
        document.getElementById("salutationVal").innerHTML = "Good";
    }
    if(!employee.firstName){
        errors.push(" ");
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(employee.firstName)){
        errors.push(" ");
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Invalid firstname";
    }else{
        document.getElementById("firstnameVal").style = "color:green";
        document.getElementById("firstnameVal").innerHTML = "Good";
    }
    if(!employee.lastName){
        errors.push(" ");
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Lastname is required";
    }else if(!textRegex.test(employee.lastName)){
        errors.push(" ");
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Invalid lastname";
    }else{
        document.getElementById("lastnameVal").style = "color:green";
        document.getElementById("lastnameVal").innerHTML = "Good";
    }
    if(!employee.email){
        errors.push(" ");
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Email is required";
    }else if(!emailRegex.test(employee.email)){
        errors.push(" ");
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Invalid email";
    }else{
        document.getElementById("emailVal").style = "color:green";
        document.getElementById("emailVal").innerHTML = "Good";
    }
    if(!employee.phone){
        errors.push(" ");
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Mobile is required";
    }else if(!phoneRegex.test(employee.phone)){
        errors.push(" ");
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Invalid mobile";
    }else{
        document.getElementById("mobileVal").style = "color:green";
        document.getElementById("mobileVal").innerHTML = "Good";
    }
    if(!employee.dob){
        errors.push(" ");
        document.getElementById("dobVal").style = "color:red";
        document.getElementById("dobVal").innerHTML = "DOB is required";
    }else{
        document.getElementById("dobVal").style = "color:green";
        document.getElementById("dobVal").innerHTML = "Good";
    }
    if(!employee.gender){
        errors.push(" ");
        document.getElementById("genderVal").style = "color:red";
        document.getElementById("genderVal").innerHTML = "Gender is required";
    }else{
        document.getElementById("genderVal").style = "color:green";
        document.getElementById("genderVal").innerHTML = "Good";
    }
    if(!employee.address){
        errors.push(" ");
        document.getElementById("addressVal").style = "color:red";
        document.getElementById("addressVal").innerHTML = "Address required";
    }else{
        document.getElementById("addressVal").style = "color:green";
        document.getElementById("addressVal").innerHTML = "Good";
    }
    if(!employee.qualifications){
        errors.push(" ");
        document.getElementById("qualificationsVal").style = "color:red";
        document.getElementById("qualificationsVal").innerHTML = "Qualifications are required";
    }else{
        document.getElementById("qualificationsVal").style = "color:green";
        document.getElementById("qualificationsVal").innerHTML = "Good";
    }
    if(employee.country == "Select"){
        errors.push(" ");
        document.getElementById("countryVal").style = "color:red";
        document.getElementById("countryVal").innerHTML = "Select Country";
    }else{
        document.getElementById("countryVal").style = "color:green";
        document.getElementById("countryVal").innerHTML = "Good";
    }
    if(employee.state == "Select"){
        errors.push(" ");
        document.getElementById("stateVal").style = "color:red";
        document.getElementById("stateVal").innerHTML = "Select State";
    }else{
        document.getElementById("stateVal").style = "color:green";
        document.getElementById("stateVal").innerHTML = "Good";
    }
    if(!employee.city){
        errors.push(" ");
        document.getElementById("cityVal").style = "color:red";
        document.getElementById("cityVal").innerHTML = "City is required";
    }else{
        document.getElementById("cityVal").style = "color:green";
        document.getElementById("cityVal").innerHTML = "Good";
    }
    if(!employee.username){
        errors.push(" ");
        document.getElementById("usernameVal").style = "color:red";
        document.getElementById("usernameVal").innerHTML = "Username is required";
    }else{
        document.getElementById("usernameVal").style = "color:green";
        document.getElementById("usernameVal").innerHTML = "Good";
    }
    if(!employee.password){
        errors.push(" ");
        document.getElementById("passwordVal").style = "color:red";
        document.getElementById("passwordVal").innerHTML = "Password is required";
    }else{
        document.getElementById("passwordVal").style = "color:green";
        document.getElementById("passwordVal").innerHTML = "Good";
    }
    if(errors.length == 0 && employee.avatar == true && !id){
        sweetAlert("Employee added successfully");
        addEmployee(employee,avatar);
    }else if(id && errors.length == 0){
        sweetAlert("Employee edited successfully");
        editEmployee(employee,id);
    } 
}
async function addEmployee(employee,avatar){
        const response = await fetch("http://localhost:8080/employees",{
        method : "post",
        headers: {
            "Content-Type": "application/json",
            },
        body : JSON.stringify(employee)
    });
    const responseId = await response.json();
    getEmployee();
    addEmployeePopupClose();
    addAvatar(responseId.id,avatar);
}
async function addAvatar(id,avatar){
    const formData = new FormData();
    formData.append('avatar',avatar);
    await fetch(`http://localhost:8080/employees/${id}/avatar`,{
        method : "post",
        body : formData
    });
    view();
    getEmployee();
    addEmployeePopupClose();
}
async function editEmployee(employee,id){
    await fetch(`http://localhost:8080/employees/${id}`,{
        method : "put",
        headers: {
            "Content-Type": "application/json",
            },
        body : JSON.stringify(employee)
    });
    const avatar = editImageChange();
    if(avatar){
        addAvatar(id,avatar);
    }else{
        view();
        getEmployee();   
    }
        addEmployeePopupClose();
}
function addEmployeePopup(){
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8)";
    document.getElementById("form-heading").innerHTML = "Add Employee";
    document.getElementById("addemployee-upload").style = "display:flex";
    document.getElementById("edit-image").style = "display:none";
    document.getElementById("button-dia").innerHTML = "Add Employee";
    document.getElementById("empid").value = "";
    document.getElementById("addemployee-popup").style = "display:flex;flex-direction:column";
    document.getElementById("delete").style = "display:none";
}
function addEmployeePopupClose(){
    document.getElementById("passwordVal").innerHTML = "";
    document.getElementById("usernameVal").innerHTML = "";
    document.getElementById("cityVal").innerHTML = "";
    document.getElementById("stateVal").innerHTML = "";
    document.getElementById("countryVal").innerHTML = "";
    document.getElementById("qualificationsVal").innerHTML = "";
    document.getElementById("addressVal").innerHTML = "";
    document.getElementById("genderVal").innerHTML = "";
    document.getElementById("dobVal").innerHTML = "";
    document.getElementById("mobileVal").innerHTML = "";
    document.getElementById("emailVal").innerHTML = "";
    document.getElementById("lastnameVal").innerHTML = "";
    document.getElementById("firstnameVal").innerHTML = "";
    document.getElementById("salutationVal").innerHTML = "";
    document.getElementById("avatarVal").innerHTML = "";
    document.getElementById("salutation").value = "Select";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("dob").value = "";
    document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').checked=false:"";
    document.getElementById("address").value = "";
    document.getElementById("qualifications").value = "";
    document.getElementById("country").value = "Select";
    document.getElementById("state").value = "Select";
    document.getElementById("city").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("preview").src = "";
    document.getElementById("avatarPreview").style = "display:none";
    document.getElementById("addemployeePopup").style = "display:none";
}
function viewActions(){
    document.getElementById("view-actions").style = "display:flex";
}
function editEmployeePopup(id){
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8)";
    document.getElementById("form-heading").innerHTML = "Edit Employee";
    document.getElementById("addemployee-upload").style = "display:none";
    document.getElementById("edit-image").style = "display:flex";
    document.getElementById("button-dia").innerHTML = "Save Changes";
    document.getElementById("empid").value = id;
    document.getElementById("delete").style = "display:none";
    document.getElementById("addemployee-popup").style = "display:flex;flex-direction:column";
    editForm(id);
}
async function editForm(id){
    try{
    const response = await fetch(`http://localhost:8080/employees/${id}`);
    const currentEmployee = await response.json();
    document.getElementById("editpic").src =  `./public/avatars/${currentEmployee.id}.jpg`;
    document.getElementById("salutation").value =  currentEmployee.salutation;
    document.getElementById("firstname").value = currentEmployee.firstName;
    document.getElementById("lastname").value = currentEmployee.lastName;
    document.getElementById("email").value = currentEmployee.email;
    document.getElementById("mobile").value = currentEmployee.phone;
    document.getElementById("dob").value = currentEmployee.dob.split("-").reverse().join("-");
    document.getElementById(`${currentEmployee.gender}`).checked = true; 
    document.getElementById("address").value = currentEmployee.address;
    document.getElementById("qualifications").value = currentEmployee.qualifications;
    document.getElementById("country").value = currentEmployee.country;
    document.getElementById("state").value = currentEmployee.state;
    document.getElementById("city").value = currentEmployee.city;
    document.getElementById("username").value = currentEmployee.username;
    document.getElementById("password").value = currentEmployee.password;
    }catch(err){
        console.log("Error");
    }
}
function editImageChange(){
    let avatar = document.getElementById("editimg").value?document.getElementById("editimg").files[0]:"";    
    if(avatar){
    document.getElementById("editpic").src =  URL.createObjectURL(avatar);
        return avatar;
    }else{
        return "";
    }
}
function deleteEmployeePopup(id){
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8);align-items:center;";
    document.getElementById("delete").style = "display:flex";
    document.getElementById("addemployee-popup").style = "display:none";
    document.getElementById("deleteId").value = id;
}
async function deleteEmployee(id,inView){
    const deleteResponse = await fetch("http://localhost:8080/employees/"+id,{
        method:"delete"
    });
    const deleteEmp = await deleteResponse.json();
    addEmployeePopupClose();
      if(inView){
        sweetAlert("Employee deleted successfully");
        let timer = setTimeout(()=>{
            window.location.href="index.html";
        },3000);
        timer();
      }else{
        sweetAlert("Employee deleted successfully");
        getEmployee();
      }
}
async function view(){
    let id;
    if(window.location.search.split("=")[1]){
        id = window.location.search.split("=")[1];
        const currentEmployee = await fetch(`http://localhost:8080/employees/${id}`);
        const employee = await currentEmployee.json();
        document.getElementById('employee-pic').src = "./public/avatars/"+employee.id+".jpg"
        document.getElementById("view-name").innerHTML = employee.salutation+". "+employee.firstName+" "+employee.lastName;
        document.getElementById("view-email").innerHTML = employee.email;
        document.getElementById("view-gender").innerHTML = employee.gender;
        document.getElementById("view-age").innerHTML = 2024-employee.dob.split("-")[2];
        document.getElementById("view-dob").innerHTML = employee.dob;
        document.getElementById("view-mobile").innerHTML = employee.phone;
        document.getElementById("view-qualifications").innerHTML = employee.qualifications;
        document.getElementById("view-address").innerHTML = employee.country+", "+employee.state+", "+employee.city+","+employee.address;
        document.getElementById("view-username").innerHTML = employee.username;
        document.getElementById("view-empid").value = employee.id;
    }
}
async function limitEmployee(){
    const size = document.getElementById("limit-of-employee").value;
    const employee = await fetchEmployee();
    getLimitEmployee(employee,0,size);
}
function pagination(employee){
    let factor = parseInt(document.getElementById("limit-of-employee").value);
    let size = Math.ceil(employee.length/factor);
    let row = "";
    for(let i=0;i<size;i++){
        row += `<li class="page-item p-1"><a class="page-link" href="#" id="page-${i+1}" onclick="pages(${i+1})">${i+1}</a></li>`;
    }
    document.getElementById("pagination-number").innerHTML = row;
    document.getElementById("pagination-number").value = size;
}
async function pages(num){
    const size = document.getElementById("limit-of-employee").value;
    let val = document.getElementById("pagination-number").value;
    const employee = await fetchEmployee();
    const search = await searchEmployee();
    console.log(search);
    let start;
    let end;
    if(num == 'start'){
        start = 0;
        end = size;
    }else if(num == 'end'){
        start = (val-1)*size;
        end = start-(-size);
    }else{
        start = (num-1)*size;
        end = start-(-size);
    }
    if(search.length!=0){
        getLimitEmployee(search,start,end);
    }else{
        getLimitEmployee(employee,start,end);
    }
    document.getElementById(`page-${num}`).style = "background-color:blue !important;color:white !important;";
}
async function searchEmployee(){
    let keyword = document.getElementById("search").value;
    if(keyword){
    const employeeList = await fetchEmployee();
    const key = new RegExp(keyword,'gi');
    const searchedEmployees = employeeList.filter((element) => 
         element.firstName.match(key) || element.lastName.match(key) || element.email.match(key) || element.phone.match(key)
    );
    let size = document.getElementById("limit-of-employee").value;
    getLimitEmployee(searchedEmployees,0,size);  
    pagination(searchedEmployees);
    if(!searchedEmployees.length == 0){
        return searchedEmployees;
    } 
    }else{
        return [];
    }
   
}
function sweetAlert(mes){
    Swal.fire({
        title: "Success!",
        text: mes,
        icon: "success",
        timer:1000
      });
}