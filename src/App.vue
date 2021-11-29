<template>
  <div>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>タイトル</th>
        <th>ステータス</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td :style="{'color': item.status.color()}">{{ item.status.label() }}</td>
      </tr>
    </table>
    <button @click="onClickAdd">追加</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Task } from './model/task';
import { TaskResponse } from './model/response/taskResponse';
import { NewTaskBuilder } from './builder/newTaskBuilder';
import { EditTaskBuilder } from './builder/editTaskBuilder';

@Options({})
export default class App extends Vue {
  list: Task[] = [];

  created(): void {
    const mock: TaskResponse[] = [
      {
        id: '1',
        title: '未着手です',
        status: 'yet',
      },
      {
        id: '2',
        title: '進行中です',
        status: 'progress',
      },
      {
        id: '3',
        title: '完了です',
        status: 'done',
      },
    ]

    const mockModels = mock.map(v => {
      return new EditTaskBuilder(v).build();
    })
    this.list = mockModels;
  }

  onClickAdd(): void {
    const builder = new NewTaskBuilder();
    this.list.push(builder.build());
  }
}
</script>
