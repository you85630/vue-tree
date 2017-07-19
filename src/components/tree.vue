<template>
  <div class="tree">
    <tree :bar="title" :tree="list"></tree>
  </div>
</template>

<script>
import tree from './treetable'
export default {
  components: {
    tree
  },
  name: 'treelist',
  data () {
    return {
      title: [
        {
          name: '标题',
          types: [
            {title: '标题'},
            {title: '标题'},
            {title: '标题'}
          ]
        }
      ],
      list: [
        {
          id: '1',
          name: '1',
          types: [
            {li: 'type1'},
            {li: 'type2'},
            {li: 'type3'}
          ],
          expanded: true,
          indent: '1',
          children: [
            {
              id: '1-1',
              name: '1-1',
              types: [
                {li: 'type1'},
                {li: 'type2'},
                {li: 'type3'}
              ],
              expanded: true,
              indent: '2',
              children: [
                {
                  id: '1-1-1',
                  name: '1-1-1',
                  types: [
                    {li: 'type1'},
                    {li: 'type2'},
                    {li: 'type3'}
                  ],
                  expanded: true,
                  indent: '3'
                }, {
                  id: '1-1-2',
                  name: '1-1-2',
                  types: [
                    {li: 'type1'},
                    {li: 'type2'},
                    {li: 'type3'}
                  ],
                  expanded: true,
                  indent: '3',
                  children: [
                    {
                      id: '1-1-1-1',
                      name: '1-1-1-1',
                      types: [
                        {li: 'type1'},
                        {li: 'type2'},
                        {li: 'type3'}
                      ],
                      expanded: true,
                      indent: '4'
                    }
                  ]
                }, {
                  id: '1-1-3',
                  name: '1-1-3',
                  types: [
                    {li: 'type1'},
                    {li: 'type2'},
                    {li: 'type3'}
                  ],
                  expanded: true,
                  indent: '3'
                }
              ]
            }, {
              id: '1-2',
              name: '1-2',
              types: [
                {li: 'type1'},
                {li: 'type2'},
                {li: 'type3'}
              ],
              expanded: true,
              indent: '2'
            }
          ]
        }, {
          id: '2',
          name: '2',
          types: [
            {li: 'type1'},
            {li: 'type2'},
            {li: 'type3'}
          ],
          expanded: true,
          indent: '1'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tree {
  width: 600px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-bottom: none;
}
</style>
