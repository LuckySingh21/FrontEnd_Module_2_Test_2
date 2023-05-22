let database = [{id:1,name:"john",age:"18",profession:"developer"},
                {id:2, name:"jack",age:"20", profession:"developer"},
                {id:3, name:"karen", age:"19",profession:"admin"}]
let temp = document.getElementById("insert");
function display(database){
    temp.innerText = "";
    for(let i=0;i<database.length;i++){
    let elements = document.createElement("div");
    elements.className = "insertedNames";
    elements.innerText = "ID: "+database[i].id + " Name: "+database[i].name  + " Profession: "+database[i].profession +" Age: "+ database[i].age;
    temp.append(elements)
    }
}
display(database);
let masterIndex = 4;
function updateDataBase(){
    let values = document.getElementsByTagName("input");
    let obj = {id:"",name:"",age:"",profession:""};
    obj.id = masterIndex++;
    obj.name = values[0].value;
    obj.profession = values[1].value;
    obj.age = values[2].value;
    database.push(obj);

    if(obj.age !=="" && obj.id !== "" && obj.profession !==""){
    let elements = document.createElement("div");
    elements.className = "insertedNames";
    elements.innerText = "ID: "+masterIndex + " Name: "+obj.name  + " Profession: "+obj.profession +" Age: "+ obj.age;
    temp.append(elements);
    }
    else{
        alert("please enter all values!")
    }
    
    display(database);


}

let forSelect = document.getElementsByTagName("select")[0];
function filterUsers(){
    let selected = forSelect.value;
    alert(`you have selected ${selected}`);
    
    let filteredUsers = filteData(selected);
    console.log(filteredUsers);
    display(filteredUsers);
    


}

function filteData(data){
    if(data == ""){
        return database;
    }
    let newList = database.filter((user)=>{
        return user.profession == data;
    })

    return newList;
}