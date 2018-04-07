import Vue from "vue"
import Color from "docs/components/tokens/Color"

describe("Color.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Color)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(".color")).toBeDefined()
  })
})
