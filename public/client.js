const cs_courses = [{'number': '1101', 'name': 'INTRO TO PROGRAM DESIGN', 'term': 'A17'}, {'number': '2102', 'name': 'OBJECT-ORIENTED DESIGN CONCEPTS', 'term': 'B17'}, {'number': '3733', 'name': 'SOFTWARE ENGINEERING', 'term': 'C18'}, {'number': '2303', 'name': 'SYSTEMS PROGRAMMING CONCEPTS', 'term': 'C18'}, {'number': '2011', 'name': 'INTRO-MACHINE ORG & ASSEMBLY', 'term': 'D18'}, {'number': '3043', 'name': 'SOCIAL IMPL OF INFO PROCESSING', 'term': 'A18'}, {'number': '3516', 'name': 'COMPUTER NETWORKS', 'term': 'B18'}, {'number': '3013', 'name': 'OPERATING SYSTEMS', 'term': 'C19'}, {'number': '4516', 'name': 'ADVANCED COMPUTER NETWORKS', 'term': 'D19'}, {'number': '2223', 'name': 'ALGORITHMS', 'term': 'D19'}, {'number': '4731', 'name': 'COMPUTER GRAPHICS', 'term': 'C20'}, {'number': '4536', 'name': 'PROGRAMMING LANGUAGES', 'term': 'D20'}]
const skill_exp = [['HTML', 2], ['CSS', 1], ['Java', 2], ['JavaScript', 2], ['Ruby', 0], ['Python', 2], ['Unit Testing', 1]]

let prior_courses = document.getElementById('prior-courses')
cs_courses.forEach(course => {
	let row = document.createElement('tr')
	row.innerHTML=`<td>CS${course['number']}</td>${course['name']}<td>${course['term']}</td>`
	prior_courses.appendChild(row)
})

let skill_map = ['<td>✓</td><td></td><td></td>', '<td></td><td>✓</td><td></td>', '<td></td><td></td><td>✓</td>']
let skill_table = document.getElementById('skillset')
skill_exp.forEach(skill => {
	let row = document.createElement('tr')
	row.innerHTML = `<td><strong>${skill[0]}</strong></td>${skill_map[skill[1]]}`
	skill_table.appendChild(row)
})