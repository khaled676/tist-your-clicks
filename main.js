    let clicks = 0;
        function add() {
            clicks++;
            document.getElementById("clicks").innerText = clicks;
        }

        function del() {
            clicks--;
            document.getElementById("clicks").innerText = clicks;
        }