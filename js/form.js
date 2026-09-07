const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  // QUESTION 1

  let q1 = document.querySelectorAll('input[name="q1"]');

  for (let option of q1) {
    if (option.value === "2") {
      option.parentElement.classList.add("correct");
    } else {
      option.parentElement.classList.add("wrong");
    }

    if (option.checked) {
      if (option.value === "2") {
        score += 3;
      }

      let text = document.createElement("span");
      text.innerText = " ← You selected";
      option.parentElement.appendChild(text);
    }
  }

  // QUESTION 2

  let q2 = document.querySelectorAll('input[name="q2"]');

  for (let option of q2) {
    if (option.value === "2") {
      option.parentElement.classList.add("correct");
    } else {
      option.parentElement.classList.add("wrong");
    }

    if (option.checked) {
      if (option.value === "2") {
        score += 3;
      }

      let text = document.createElement("span");
      text.innerText = " ← You selected";
      option.parentElement.appendChild(text);
    }
  }

  // QUESTION 3

  let q3 = document.querySelectorAll('input[name="q3"]');

  for (let option of q3) {
    if (option.value === "2") {
      option.parentElement.classList.add("correct");
    } else {
      option.parentElement.classList.add("wrong");
    }

    if (option.checked) {
      if (option.value === "2") {
        score += 1;
      }

      let text = document.createElement("span");
      text.innerText = " ← You selected";
      option.parentElement.appendChild(text);
    }
  }

  // QUESTION 4

  let q4 = document.querySelectorAll('input[name="q4"]');

  for (let option4 of q4) {
    if (option4.value === "5") {
      option4.parentElement.classList.add("correct");
    } else {
      option4.parentElement.classList.add("wrong");
    }

    if (option4.checked) {
      if (option4.value === "5") {
        score += 3;
      }

      let text4 = document.createElement("span");
      text4.innerText = " ← You selected";
      option4.parentElement.appendChild(text4);
    }
  }

  // QUESTION 5

  let q5 = document.querySelectorAll('input[name="q5"]');

  for (let option5 of q5) {
    if (option5.value === "5") {
      option5.parentElement.classList.add("correct");
    } else {
      option5.parentElement.classList.add("wrong");
    }

    if (option5.checked) {
      if (option5.value === "5") {
        score += 3;
      }

      let text5 = document.createElement("span");
      text5.innerText = " ← You selected";
      option5.parentElement.appendChild(text5);
    }
  }

  // RESULT

  alert("Your score is " + score + " out of 15");
  let result = document.createElement("h3");
  let submit_button = document.querySelector(".submit");

  result.innerText = "You scored " + score + " out of 15 !!";
  submit_button.parentElement.appendChild(result);

  result.style.fontSize = "3rem";

  let comment = document.createElement("p");

  if (score <= 5) {
    comment.innerText = "Better Luck Next Time...";
  } else if (score >= 6 && score <= 9) {
    comment.innerText = "Good Work!";
  } else if (score >= 10 && score <= 14) {
    comment.innerText = "Excellent Job!";
  } else if (score == 15) {
    comment.innerText = "Perfect Score!";
  }
  comment.style.fontSize = "1.5rem";

  result.parentElement.appendChild(comment);
});

const refreshBtn = document.getElementById('rreset');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
