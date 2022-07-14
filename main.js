let students = []

let tabla = document.getElementById('tabla')
function llenarTabla(){
    tabla.innerHTML = ''
    students.forEach((student, index)=>{
        tabla.innerHTML += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>
                    <button type="button" class="btn btn-primary">Editar</button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger eliminar" id=${student.name}>
                        Eliminar
                    </button>
                </td>
            </tr>`
    })

    let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>deleteUser(event.target.id))
})
}

llenarTabla()

let inputName = document.getElementById('name')
let inputCourse = document.getElementById('course')
let addButton = document.getElementById('add')

addButton.addEventListener('click', addStudent)


function addStudent(){
    let student = {
        name: inputName.value,
        course: inputCourse.value
    }
    students.push(student)
    llenarTabla()
}

// let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
// deleteButtons.forEach((button)=>{
//     button.addEventListener('click', (event)=>deleteUser(event.target.id))
// })

function deleteUser(name){
    students = students.filter((student)=>student.name!==name)
    llenarTabla()
}




