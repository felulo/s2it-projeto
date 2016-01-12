(function(window, document) {
  'use strict';

  angular
    .module('app.viewmodel')
    .factory('TaskViewmodel', TaskViewmodel);

  TaskViewmodel.$inject = [];

  function TaskViewmodel() {

    var service;

    service = {
      tasks: [],
      taskSelect: {
        name: '',
        description: ''
      },

      edit: false,
      confirmDelete: false,
      showForm: false,

      init: init,
      addTask: addTask,
      removeTask: removeTask,

      openAdd: openAdd,
      openEdit: openEdit,
      openConfirm: openConfirm,
      closeForm: closeForm
    }

    return service;

    function init() {
      this.tasks = [];

      this.edit = false;
      this.confirmDelete = false;
      this.showForm = false;
    }

    function addTask(name, description) {
      var task;

      task = {
        done: false,
        name: name,
        description: description
      };

      this.tasks.push(task);
    }

    function removeTask() {
      var index;

      index = this.tasks.indexOf(this.taskSelect);

      if (index > -1)
        this.tasks.splice(index, 1);
    }

    function openAdd() {
      this.edit = false;
      this.showForm = true;
    }

    function openEdit(index) {
      this.taskSelect = this.tasks[index];

      this.edit = true;
      this.showForm = true;
    }

    function openConfirm(index) {
      this.taskSelect = this.tasks[index];

      this.confirmDelete = true;
    }

    function closeForm() {
      this.showForm = false;
      this.confirmDelete = false;
    }

  }
})(this, document);
