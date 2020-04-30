const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell')

    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    };

    const dragEnd = function () {
        this.classList.remove('hide')
    }

    // drag functions

    const dragOver = function (event) {
        event.preventDefault()
    };
    const dragEnter = function (event) {
        event.preventDefault();
        this.classList.add('hovered')
    };
    const dragLeave = function () {
        this.classList.remove('hovered')
    };
    const dragDrop = function () {
        this.append(card);
        this.classList.remove('hovered');
    };

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })
};
dragAndDrop();