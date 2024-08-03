const user = {
    id: 1,
    name: "waritnan",
}

const meeting = {
    id: 30,
    code: "ABCDEF1234",
    member : user,
}

console.log(`Meet ID : ${meeting.id} has member name : ${meeting.member.name}`)