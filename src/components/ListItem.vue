<template>
    <div class="todo__list-item" :class="isChecked ? 'todo__list-item_state_finished' : ''">
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">

label {
  cursor: pointer;
  color: #333;
  font-size: 18px;
  margin: 0;
}
.todo__list-item {
  position: relative;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
}
.todo__checkbox + .todo__list-item-text:hover:before {
  color: #fe4365;
}
.todo__checkbox {
  display: none;
}
.todo__list-item-text {
  transition: .15s ease-in;
}
.todo__checkbox + .todo__list-item-text:before {
  content: "";
  color: #dddfe6;
  font-family: "fontAwesome";
  line-height: 1;
  width: 1em;
  display: inline-block;
  margin-right: 8px;
}
.todo__checkbox:checked + .todo__list-item-text:before {
  content: "";
  color: #fe4365;
  animation: tick 150ms ease-in;
}
.todo__checkbox:checked + .todo__list-item-text {
  color: #7e7e7e;
}
.todo__checkbox:disabled + .todo__list-item-text:before {
  content: "";
  color: #dddfe6;
}

@keyframes tick {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
