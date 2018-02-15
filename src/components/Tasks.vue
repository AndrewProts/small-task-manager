<template>
	<div class="tasks">
		<div class="task" v-for="(item,index) in tasks" :class="{'task_deleted':item.status == 'close'}">
			<div class="task__close fa fa-times" :id="'task'+index" @click="closeTask(index)"></div>
			<div class="task__close fa fa-undo" v-if="item.status=='close'" :id="'task'+index" @click="undoTask(index)"></div>
			<div class="task__img" v-if="item.img">
				<img :src="item.img" alt="err">
			</div>
			<div class="task__img" v-else>
				<img src="https://png.icons8.com/small/1600/image.png" alt="err">
			</div>
			<div class="task__text">
				<h4>{{item.title}}</h4>
				<h5>{{item.time}}</h5>
				<p>{{item.text}}</p>
			</div>
		</div>
	</div>
</template>
<script>
  import tasks from '../controlers/tasksControler.js'

  export default{
    data:function(){
      return {
        tasks:tasks.tasks
      }
    },
		methods:{
			closeTask:function (i) {
				if(this.tasks[i].status == 'close'){
					this.tasks.splice(i,1);
				}else{
					this.tasks[i].status = 'close'
				}
			},
			undoTask:function (i) {
				this.tasks[i].status = 'open'
			}
		},
    mounted:function(){

    }
  }
</script>
