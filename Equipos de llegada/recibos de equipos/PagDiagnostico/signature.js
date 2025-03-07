class SignaturePad {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawing = false;

        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('touchstart', this.startDrawing.bind(this));
        this.canvas.addEventListener('touchend', this.stopDrawing.bind(this));
        this.canvas.addEventListener('touchmove', this.draw.bind(this));
    }

    startDrawing(event) {
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(this.getX(event), this.getY(event));
        event.preventDefault();
    }

    stopDrawing(event) {
        if (this.drawing) {
            this.drawing = false;
            this.ctx.stroke();
        }
        event.preventDefault();
    }

    draw(event) {
        if (this.drawing) {
            this.ctx.lineTo(this.getX(event), this.getY(event));
            this.ctx.stroke();
        }
        event.preventDefault();
    }

    getX(event) {
        if (event.touches && event.touches.length > 0) {
            return event.touches[0].clientX - this.canvas.getBoundingClientRect().left;
        } else {
            return event.clientX - this.canvas.getBoundingClientRect().left;
        }
    }

    getY(event) {
        if (event.touches && event.touches.length > 0) {
            return event.touches[0].clientY - this.canvas.getBoundingClientRect().top;
        } else {
            return event.clientY - this.canvas.getBoundingClientRect().top;
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    toDataURL() {
        return this.canvas.toDataURL();
    }
}
