<template>
  <div
    :style="{ background: `url(${bg}) no-repeat` }"
    style="background-size: cover"
    class="box"
  >
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div style="color:white" class="box-right">
      <table class="table" cellspacing="0" border="1">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <transition-group enter-active-class="animate__animated animate__flipInY" tag="tbody">
          <tr :key="item.name" v-for="item in store.item">
            <td align="center">{{item.name}}</td>
            <td align="center">{{item.today.confirm}}</td>
            <td align="center">{{item.total.confirm}}</td>
            <td align="center">{{item.total.heal}}</td>
            <td align="center">{{item.total.dead}}</td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from "./assets/1.jpg";
import { useStore } from "./stores";
import { onMounted } from "vue";
// import echarts from 'echarts' // echarts 4的引入方式
import * as echarts from "echarts"; // echarts 5的引入方式
import "./assets/china";
import { geoCoordMap } from './assets/geoMap'
import 'animate.css'
const store = useStore();

onMounted(async () => {
  await store.getList();
  initCharts()
});

const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children
  const data = city.map(v=>{
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm),
      children: v.children
    }
  })
  const charts = echarts.init(document.querySelector("#china") as HTMLElement);

  charts.setOption({
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%", // 地图背影图大小
      itemStyle: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%", // 地图实图大小
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          // 省名显示
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true, // 移上去字体显示
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        // 数字角标，气泡样式
        symbol: "pin",
        symbolSize: [45, 45],
        label: {
          // 数字显示
          show: true,
          color: '#fff',
          // 显示数据
          formatter (value:any) {
            return value.data.value[2]
          }
        },
        itemStyle: {
          color: "#1E90FF", //标志颜色
        },
        data: data,
      },
    ],
  });
  // 监听事件
  charts.on('click',(e:any) => {
    console.log(e);
    store.item = e.data.children
  })
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.table {
  width: 100%;
  background: #212028;
  tr {
    th {
      padding: 5px;
      white-space: nowrap;
    }
    td {
      padding: 5px 10px;
      width: 100px;
      white-space: nowrap;
    }
  }
}
// scoped要去除
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
.box {
  height: 100%;
  display: flex;
  overflow: hidden;
  &-left {
    width: 350px;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 350px;
  }
}
</style>
