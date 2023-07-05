let student1 = parseFloat(lines.shift());
let student2 = parseFloat(lines.shift());
let student3 = parseFloat(lines.shift());


function mediaAluno(s1, s2, s3) {
    let result = ((s1 * 2) + (s2 * 3) + (s3 * 5))/(2 + 3 + 5);
    return console.log(`MEDIA = ${result.toFixed(1)}`);
}

mediaAluno(student1, student2,student3);