const scores = [60,82,20,98,39]

const grader = scores => {
    const grade = {"A": 0, "B":0, "C":0, "D":0, "F":0}
    scores.forEach(score => {
        if(score >= 80) grade['A']++
        else if(score <= 79 && score >= 70) grade['B']++
        else if(score <= 69 && score >= 60) grade['C']++
        else if(score <= 59 && score >= 50) grade['D']++
        else grade['F']++
    });
    return grade
}

const grade = grader(scores)
for(const g in grade){
    console.log(`Grade ${g} : ${grade[g]}`)
}