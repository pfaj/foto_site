const element = document.getElementById("quote");
function random_quote(){    
    let array = ['"What is originality? Undetected plagarism." —William Ralph Inge', 
    '"Google everything. I mean everything. Google your dreams, Google your problems. Don’t ask a question before you Google it. You’ll either find the answer or you’ll come up with a better question." -Austin Kleon',
    '"If you copy from one author, it’s plagiarism, but if you copy from many, it’s research." -Wilson Minzer ',
    '"Do good work and share it with people." -Austin Kleon'];

    return array[Math.floor(Math.random()*array.length)];
    }


element.innerHTML = random_quote();
