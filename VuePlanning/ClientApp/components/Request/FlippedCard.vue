<template>
    <div class="scene scene--card">
        <div :class="{'is-flipped': flipCard}" class="card">
            <div class="card__face card__face--front">{{card.selectValue}}</div>
            <div :class="{'is-voted': isVotedComp}" class="card__face--back card__face">{{card.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlippedCard",
        props: {
            card: {
                type: Object,
                required: true,
                validator: function (object) {
                    if (!object.name) return false;
                    return true;
                }
            },
            flipCard:{
                type:Boolean
            }
        },
        computed: {
            isVotedComp: function () {
                return this.card.selectValue;
            }
        }
    };
</script>

<style scoped>

    .scene {
        height: 256pt;
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
        background: #b4f1ab;
        align-items: center;
        font-size: 12em;
    }

    .card__face--back {
        color: yellow;
        align-items: center;
        background: linear-gradient(to bottom right, #0b6ff8, #002385);
        transform: rotateY(180deg);
    }


</style>