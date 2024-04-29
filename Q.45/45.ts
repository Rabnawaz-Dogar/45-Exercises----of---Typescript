type car ={
  Manufecture:string
  model:string
  [key:string]: any;
}

function createcar(Manufecture:string , model:string , optional:record<string, any>): car{
  return{
    Manufecture,
    model,
    ...optional
  }
}
const mycar :car = createcar("toyta", "carola", {color: "silver", year:"2024"})

console.log(mycar)