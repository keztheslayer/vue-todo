<template>
    <div 
        class="todo__list-item" 
        :class="isChecked ? 'todo__list-item_state_finished' : ''"
    >
        <div class="todo__list-item-wrapper">
            <label class="todo__label">
                <input
                    v-model="isChecked"
                    class="todo__checkbox" 
                    type="checkbox"
                    @click="emitItemCheck(index)"
                >
                <span class="todo__list-item-text">{{ text }}</span>
            </label>
            <button 
                type="button" 
                class="close todo__remove-btn"
                @click="emitRemove(index)"
            >
                <span>&times;</span>
            </button>
        </div>
        <hr v-if="hideDivider">
    </div>
</template>

<script>
export default {
    props : {
        isChecked : {
            type    : Boolean,
            default : false,
        },
        text : {
            type    : String,
            default : '',
        },
        index : {
            type    : Number,
            default : 0,
        },
        hideDivider : {
            type    : Boolean,
            default : true,
        },
    },
    methods : {
        emitRemove() {
            this.$emit( 'itemRemoved', this.index );
        },
        emitItemCheck() {
            this.$emit( 'itemChecked', this.index );
        },
    },
};
</script>

<style lang="less">
.todo {
    &__label {
        cursor: pointer;
        color: #333;
        font-size: 18px;
        margin: 0;
        display: block;
        flex-grow: 1;
    }

    &__list-item {
        position: relative;
        margin-bottom: 6px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__list-item-text {
        transition: .15s ease-in;
    }

    &__list-item-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    }

    &__checkbox + &__list-item-text:hover:before {
    color: #fe4365;
    }

    &__checkbox {
    display: none;
    }

    &__checkbox + &__list-item-text:before {
    content: "";
    color: #dddfe6;
    font-family: "fontAwesome";
    line-height: 1;
    width: 1em;
    display: inline-block;
    margin-right: 8px;
    }

    &__checkbox:checked + &__list-item-text:before {
    content: "";
    color: #fe4365;
    animation: tick 150ms ease-in;
    }

    &__checkbox:checked + &__list-item-text {
    color: #7e7e7e;
    }

    &__checkbox:disabled + &__list-item-text:before {
    content: "";
    color: #dddfe6;
    }

    &__remove-btn {
        display: block;
        padding-left: 6px;

        &:focus {
            outline: none;
        }
    }
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

