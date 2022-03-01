import moment from "moment";
import Toast from "../components/Toast.vue";

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }

      return moment(datetime).fromNow();
    },
  },
};

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || "https://via.placeholder.com/350x220/DFDFDF?text=No+Image";
    },
  },
};

export const Toastification = {
  methods: {
    ToastSuccess({ title = '', description = '' }) {
      this.$toast({
        component: Toast,
        props: {
          icon: "success",
          title,
          description,
        },
      });
    },
    ToastError({ title = '', description = '' }) {
      this.$toast({
        component: Toast,
        props: {
          icon: "error",
          title,
          description,
        },
      });
    }
  }
}
