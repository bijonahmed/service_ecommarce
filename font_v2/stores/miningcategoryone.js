import { defineStore } from 'pinia'
import axios from "axios";

export const useMiningcategoryoneStore = defineStore('useMiningcategoryone', {
  state: () => ({
    mining_category_id:'',
    start_time: '',
    end_time: '',
    server_time: '',
  }),
  actions: {
    setData(mining_category_id) {
      console.log("Set data: ",mining_category_id);
      this.mining_category_id = mining_category_id
    },
    async getSoreData() {
       const res = await axios.get("/mining/miningProcessState", {
                params: {
                mining_category_id: 1
                }
       })
        this.$state.start_time = res.data.start_time;
        this.$state.end_time = res.data.end_time;
        this.$state.server_time = res.data.server_time;
      },
  }
})
