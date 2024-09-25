const playButton = document.getElementById('play-btn');
const gameSection = document.getElementById('game-section');
const spinButton = document.getElementById('spin-btn');
const slots = document.querySelectorAll('.slot');
const result = document.getElementById('result');

const symbols = ['💎', '💰', '🎁', '🔑', '⚔️', '🏆'];

playButton.addEventListener('click', () => {i c
    gameSection.style.display = 'block';
    playButton.style.display = 'none';
});

spinButton.addEventListener('click', () => {
    let slotValues = [];
    slots.forEach(slot => {
        let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        slot.textContent = randomSymbol;
        slotValues.push(randomSymbol);
    });
    
    if (new Set(slotValues).size === 1) {
        result.textContent = '🎉 Jackpot! You win!';
    } else {
        result.textContent = 'Try again!';
    }
});
