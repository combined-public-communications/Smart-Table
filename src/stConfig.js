ng.module('smart-table')
  .constant('stConfig', {
    pagination: {
      template: 'template/smart-table/pagination.html',
      itemsByPage: 10,
      displayedPages: 5,
      maxPerPage: 1000
    },
    search: {
      delay: 400, // ms
      inputEvent: 'input'
    },
    select: {
      mode: 'single',
      selectedClass: 'st-selected'
    },
    sort: {
      ascentClass: 'st-sort-ascent',
      descentClass: 'st-sort-descent',
      descendingFirst: false,
      skipNatural: false,
      delay:300
    },
    pipe: {
      delay: 100, //ms
      executePipeOnLoad: true,
      pipeEvent: ''
    }
  });
