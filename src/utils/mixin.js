import Toast from "../components/Toast.vue";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' //Time from now
import 'dayjs/locale/zh-tw' // localize
dayjs.extend(relativeTime).locale('zh-tw')

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      const now = dayjs()
      const fromNowTime = now.diff(dateTime, 'hour')
      return fromNowTime > 24
        ? dayjs(dateTime).format('M月DD日')
        : dayjs(dateTime).fromNow(true)
    },
    timeFormatFilter(dateTime) {
      const meridiem = dayjs(dateTime).hour() > 12 ? '下午' : '上午'
      return meridiem + dayjs(dateTime).format(' hh:mm・YYYY年M月DD日')
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

export const descriptionOverflow = {
  filters: {
    descriptionOverflow(description) {
      if (description.length > 50 ) {
        return description.substr(0, 50) + ' ...'
      }
      return description
    }
  }
}
