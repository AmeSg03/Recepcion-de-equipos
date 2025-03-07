class SignaturePad {
    /**
     * Constructor de la clase SignaturePad.
     * @param {HTMLCanvasElement} canvas - El elemento canvas donde se dibujará la firma.
     */
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

    /**
     * Inicia el dibujo en el canvas.
     * @param {Event} event - El evento de inicio de dibujo.
     */
    startDrawing(event) {
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(this.getX(event), this.getY(event));
        event.preventDefault();
    }

    /**
     * Detiene el dibujo en el canvas.
     * @param {Event} event - El evento de fin de dibujo.
     */
    stopDrawing(event) {
        if (this.drawing) {
            this.drawing = false;
            this.ctx.stroke();
        }
        event.preventDefault();
    }

    /**
     * Dibuja en el canvas mientras se mueve el ratón o el dedo.
     * @param {Event} event - El evento de movimiento.
     */
    draw(event) {
        if (this.drawing) {
            this.ctx.lineTo(this.getX(event), this.getY(event));
            this.ctx.stroke();
        }
        event.preventDefault();
    }

    /**
     * Obtiene la coordenada X del evento.
     * @param {Event} event - El evento de entrada.
     * @returns {number} - La coordenada X.
     */
    getX(event) {
        if (event.touches && event.touches.length > 0) {
            return event.touches[0].clientX - this.canvas.getBoundingClientRect().left;
        } else {
            return event.clientX - this.canvas.getBoundingClientRect().left;
        }
    }

    /**
     * Obtiene la coordenada Y del evento.
     * @param {Event} event - El evento de entrada.
     * @returns {number} - La coordenada Y.
     */
    getY(event) {
        if (event.touches && event.touches.length > 0) {
            return event.touches[0].clientY - this.canvas.getBoundingClientRect().top;
        } else {
            return event.clientY - this.canvas.getBoundingClientRect().top;
        }
    }

    /**
     * Limpia el canvas.
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Convierte el contenido del canvas a una URL de datos.
     * @returns {string} - La URL de datos del contenido del canvas.
     */
    toDataURL() {
        return this.canvas.toDataURL();
    }
}
