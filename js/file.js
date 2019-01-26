
function load_file() {

    const audio_len = 6
    var counter = 0;
    var imgOk = false, AudOk = false;

    voice_title[0] = new Audio('voice/title_miku.mp3');
    voice_title[1] = new Audio('voice/title_jump.mp3');
    voice_miku[0] = new Audio('voice/miku_1.mp3');
    voice_miku[1] = new Audio('voice/miku_2.mp3');
    voice_miku[2] = new Audio('voice/miku_3.mp3');
    voice_miku[3] = new Audio('voice/dead.mp3');

    for (var i in voice_title) {
        voice_title[i].oncanplay = incrementCounter
    }
    for (var i in voice_miku) {
        voice_miku[i].oncanplay = incrementCounter
    }



    function incrementCounter() {

        ++counter;
        if (counter == audio_len) {
            AudOk = true;
            console.log('All Audio loaded!');

            startBtn.style.display = 'block';

        }
    }

}

