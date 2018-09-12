<template>
    <div class="scene scene--card">
        <div class="card" v-bind:class="{'is-flipped': isFlippedComp}">
            <div @click="onFlipCardClicked" class="card__face card__face--front">{{card.selectValue || ""}}</div>
            <div class="card__face card__face--back" v-bind:class="{'is-voted': isVoted}">{{card.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlippedCard",
        data() {
            return {
                isFlipped: false
            };
        },
        props: {
            card: {
                type: Object,
                required: true,
                validator: function (object) {
                    if (!object.name) return false;
                    if (typeof object.isVoted !== "boolean") return false;
                    //if (typeof object.isFlipped !== "boolean") return false;
                    //if (typeof object.text !== "string" || object.text.length < 0 || object.text.length > 4) return false;

                    return true;
                }
            }
        },
        methods: {
            onFlipCardClicked: function () {
                //this.$emit("onValueCardClicked", this.card);
                this.card.isFlipped = !this.card.isFlipped;
                console.log('isFlipped: ' +this.card.isFlipped);
            }
        },
        computed: {
            isFlippedComp: function () {
                return this.card.isFlipped || false;
            }
        }
    };
</script>

<style>

    .scene {
        width: 200px;
        height: 260px;
        margin: 40px 0;
        perspective: 600px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;
        cursor: pointer;
        justify-content: center;
        position: relative;
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }
       
    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 260px;
        color: black;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        border-radius: 9px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        backface-visibility: hidden;
    }

    .card__face.is-voted {
        color: white;
    }

    .card__face--front {
        background: #AAA;
    }

    .card__face--back {
        color: yellow;
        align-items: center;
        background: linear-gradient(to bottom right, #0b6ff8, #002385);
        transform: rotateY(180deg);
    }


</style>