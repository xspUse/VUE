<template>
  <div
    :style="{ background: `url(${bg}) no-repeat` }"
    style="background-size: cover"
    class="box"
  >
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div class="box-right"></div>
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
const store = useStore();

onMounted(async () => {
  await store.getList();
  const city = store.list.diseaseh5Shelf.areaTree[0].children
  const data = city.map(v=>{
    console.log(v.name, geoCoordMap[v.name].concat(v.total.nowConfirm));
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm)
    }
  })
  console.log(city);
  

  const charts = echarts.init(document.querySelector("#china") as HTMLElement);

  charts.setOption({
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
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
        selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
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
});
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
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
    width: 300px;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 300px;
  }
}
</style>
