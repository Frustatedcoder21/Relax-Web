const playButtons = document.querySelectorAll('.songlistplay i');

        // Add click event listeners to each play button
        playButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Get the corresponding audio element
                const audio = document.querySelector(`[data-audio="audio${index}.mp3"]`);

                // Check if the audio is paused, then play it, otherwise pause it
                if (audio.paused) {
                    audio.play();
                    button.classList.remove('fa-play-circle');
                    button.classList.add('fa-pause-circle');
                } else {
                    audio.pause();
                    button.classList.remove('fa-pause-circle');
                    button.classList.add('fa-play-circle');
                }
            });
        });