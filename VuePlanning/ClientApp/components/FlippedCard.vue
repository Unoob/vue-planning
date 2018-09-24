<template>
    <div class="scene scene--card">
        <div :class="{'is-flipped': isFlippedComp, 'card': true}">
            <div @click="onFlipCardClicked" class="card__face card__face--front">{{card.selectValue || ""}}</div>
            <div :class="{'is-voted': isVotedComp, 'card__face--back': true, 'card__face': true}">{{card.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlippedCard",
        data() {
            return {
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
                this.card.isFlipped = !this.card.isFlipped;
                console.log('isFlipped: ' + this.card.isFlipped);
                this.$emit("onFlipCardClicked", this.card); // tymczasowo chcia�em zobaczy� jak si� odwracaj� na ��danie... ale co� nie dzia�a :(
            }
        },
        computed: {
            isFlippedComp: function () {
                return !this.card.isFlipped || true;
            },
            isVotedComp: function () {
                return this.card.isVoted || false;
            }
        }
    };
</script>

<style scoped>

    .scene {
        width: 170pt;
        height: 230pt;
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
        border-radius: 9px;
        float: left;
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        color: black;
        text-align: center;
        justify-content: center;
        display: grid;
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
        background: #dbfed6;
    }

    .card__face--back {
        color: yellow;
        align-items: center;
        background: linear-gradient(to bottom right, #0b6ff8, #002385);
        transform: rotateY(180deg);
    }


</style>