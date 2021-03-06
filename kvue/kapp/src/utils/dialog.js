import Vue from 'vue'
export default function create(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, {props})
    }
  }).$mount();

  const comp = vm.$children[0];

  document.body.appendChild(vm.$el);

  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }

  return comp;
}
