class Connect4{
    constructor(selector) {
        this.ROWS = 7;
        this.COLS = 6;
        this.selector = selector;
        this.createGrid();
        this.setupEventListener();
    }
    
    createGrid() {
        const $board = $(this.selector);
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>').addClass('row');

             for (let col = 0; col < this.COLS; col++){
                const $col = $('<div>')
                .addClass('col empty')
                .attr('data-col',col)
                .attr('data-row',row);
                $row.append($col);
            }

            $board.append($row);
        }
    }
     
    setupEventListener() {
        const $board = $(this.selector);

        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col='${col}']`);
            
            for(let i = cells.length - 1; i >= 0; i--){
                const $cell = $(cells[i]);

                if($cell.hasClass('empty')){
                    return $cell;
                }
            }

            return null;
        }

        $board.on('mouseenter', '.col.empty', function() {
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.addClass(`next-red`);
        })

        $board.on('mouseleave', '.col.empty', function() {
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.removeClass(`next-red`);
        })
    }
}

