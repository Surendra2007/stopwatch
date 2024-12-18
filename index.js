let btns = document.querySelector(".btns");
      let hour = document.querySelector("#hour");
      let mins = document.querySelector("#mins");
      let secs = document.querySelector("#secs");
      let mills = document.querySelector("#mills");
      let id = null;
      btns.addEventListener("click", (e) => {
        if (e.target.textContent === "Start") {
          id = setInterval(() => {
            mills.textContent = parseInt(mills.textContent) + 1;
            if (mills.textContent == "100") {
              mills.textContent = "0";
              secs.textContent = parseInt(secs.textContent) + 1;
            }
            if (secs.textContent == "60") {
              secs.textContent = "0";
              mins.textContent = parseInt(mins.textContent) + 1;
            }
            if (mins.textContent == "60") {
              mins.textContent = "0";
              hour.textContent = parseInt(hour.textContent) + 1;
            }
            // Append 0 if the number is less than 10 by padStart
            hour.textContent = hour.textContent.padStart(2, "0");
            mins.textContent = mins.textContent.padStart(2, "0");
            secs.textContent = secs.textContent.padStart(2, "0");
            mills.textContent = mills.textContent.padStart(2, "0");
          }, 10);
        } else if (e.target.textContent === "Stop") {
          clearInterval(id);
        } else if (e.target.textContent === "Reset") {
          clearInterval(id);
          hour.textContent = "00";
          mins.textContent = "00";
          secs.textContent = "00";
          mills.textContent = "00";
        }
      });