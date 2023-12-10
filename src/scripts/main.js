'use strict';

const secondColumnCells = document.querySelectorAll('tbody td:nth-child(2)');

const clonedCells = [];

secondColumnCells.forEach((cell) => {
  const clonedCell = cell.cloneNode(true);

  clonedCells.push(clonedCell);
});

clonedCells.forEach((clonedCell) => {
  document.querySelectorAll('tbody tr').forEach((row) => {
    row.appendChild(clonedCell.cloneNode(true));
  });
});

const tfootRow = document.querySelector('tfoot tr');

clonedCells.forEach((clonedCell) => {
  tfootRow.appendChild(clonedCell.cloneNode(true));
});
