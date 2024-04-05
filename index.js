console.log('funguju!');

const answer1 =  Number(prompt("Ohodnoť své dovednosti v HTML číslem od 1 o 100"))
const answer2 =  Number(prompt("Ohodnoť své dovednosti v CSS číslem od 1 o 100"))
const answer3 =  Number(prompt("Ohodnoť své dovednosti v Javascriptu číslem od 1 o 100"))

const updateSkill =(ID, value)=>{
    const getID = document.getElementById(ID).querySelector(".skill__value")
    getID.textContent = (`${value}/100`)

    const css_skill_progress = document.getElementById(ID).querySelector(".skill__progress ")
    css_skill_progress.style.width = `${value}%`
}

updateSkill("skill1",answer1)
updateSkill("skill2",answer2)
updateSkill("skill3",answer3)
 





