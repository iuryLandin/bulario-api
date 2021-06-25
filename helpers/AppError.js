class AppError extends Error {
    constructor(error, status, stack) {
        super();
        console.log(error)
        this.error = error.message || error.error || error;
        this.stack = stack || error.stack || "Stack não disponivel";
        this.status = status || error.status || 400;

    }
}

module.exports = { AppError }