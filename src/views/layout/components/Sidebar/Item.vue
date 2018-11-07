<script>
export default {
    name: 'MenuItem',
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(h, context) {
        const { icon, title } = context.props
        const vnodes = []

        if (icon) {
            vnodes.push(<i  class="iconfont">{(icon)}</i>)
        }

        if (title) {
            vnodes.push(<span class="title" slot='title'>{(title)}</span>)
        }
        return vnodes
    }
}
</script>
<style lang="scss" scoped>
.iconfont{
    font-size: 18px;
}
.title{
    margin-left: 14px;
}
</style>
