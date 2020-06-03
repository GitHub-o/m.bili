import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import Vue from 'vue'

Vue.use(Toast, {
  type: 'center',
  duration: 3000,
  wordWrap: true,
  width: '150px'
});
