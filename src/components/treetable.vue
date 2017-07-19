<template>
  <div class="treelist">
    <dl class="bar" v-for="li in bar" :key="li">
      <dt>{{li.name}}</dt>
      <dd v-for="i in li.types" :key="i">{{i.title}}</dd>
      <dd>操作</dd>
    </dl>
    <ul>
      <li class="list" v-for="li in tree" :key="li">
        <dl class="title">
          <dt :class="['lev-'+ li.indent]" @click="li.expanded=!li.expanded">
            <i v-if="li.children" class="ivu-icon" :class="[li.expanded ? 'ivu-icon-minus':'ivu-icon-plus']"></i>
            <i v-else class="ivu-icon ivu-icon-document"></i>
            {{li.name}}
          </dt>
          <dd v-for="i in li.types" :key="i">{{i.li}}</dd>
          <dd class="btn">查看</dd>
        </dl>
        <tree v-show="li.expanded" :tree="li.children"></tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: [
    'tree',
    'bar'
  ]
}
</script>

<style scoped lang="scss">
.treelist {
  user-select: none;
  .bar {
    border-bottom: 1px solid #ccc;
    text-align: right;
    font-weight: bold;
    dd,dt {
      display: inline-block;
    }
    dt {
      float: left;
      margin-left: 20px;
    }
    dd{
      width: 10%;
      text-align: center;
      border-left: 1px solid #ccc;

    }
  }
  .list {
    .title {
      text-align: right;
      border-bottom: 1px solid #ccc;
      dt {
        float: left;
      }
      dt,
      dd {
        display: inline-block;
      }
      dd {
        width: 10%;
        text-align: center;
        border-left: 1px solid #ccc;
      }

      @for $n from 0 through 10 {
        .lev-#{$n} {
          margin-left: 20px * $n;
        }
      }
    }
  }
}
</style>
