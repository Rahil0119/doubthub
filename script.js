function showTab(tab) {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(Sec => Sec.style.display='none');
    document.getElementById(tab).style.display = 'block'; event.target.classList.add('active');
}

//solutions page ke  liye
function showSubject(subjectId) {
    // Hide all subjects first
    const allSubjects = document.querySelectorAll('.subject-questions');
    allSubjects.forEach(subject => subject.style.display = 'none');

    // Hide all answers
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(answer => answer.style.display = 'none');

    // Show the selected subject
    document.getElementById(subjectId).style.display = 'block';
}

function showAnswer(answerId) {
    // Hide all answers first
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(answer => answer.style.display = 'none');

    // Show the selected answer
    document.getElementById(answerId).style.display = 'block';
}