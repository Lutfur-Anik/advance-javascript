const students=[
    {id:13,name:"anik"},
    {id:23,name:"sagor"},
    {id:33,name:"turag"},
    {id:44,name:"shuvo"}
]
const result=students.map(s=>s.name);
const result1=students.filter(s=>s.id>30);
const result2=students.find(s=>s.id>30);
console.log(result2);