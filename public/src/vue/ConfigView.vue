<template>
  <div>
    <ConfigViewMessage class="message" />
    <div class="container">
      <div class="settings-container">
        <div>
          <h1>Atelier :</h1>
          <div class="workshop">
            <div class="workshop-type">
              <div v-for="type in workshop_types" :key="type.id">
                <input
                  type="radio"
                  :name="type.name"
                  :value="type.value"
                  v-model="workshop.type"
                />
                <label>{{ type.value }}</label>
              </div>
              <input
                type="text"
                placeholder="ex: Découvertes"
                value=""
                v-model="custom_type"
              />
            </div>

            <div class="workshop-titles">
              <div class="label-rows">
                <label for="workshop-title">Titre: </label>
              </div>
              <div class="input-rows">
                <input
                  type="text"
                  name="workshop-title"
                  placeholder="Création d'un robot"
                  v-model="$root.store.config.workshop_title"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Participants :</h1>

          <div class="input-row">
            <label for="n">Nombre :</label>
            <select
              name="number"
              id="n"
              v-model="$root.store.config.workshop_members"
            >
              <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
            </select>
          </div>

          <div class="input-row">
            <label for="age-group">Tranche d'age :</label>
            <select
              name="group"
              id="age-group"
              v-model="$root.store.config.workshop_age_group"
            >
              <option :value="'ALL'">tout</option>
              <option :value="'6-12'">6-12 ans</option>
              <option :value="'8-15'">8-15 ans</option>
              <option :value="'12-18'">12-18 ans</option>
              <option :value="'+18'">+ de 18 ans</option>
            </select>
          </div>
          <h1>Musique :</h1>
          <div class="input-row">
            <select
              name="music"
              id="music"
              v-model="$root.store.config.music_name"
            >
              <option
                v-for="music in this.musics_list"
                :key="music"
                :value="music"
              >
                {{ music }}
              </option>
            </select>
            <audio
              v-if="$root.store.config.music_name !== undefined"
              :src="'/_musics/' + $root.store.config.music_name"
              controls
            />
          </div>
        </div>

        <div>
          <h1>Temps :</h1>
          <div class="workshop-titles">
            <div class="label-rows">
              <div class="video-time-row" v-for="i in 5" :key="i">
                <label
                  >Video
                  <span v-if="i === 1" style="color: rgba(0, 0, 0, 0)">1</span
                  >{{ i }} :</label
                >
                <input
                  type="number"
                  v-model.number="$root.store.config.video_durations[i - 1]"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="members"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ConfigViewMessage from "./components/viewmessages/ConfigViewMessage.vue";
import axios from "axios";

export default {
  data() {
    return {
      musics_list: [],
      tags: "",
      workshop: { type: "" },
      custom_type: "",
      workshop_types: [
        {
          id: "Atelier-Robotique",
          name: "robotique",
          value: "Atelier Robotique",
        },
        {
          id: "Atelier-Scientifique",
          name: "scientifique",
          value: "Atelier Scientifique",
        },
        {
          id: "Goûter-numérique",
          name: "robotique",
          value: "Goûter numérique",
        },
        { id: "autre", name: "autre", value: "Autre" },
      ],
    };
  },
  created() {
    axios.get("/musics").then((response) => {
      console.log("RECEIVED MUSICS LIST");
      console.log(response.data);
      this.musics_list = response.data.split("\n");
      this.musics_list.pop();
    });
  },
  components: {
    ConfigViewMessage,
  },
  methods: {},
  beforeCreate() {
    this.$root.store.config.video_durations = new Array(5).fill(15);
  },
  watch: {
    "workshop.type": function () {
      if (this.workshop.type === "Autre") {
        this.$root.store.config.workshop_type = this.custom_type;
      } else {
        this.$root.store.config.workshop_type = this.workshop.type;
      }
    },
    tags: function () {
      this.$root.store.config.workshop_tags = [];
      this.$root.store.config.workshop_tags = this.tags.split(";");
    },
    custom_type: function () {
      if (this.workshop.type === "Autre") {
        this.$root.store.config.workshop_type = this.custom_type;
      }
    },
  },
};
</script>
<style scoped>
.message {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.settings-container {
  z-index: 1000;
  display: flex;
  flex-flow: row nowrap;
  width: 95%;
  justify-content: space-evenly;
}
h1 {
  font-size: 2vw;
  font-weight: bolder;
}
.workshop {
  display: flex;
  flex-flow: row nowrap;
}
.workshop-type {
  margin-right: 20px;
}
.workshop-titles {
  display: flex;
  flex-flow: row nowrap;
}
.workshop-titles input,
.workshop-titles label {
  margin-top: 10px;
  margin-right: 20px;
}
.label-rows {
  display: flex;
  flex-flow: column nowrap;
  width: max-content;
}
.label-rows label {
  width: max-content;
  margin-left: 0px;
}
.input-row label {
  margin-right: 20px;
}
label {
  font-family: Cobol;
  text-transform: inherit;
  font-weight: normal;
  font-size: 1.8vw;
}
input {
  max-width: 200px;
}
input[type="text"],
input[type="number"] {
  border: 2px solid black;
  border-radius: 0px;
  background-color: rgb(200, 200, 200);
}
select {
  border: 2px solid black;
  border-radius: 0px;
  background-color: rgb(200, 200, 200);
  max-width: 120px;
}
.input-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
}
.title-input label {
  margin-right: 20px;
}
.video-time-row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.video-time-row input {
  max-width: 70px;
}
#music {
  min-width: 300px;
}
</style>
