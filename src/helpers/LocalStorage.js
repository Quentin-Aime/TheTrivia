class myStorage {
    saveItem (key, value) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([]));
        }
        let tmpArray = JSON.parse(localStorage.getItem(key));
        tmpArray.push(value);
        localStorage.setItem(key, JSON.stringify(tmpArray));
    }
    getItem (key) {
        let storedData = localStorage.getItem(key)
        if (storedData.includes('[')) {
            return JSON.parse(storedData);
        }
        return storedData
    }
    incrementScore() {
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);
    }
    resetScore() {
        localStorage.setItem('score', 0);
    }
    decrementLife() {
        localStorage.setItem('life', parseInt(localStorage.getItem('life')) - 1);
    }
    resetLife() {
        localStorage.setItem('life', 3);
    }
    initialize() {
        this.resetScore();
        this.resetLife();
        localStorage.setItem('setup', 'completed');
    }

    // faudra reset les questions deja faite au reset  ------- TODO
}

export default new myStorage();