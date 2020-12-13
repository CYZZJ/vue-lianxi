import Vue from "vue";
import Toast from "./toast.vue";

const ToastConstructor = Vue.extend(Toast);
// 使用Vue.extend动态创建组件
function showToast(text, durations = 2000) {
    const toastDOM = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                show: true
            }
        }
    });
    document.body.appendChild(toastDOM.$el); //挂载到body最后面
    setTimeout(() => {
        toastDOM.show = false
    }, durations)
}

function toastRegistry() {
    Vue.prototype.$toast = showToast
}
export default toastRegistry