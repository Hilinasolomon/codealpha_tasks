const words = [
      "Aspiring Web Developer",
        "Python Learner",
          "Future Software Developer",
            "Language Enthusiast"
            ];

            let index = 0;
            const text = document.querySelector(".typing-text");

            setInterval(() => {
              index++;
                if (index >= words.length) {
                    index = 0;
                      }

                        text.textContent = words[index];
                        }, 2000);