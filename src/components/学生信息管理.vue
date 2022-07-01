<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">{{ isEdit ? '修改' : '添加' }}</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="edit(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentId: '',
      isEdit: false,
      name: '',
      age: '',
      gender: '',
      list: [
        { id: 1, name: '小李', age: 20, gender: '男' },
        { id: 2, name: '小王', age: 12, gender: '女' },
        { id: 3, name: '小力', age: 17, gender: '男' },
        { id: 4, name: '小刚', age: 29, gender: '女' },
      ],
    };
  },
  methods: {
    add() {
      // if (this.name) {
      if (this.isEdit) {
        let index = this.list.findIndex((el) => el.id == this.currentId);
        // if (index != -1) {
        this.list[index].name = this.name;
        this.list[index].age = this.age;
        this.list[index].gender = this.gender;
        this.isEdit = false;
        this.currentId = '';
        this.name = '';
        this.age = '';
        this.gender = '';
        return;
        // }
      }
      if (this.name == '' || this.age == '' || this.gender == '') {
        return alert('请输入完整信息');
      }
      let id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 1;
      this.list.push({
        id,
        name: this.name,
        age: this.age,
        gender: this.gender,
      });
      this.name = '';
      this.age = '';
      this.gender = '';
    },
    edit(item) {
      // let index = this.list.findIndex((el) => el.id == id);
      // this.name = this.list[index].name;
      // this.age = this.list[index].age;
      // this.gender = this.list[index].gender;
      this.name = item.name;
      this.age = item.age;
      this.gender = item.gender;
      this.isEdit = true;
      this.currentId = item.id;
    },
    del(id) {
      let index = this.list.findIndex((el) => el.id == id);
      this.list.splice(index, 1);
    },
  },
};
</script>
