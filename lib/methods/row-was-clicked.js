module.exports = function(row) {
  this.$dispatch('vue-image-grid.row-click', row);
}
