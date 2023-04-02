<template>
  <div>
    <div class="form">
      <div>
        <div>Family Name</div>
        <input type="text" v-model="form.familyName" placeholder="Doe" />
      </div>
      <div>
        <div>Given Name</div>
        <input type="text" v-model="form.givenName" placeholder="John Walker" />
      </div>
      <div>
        <div>Birth Date</div>
        <input
          type="date"
          pattern="YYYY-MM-DD"
          v-model="form.birthDate"
          placeholder="1975-12-30"
        />
      </div>
      <div
        class="font-bold justify-center text-xl"
        v-if="form.vaccines.length > 0"
      >
        Vaccines
      </div>
      <template v-for="(v, $idx) in form.vaccines" :key="$idx">
        <div>
          <div>Name</div>
          <select v-model="v.cvx">
            <option value="218">Pfizer</option>
            <option value="511">Coronavac</option>
          </select>
        </div>
        <div>
          <div>Location</div>
          <input type="text" v-model="v.performer" placeholder="ABC Hospital" />
        </div>
        <div>
          <div>Date</div>
          <input
            type="date"
            pattern="YYYY-MM-DD"
            v-model="v.date"
            placeholder="2021-12-30"
          />
        </div>
        <div>
          <div>Lot Number</div>
          <input type="text" v-model="v.lotNumber" placeholder="ABC123" />
        </div>
        <button @click="delVaccine($idx)">
          <font-awesome-icon icon="times"></font-awesome-icon>
          Remove Vaccine
        </button>
        <div class="h-0.5 my-4 bg-slate-100" />
      </template>
      <div class="justify-center">
        <button @click="addVaccine()">
          <font-awesome-icon icon="syringe"></font-awesome-icon>
          Add Vaccine
        </button>
      </div>
      <div class="justify-center">
        <button @click="generateCard()">
          <font-awesome-icon icon="qrcode"></font-awesome-icon>
          Generate Card
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardView",
  data() {
    return {
      form: {
        vaccines: [],
      },
    };
  },
  methods: {
    delVaccine(idx) {
      this.form.vaccines.splice(idx, 1);
    },
    addVaccine() {
      this.form.vaccines.push({
        cvx: "218",
      });
    },
    async generateCard() {
      const data = await axios
        .post("/v1/card", this.form)
        .then((resp) => resp.data);
      await this.$router.push({ name: "qrcode", query: { jws: data } });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply flex flex-col w-full items-center;
  & > div {
    @apply flex flex-row w-full mb-4;
    & > div {
      @apply flex w-1/5 items-center justify-end mr-4;
    }
    input,
    select {
      @apply w-3/5 rounded-md;
    }
  }
  button {
    @apply bg-amber-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded;
  }
}
</style>
<style></style>
