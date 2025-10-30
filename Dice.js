


function roll_dice(){
    const n_dices = document.getElementById("n_dices").value;
    const roll = document.getElementById("Roll");
    const dice_name = document.getElementById("dice_name");
    const dice_images = document.getElementById("dice_name");
    const values = [];
    const images = [];

    for(let i = 1; i<=n_dices; i++){
        const r_value = Math.floor(Math.random()*6);
        values.push(r_value);
        images.push(`<img src="${r_value+1}.png">`);
        console.log(r_value);
    }

    dice_images.innerHTML = images.join("");
}



