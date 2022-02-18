<template>
  <form>
    <div class="container">
      <div class="card">
        <div class="form-control center">
          <h1> Очередь на кофе</h1>
          <h5> Пользователь: {{username}}</h5>
        </div>
        <br>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Reg</span>
          <input placeholder="Введите имя" type="text"
                 class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                 v-model = 'username'
                 v-on:keypress.enter ='addNewQueue'
          >
        </div>


        <select v-model="department" class="form-select" aria-label="Default select example">
          <option> Выберите ваш отдел</option>
          <option v-bind:value = "depart" v-for="(depart, key) in departmentList" :key="key">{{depart}}</option>
        </select>
        <br>
        <div>
          <button type="button" class="btn btn-success" v-on:click="addNewQueue"> Дабавить</button>
          <button type="button" class="btn btn-danger" v-on:click="getOutBreak"> Выйти на перерыв</button>
        </div>

        <br>
        <div class="table">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col"> № </th>
              <th scope="col"> ФИО </th>
              <th scope="col"> Время добовление</th>
              <th scope="col"> Отдел </th>
              <th scope="col"> Статус </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(queue, key) in queues" :key="key">
              <th scope="row">{{ key + 1 }}</th>
              <td>{{ queue.user }}</td>
              <td>{{ queue.addTime }}</td>
              <td>{{ queue.department }}</td>
              <td>{{ queue.status }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!queues"> В очереди пока никого, Можете быть первым</div>
        <div v-else> Ожидают в очереди:  {{queues.length}}</div>


        <br>

        <h5> Уведомления: {{message}}</h5>
      </div>
    </div>
  </form>
</template>

<style>


</style>
<script>
import  io from 'socket.io-client'

let socket = io('localhost:3000');


export default {
  name: "MainPage",
  data (){
    return {
      queues: [
        {user: 'Баатыр Алиев', department: 'Оперативная поддержка', addTime: new Date().toTimeString(),  status: 'В ожидании'}

      ],

      departmentList: ['Группа управления проектами',
        'Группа учета продаж O!Store',
        'Дирекция информационных технологий',
        'Дирекция по развитию сети платежных терминалов и агентов' ,
        'Отдел анализа контроля и отчетности' ,
        'Отдел обучения' ,
        'Отдел оптимизации и планирования радиочастотной сети' ,
        'Отдел статистики',
        'Отдел сопровождения продаж',
        'Служба безопасности'
      ],

      department: 'Выберите ваш отдел',
      username: '',
      status: 'В ожидании',
      message: '',

      timer: 0,
      currentTime: 0

    }
  },


  methods: {
    addNewQueue() {
      if(this.username !== '') {
        socket.emit('join', {
          user: this.username,
          status: this.status,
          addTime: new Date().getTime(),
          department: this.department
        })
      } else {
        this.message = "Введите имя пользователя и отдел"
      }
    },

    removeOnQueue(){
      socket.emit('get-out', {
        username:this.username
      })

    },

    getOutBreak() {
      socket.emit('in-process', {
        user: this.username,
        status: this.status,
        addTime: new Date().toTimeString()
      })
    }
  },


  mounted() {
    socket.on('join', (data)=> {
      this.queues.push(data)
      console.log(data)
    })

    socket.on('join-error', (data) => {
      this.message = data.message
    })

    socket.on('success', (data) => {
      this.message = data.message
      this.queues.pop()
      console.log(data)
    })

    socket.on('error-out', (data) => {
      this.message = data.message
    })

    socket.on('user-notfound', (data) => {
      this.message = data.message
    })



  }

}
</script>

<style scoped>

</style>