<template>
  <div class="modalBlur" v-if="modal.open">
    <div class="modal">
      <div class="modal__close fa fa-times" @click="closemodal()"></div>
      <div class="modal__input">
        <span>Title</span>
        <input type="text" v-model="title">
      </div>
      <div class="modal__input">
        <span>Time</span>
        <input type="time" v-model="time">
      </div>
      <div class="modal__input" >
        <span>Text</span>
        <textarea v-model="text"></textarea>
      </div>
      <div class="modal__input">
        <span>Img</span>
        <input type="file" id="files" @change="saveimg($event)">
      </div>
      <div class="modal__btn" @click="addTask()">
        add
      </div>
    </div>
  </div>
</template>

<script>
import modal from '../controlers/modal'
import tasks from '../controlers/tasksControler.js'

export default {
  data:function(){
    return {
      modal:modal,
      tasks:tasks.tasks,
      title:'',
      time:'',
      text:'',
      img:'',
      files:'',
      reader:''
    }
  },
  methods:{
    closemodal:function () {
      this.modal.open = false;
    },
    saveimg:function (evt) {
      this.files = evt.target.files;
      this.reader = new FileReader();
    },
    addTask:function () {
      var self = this;
      if(!self.reader){
        self.tasks.push({title:self.title,time:self.time,text:self.text,img:self.img,status:'open'});
        self.modal.open = false;
        return;
      }
      self.reader.onload = (function(theFile) {
          return function(e) {
            self.img = e.target.result;
            self.tasks.push({title:self.title,time:self.time,text:self.text,img:self.img,status:'open'});
            self.title = '';
            self.time = '';
            self.text = '';
            self.img = '';
            self.files = '';
            self.reader = '';

          };
        })(self.files[0]);
        self.reader.readAsDataURL(self.files[0]);
        self.modal.open = false;
    }
  }
}
</script>
