function Canvas() {

    this.draw = function() {
        var canvas = document.getElementById('canvas');

        var context = canvas.getContext("2d");


        context.beginPath();
        context.arc(75,100,35,0,Math.PI);
        context.stroke();


        // fillRect(x, y, width, height)
    }
}

module.exports = Canvas;