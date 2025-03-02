document.addEventListener("DOMContentLoaded", function () {
    let tasksLeft = 6;
    let tasksCompleted = 23;
  
    let buttons = document.querySelectorAll(".task-button");
    let tasksLeftDisplay = document.getElementById("task-assigned");
    let tasksCompletedDisplay = document.getElementById("completed-tasks");
    let logArea = document.getElementById("activity-log");
    let clearLogButton = document.getElementById("clear-history");
    let themeButton = document.getElementById("theme-changer");
    let dateDisplay = document.getElementById("date-box");
  
    function updateDate() {
      let now = new Date();
      dateDisplay.textContent = now.toDateString();
    }
    setInterval(updateDate, 1000);
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        let taskName = this.getAttribute("data-task");
        alert(taskName + " is successfully completed.");
  
        tasksLeft--;
        tasksCompleted++;
        tasksLeftDisplay.textContent = tasksLeft;
        tasksCompletedDisplay.textContent = tasksCompleted;
  
        let now = new Date();
        let logEntry = document.createElement("div");
        logEntry.textContent = taskName + " - " + now.toLocaleString();
        logArea.appendChild(logEntry);
  
        this.disabled = true;
        this.classList.add("disabled-button");
  
        if (tasksLeft === 0) {
          alert("You have successfully completed all the tasks. No more tasks for you, go relax.");
        }
      });
    }
  
    clearLogButton.addEventListener("click", function () {
      logArea.innerHTML = "";
    });
  
    themeButton.addEventListener("click", function () {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  });
  