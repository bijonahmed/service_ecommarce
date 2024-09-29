<template>
    <div class="wrap">
      <div class="toolbar">
        <button id="bold" type="button" title="Bold (Ctrl+B)"><i class="fa fa-bold"></i></button>
        <button id="italic" type="button" title="Italic (Ctrl+I)"><i class="fa fa-italic"></i></button>
        <button id="underline" type="button" title="Underline (Ctrl+U)"><i class="fa fa-underline"></i></button>
        <button id="highlight" type="button" title="Highlight"><i class="fa fa-highlighter"></i></button>
        <button id="remove-highlight" type="button" title="Remove Highlight"><i class="	fa fa-remove"></i></button>
        <select name="fonts" id="fonts">
          <option value="Arial" selected>Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Impact">Impact</option>
          <option value="Courier New">Courier New</option>
        </select>
        <select name="size" id="size">
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16" selected>16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="24">24</option>
          <option value="26">26</option>
        </select>
       
        <button id="align-left" type="button" title="Left"><i class="fa fa-align-left"></i></button>
        <button id="align-center" type="button" title="Center"><i class="fa fa-align-center"></i></button>
        <button id="align-right" type="button" title="Right"><i class="fa fa-align-right"></i></button>
      </div>
      <div class="editor" contenteditable></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    // jQuery event listeners
    $('#bold').on('click', function(event) {
      event.preventDefault();
      document.execCommand('bold', false, null);
    });
  
    $('#italic').on('click', function(event) {
      event.preventDefault();
      document.execCommand('italic', false, null);
    });
  
    $('#underline').on('click', function(event) {
      event.preventDefault();
      document.execCommand('underline', false, null);
    });
  
    $('#highlight').on('click', function(event) {
      event.preventDefault();
      document.execCommand('backColor', false, 'yellow'); // Highlight with yellow color
    });
  
    $('#remove-highlight').on('click', function(event) {
      event.preventDefault();
      document.execCommand('removeFormat', false, null); // Remove formatting (including highlight)
    });
  
    $('#align-left').on('click', function(event) {
      event.preventDefault();
      document.execCommand('justifyLeft', false, null);
    });
  
    $('#align-center').on('click', function(event) {
      event.preventDefault();
      document.execCommand('justifyCenter', false, null);
    });
  
    $('#align-right').on('click', function(event) {
      event.preventDefault();
      document.execCommand('justifyRight', false, null);
    });
  
    $('#list-ul').on('click', function(event) {
      event.preventDefault();
      document.execCommand('insertUnorderedList', false, null);
    });
  
    $('#list-ol').on('click', function(event) {
      event.preventDefault();
      document.execCommand('insertOrderedList', false, null);
    });
  
    $('#fonts').on('change', function(event) {
      event.preventDefault();
      var font = $(this).val();
      document.execCommand('fontName', false, font);
    });
  
    $('#size').on('change', function(event) {
      event.preventDefault();
      var size = $(this).val();
      $('.editor').css('fontSize', size + 'px');
    });
  
    
  });
  </script>
  
  <style scoped>
  
  .wrap {
    width: 100%;
    min-width: 500px;
    margin: 10px auto 0;
    background: #fafafa;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .4);
    padding: 10px;
  }
  
  .toolbar {
    width: 100%;
    margin: 0 auto 10px;
  }
  
  button {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: none;
    border: none;
    box-sizing: border-box;
    padding: 0;
    font-size: 20px;
    color: #a6a6a6;
    cursor: pointer;
    outline: none;
  }
  
  button:hover {
    border: 1px solid #a6a6a6;
    color: #777;
  }
  
  #bold,
  #italic,
  #underline,
  #highlight,
  #remove-highlight {
    font-size: 18px;
  }
  
  #underline,
  #align-right,
  #remove-highlight {
    margin-right: 17px;
  }
  
  #align-left {
    margin-left: 17px;
  }
  
  select {
    height: 24px;
    font-size: 15px;
    font-weight: bold;
    color: #444;
    background: #fcfcfc;
    border: 1px solid #a6a6a6;
    border-radius: 3px;
    margin: 0;
    outline: none;
    cursor: pointer;
  }
  
  select > option {
    font-size: 15px;
    background: #fafafa;
  }
  
  #fonts {
    width: 140px;
  }
  
  .editor {
    position: relative;
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    padding: 20px;
    background: #fcfcfc;
    border-radius: 3px;
    box-shadow: inset 0 0 8px 1px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    overflow: hidden;
    word-break: break-all;
    outline: none;
  }
  </style>
  