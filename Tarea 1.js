console.log("-----Tarea #1-----")
var Estudiante1={
    cuenta:'65320',
    nombre: 'Juan',
    nota:85,
    estado:'Aprobado',  
}
var Estudiante2={
    cuenta:'98234',
    nombre: 'Pedro',
    nota:40,
    estado:'Reprobado',
}
var Estudiante3={
    cuenta:'18764',
    nombre: 'Paco',
    nota:70,
    estado:'Aprobado',
}


const Estudiantes=[Estudiante1,Estudiante2,Estudiante3]
const reprobados = Estudiantes.find(Estudiante=> Estudiante.estado ==='Reprobado')
console.log('La persona reprobada es:', reprobados)