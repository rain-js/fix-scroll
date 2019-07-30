let fixScroll = {}

fixScroll.install = function (Vue) {
    Vue.directive('fixscroll', {
        inserted: function(el) {
            let top = document.body.scrollTop || document.documentElement.scrollTop
            document.body.style.cssText += 'position:fixed;width:100%;top:-'+top+'px'
        },
        unbind: function(el) {
            document.body.style.position = ''
            document.body.scrollTop = document.documentElement.scrollTop = -parseInt(document.body.style.top)
            document.body.style.top = ''
        }
    })
}

export default fixScroll