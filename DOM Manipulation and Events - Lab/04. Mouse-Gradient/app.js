function attachGradientEvents() {
    let gradiantDiv = document.getElementById('gradient');
    gradiantDiv.addEventListener('mousemove', gradientMove);

    function gradientMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + '%';
    }
}