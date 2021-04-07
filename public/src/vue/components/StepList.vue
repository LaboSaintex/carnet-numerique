<template>
    <div>
        <StepListMessage />
        <ul>
            <li
            v-for="(step, index) in this.steps_list_text" :key="index"
            :class="{done: index < indexOfLastUnfinishedStep}">
                {{ step }}
            </li>
        </ul>
    </div>
</template>
<script>
import StepListMessage from "./viewmessages/StepListMessage.vue";

export default {
    data() {
        return {
            steps_list_text: [
                "Présentation de l'équipe", 
                "Présentation de l'atelier",
                "Etape 1 : Qu'allons-nous faire ?",
                "Etape 2 : Avec quoi allons-nous le faire ?",
                "Etape 3 : Comment allons-nous faire ?",
                "Etape 4 : Création",
                "Etape 5 : Tests"
            ],
            steps_list: [
                "ProjectView.authorList", 
                "ProjectView.workshop",
                "ProjectView.step1",
                "ProjectView.step2",
                "ProjectView.step3",
                "ProjectView.step4",
                "ProjectView.step5"
            ]
        }
    },
    components: {
        StepListMessage
    },
    computed: {
        indexOfLastUnfinishedStep: function() {
            return this.steps_list.indexOf(this.$root.currentProject.last_unfinished_step);
        }
    }
};
</script>
<style scoped>
    div {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        list-style: none;
        font-size: 2vw;
        position: absolute;
    }
    ul li {
        margin-bottom: 2vw;
    }

    div:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .done {
        font-weight: bolder;
    }
</style>