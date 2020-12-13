import moment from 'moment'
export default {
    setOrderStatus(value) {
        // 1->待付款、 2->待发货、 3->待收货、 4->待评价
        switch (value) {
            case 1:
                return '待付款';
            case 2:
                return '待发货';
            case 3:
                return '待收货';
            case 4:
                return '待评价';
        }
    },
    setOrderStyle(value) {
        // not-pay->待付款、 not-send->待发货、 not-reveive->待收货、 not-comment->待评价
        switch (value) {
            case '待付款':
                return 'not-pay';
            case '待发货':
                return 'not-send';
            case '待收货':
                return ' not-reveive';
            case '待评价':
                return 'not-comment';
        }
    },
    currency(value) {
        if (!value) {
            return '0.00'
        } else {
            return `￥${value.toFixed(2)}元`
        }
    },
    // 过滤器2
    formats(value, formatter) {
        return moment.unix(value).format(formatter);
    },
}