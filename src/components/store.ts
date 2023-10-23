import { reactive } from 'vue'

export const store = reactive({
  moreDetails: true,

  togelMoreDetails() {
     let moreDetailsInfo = this.moreDetails = !this.moreDetails
    console.log('mytoggle',moreDetailsInfo)
   }
})