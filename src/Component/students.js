
const students =[
    {
        name:'Shaoib',
        age:20,
        path:'shoaib-ahmed'
    },
    {
        name:'Kamran',
        age:10,
        path:'karman'
    },
    {
        name:'Ahmed Ali',
        age:12,
        path:'ali-ahmed'
    },
    {
        name:'Zohaib Zubiar',
        age:19,
        path:'zohaib-zubair'
    },

]

export function getStudents(){
    return students;
}

export function getStudentsById(path){
    let stud = {};
    students.map(std => {
        if(std.path===path){
            console.log(std);
            stud = std;
        }
    })
    return stud;

}